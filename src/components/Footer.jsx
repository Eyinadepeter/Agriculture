const gallery = [
  'https://images.unsplash.com/photo-1595855709940-13c1c86e5b0f?w=200&q=60',
  'https://images.unsplash.com/photo-1595855709940-13c1c86e5b0f?w=200&q=60&sat=-50',
  'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=200&q=60',
  'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=200&q=60&sat=-50',
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">H</span>
            Havest<span>Safe</span>
          </div>
          <p>Protecting what you grow, reducing waste, and helping your harvest go further from farm to market.</p>
          <div className="social-row">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="X">x</a>
            <a href="#" aria-label="Pinterest">p</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/">Our Services</a></li>
            <li><a href="/">Why Choose Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>For Farmers</h4>
          <ul>
            <li><a href="/for-farmers">Protect Your Harvest</a></li>
            <li><a href="/for-farmers">Connect with Buyers</a></li>
            <li><a href="/for-farmers">Manage Your Produce</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>For Buyers</h4>
          <ul>
            <li><a href="/for-buyers">Find Fresh Produce</a></li>
            <li><a href="/for-buyers">Connect with Farmers</a></li>
            <li><a href="/for-buyers">Source with Confidence</a></li>
          </ul>
          <h4 style={{ marginTop: 24 }}>Connect With Us</h4>
          <p>12, Peace Avenue, Allen Bust Stop, Ikeja, Lagos, Nigeria.</p>
          <p>Support@gmail.com</p>
          <p>+000 (123) 45678</p>
        </div>

        <div className="footer-col">
          <h4>Gallery</h4>
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <div key={i}><img src={src} alt="Harvest gallery" loading="lazy" /></div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2026 HavestSafe. All rights reserved.</span>
        <span>Built for farmers. Designed for better harvests.</span>
      </div>
    </footer>
  )
}
