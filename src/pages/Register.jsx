import axios from "axios"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { logo } from "../assets/svg/icons"

const Register = ({ handleAuth }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [avatar, setAvatar] = useState("")
	const navigate = useNavigate()

	function handleRegister() {
		const url = "http://localhost:5000"
		if (!username || !password)
			return toast.error("Vui lòng điền tất cả thông tin")
		axios
			.post(`${url}/auth/register`, {
				username,
				password,
				avatar: avatar || undefined,
			})
			.then((res) => {
				localStorage.setItem("auth", JSON.stringify(res.data))
				handleAuth(res.data)
			})
			.then(() => navigate("/login"))
			.catch((err) => toast.error(err.response.data.message))
	}

	return (
		<>
			<Toaster />
			<div className='auth'>
				<div className='auth-container'>
					<div className='auth-logo'>{logo}</div>
					<h1 className='auth-title'>Tạo tài khoản của bạn</h1>
					<form className='auth-form'>
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className='auth-input'
							placeholder='Tên tài khoản'
						/>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='auth-input'
							placeholder='Mật khẩu'
						/>
						<input
							type='text'
							value={avatar}
							onChange={(e) => setAvatar(e.target.value)}
							className='auth-input'
							placeholder='Link ảnh đại diện (tùy chọn)'
						/>
						<button
							type='button'
							className='auth-button'
							onClick={handleRegister}
						>
							Đăng ký
						</button>
					</form>
					<p className='auth-footer'>
						Đã có tài khoản?{" "}
						<Link className='auth-navigate' to='/login'>
							Đăng nhập
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}

export default Register
