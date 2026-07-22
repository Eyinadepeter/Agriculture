import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/Logo.svg";
import leaf from "../assets/Leaf-sign-in.png";
import Button from "../components/Button";
import IncorrectCredentialsModal from "../components/IncorrectCredentialsModal";

export default function SignIn() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isLocked, setIsLocked] = useState(false);
	const [modalMessage, setModalMessage] = useState("");

	async function handleSubmit(e: FormEvent) {
  e.preventDefault();

  setPasswordError(false);
  setIsSubmitting(true);

  // Optional loading effect
  setTimeout(() => {
    setIsSubmitting(false);
    navigate("/dashboard");
  }, 1000);
}
	function handleTryAgain() {
		setShowModal(false);
		setPassword("");
	}

	function handleResetPassword() {
		setShowModal(false);
		navigate("/forgot-password");
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-primary-400 lg:p-8">
			<div className="w-full max-w-340 flex flex-col lg:flex-row lg:gap-4 rounded-xl">
				{/* LEFT CARD */}
				<div className="hidden lg:flex flex-col justify-between w-150 h-240 bg-primary-300 p-10 relative rounded-xl overflow-hidden">
					<img
						src={leaf}
						alt="double-leaf"
						className="w-140 h-140 object-contain absolute top-0 right-0"
					/>
					<div className="mt-auto flex flex-col items-center text-center gap-5 w-103.25 mx-auto relative z-10">
						<img src={logo} alt="HarvestSafe" className="w-23.5 h-22" />
						<div className="flex flex-col text-nowrap">
							<h2 className="font-heading font-bold text-[32px] text-white leading-tight">
								Fresh Harvests, Better Profits
							</h2>
							<p className="font-body text-base text-wrap text-white/80 mt-2">
								Protect your tomatoes from spoilage, access cold storage, and
								sell with confidence to trusted buyers.
							</p>
						</div>
					</div>
				</div>

				{/* RIGHT CARD */}
				<div className="w-full lg:w-150 bg-white flex flex-col rounded-xl overflow-hidden">
					<header className="flex items-center justify-between px-5 py-5">
						<img src={logo} alt="HarvestSafe" className="w-8 h-8" />
						<p className="font-body text-sm text-text-secondary">
							Don't have an account?{" "}
							<Link to="/signup" className="text-brand-primary font-semibold">
								Sign Up
							</Link>
						</p>
					</header>

					<main className="flex-1 flex justify-center px-6 lg:px-0">
						<form
							onSubmit={handleSubmit}
							className="w-full max-w-100 h-158 flex flex-col justify-center items-center py-6">
							<div className="mb-12 text-center">
								<h1 className="font-heading font-semibold text-2xl text-text-primary">
									Welcome Back to HarvestSafe!
								</h1>
								<p className="font-body text-sm text-text-secondary mt-1">
									Please enter your details to sign in your account
								</p>
							</div>

							<div className="flex flex-col gap-3 w-full mb-5">
								<SocialButton
									icon={
										<Icon icon="logos:google-icon" width={18} height={18} />
									}
									label="Sign In with Google"
								/>
								<SocialButton
									icon={<FaApple size={18} />}
									label="Sign In with Apple"
								/>
							</div>

							<div className="flex items-center gap-3 mb-4 w-full">
								<div className="flex-1 h-px bg-border-light" />
								<span className="text-text-secondary text-sm whitespace-nowrap">
									Or sign in with
								</span>
								<div className="flex-1 h-px bg-border-light" />
							</div>

							<div className="flex flex-col gap-5 mb-6 w-full">
								<div>
									<label className="font-body font-semibold text-sm text-text-primary">
										Email Address
									</label>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="harvestsafe@gmail.com"
										className="mt-2 w-full h-11 border border-border-default rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
									/>
								</div>

								<div>
									<label className="font-body font-semibold text-sm text-text-primary">
										Password
									</label>
									<div className="relative mt-2">
										<input
											type={showPassword ? "text" : "password"}
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
												setPasswordError(false);
											}}
											placeholder="Minimum 8 characters"
											className={`w-full h-11 border rounded-lg px-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-brand-primary ${
												passwordError
													? "border-danger"
													: "border-border-default"
											}`}
										/>
										<button
											type="button"
											onClick={() => setShowPassword((v) => !v)}
											className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
											{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
										</button>
									</div>
									{passwordError && (
										<p className="text-danger text-xs mt-1">
											Password Incorrect
										</p>
									)}
								</div>
							</div>

							<Button
								type="submit"
								className="w-full mb-5"
								disabled={isSubmitting}>
								{isSubmitting ? "Signing in..." : "Sign In"}
							</Button>

							<p className="text-center">
								<Link
									to="/forgot-password"
									className="text-danger text-sm font-semibold">
									Forgot Password?
								</Link>
							</p>
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

			<IncorrectCredentialsModal
				isOpen={showModal}
				onClose={handleTryAgain}
				onResetPassword={handleResetPassword}
				title={isLocked ? "Account Locked" : "Password Incorrect"}
				message={modalMessage}
				hideResetOption={isLocked}
			/>
		</div>
	);
}

function SocialButton({
	icon,
	label,
}: {
	icon: React.ReactNode;
	label: string;
}) {
	return (
		<button
			type="button"
			className="h-11 border border-border-default rounded-lg flex items-center justify-center gap-2 text-sm font-body text-text-primary hover:bg-bg-secondary">
			{icon}
			{label}
		</button>
	);
}
