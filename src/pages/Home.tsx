import CtaBanner from "../components/CtaBanner/CtaBanner";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import QuickFeatures from "../components/QuickFeatures";
import HarvestProtection from "../components/HarvestProtection";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowWork/HowWork";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<QuickFeatures />
			<HarvestProtection />
			<Stats />
			<Services />
			<WhyChooseUs />
			<HowItWorks />
			<Testimonials
				eyebrow="Trusted by Our Users"
				title="Built Around the People We Serve"
			/>
			<CtaBanner />
			<Footer />
		</>
	);
}
