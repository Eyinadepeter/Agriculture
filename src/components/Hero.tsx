import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={hero}
        alt="Fresh tomatoes harvested on a farm"
        className="hero-image"
      />
    

      <div className="hero-overlay"></div>

      <div className=" hero-content">
        <div className="hero-copy">
          <span className="hero-badge">
            🌱 Built for better harvests
          </span>

          <h1>
            From <span>Harvest</span> to Market,
            <br />
            Without the <span>Waste</span>.
          </h1>

          <p>
            Store your tomatoes safely, connect with trusted buyers,
            and move your harvest to market with confidence.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              Get Started
            </button>

            <button className="btn btn-light">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}