import { X } from "lucide-react";
import Button from "./Button";

interface IncorrectCredentialsModalProps {
	isOpen: boolean;
	onClose: () => void;
	onResetPassword: () => void;
}

export default function IncorrectCredentialsModal({
	isOpen,
	onClose,
	onResetPassword,
}: IncorrectCredentialsModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
			<div className="w-full max-w-100 bg-white rounded-xl">
				<div className="flex justify-between items-center p-6">
					<h2 className="font-heading font-bold text-xl text-text-primary">
						Password Incorrect
					</h2>
					<button onClick={onClose} aria-label="Close">
						<X size={20} className="text-text-secondary" />
					</button>
				</div>

				<div className="flex flex-col items-center gap-4 px-6 pb-6">
					<div className="w-20 h-20 rounded-full bg-danger-light flex items-center justify-center">
						<X size={40} className="text-danger" />
					</div>
					<p className="text-center text-sm text-text-secondary">
						The password you entered is incorrect. Please try again or reset
						password.
					</p>
				</div>

				<div className="flex gap-3 px-6 pb-6">
					<Button
						variant="outline"
						size="medium"
						onClick={onResetPassword}
						className="flex-1">
						Reset Password
					</Button>
					<Button
						variant="primary"
						size="medium"
						onClick={onClose}
						className="flex-1">
						Try Again
					</Button>
				</div>
			</div>
		</div>
	);
}
