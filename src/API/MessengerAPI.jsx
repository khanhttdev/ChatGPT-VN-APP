import axiosClient from "./axiosClient"

const MessengerAPI = {
	postRoomOpen: () => {
		const url = "http://localhost:5000/chat/newRoom"
		return axiosClient.post(url)
	},

	getRoomOpen: () => {
		const url = `http://localhost:5000/chat/roomOpen`
		return axiosClient.get(url)
	},

	getMessages: () => {
		const url = `http://localhost:5000/chat/getMessages`
		return axiosClient.get(url)
	},

	postMessage: (data) => {
		const url = `http://localhost:5000/chat/sendMessage`
		return axiosClient.post(url, data)
	},
}

export default MessengerAPI
