import React, { useEffect, useState } from "react"
import MessengerAPI from "../API/MessengerAPI"
import Hero from "./Hero"

import Input from "./Input"
import Messages from "./Messages"

const ChatBox = () => {
	const [chatLog, setChatLog] = useState([])
	const [messages, setMessages] = useState([])

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const chat = messages && messages.map((item) => item.messages)
		setChatLog(chat)
	}, [messages])

	// function addMessage(msg) {
	// 	setMessages((prev) => [...prev, msg])
	// }

	// function toggleLoading(value) {
	// 	setLoading(value)
	// }
	useEffect(() => {
		const getMessages = async () => {
			const response = await MessengerAPI.getMessages()
			if (response) {
				const processed = response.data.map((items) => {
					return items
				})

				setMessages(processed)
			}
		}
		getMessages()
	}, [])

	return (
		<div className='chat-box'>
			<main className='chat-box-main'>
				<div className='chat-box-main-header'>
					<div className='chat-box-main-container'>
						<div className='chat-box-main-content'>
							{/* <Hero /> */}
							{chatLog.length !== 0 ? (
								chatLog.map((message) => {
									return (
										message &&
										message.map((item, index) => {
											return (
												<Messages
													show={loading}
													user={item.textBy}
													message={item.message}
													key={index}
												/>
											)
										})
									)
								})
							) : (
								<Hero />
							)}
						</div>
						<div className='cbmc-decoration'></div>
					</div>
				</div>
				<Input setChatLog={setChatLog} chatLog={chatLog} />
			</main>
		</div>
	)
}

export default ChatBox
