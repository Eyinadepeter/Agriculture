import { Box, Users, TrendingUp } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Box,
      title: 'Safe Storage',
      description: 'Keep your produce fresh with our temperature-controlled storage facility'
    },
    {
      icon: Users,
      title: 'Market Access',
      description: 'Connect with trusted buyers and retailers ready to purchase your harvest'
    },
    {
      icon: TrendingUp,
      title: 'Harvest Management',
      description: 'Track and manage your produce from farm to market with our platform'
    }
  ]

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="card">
                <Icon className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
