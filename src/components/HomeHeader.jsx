import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from "../assets/Logo.svg";

const links = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/for-farmers', label: 'For Farmers' },
  { to: '/for-buyers', label: 'For Buyers' },
  { to: '/about', label: 'About Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <img src={logo} alt="Harvest Safe Logo" className="h-12 w-auto object-contain" />    
      <span className="brand-name">Harvest <span className='safe'>Safe</span></span>
        </NavLink>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

       <div className="header-actions">
  <NavLink to="/Signin" className="btn btn-ghost">
    Sign In
  </NavLink>

  <NavLink to="/Signup" className="btn btn-primary">
    Get Started
  </NavLink>

  <button
    className="nav-toggle"
    aria-label="Toggle menu"
    onClick={() => setOpen((o) => !o)}
  >
    <span />
    <span />
    <span />
  </button>
</div>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <button className="btn btn-primary">Get Started</button>
        </div>
      )}
    </header>
  )
}
