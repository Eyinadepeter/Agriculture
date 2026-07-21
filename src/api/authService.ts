import client from "./client";

export interface RegisterPayload {
	fullName: string;
	email: string;
	phone: string;
	password: string;
	role: "farmer" | "buyer";
}

export interface LoginPayload {
	email: string;
	password: string;
}

export interface AuthErrorResponse {
	success: false;
	message: string;
	errorCode: string;
	errors?: { field: string; message: string }[];
}

export const authService = {
	async register(payload: RegisterPayload) {
		const { data } = await client.post("/auth/register", payload);
		return data;
	},

	async login(payload: LoginPayload) {
		const { data } = await client.post("/auth/login", payload);
		return data;
	},

	async logout() {
		const { data } = await client.post("/auth/logout");
		return data;
	},

	async refreshToken() {
		const { data } = await client.post("/auth/refresh-token");
		return data;
	},
};
