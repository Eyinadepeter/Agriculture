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
      src={truck}
      alt=""
      className="w-[250px] h-[180px] rounded-2xl object-cover shadow-xl"
    />
  </div>
</div>

        {/* Right */}
        <div className="flex flex-col gap-8">

  {/* Heading */}
 <div className="flex flex-col gap-8">
  {/* Heading */}
  <div>
    <span className="inline-flex items-center gap-2 text-green-500 text-lg font-medium">
      🌱 Our Services
    </span>

    <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-primary-500 leading-tight">
      Everything Your
      <br />
      Harvest Needs
    </h2>
  </div>

  {/* Gallery */}
  <div className="grid grid-cols-2 gap-5 items-start">
    {/* Left Column */}
    <div className="flex flex-col gap-5">
      <img
        src={buyers}
        alt="Buyers"
        className="w-full h-48 rounded-3xl object-cover"
      />

      <img
        src={tomatoes}
        alt="Tomatoes"
        className="w-full h-48 rounded-3xl object-cover"
      />
    </div>

    {/* Right Column */}
    <div>
      <img
        src={truck}
        alt="Truck"
        className="w-full h-48 rounded-3xl object-cover"
      />
    </div>
  </div>
</div>

</div>

      </div>
    </section>
  );
}