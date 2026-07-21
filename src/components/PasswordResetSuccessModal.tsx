import Button from "./Button";
import successImg from "../assets/Success.png";

interface PasswordResetSuccessModalProps {
	isOpen: boolean;
	onGoToDashboard: () => void;
}

export default function PasswordResetSuccessModal({
	isOpen,
	onGoToDashboard,
}: PasswordResetSuccessModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
			<div className="w-full max-w-138 bg-white rounded-xl p-8">
				<img
					src={successImg}
					alt=""
					className="w-full max-w-[395.8px] h-[377.62px] object-contain mx-auto"
				/>

				<div className="mt-15 text-center">
					<h2 className="font-heading font-semibold text-lg text-text-primary">
						Welcome to Your harvest hub!
					</h2>
					<p className="font-body text-sm text-text-secondary mt-2">
						Your HarvestSafe account is now active. Head to your dashboard to
						complete your farm profile, manage your harvest, and access the
						tools you need to keep your produce fresh and ready for market.
					</p>
				</div>

				<div className="mt-15">
					<Button onClick={onGoToDashboard} className="w-full h-11.5">
						Go to Dashboard
					</Button>
				</div>
			</div>
		</div>
	);
}
