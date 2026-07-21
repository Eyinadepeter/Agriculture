import harvestImage from "../assets/harvest.png";
import { FiHome, FiRefreshCw, FiUsers, FiTruck } from "react-icons/fi";
import type { ReactNode } from "react";

interface HelpCard {
	icon: ReactNode;
	title: string;
	body: string;
	dark: boolean;
}

const helpCards: HelpCard[] = [
	{
		icon: <FiHome />,
		title: "Store with Confidence",
		body: "Access safer storage options to help keep your produce fresh for longer.",
		dark: false,
	},
	{
		icon: <FiRefreshCw />,
		title: "Reduce Food Waste",
		body: "Protect your harvest from spoilage and reduce wasteful post-harvest losses.",
		dark: true,
	},
	{
		icon: <FiUsers />,
		title: "Reach More Buyers",
		body: "Connect with buyers and discover better opportunities to sell your produce.",
		dark: true,
	},
	{
		icon: <FiTruck />,
		title: "Move Your Harvest",
		body: "Get the support you need to move your produce from the farm to the market.",
		dark: false,
	},
];

export default function HarvestProtection() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-342 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<span className="text-brand-primary font-semibold text-sm">
						🌱 What We Do For Your Harvest
					</span>
					<h2 className="font-heading font-bold text-3xl text-text-primary mt-2 mb-8">
						We Help Protect
						<br />
						Your Harvest
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{helpCards.map((card) => (
							<div
								key={card.title}
								className={`rounded-xl p-6 ${
									card.dark
										? "bg-primary-400 text-white"
										: "bg-bg-secondary text-text-primary"
								}`}>
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 ${
										card.dark
											? "bg-white/10 text-white"
											: "bg-primary-100 text-brand-primary"
									}`}>
									{card.icon}
								</div>
								<h3 className="font-heading font-semibold text-base">
									{card.title}
								</h3>
								<p
									className={`text-sm mt-2 ${
										card.dark ? "text-white/80" : "text-text-secondary"
									}`}>
									{card.body}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="rounded-xl overflow-hidden">
					<img
						src={harvestImage}
						alt="Tomato greenhouse"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
