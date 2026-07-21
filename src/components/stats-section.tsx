export default function StatsSection() {
  const stats = [
    { number: '1,032+', label: 'Farmers' },
    { number: '1,233+', label: 'Transactions' },
    { number: '95%', label: 'Waste Reduced' },
    { number: '50+', label: 'Trusted Buyers' }
  ]

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
