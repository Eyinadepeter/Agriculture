import { Heart, Share2, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <h3>🌱 HarvestCells</h3>
            <p style={{ fontSize: 'var(--font-size-base)', marginBottom: 'var(--spacing-md)' }}>
              Connecting farmers with buyers, from harvest to market.
            </p>
          </div>

          {/* For Farmers */}
          <div className="footer-section">
            <h3>For Farmers</h3>
            <a href="#features">Protect Your Harvest</a>
            <a href="#services">Find Fresh Produce</a>
            <a href="#services">Our Services</a>
          </div>

          {/* For Buyers */}
          <div className="footer-section">
            <h3>For Buyers</h3>
            <a href="#services">Find Fresh Produce</a>
            <a href="#features">Connect with Farmers</a>
            <a href="#why">Manage Your Orders</a>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3>Company</h3>
            <a href="#why">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--spacing-md)' }}>
            <p>© 2024 HarvestCells. All rights reserved.</p>
            
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <a href="#" title="Facebook" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color var(--transition-fast)' }}>
                <Share2 size={20} />
              </a>
              <a href="#" title="Twitter" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color var(--transition-fast)' }}>
                <Send size={20} />
              </a>
              <a href="#" title="Instagram" style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color var(--transition-fast)' }}>
                <Heart size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
