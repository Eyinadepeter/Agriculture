import "./CtaBanner.css";

export default function CtaBanner({
  eyebrow = "The Solution",
  title = "Ready to Take Your Harvest Further?",
  accent = "Further",
  body = "Protect what you grow, reduce waste, and connect with better opportunities through HarvestSafe.",
  cta = "Start Protecting",
  image = "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=1400&q=80",
}) {
  const [before, after] = title.split(accent);

  return (
    <section className="cta-section">
      <div className="cta-banner">

        <img src={image} alt="" className="cta-bg" />

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <div className="cta-left">

            <p className="cta-tag">
              🌱 {eyebrow}
            </p>

            <h2>
              {before}
              <span>{accent}</span>
              {after}
            </h2>

            <p>{body}</p>

          </div>

          <div className="cta-right">

            <button className="cta-btn">
              {cta}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}