import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Startup from "./pages/Startup"

import "./App.css"

function App() {
	const [auth, setAuth] = useState(() => {
		const user = localStorage.getItem("auth")
		if (!user) return undefined
		return JSON.parse(user)
	})

	const handleAuth = (value) => {
		setAuth(value)
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={auth ? <Navigate to='/chat' /> : <Startup />}
				/>
				<Route path='/login' element={<Login handleAuth={handleAuth} />} />
				<Route
					path='/register'
					element={<Register handleAuth={handleAuth} />}
				/>
				<Route
					path='/chat'
					element={!auth ? <Navigate to='/login' /> : <Chat />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
