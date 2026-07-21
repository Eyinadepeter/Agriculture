import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Button from "../components/Button";
import PasswordResetSuccessModal from "../components/PasswordResetSuccessModal";
import passwordImg from "../assets/password.png";

const RULES = [
	{ label: "At least 8 characters long", test: (p: string) => p.length >= 8 },
	{ label: "One lowercase character", test: (p: string) => /[a-z]/.test(p) },
	{ label: "One uppercase character", test: (p: string) => /[A-Z]/.test(p) },
	{
		label: "One number, symbol, or whitespace character",
		test: (p: string) => /[\d\s\W]/.test(p),
	},
];

export default function CreateNewPassword() {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const passwordsMatch =
		confirmPassword.length > 0 && password === confirmPassword;
	const passedRules = RULES.filter((rule) => rule.test(password)).length;

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (password !== confirmPassword) return;
		// call reset-password endpoint once backend is ready
		setShowSuccess(true);
	}

	return (
		<div className="min-h-screen w-full bg-white">
			<header className="flex items-center px-6 h-21">
				<button
					onClick={() => navigate(-1)}
					aria-label="Go back"
					className="w-9 h-9 rounded-full border border-border-default flex items-center justify-center">
					<ArrowLeft size={18} className="text-text-primary" />
				</button>
			</header>

			<div className="flex justify-center px-6">
				<form
					onSubmit={handleSubmit}
					className="w-full max-w-138 flex flex-col items-center">
					<img
						src={passwordImg}
						alt=""
						className="w-full max-w-69.75 h-[229.59px] object-contain"
					/>

					<div className="w-full mt-15 flex flex-col gap-6">
						<div className="text-center">
							<h1 className="font-heading font-semibold text-2xl text-text-primary">
								Create new password
							</h1>
							<p className="font-body text-sm text-text-secondary mt-1">
								Enter your account password.
							</p>
						</div>

						<div className="flex flex-col gap-5 mt-4">
							<div>
								<label className="font-body font-semibold text-sm text-text-primary">
									Password
								</label>
								<div className="relative mt-2">
									<input
										type={showPassword ? "text" : "password"}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="w-full h-11 border border-border-default rounded-lg px-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
									/>
									<button
										type="button"
										onClick={() => setShowPassword((v) => !v)}
										className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
										{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
									</button>
								</div>
							</div>

							<div>
								<div className="flex justify-between items-center">
									<label className="font-body font-semibold text-sm text-text-primary">
										Confirm Password
									</label>
									{confirmPassword.length > 0 && (
										<button
											type="button"
											onClick={() => setConfirmPassword("")}
											className="text-danger text-xs font-semibold">
											Clear
										</button>
									)}
								</div>
								<div className="relative mt-2">
									<input
										type={showConfirmPassword ? "text" : "password"}
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										className="w-full h-11 border border-border-default rounded-lg px-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
									/>
									<button
										type="button"
										onClick={() => setShowConfirmPassword((v) => !v)}
										className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
										{showConfirmPassword ? (
											<EyeOff size={18} />
										) : (
											<Eye size={18} />
										)}
									</button>
								</div>
								{passwordsMatch && (
									<p className="text-brand-primary text-xs mt-1">
										Password match
									</p>
								)}
							</div>

							<div className="flex gap-1 h-1">
								{RULES.map((_, i) => (
									<div
										key={i}
										className={`flex-1 rounded-full ${
											i < passedRules ? "bg-brand-primary" : "bg-border-light"
										}`}
									/>
								))}
							</div>

							<ul className="flex flex-col gap-2">
								{RULES.map((rule) => {
									const passed = rule.test(password);
									return (
										<li
											key={rule.label}
											className="flex items-center gap-2 text-sm">
											<span
												className={`w-2 h-2 rounded-full ${
													passed ? "bg-brand-primary" : "bg-border-default"
												}`}
											/>
											<span
												className={
													passed ? "text-text-primary" : "text-text-muted"
												}>
												{rule.label}
											</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					<Button type="submit" className="w-full h-13 mt-10">
						Submit
					</Button>
				</form>
			</div>

			<PasswordResetSuccessModal
				isOpen={showSuccess}
				onGoToDashboard={() => navigate("/dashboard")}
			/>
		</div>
	);
}
