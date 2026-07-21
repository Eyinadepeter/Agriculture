import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span>Join Our Growing Network</span>
        </div>

        <h1>From Harvest to Market, Without the Waste.</h1>

        <p>
          Store your harvested value, connect with trusted buyers, and reduce waste to maximize your profits.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary btn-lg flex-center gap-md">
            Get Started
            <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary btn-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
