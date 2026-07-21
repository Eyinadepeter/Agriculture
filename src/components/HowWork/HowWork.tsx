import { FaUser, FaLeaf, FaHandshake, FaArrowRight } from "react-icons/fa";
import type { ReactNode } from "react";

interface Step {
	icon: ReactNode;
	title: string;
	desc: string;
	watermark: ReactNode;
}

const steps: Step[] = [
	{
		icon: <FaUser />,
		title: "Create Your Account",
		desc: "Set up your profile and tell us about your farming needs.",
		watermark: <FaUser />,
	},
	{
		icon: <FaLeaf />,
		title: "Protect Your Harvest",
		desc: "Access storage and tools to help keep your produce fresh and reduce waste.",
		watermark: <FaLeaf />,
	},
	{
		icon: <FaHandshake />,
		title: "Connect & Sell",
		desc: "Reach buyers and move your harvest to market with confidence.",
		watermark: <FaHandshake />,
	},
];

export default function HowItWorks() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-342 mx-auto px-6">
				<div className="text-center mb-12">
					<span className="text-brand-primary font-semibold text-sm">
						🌱 How It Works
					</span>
					<h2 className="font-heading font-bold text-3xl text-text-primary mt-2">
						Three Steps To a Safer Harvest
					</h2>
				</div>

				<div className="flex flex-col md:flex-row items-stretch gap-6">
					{steps.map((step, index) => (
						<div key={step.title} className="flex items-center gap-6 flex-1">
							<div className="relative flex-1 bg-bg-secondary rounded-xl p-8 overflow-hidden">
								<div className="absolute -right-4 -bottom-4 text-8xl text-primary-100">
									{step.watermark}
								</div>

								<div className="relative z-10">
									<div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-brand-primary text-xl mb-4">
										{step.icon}
									</div>
									<h3 className="font-heading font-semibold text-lg text-text-primary">
										{step.title}
									</h3>
									<p className="text-sm text-text-secondary mt-2">
										{step.desc}
									</p>
								</div>
							</div>

							{index !== steps.length - 1 && (
								<FaArrowRight className="hidden md:block text-brand-primary text-xl shrink-0" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
