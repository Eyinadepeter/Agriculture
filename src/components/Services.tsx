import farmer from "../assets/farmer.jpg";
import warehouse from "../assets/warehouse.jpg";
import buyers from "../assets/buyers.jpg";
import truck from "../assets/truck.jpg";
import harvest from "../assets/harvest.jpg";
import tomatoes from "../assets/tomatoes.jpg";
import farming from "../assets/farming.jpg";

export default function Services() {
  return (
    <section className="services">
      <div className="services-wrapper">

        {/* Left Large Image */}
        <div className="left-image">
          <img src={farmer} alt="" />
        </div>

        {/* Right */}
        <div className="right-content">

          <div className="heading">
            <span>🌱 Our Services</span>
            <h2>
              Everything Your
              <br />
              Harvest Needs
            </h2>
          </div>

          <div className="gallery">
            <div className="col col-1">
              <img src={warehouse} alt="" />
              <img src={farming} alt="" />
            </div>
            <div className="col col-2">
              <img src={buyers} alt="" />
              <img src={tomatoes} alt="" />
            </div>
            <div className="col col-3">
              <img src={truck} alt="" />
              <img src={harvest} alt="" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}