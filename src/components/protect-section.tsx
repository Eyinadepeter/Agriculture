import { Lock, Trash2, Users, ShieldCheck } from 'lucide-react'

export default function ProtectSection() {
  const services = [
    {
      icon: Lock,
      title: 'Store with Confidence',
      description: 'Access safe storage options to keep your produce fresh longer'
    },
    {
      icon: Trash2,
      title: 'Reduce Waste',
      description: 'Protect your harvest from spoilage and reduce post-harvest loss'
    },
    {
      icon: Users,
      title: 'Reach More Buyers',
      description: 'Connect with buyers and suppliers to expand your market reach'
    },
    {
      icon: ShieldCheck,
      title: 'Place Your Harvest',
      description: 'Secure buyers for your produce before you even harvest'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: 'var(--spacing-md)' }}>
            What We Do For Your Harvest
          </p>
          <h2>We Help Protect Your Harvest</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Our comprehensive platform ensures your produce reaches market in perfect condition, maximizing your profits
          </p>
        </div>

        <div className="protect-grid">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="protect-card">
                <Icon className="feature-icon" style={{ marginBottom: 'var(--spacing-md)' }} />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
