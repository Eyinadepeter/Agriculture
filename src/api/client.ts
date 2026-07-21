import axios from "axios";

const client = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5051/api",
	withCredentials: true, // required for the httpOnly refresh-token cookie
});

client.interceptors.request.use((config) => {
	const token = localStorage.getItem("accessToken");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default client;
