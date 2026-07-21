import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

export default function Hero() {
	return (
		<section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
			<img
				src={hero}
				alt="Fresh tomatoes harvested on a farm"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>

			<div
				className="absolute inset-0 z-10"
				style={{
					background:
						"linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%)",
				}}
			/>

			<div className="relative z-20 max-w-342 w-full mx-auto px-6 lg:px-12">
				<div className="max-w-212">
					<span className="inline-flex items-center gap-2 bg-secondary-300 text-white px-5 py-2.5 rounded-full text-sm font-semibold">
						🌱 Built for better harvests
					</span>

					<h1 className="font-heading font-bold text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-tight my-6">
						From <span className="text-secondary-200">Harvest</span> to Market,
						<br />
						Without the <span className="text-secondary-200">Waste</span>.
					</h1>

					<p className="text-white/90 max-w-137 text-lg leading-relaxed mb-9">
						Store your tomatoes safely, connect with trusted buyers, and move
						your harvest to market with confidence.
					</p>

					<div className="flex flex-col sm:flex-row gap-4">
						<Link
							to="/signup"
							className="h-12 px-8 flex items-center justify-center rounded-full bg-brand-primary text-white font-semibold hover:bg-primary-400 transition-colors">
							Get Started
						</Link>
						<button className="h-12 px-8 flex items-center justify-center rounded-full bg-white text-primary-400 font-semibold hover:shadow-lg transition-shadow">
							Learn More →
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
