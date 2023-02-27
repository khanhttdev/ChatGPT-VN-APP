import loader from "../assets/loader.gif"
import Message from "./Message"

const Messages = ({ show, message, user }) => {
	return (
		<div className='msgs'>
			<Message msg={message} user={user} />
			{show && (
				<p style={{ textAlign: "center", margin: "28px 0", fontSize: "14px" }}>
					<img style={{ width: "23px" }} src={loader} alt='' />
				</p>
			)}
		</div>
	)
}

export default Messages
