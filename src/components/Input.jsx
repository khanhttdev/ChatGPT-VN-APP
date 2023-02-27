import { useState } from "react"
import MessengerAPI from "../API/MessengerAPI"
import { PlaneIcon, UserIcon } from "../assets"

const Input = ({ chatLog, setChatLog, setLoading }) => {
	const [input, setInput] = useState([])
	const onSubmit = async (e) => {
		e.preventDefault()
		if (!input) return
		let chatLogNew = [
			...chatLog,
			[
				{ textBy: 1, message: `${input}` },
				{ textBy: 0, message: "Đang suy nghĩ ..." },
			],
		]
		setInput("")
		setChatLog(chatLogNew)
		const data = {
			message: input,
		}
		const response = await MessengerAPI.postMessage(data)
		setChatLog([
			...chatLog,
			[
				{ textBy: 1, message: `${input}` },
				{ textBy: 0, message: `${response.message}` },
			],
		])
	}

	return (
		<div className='input'>
			<form className='input-form'>
				<div className='input-form-container'>
					<div className='input-form-content'>
						<div className='input-usericon'>
							<UserIcon />
						</div>
					</div>
					{/* Input */}
					<div className='input-container'>
						<input
							className='input-textarea'
							autoFocus={true}
							tabIndex='0'
							data-id='root'
							rows='1'
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button className='input-button' onClick={onSubmit}>
							<PlaneIcon />
						</button>
					</div>
				</div>
			</form>
			<div className='input-footer'>
				<a href='#section' className='input-footer-underline'>
					ChatGPT
				</a>
				&nbsp;Clone by KhanhttDev (EnZooZ)
			</div>
		</div>
	)
}

export default Input
