
import farmer from "../assets/farmer-tablet.jpg";

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why-container">

        {/* Left Content */}
        <div className="why-content">

          <p className="why-tag">
            🌱 Why Choose Us
          </p>

          <h2>
            Farmers Choose Us To
            <span> Protect </span>
            What They Grow
          </h2>

          <p className="why-text">
            From storage to market, HarvestSafe helps farmers protect
            their produce, reduce waste, find better selling
            opportunities, and move their harvest with confidence.
          </p>

          

          <button className="why-btn">
            Start Protecting
          </button>

        </div>

        {/* Right Image */}

        <div className="why-image">

          <img src={farmer} alt="Farmer using tablet" />

         

        </div>

      </div>
    </section>
  );
}