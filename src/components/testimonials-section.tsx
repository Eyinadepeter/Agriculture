export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Amina Okonkwo',
      role: 'Tomato Farmer',
      rating: 5,
      text: 'HarvestCells has transformed how I manage my harvest. I\'ve reduced waste by 80% and connected with 10+ new buyers!'
    },
    {
      name: 'Kwame Mensah',
      role: 'Vegetable Supplier',
      rating: 5,
      text: 'The platform is incredibly easy to use. My produce stays fresh longer and I get better prices.'
    },
    {
      name: 'Grace Kimani',
      role: 'Agricultural Farmer',
      rating: 5,
      text: 'Professional service with real support. They genuinely care about farmer success and it shows.'
    },
    {
      name: 'Joseph Adeyemi',
      role: 'Market Distributor',
      rating: 5,
      text: 'Reliable, fresh products every time. HarvestCells makes it easy to source quality produce.'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: 'var(--spacing-md)' }}>Trusted by Our Users</p>
          <h2>Built Around the People We Serve</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-md)' }}>
                <p className="testimonial-author">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
