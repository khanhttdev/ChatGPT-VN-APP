import React from "react"
import { PlusIcon } from "../assets"
import ChatSideBar from "../assets/ChatSideBar"

const Sidebar = ({ show = false }) => {
	return (
		<div
			className={`${show && "sidebar-show"} ${
				!show && "sidebar-hidden"
			} sidebar`}
		>
			<div className='sidebar-container'>
				<div className={"sidebar-content"}>
					<nav className='sidebar-nav'>
						{/* New Chat */}
						<a href='#section' className='sidebar-nav-newchat'>
							<PlusIcon />
							Cuộc trò truyện mới
						</a>
						{/* Space */}
						<div className='sidebar-space'>
							<div className='sidebar-space-main'>{/*  */}</div>
						</div>
						{/* Sidebar Footer */}
						{ChatSideBar.map((item, index) => {
							return (
								<a href='#section' className='sidebar-footer' key={index}>
									{item.icon}
									{item.text}
								</a>
							)
						})}
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
