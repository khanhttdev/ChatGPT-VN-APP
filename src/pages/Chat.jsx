import { useState } from "react"
import { MenuIcon, PlusIcon } from "../assets"
import ChatBox from "../components/ChatBox"
import Sidebar from "../components/Sidebar"

const Menu = () => {
	const [show, setShow] = useState(false)
	return (
		<div className='chat'>
			<div className='menu '>
				<button
					className={`menu-button ${!show && "hideshow"}`}
					type='button'
					onClick={() => setShow(!show)}
				>
					<span className='menu-span'>Open Sidebar</span>
					<MenuIcon />
				</button>
				<h1 className='menu-newchat'>Cuộc trò truyện mới</h1>
				<button type='button' className='menu-newchat-button'>
					<PlusIcon className='menu-newchat-button-plus' />
				</button>
			</div>
			{/* Sidebar */}
			<Sidebar {...{ show }} />
			{/* ChatBox */}
			<ChatBox />
		</div>
	)
}

export default Menu
