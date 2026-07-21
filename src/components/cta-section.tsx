export default function CTASection() {
  return (
    <section 
      className="section"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero-tomatoes.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center'
      }}
      id="contact"
    >
      <div className="container">
        <h2 style={{ color: 'white', marginBottom: 'var(--spacing-lg)' }}>
          Ready to Take Your Harvest Further?
        </h2>
        <p style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-xl)', opacity: 0.95, maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
          Join thousands of farmers protecting and profiting from their harvest.
        </p>
        <button className="btn btn-primary btn-lg">
          Start Harvesting Success
        </button>
      </div>
    </section>
  )
}
