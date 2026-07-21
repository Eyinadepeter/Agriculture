import "../HowWork/HowWork.css";
import {
  FaUser,
  FaLeaf,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUser />,
    title: "Create Your Account",
    desc: "Set up your profile and tell us about your farming needs.",
    watermark: <FaUser />,
  },
  {
    icon: <FaLeaf />,
    title: "Protect Your Harvest",
    desc: "Access storage and tools to help keep your produce fresh and reduce waste.",
    watermark: <FaLeaf />,
  },
  {
    icon: <FaHandshake />,
    title: "Connect & Sell",
    desc: "Reach buyers and move your harvest to market with confidence.",
    watermark: <FaHandshake />,
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container">

        <div className="section-title">
          <span>🌱 How It Works</span>
          <h2>Three Steps To a Safer Harvest</h2>
        </div>

        <div className="steps">

          {steps.map((step, index) => (
            <div className="step-wrapper" key={index}>

              <div className="step-card">

                <div className="icon-circle">
                  {step.icon}
                </div>

                <div className="watermark">
                  {step.watermark}
                </div>

                <h3>{step.title}</h3>

                <p>{step.desc}</p>

              </div>

              {index !== steps.length - 1 && (
                <div className="arrow">
                  <FaArrowRight />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}