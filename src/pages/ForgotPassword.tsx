import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import ConfirmCodeModal from "../components/ConfirmCodeModal";
import resetImg from "../assets/reset.png";

export default function ForgotPassword() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [showModal, setShowModal] = useState(false);

	function handleSend(e: FormEvent) {
		e.preventDefault();
		// trigger reset code email once backend endpoint is ready
		setShowModal(true);
	}

	function handleProceed() {
		setShowModal(false);
		navigate("/create-new-password");
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-white relative">
			<button
				onClick={() => navigate(-1)}
				aria-label="Go back"
				className="absolute top-6 left-6 w-9 h-9 rounded-full border border-border-default flex items-center justify-center">
				<ArrowLeft size={18} className="text-text-primary" />
			</button>

			<form
				onSubmit={handleSend}
				className="w-full max-w-138 flex flex-col items-center px-6">
				<img
					src={resetImg}
					alt=""
					className="w-full max-w-138 h-78 object-contain"
				/>

				<div className="mt-15 text-center flex flex-col gap-3">
					<h1 className="font-heading font-semibold text-2xl text-text-primary">
						Password Reset
					</h1>
					<p className="font-body text-sm text-text-secondary">
						Enter the email associated with your account and we will send an
						email with instructions to reset your password.
					</p>
				</div>

				<div className="w-full mt-6">
					<label className="font-body font-semibold text-sm text-text-primary">
						Email Address
					</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="harvestsafe123@gmail.com"
						className="mt-2 w-full h-11 border border-border-default rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
					/>
				</div>

				<div className="w-full flex gap-4 mt-15">
					<Button
						type="button"
						variant="outline"
						onClick={() => navigate(-1)}
						className="w-67 h-13">
						Cancel
					</Button>
					<Button type="submit" className="w-67 h-13">
						Send
					</Button>
				</div>
			</form>

			<ConfirmCodeModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				onProceed={handleProceed}
			/>
		</div>
	);
}
