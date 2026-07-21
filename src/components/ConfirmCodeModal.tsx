import { X, ShieldCheck } from "lucide-react";
import Button from "./Button";

interface ConfirmCodeModalProps {
	isOpen: boolean;
	onClose: () => void;
	onProceed: () => void;
}

export default function ConfirmCodeModal({
	isOpen,
	onClose,
	onProceed,
}: ConfirmCodeModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
			<div className="w-full max-w-100 bg-white rounded-xl">
				<div className="flex justify-between items-center p-6">
					<h2 className="font-heading font-bold text-xl text-text-primary">
						Confirm Code
					</h2>
					<button onClick={onClose} aria-label="Close">
						<X size={20} className="text-danger" />
					</button>
				</div>

				<div className="flex flex-col items-center gap-4 px-6 pb-6 text-center">
					<div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
						<ShieldCheck size={32} className="text-brand-primary" />
					</div>
					<h3 className="font-heading font-semibold text-lg text-text-primary">
						Confirm reset code
					</h3>
					<p className="text-sm text-text-secondary">
						A password reset verification code has been sent to your registered
						email. Kindly enter the verification code sent to your email to
						continue.
					</p>
				</div>

				<div className="px-6 pb-6">
					<Button onClick={onProceed} className="w-full">
						Proceed
					</Button>
				</div>
			</div>
		</div>
	);
}
