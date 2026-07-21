import { Users, Leaf, Shield } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: Users,
      title: 'Create Your Account',
      description: 'Set up your profile and tell us about your harvest'
    },
    {
      number: 2,
      icon: Leaf,
      title: 'Protect Your Harvest',
      description: 'Store your produce in our safe facilities with full tracking'
    },
    {
      number: 3,
      icon: Shield,
      title: 'Connect & Sell',
      description: 'Connect with buyers and sell your harvest with confidence'
    }
  ]

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="text-center mb-xl">
          <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: 'var(--spacing-md)' }}>How It Works</p>
          <h2>Three Steps To A Safer Harvest</h2>
        </div>

        <div className="grid grid-cols-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)' }}>
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="card text-center" style={{ position: 'relative', paddingTop: 'calc(var(--spacing-lg) + 20px)' }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-12px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: 'var(--font-size-lg)'
                }}>
                  {step.number}
                </div>
                <Icon className="feature-icon" style={{ margin: '0 auto var(--spacing-lg)' }} />
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
