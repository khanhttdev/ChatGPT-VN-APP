import axios from "axios"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { logo } from "../assets/svg/icons"

const Login = ({ handleAuth }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	async function handleLogin() {
		try {
			const url = "http://localhost:5000"
			if (!username || !password)
				return toast.error("Vui lòng điền tất cả thông tin")
			const response = await axios.post(`${url}/auth/login`, {
				username,
				password,
			})
			if (response.status === 200) {
				localStorage.setItem("auth", JSON.stringify(response.data))
				handleAuth(response.data)

				navigate("/")
			}
		} catch (error) {
			toast.error(error)
		}
	}

	return (
		<>
			<Toaster />

			<div className='auth'>
				<div className='auth-container'>
					<div className='auth-logo'>{logo}</div>
					<h1 className='auth-title'>Chào mừng trở lại</h1>
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
						<button type='button' className='auth-button' onClick={handleLogin}>
							Đăng nhập
						</button>
					</form>
					<p className='auth-footer'>
						Không có tài khoản?{" "}
						<Link className='auth-navigate' to='/register'>
							Đăng ký
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}

export default Login
