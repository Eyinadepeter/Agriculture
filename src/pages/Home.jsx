import { Fragment } from 'react'
import CtaBanner from '../components/CtaBanner/CtaBanner.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Hero from '../components/Hero.jsx'
import QuickFeatures from '../components/QuickFeatures.jsx'
import HarvestProtection from '../components/HarvestProtection.jsx'
import Stats from '../components/Stats.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import HowItWorks from '../components/HowWork/HowWork.jsx'


const helpCards = [
  { icon: '🏬', title: 'Store with Confidence', body: 'Access safer storage options to help keep your produce fresh for longer.', dark: false },
  { icon: '♻️', title: 'Reduce Food Waste', body: 'Protect your harvest from spoilage and reduce wasteful post-harvest losses.', dark: true },
  { icon: '🤝', title: 'Reach More Buyers', body: 'Connect with buyers and discover better opportunities to sell your produce.', dark: true },
  { icon: '🚚', title: 'Move Your Harvest', body: 'Get the support you need to move your produce from the farm to the market.', dark: false },
]


const steps = [
  { icon: '👤', title: 'Create Your Account', body: 'Set up your profile and tell us about your farming needs.' },
  { icon: '🌱', title: 'Protect Your Harvest', body: 'Access storage and tools to help keep your produce fresh and reduce waste.' },
  { icon: '🤝', title: 'Connect & Sell', body: 'Reach buyers and move your harvest to market with confidence.' },
]

export default function Home() {
  return (
    <>
      <Hero/>
      <QuickFeatures/>
     <HarvestProtection/>
    <Stats/>
      <Services/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Testimonials eyebrow="Trusted by Our Users" title="Built Around the People We Serve" />
      <CtaBanner />
    </>
  )
}
