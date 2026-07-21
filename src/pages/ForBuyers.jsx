import CtaBanner from '../components/CtaBanner/CtaBanner.jsx'
import Testimonials from '../components/Testimonials.jsx'

const problems = [
  'Difficulty finding available produce',
  'Limited access to farmers and suppliers',
  'Uncertainty about produce quality',
  'Time-consuming sourcing process',
]

const solutions = [
  { title: 'Discover Available Produce', body: 'Find produce available from farmers in one place.' },
  { title: 'Connect With Farmers', body: 'Reach out to farmers and explore sourcing opportunities.' },
  { title: 'Source With Confidence', body: 'Get better visibility into available produce and its details.' },
  { title: 'Find What You Need', body: 'Search for the produce you need more easily.' },
]

const bullets = ['Discover Available Produce', 'Search With Ease', 'Check Produce Details', 'Connect With Farmers', 'Source With Confidence']
const whyBullets = ['Access More Produce', 'Connect Directly With Farmers', 'Save Time Sourcing', 'Make Better-Informed Decisions']

const buyerTestimonials = [
  { name: 'Daniel Adekola', role: 'Restaurant Supplier', quote: 'HavestSafe helps us spend less time searching and more time focusing on getting the produce we need.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=60' },
  { name: 'Amina Yusuf', role: 'Market Buyer', quote: 'Connecting with farmers directly helps us find fresh produce and build sourcing relationships.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=60' },
  { name: 'Grace Wilson', role: 'Produce Buyer', quote: 'Finding the right produce is much easier when you have better access to farmers and available harvests.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=60' },
  { name: 'Chidi Obi', role: 'Buyer', quote: 'HavestSafe keeps us close to available produce and the farmers who grow it.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=60' },
]

export default function ForBuyers() {
  return (
    <>
      <section className="hero-inner">
        <div className="wrap">
          <div className="hero-inner-copy">
            <p className="eyebrow eyebrow-pill"><span className="leaf">🌱</span> Freshness you can trust</p>
            <h1>Find <em>Fresh</em> Produce With Confidence.</h1>
            <p>Discover quality produce from farmers and find better opportunities to source what you need, when you need it.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="hero-inner-media">
            <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=70" alt="Buyer inspecting fresh tomatoes at a market" />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section">
        <div className="wrap split reverse">
          <div className="split-media">
            <img src="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=800&q=70" alt="Buyer sourcing produce at a market stall" />
          </div>
          <div className="split-copy">
            <p className="eyebrow eyebrow-plain"><span className="leaf">🌱</span> The Problem</p>
            <h2>Sourcing Isn't Always Easy</h2>
            <p>Finding the right produce can be difficult when buyers have limited visibility into availability, quality, and where produce is coming from.</p>
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
            <h2>What HavestSafe Helps Buyers Do</h2>
            <p>From discovering available produce to connecting with farmers, HavestSafe makes sourcing simpler and more reliable.</p>
            <ul className="check-list">
              {solutions.map((s) => (
                <li key={s.title}><span className="mark">✓</span><div><strong>{s.title}</strong><span>{s.body}</span></div></li>
              ))}
            </ul>
          </div>
          <div className="split-media">
            <img src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=800&q=70" alt="Woman selecting fresh produce at a market" />
          </div>
        </div>
      </section>

      {/* All in one place */}
      <section className="section section-mid">
        <div className="wrap split reverse">
          <div className="split-media" style={{ background: 'rgba(255,255,255,0.14)' }}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=70" alt="HavestSafe buyer dashboard preview" />
          </div>
          <div className="split-copy">
            <p className="eyebrow eyebrow-plain" style={{ color: 'var(--green-100)' }}><span className="leaf">🌱</span> All In One Place</p>
            <h2 style={{ color: '#fff' }}>Find What You <em style={{ fontStyle: 'normal', color: 'var(--green-100)' }}>Need</em>, All in One Place</h2>
            <ul className="dot-list">
              {bullets.map((b) => <li key={b} style={{ color: '#fff' }}><span className="dot" /> {b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Why buyers choose us */}
      <section className="section section-dark">
        <div className="wrap split">
          <div className="split-copy">
            <p className="eyebrow eyebrow-plain" style={{ color: 'var(--green-300)' }}><span className="leaf">🌱</span> Why Buyers Choose HavestSafe</p>
            <h2 style={{ color: '#fff' }}>Source <em style={{ fontStyle: 'normal', color: 'var(--green-300)' }}>Better</em>. Connect <em style={{ fontStyle: 'normal', color: 'var(--green-300)' }}>Better</em>.</h2>
            <ul className="dot-list">
              {whyBullets.map((b) => <li key={b} style={{ color: '#fff' }}><span className="dot" /> {b}</li>)}
            </ul>
          </div>
          <div className="split-media">
            <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=70" alt="Buyers exchanging fresh produce" />
          </div>
        </div>
      </section>

      <Testimonials eyebrow="Trusted by Buyers" title="A Better Way to Source Fresh Produce" data={buyerTestimonials} />
      <CtaBanner
        eyebrow="The Solution"
        title="Ready to Find Your Next Source?"
        accent="Next"
        body="Discover available produce, connect with farmers, and make sourcing easier with HavestSafe."
        cta="Start Sourcing"
      />
    </>
  )
}
