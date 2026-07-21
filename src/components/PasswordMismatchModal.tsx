import { X } from "lucide-react";
import Button from "./Button";

interface PasswordMismatchModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function PasswordMismatchModal({
	isOpen,
	onClose,
}: PasswordMismatchModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
			<div className="w-full max-w-145 bg-white rounded-xl">
				<div className="flex justify-between items-center p-6">
					<h2 className="font-heading font-bold text-2xl text-text-primary">
						Password Incorrect
					</h2>
					<button onClick={onClose} aria-label="Close">
						<X size={24} className="text-text-secondary" />
					</button>
				</div>

				<div className="flex flex-col items-center gap-4 px-6 pb-6">
					<div className="w-20 h-20 rounded-full bg-danger-light flex items-center justify-center">
						<X size={40} className="text-danger" />
					</div>
					<p className="text-center text-sm text-text-secondary max-w-105">
						The password you entered does not match. Please enter a correct
						password.
					</p>
				</div>

				<div className="flex justify-center pb-8">
					<Button onClick={onClose} className="w-52">
						Try Again
					</Button>
				</div>
			</div>
		</div>
	);
}
