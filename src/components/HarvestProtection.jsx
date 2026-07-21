import harvestImage from "../assets/harvest.png";

import {
  FiHome,
  FiRefreshCw,
  FiUsers,
  FiTruck,
} from "react-icons/fi";

const helpCards = [
  {
    icon: <FiHome />,
    title: "Store with Confidence",
    body: "Access safer storage options to help keep your produce fresh for longer.",
    dark: false,
  },
  {
    icon: <FiRefreshCw />,
    title: "Reduce Food Waste",
    body: "Protect your harvest from spoilage and reduce wasteful post-harvest losses.",
    dark: true,
  },
  {
    icon: <FiUsers />,
    title: "Reach More Buyers",
    body: "Connect with buyers and discover better opportunities to sell your produce.",
    dark: true,
  },
  {
    icon: <FiTruck />,
    title: "Move Your Harvest",
    body: "Get the support you need to move your produce from the farm to the market.",
    dark: false,
  },
];

export default function HarvestProtection() {
  return (
    <section className="harvest">
      <div className="harvest-container">

        <div className="harvest-left">

          <span className="harvest-tag">
            🌱 What We Do For Your Harvest
          </span>

          <h2>
            We Help Protect
            <br />
            Your Harvest
          </h2>

          <div className="harvest-grid">

            {helpCards.map((card) => (
              <div
                key={card.title}
                className={`harvest-card ${card.dark ? "dark" : ""}`}
              >
                <div className="harvest-icon">
                  {card.icon}
                </div>

                <h3>{card.title}</h3>

                <p>{card.body}</p>

              </div>
            ))}

          </div>

        </div>

        <div className="harvest-right">
          <img
            src={harvestImage}
            alt="Tomato greenhouse"
          />
        </div>

      </div>
    </section>
  );
}