import {
  FiHome,
  FiShoppingBag,
  FiFeather,
} from "react-icons/fi";

const quickFeatures = [
  {
    icon: <FiHome />,
    title: "Safe Storage",
    body: "Keep your produce fresh for longer.",
  },
  {
    icon: <FiShoppingBag />,
    title: "Market Access",
    body: "Connect with trusted buyers and sell your harvest with ease.",
  },
  {
    icon: <FiFeather />,
    title: "Harvest Management",
    body: "Track and manage your produce with ease.",
  },
];

export default function QuickFeatures() {
  return (
    <section className="quick-features">
      <div className="quick-features-container">
        {quickFeatures.map((feature, index) => (
          <div className="quick-feature" key={feature.title}>
            <div className="quick-feature-icon">
              {feature.icon}
            </div>

            <div className="quick-feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>

            {index !== quickFeatures.length - 1 && (
              <div className="quick-divider"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}