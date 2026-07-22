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
		const BYPASS = import.meta.env.VITE_AUTH_BYPASS === "true";
		if (BYPASS) {
			const mockRes: any = {
				data: {
					accessToken: "dev-access-token",
					user: {
						fullName: payload.fullName,
						email: payload.email,
						phone: payload.phone,
						role: payload.role,
					},
				},
				status: 200,
				statusText: "OK",
			};
			return Promise.resolve(mockRes);
		}

		const res = await client.post("/auth/register", payload);
		return res;
	},

	async login(payload: LoginPayload) {
		const BYPASS = import.meta.env.VITE_AUTH_BYPASS === "true";
		if (BYPASS) {
			const mockRes: any = {
				data: {
					accessToken: "dev-access-token",
					user: {
						email: payload.email,
						fullName: "Dev User",
						role: "farmer",
					},
				},
				status: 200,
				statusText: "OK",
			};
			return Promise.resolve(mockRes);
		}

		const res = await client.post("/auth/login", payload);
		return res;
	},

	async logout() {
		const BYPASS = import.meta.env.VITE_AUTH_BYPASS === "true";
		if (BYPASS) {
			try {
				localStorage.removeItem("accessToken");
			} catch (e) {
				/* ignore */
			}
			const mockRes: any = { data: { success: true }, status: 200, statusText: "OK" };
			return Promise.resolve(mockRes);
		}

		const res = await client.post("/auth/logout");
		return res;
	},
  
	async refreshToken() {
		const BYPASS = import.meta.env.VITE_AUTH_BYPASS === "true";
		if (BYPASS) {
			const mockRes: any = {
				data: {
					accessToken: "dev-access-token",
				},
				status: 200,
				statusText: "OK",
			};
			return Promise.resolve(mockRes);
		}

		const res = await client.post("/auth/refresh-token");
		return res;
	},
};
