import tomatoesBg from "../assets/tomatoes.png";

const stats = [
  {
    num: "1,032+",
    label: "Farmers Supported",
  },
  {
    num: "1,233+",
    label: "Harvests Protected",
  },
  {
    num: "95%",
    label: "Less Spoilage",
  },
  {
    num: "50+",
    label: "Trusted Buyers",
  },
];

export default function Stats() {
  return (
    <section
      className="stats"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${tomatoesBg})`,
      }}
    >
      <div className="stats-container">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h2>{stat.num}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}