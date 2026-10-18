import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ onScrollToSection, onTriggerSimulation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onScrollToSection(targetId);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo with shield icon */}
        <a href="#hero" className="navbar-brand" onClick={(e) => handleNavClick(e, 'hero')}>
          <div className="brand-icon-wrapper">
            <svg
              className="brand-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="brand-name">
            AEGIS<span className="brand-highlight">NODE</span>
          </span>
          <span className="brand-badge">SEC-OPS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a 
                href="#network-demo" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'network-demo')}
              >
                Telemetry Mesh
              </a>
            </li>
            <li>
              <a 
                href="#capabilities" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'capabilities')}
              >
                Capabilities
              </a>
            </li>
            <li>
              <a 
                href="#architecture" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'capabilities')}
              >
                Architecture
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="navbar-actions">
          <button 
            type="button"
            className="btn btn-primary nav-cta-btn"
            onClick={onTriggerSimulation}
          >
            <span className="pulse-dot"></span>
            Simulate Attack
          </button>

          {/* Accessible Hamburger Menu Button */}
          <button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a 
              href="#network-demo" 
              className="mobile-link"
              onClick={(e) => handleNavClick(e, 'network-demo')}
            >
              Telemetry Mesh
            </a>
          </li>
          <li>
            <a 
              href="#capabilities" 
              className="mobile-link"
              onClick={(e) => handleNavClick(e, 'capabilities')}
            >
              Capabilities
            </a>
          </li>
          <li>
            <a 
              href="#architecture" 
              className="mobile-link"
              onClick={(e) => handleNavClick(e, 'capabilities')}
            >
              Zero-Trust Architecture
            </a>
          </li>
        </ul>
        <div className="mobile-drawer-cta">
          <button 
            type="button" 
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onTriggerSimulation();
            }}
          >
            Simulate Attack Vector
          </button>
        </div>
      </div>
    </header>
  );
}
