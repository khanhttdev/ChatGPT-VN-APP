import { Link } from "react-router-dom"
import { logo } from "../assets/svg/icons"

const Startup = () => {
	return (
		<div className='startup-container'>
			<div className='startup-buttons'>
				<div className='startup-logo'>{logo}</div>
				<div className='startup-title'>Chào mừng đến với ChatGPT-VN</div>
				<div className='startup-content'>
					Đăng nhập bằng tài khoản của bạn để tiếp tục
				</div>
				<div className=' startup-row'>
					<Link to='./login' className='startup-login'>
						Đăng nhập
					</Link>
					<Link to='./register' className='startup-login'>
						Đăng ký
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Startup
