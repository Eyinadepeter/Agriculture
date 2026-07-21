const defaultData = [
  {
    name: 'Daniel Adekola',
    role: 'Tomato Farmer',
    quote: 'HavestSafe gives me more confidence in protecting my produce and reducing waste after harvest.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=60',
  },
  {
    name: 'Amina Yusuf',
    role: 'Vegetable Farmer',
    quote: 'Finding better opportunities to sell my harvest feels easier when I can connect with the right buyers.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=60',
  },
  {
    name: 'Grace Wilson',
    role: 'Smallholder Farmer',
    quote: 'I love how HavestSafe brings storage, market access, and harvest management together in one place.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=60',
  },
  {
    name: 'Chidi Obi',
    role: 'Produce Buyer',
    quote: 'HavestSafe helps me find available produce from farmers I can trust, every single season.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=60',
  },
]

export default function Testimonials({
  eyebrow = 'Trusted by Those Who Grow',
  title = 'Trusted by Those Who Grow',
  data = defaultData,
}) {
  return (
    <section className="testimonials">
  <div className="container">

    <div className="section-title">
      <span>🌱 Trusted by Our Users</span>
      <h2>Built Around the People We Serve</h2>
    </div>

    <div className="testi-grid">
      {data.map((t) => (
        <div className="testi-card" key={t.name}>
          <div className="testi-head">
            <img src={t.avatar} alt={t.name} />

            <div className="testi-info">
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>

            <div className="stars">★★★★★</div>
          </div>

          <p>{t.quote}</p>
        </div>
      ))}
    </div>

  </div>
</section>
  )
}
