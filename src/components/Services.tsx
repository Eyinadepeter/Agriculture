import womanbasket from "../assets/womanbasket.png";
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
        <div className="relative w-fit">
  <img
    src={womanbasket}
    alt=""
    className="w-[650px] rounded-3xl object-cover"
  />

  <div className="absolute right-0 top-1/2 -translate-y-[15%] flex flex-col gap-5">
    <img
      src={warehouse}
      alt=""
      className="w-[250px] h-[180px] rounded-2xl object-cover shadow-xl"
    />

    <img
      src={farming}
      alt=""
      className="w-[250px] h-[180px] rounded-2xl object-cover shadow-xl"
    />
  </div>
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