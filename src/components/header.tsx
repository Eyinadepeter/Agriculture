'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <Link href="/" className="logo">
          <span>🌱</span>
          HarveSafe
        </Link>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#how-it-works">How It Works</a>
          <a href="#for-farmers">For Farmers</a>
          <a href="#for-buyers">For Buyers</a>
          <a href="#about">About Us</a>
        </nav>

        {/* CTA Buttons */}
        <div className="header-actions">
          <button className="btn btn-outline btn-sm">Sign In</button>
          <button className="btn btn-primary btn-sm">Get Started</button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}
