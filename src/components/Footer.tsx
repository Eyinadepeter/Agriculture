import "./Footer.css";

import farmer from "../assets/farmer.jpg";
import warehouse from "../assets/warehouse.jpg";
import buyers from "../assets/buyers.jpg";
import truck from "../assets/truck.jpg";
import harvest from "../assets/harvest.jpg";
import tomatoes from "../assets/tomatoes.jpg";

const gallery = [
  farmer,
  warehouse,
  buyers,
  truck,
  harvest,
  tomatoes,
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">H</span>
            Harvest<span>Safe</span>
          </div>

          <p>
            Protecting what you grow, reducing waste, and helping your harvest
            go further from farm to market.
          </p>

          <div className="social-row">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              ig
            </a>
            <a href="#" aria-label="X">
              x
            </a>
            <a href="#" aria-label="Pinterest">
              p
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Why Choose Us</a>
            </li>
          </ul>
        </div>

        {/* Farmers */}
        <div className="footer-col">
          <h4>For Farmers</h4>
          <ul>
            <li>
              <a href="/for-farmers">Protect Your Harvest</a>
            </li>
            <li>
              <a href="/for-farmers">Connect with Buyers</a>
            </li>
            <li>
              <a href="/for-farmers">Manage Your Produce</a>
            </li>
          </ul>
        </div>

        {/* Buyers */}
        <div className="footer-col">
          <h4>For Buyers</h4>
          <ul>
            <li>
              <a href="/for-buyers">Find Fresh Produce</a>
            </li>
            <li>
              <a href="/for-buyers">Connect with Farmers</a>
            </li>
            <li>
              <a href="/for-buyers">Source with Confidence</a>
            </li>
          </ul>

          <h4 style={{ marginTop: "24px" }}>Connect With Us</h4>

          <p>12, Peace Avenue, Allen, Ikeja, Lagos, Nigeria.</p>
          <p>support@harvestsafe.com</p>
          <p>+234 800 123 4567</p>
        </div>

        {/* Gallery */}
        <div className="footer-col">
          <h4>Gallery</h4>

          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={image}
                  alt={`Harvest Gallery ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2026 HarvestSafe. All rights reserved.</span>
        <span>Built for farmers. Designed for better harvests.</span>
      </div>
    </footer>
  );
}