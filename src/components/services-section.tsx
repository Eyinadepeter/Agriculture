export default function ServicesSection() {
  const images = [
    '/images/gallery-1.png',
    '/images/gallery-2.png',
    '/images/gallery-3.png',
    '/images/hero-tomatoes.png',
    '/images/feature-harvest.png'
  ]

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="text-center mb-xl">
          <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: 'var(--spacing-md)' }}>
            Our Services
          </p>
          <h2>Everything Your Harvest Needs</h2>
        </div>

        <div className="gallery-grid">
          {images.map((image, idx) => (
            <div key={idx} className="gallery-item">
              <img src={image} alt={`Service ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
