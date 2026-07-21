import CtaBanner from '../components/CtaBanner/CtaBanner.jsx'
import Header from '../components/Header.js'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.js'

const problems = [
  'Produce spoiling before it reaches the market',
  'Limited access to reliable storage',
  'Difficulty finding trusted buyers',
  'Uncertainty around pricing and selling',
  'Challenges moving produce from the farm to market',
]

const solutions = [
  { title: 'Protect Your Produce', body: 'Keep your harvest fresh for longer and reduce spoilage.' },
  { title: 'Find Better Buyers', body: 'Connect with buyers looking for fresh produce.' },
  { title: 'Manage Your Harvest', body: 'Keep track of your produce, storage status, and its journey from farm to market.' },
  { title: 'Move with Confidence', body: 'Get your harvest closer to the right market with less stress.' },
]

const bullets = ['Track Active Harvests', 'Monitor Storage Status', 'Discover Buyer Opportunities', 'Manage Sales & Orders', 'Monitor Harvest Value']
const whyBullets = ['Reduce Post-Harvest Loss', 'Access Better Storage', 'Reach More Buyers', 'Manage Your Produce Easily']

export default function ForFarmers() {
  return (
    <>
    <Header  />
      <section className="hero-inner">
        <div className="wrap">
          <div className="hero-inner-copy">
            <p className="eyebrow eyebrow-pill"><span className="leaf">🌱</span> Built for every harvests</p>
            <h1>Protect What You Grow. Grow What <em>Matters</em>.</h1>
            <p>HavestSafe helps farmers protect their produce, reduce post-harvest waste, connect with trusted buyers, and get more value from every harvest.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="hero-inner-media">
            <img src="https://images.unsplash.com/photo-1595855709940-13c1c86e5b0f?w=800&q=70" alt="Farmer holding a basket of vegetables" />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section">
        <div className="wrap split reverse">
          <div className="split-media">
            <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=70" alt="Farmer sorting rotten tomatoes" />
          </div>
          <div className="split-copy">
            <p className="eyebrow eyebrow-plain"><span className="leaf">🌱</span> The Problem</p>
            <h2>Your Harvest Deserves More Time</h2>
            <p>Farmers work hard to grow and harvest their produce, but the journey from farm to market is not always easy. Without the right storage, market access, and support, valuable produce can be lost before it reaches the people who need it.</p>
            <ul className="cross-list">
              {problems.map((p) => (
                <li key={p}><span className="mark">✕</span><span>{p}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section section-tint">
        <div className="wrap split">
          <div className="split-copy">
            <p className="eyebrow eyebrow-plain"><span className="leaf">🌱</span> The Solution</p>
            <h2>What HavestSafe Helps You Do</h2>
            <p>Farmers work hard to grow and harvest their produce, but the journey from farm to market is not always easy. HavestSafe brings the tools together in one place.</p>
            <ul className="check-list">
              {solutions.map((s) => (
                <li key={s.title}><span className="mark">✓</span><div><strong>{s.title}</strong><span>{s.body}</span></div></li>
              ))}
            </ul>
          </div>
          <div className="split-media">
            <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=70" alt="Cold storage shelves stocked with fresh produce" />
          </div>
        </div>
      </section>

      {/* All in one place */}
      <section className="section section-mid">
        <div className="wrap split reverse">
          <div className="split-media" style={{ background: 'rgba(255,255,255,0.14)' }}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=70" alt="HavestSafe dashboard preview" />
          </div>
          <div className="split-copy">
            <p className="eyebrow eyebrow-plain" style={{ color: 'var(--green-100)' }}><span className="leaf">🌱</span> All In One Place</p>
            <h2 style={{ color: '#fff' }}>Your Harvest. Your <em style={{ fontStyle: 'normal', color: 'var(--green-100)' }}>Opportunities</em>.</h2>
            <ul className="dot-list">
              {bullets.map((b) => <li key={b} style={{ color: '#fff' }}><span className="dot" /> {b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Why farmers choose us */}
      <section className="section section-dark">
        <div className="wrap split">
          <div className="split-copy">
            <p className="eyebrow eyebrow-plain" style={{ color: 'var(--green-300)' }}><span className="leaf">🌱</span> Why Farmers Choose HavestSafe</p>
            <h2 style={{ color: '#fff' }}>Protect More. Waste Less. <em style={{ fontStyle: 'normal', color: 'var(--green-300)' }}>Earn</em> More.</h2>
            <ul className="dot-list">
              {whyBullets.map((b) => <li key={b} style={{ color: '#fff' }}><span className="dot" /> {b}</li>)}
            </ul>
          </div>
          <div className="split-media">
            <img src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=800&q=70" alt="Farmer smiling while holding fresh peppers" />
          </div>
        </div>
      </section>

      <Testimonials eyebrow="Trusted by Farmers" title="Trusted by Those Who Grow" />
      <CtaBanner />
    </>
  )
}
