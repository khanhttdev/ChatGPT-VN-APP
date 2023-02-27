// api/axiosClient.js
import axios from "axios"

const axiosClient = axios.create({
	baseURL: "http://localhost:5080",
	headers: {
		"content-type": "application/json",
	},
})
axiosClient.interceptors.request.use(async (config) => {
	// Handle token here ...
	const token = localStorage.getItem("accessToken")
	if (token) {
		config.headers["Authorization"] = "Bearer " + token
	}
	return config
})
axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data
		}
		return response
	},
	(error) => {
		// Handle errors
		throw error
	}
)
export default axiosClient
