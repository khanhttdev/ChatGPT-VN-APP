import React, { useEffect, useRef } from "react"
import { Logo } from "../assets"

const Message = ({ msg, user }) => {
	const scrollRef = useRef(null)
	useEffect(updateScroll, [msg, scrollRef])
	function updateScroll() {
		scrollRef.current?.scrollIntoView({ behavior: "smooth" })
	}
	const me = JSON.parse(localStorage.getItem("auth"))

	return (
		<div className={`${user === 1 && "msg-me"} msg`}>
			<div className='msg-container'>
				<div className='msg-left'>
					{user === 1 ? (
						<img className='msg-left-img' src={me.avatar} alt='' />
					) : (
						<div className='msg-logo'>{Logo}</div>
					)}
				</div>
				<div className='msg-right'>
					<div className='msg-right-container'>
						<div className='msg-msg'>{msg && msg.trim()}</div>
					</div>
					<div className='msg-right-button'></div>
				</div>
			</div>
		</div>
	)
}

export default Message
