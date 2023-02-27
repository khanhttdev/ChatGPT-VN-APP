import React from "react"
import ChatBoxSection from "../assets/ChatBoxSection"

const Hero = () => {
	return (
		<>
			<h1 className='chat-box-main-content-title'>ChatGPT</h1>
			<div className='chat-box-main-content-section'>
				{ChatBoxSection.map((item, index) => {
					return (
						<div className='cbmcs-container' key={index}>
							<h2 className='cbmcs-title'>
								{item.icon}
								{item.title}
							</h2>
							<ul className='cbmcs-content'>
								{item.subTitle.map((subTitle, index) => {
									return (
										<button
											className={`cbmcs-content-item ${
												item.hover ? "item-hover" : "item-nothover"
											}`}
											key={index}
										>
											{subTitle}
										</button>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Hero
