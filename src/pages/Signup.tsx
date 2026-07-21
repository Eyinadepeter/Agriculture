import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../api/authService";
import type { AxiosError } from "axios";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.svg";
import leaf from "../assets/leaf.png";
import Button from "../components/Button";
import PasswordMismatchModal from "../components/PasswordMismatchModal";

export default function Signup() {
	const navigate = useNavigate();
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [showMismatchModal, setShowMismatchModal] = useState(false);
	const [serverError, setServerError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const passwordsMismatch =
		confirmPassword.length > 0 && password !== confirmPassword;

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setServerError("");

		if (password !== confirmPassword) {
			setShowMismatchModal(true);
			return;
		}

		setIsSubmitting(true);
		try {
			const res = await authService.register({
				fullName,
				email,
				phone,
				password,
				role: "farmer",
			});
			localStorage.setItem("accessToken", res.data.accessToken);
			navigate("/dashboard");
		} catch (err) {
			const axiosErr = err as AxiosError<{
				message: string;
				errorCode: string;
			}>;
			setServerError(
				axiosErr.response?.data?.message ||
					"Something went wrong. Please try again."
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-primary-400 lg:p-10">
			<div className="w-full max-w-340 flex flex-col lg:flex-row lg:gap-4 rounded-xl overflow-hidden">
				{/* LEFT CARD */}
				<div className="hidden lg:flex flex-col justify-between w-150 h-240 rounded-xl bg-primary-300 p-10 relative overflow-hidden">
					<img
						src={leaf}
						alt="leaf"
						className="w-140 h-140 object-contain absolute -top-10 -left-10"
					/>
					<div className="mt-auto flex flex-col items-center text-center gap-5 w-100 mx-auto relative z-10">
						<img src={logo} alt="HarvestSafe" className="w-23 h-23" />
						<div className="flex flex-col text-nowrap">
							<h2 className="font-heading font-bold text-[32px] text-white leading-tight">
								Start Your Farming Journey
							</h2>
							<p className="font-body text-base text-wrap text-white/80 mt-2">
								Set up your account and take the first step toward reducing
								waste and increasing your income.
							</p>
						</div>
					</div>
				</div>

				{/* RIGHT CARD */}
				<div className="w-full lg:w-150 bg-white flex flex-col rounded-xl">
					<header className="flex items-center justify-between px-4 lg:px-5 py-5">
						<img src={logo} alt="HarvestSafe" className="w-8.5 h-8.5" />
						<p className="font-body text-sm text-text-secondary">
							Already have an account?{" "}
							<Link to="/signin" className="text-brand-primary font-semibold">
								Sign In
							</Link>
						</p>
					</header>

					<main className="flex-1 flex justify-center px-6 lg:px-0">
						<form onSubmit={handleSubmit} className="w-full max-w-100 py-6">
							<div className="mb-6 items-center">
								<h1 className="font-heading font-semibold text-2xl text-text-primary">
									Welcome Back to HarvestSafe!
								</h1>
								<p className="font-body text-sm text-text-secondary mt-1">
									Join HarvestSafe to store and sell with ease.
								</p>
							</div>

							{serverError && (
								<p className="text-danger text-sm text-center mb-4">
									{serverError}
								</p>
							)}

							<div className="flex flex-col gap-4">
								<Field
									label="Full Name"
									value={fullName}
									onChange={setFullName}
									placeholder="Harvest Safe"
								/>
								<Field
									label="Phone Number"
									value={phone}
									onChange={setPhone}
									placeholder="+234-8010110110"
								/>
								<Field
									label="Email Address"
									type="email"
									value={email}
									onChange={setEmail}
									placeholder="harvestsafe@gmail.com"
								/>
								<PasswordField
									label="Password"
									value={password}
									onChange={setPassword}
									visible={showPassword}
									onToggleVisible={() => setShowPassword((v) => !v)}
								/>
								<div>
									<PasswordField
										label="Confirm Password"
										value={confirmPassword}
										onChange={setConfirmPassword}
										visible={showConfirmPassword}
										onToggleVisible={() => setShowConfirmPassword((v) => !v)}
									/>
									{passwordsMismatch && (
										<p className="text-danger text-xs mt-1">
											Password does not match
										</p>
									)}
								</div>
							</div>

							<div className="flex items-center gap-3 my-6">
								<div className="flex-1 h-px bg-border-light" />
								<span className="text-text-secondary text-sm whitespace-nowrap">
									Or sign up with
								</span>
								<div className="flex-1 h-px bg-border-light" />
							</div>

							<div className="grid grid-cols-3 gap-4 mb-10">
								<SocialButton
									icon={
										<Icon icon="logos:google-icon" width={20} height={20} />
									}
								/>
								<SocialButton
									icon={<FaFacebookF className="text-info-200" size={20} />}
								/>
								<SocialButton icon={<FaApple size={20} />} />
							</div>

							<Button type="submit" className="w-full" disabled={isSubmitting}>
								{isSubmitting ? "Creating account..." : "Sign Up"}
							</Button>
						</form>
					</main>

					<footer className="flex justify-between px-6 py-6 text-sm text-info-200">
						<p>© 2026 HarvestSafe</p>
						<div className="flex gap-5">
							<a href="#">Privacy Policy</a>
							<a href="#">Support</a>
						</div>
					</footer>
				</div>
			</div>

			<PasswordMismatchModal
				isOpen={showMismatchModal}
				onClose={() => setShowMismatchModal(false)}
			/>
		</div>
	);
}

interface FieldProps {
	label: string;
	value: string;
	onChange: (val: string) => void;
	placeholder: string;
	type?: string;
}

function Field({
	label,
	value,
	onChange,
	placeholder,
	type = "text",
}: FieldProps) {
	return (
		<div>
			<label className="font-body font-semibold text-sm text-text-primary">
				{label}
			</label>
			<input
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className="mt-2 w-full h-11 border border-border-default rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
			/>
		</div>
	);
}

interface PasswordFieldProps {
	label: string;
	value: string;
	onChange: (val: string) => void;
	visible: boolean;
	onToggleVisible: () => void;
}

function PasswordField({
	label,
	value,
	onChange,
	visible,
	onToggleVisible,
}: PasswordFieldProps) {
	return (
		<div>
			<label className="font-body font-semibold text-sm text-text-primary">
				{label}
			</label>
			<div className="relative mt-2">
				<input
					type={visible ? "text" : "password"}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder="Minimum 8 characters"
					className="w-full h-11 border border-border-default rounded-lg px-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
				/>
				<button
					type="button"
					onClick={onToggleVisible}
					className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
					{visible ? <EyeOff size={18} /> : <Eye size={18} />}
				</button>
			</div>
		</div>
	);
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
	return (
		<button
			type="button"
			className="h-12 border border-border-default rounded-lg flex items-center justify-center hover:bg-bg-secondary">
			{icon}
		</button>
	);
}
