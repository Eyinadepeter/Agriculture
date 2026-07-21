interface Testimonial {
	name: string;
	role: string;
	quote: string;
	avatar: string;
}

interface TestimonialsProps {
	eyebrow?: string;
	title?: string;
	data?: Testimonial[];
}

const defaultData: Testimonial[] = [
	{
		name: "Daniel Adekola",
		role: "Tomato Farmer",
		quote:
			"HavestSafe gives me more confidence in protecting my produce and reducing waste after harvest.",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=60",
	},
	{
		name: "Amina Yusuf",
		role: "Vegetable Farmer",
		quote:
			"Finding better opportunities to sell my harvest feels easier when I can connect with the right buyers.",
		avatar:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=60",
	},
	{
		name: "Grace Wilson",
		role: "Smallholder Farmer",
		quote:
			"I love how HavestSafe brings storage, market access, and harvest management together in one place.",
		avatar:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=60",
	},
	{
		name: "Chidi Obi",
		role: "Produce Buyer",
		quote:
			"HavestSafe helps me find available produce from farmers I can trust, every single season.",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=60",
	},
];

export default function Testimonials({
	eyebrow = "🌱 Trusted by Our Users",
	title = "Built Around the People We Serve",
	data = defaultData,
}: TestimonialsProps) {
	return (
		<section className="py-20 bg-bg-secondary">
			<div className="max-w-342 mx-auto px-6">
				<div className="text-center mb-12">
					<span className="text-brand-primary font-semibold text-sm">
						{eyebrow}
					</span>
					<h2 className="font-heading font-bold text-3xl text-text-primary mt-2">
						{title}
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{data.map((t) => (
						<div
							key={t.name}
							className="bg-white rounded-xl p-6 border border-border-light">
							<div className="flex items-center gap-3 mb-4">
								<img
									src={t.avatar}
									alt={t.name}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div className="flex-1">
									<h4 className="font-heading font-semibold text-sm text-text-primary">
										{t.name}
									</h4>
									<span className="text-xs text-text-secondary">{t.role}</span>
								</div>
								<div className="text-warning-300 text-sm">★★★★★</div>
							</div>

							<p className="text-sm text-text-secondary leading-relaxed">
								{t.quote}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
