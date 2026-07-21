import type { ReactNode } from "react";
import { FiHome, FiShoppingBag, FiFeather } from "react-icons/fi";

interface QuickFeature {
	icon: ReactNode;
	title: string;
	body: string;
}

const quickFeatures: QuickFeature[] = [
	{
		icon: <FiHome />,
		title: "Safe Storage",
		body: "Keep your produce fresh for longer.",
	},
	{
		icon: <FiShoppingBag />,
		title: "Market Access",
		body: "Connect with trusted buyers and sell your harvest with ease.",
	},
	{
		icon: <FiFeather />,
		title: "Harvest Management",
		body: "Track and manage your produce with ease.",
	},
];

export default function QuickFeatures() {
	return (
		<section className="px-6 lg:px-16 py-12 bg-bg-secondary">
			<div className="max-w-342 mx-auto bg-white border border-border-light rounded-xl px-8 py-6 flex flex-col lg:flex-row items-center justify-between shadow-sm">
				{quickFeatures.map((feature, index) => (
					<div
						key={feature.title}
						className="relative flex items-center gap-5 flex-1 w-full py-4 lg:py-0">
						<div className="w-17 h-17 min-w-17 rounded-full bg-primary-100 text-primary-400 flex items-center justify-center text-3xl">
							{feature.icon}
						</div>

						<div className="max-w-62">
							<h3 className="font-heading font-bold text-xl text-text-primary mb-2">
								{feature.title}
							</h3>
							<p className="text-text-secondary text-base leading-snug">
								{feature.body}
							</p>
						</div>

						{index !== quickFeatures.length - 1 && (
							<div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-17 bg-border-light" />
						)}
					</div>
				))}
			</div>
		</section>
	);
}
