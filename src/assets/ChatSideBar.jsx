import DiscordIcon from "./svg/discordIcon"
import ExternalLinkIcon from "./svg/externalLinkIcon"
import LogOutIcon from "./svg/logOutIcon"
import SunIcon from "./svg/sunIcon"

const ChatSideBar = [
	{
		icon: <SunIcon className='sun-icon' strokeWidth='2' />,
		text: "Chế độ sáng",
	},
	{ icon: <DiscordIcon />, text: "OpenAI Discord" },
	{ icon: <ExternalLinkIcon />, text: "Updates & FAQ" },
	{ icon: <LogOutIcon />, text: "Log out" },
]

export default ChatSideBar
