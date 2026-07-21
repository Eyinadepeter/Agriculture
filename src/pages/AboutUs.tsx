import CtaBanner from "../components/CtaBanner/CtaBanner.jsx";

const overviewCards = [
	{
		icon: "🏬",
		title: "Smart Storage",
		body: "Access storage solutions designed to help preserve your produce and reduce spoilage.",
		style: "light",
	},
	{
		icon: "🌱",
		title: "Harvest Protection",
		body: "Keep track of your produce and take steps to protect its quality and value.",
		style: "light",
	},
	{
		icon: "🤝",
		title: "Buyer Connections",
		body: "Connect with potential buyers and discover better opportunities for your harvest.",
		style: "dark",
	},
	{
		icon: "🚚",
		title: "Market Access",
		body: "Move your produce closer to the right market with more confidence.",
		style: "dark",
	},
];

const journey = [
	{
		icon: "👤",
		title: "Harvest",
		body: "Start with fresh produce from the farm.",
	},
	{
		icon: "🌱",
		title: "Protect",
		body: "Use storage and tools to help preserve the harvest and reduce spoilage.",
	},
	{
		icon: "🤝",
		title: "Connect",
		body: "Discover buyers and better opportunities for your produce.",
	},
	{
		icon: "🚚",
		title: "Move",
		body: "Take your harvest to the right market with confidence.",
	},
];

const previews = [
	"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=70",
	"https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=500&q=70",
	"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=70",
];

export default function AboutUs() {
	return (
		<>
			<section className="hero-inner">
				<div className="wrap">
					<div className="hero-inner-copy">
						<p className="eyebrow eyebrow-pill">
							<span className="leaf">🌱</span> Solutions for better harvests
						</p>
						<h1>
							The <em>Right Support</em> for Every Stage of Your Harvest.
						</h1>
						<p>
							From protecting your tomatoes to helping it reach the right
							market, HavestSafe provides the tools and support farmers need to
							move their harvest forward.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
					<div className="hero-inner-media">
						<img
							src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=70"
							alt="A woven basket overflowing with ripe tomatoes"
						/>
					</div>
				</div>
			</section>

			{/* Solution overview */}
			<section className="section">
				<div className="wrap">
					<div className="section-header">
						<p className="eyebrow eyebrow-plain">
							<span className="leaf">🌱</span> Solution Overview
						</p>
						<h2>Everything Your Harvest Needs</h2>
					</div>
					<div className="feature-grid">
						{overviewCards.map((c) => (
							<div
								key={c.title}
								className={`card ${c.style === "dark" ? "dark" : ""}`}>
								<div className="card-icon">{c.icon}</div>
								<h3>{c.title}</h3>
								<p>{c.body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Harvest journey */}
			<section className="section section-tint">
				<div className="wrap">
					<div className="section-header">
						<p className="eyebrow eyebrow-plain">
							<span className="leaf">🌱</span> How Each Solution Works
						</p>
						<h2>The Harvest Journey, Simplified</h2>
						<p>
							HavestSafe brings the key parts of the harvest journey together,
							helping farmers protect their produce, manage their harvest,
							connect with opportunities, and move closer to market.
						</p>
					</div>
					<div className="step-row">
						{journey.map((s) => (
							<div key={s.title} style={{ display: "contents" }}>
								<div className="step-card">
									<div className="step-num-icon">{s.icon}</div>
									<h3 style={{ fontSize: 17, marginBottom: 8 }}>{s.title}</h3>
									<p style={{ color: "var(--gray-600)", fontSize: 14 }}>
										{s.body}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Product preview */}
			<section className="section section-mid">
				<div className="wrap">
					<div className="section-header">
						<p
							className="eyebrow eyebrow-plain"
							style={{ color: "var(--green-100)" }}>
							<span className="leaf">🌱</span> Product Preview
						</p>
						<h2 style={{ color: "#fff" }}>
							See Harvest in{" "}
							<em style={{ fontStyle: "normal", color: "var(--green-300)" }}>
								Action
							</em>
							.
						</h2>
					</div>
					<div className="preview-grid">
						{previews.map((src) => (
							<div className="preview-card" key={src}>
								<img src={src} alt="HavestSafe product preview screen" />
							</div>
						))}
					</div>
				</div>
			</section>

			<CtaBanner />
		</>
	);
}
