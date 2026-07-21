export default function WhyChooseSection() {
  return (
    <section className="section green-bg" id="why">
      <div className="container">
        <div className="grid grid-cols-2 gap-xl items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <p style={{ marginBottom: 'var(--spacing-md)', fontWeight: '600', opacity: 0.9 }}>Why Choose Us</p>
            <h2 style={{ color: 'white', marginBottom: 'var(--spacing-lg)' }}>
              Farmers Choose Us To Protect What They Grow
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-xl)', opacity: 0.95, lineHeight: 'var(--line-height-relaxed)' }}>
              From storage to market, we&apos;ve built tools that empower farmers to reduce waste, connect with buyers, and grow their business. Join thousands of farmers already trusting HarvestCells with their harvest.
            </p>
            <button className="btn btn-secondary btn-lg">
              Start Protecting
            </button>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '1' }}>
            <img
              src="/images/farmer-testimonial.png"
              alt="Farmer with harvest"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
