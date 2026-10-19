import React from 'react';
import useSectionTransition from '../hooks/useSectionTransition';
import './Footer.css';

export default function Footer({ onScrollToSection }) {
  const [footerRef] = useSectionTransition({ threshold: 0.1 });

  const handleLinkClick = (e, targetHref) => {
    if (targetHref && targetHref.startsWith('#')) {
      e.preventDefault();
      const sectionId = targetHref.replace('#', '');
      if (onScrollToSection) {
        onScrollToSection(sectionId);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer ref={footerRef} className="site-footer section-scroll-transition" id="footer" role="contentinfo">
      {/* Top transition glow divider */}
      <div className="footer-top-divider" aria-hidden="true" />

      <div className="container footer-container">
        {/* Main Columns Grid */}
        <div className="footer-columns-grid">
          {/* Column 1 — Brand */}
          <div className="footer-col footer-col-brand">
            <a 
              href="#hero" 
              className="footer-brand-link"
              onClick={(e) => handleLinkClick(e, '#hero')}
              aria-label="NexShield Home"
            >
              <div className="footer-brand-icon">
                <svg
                  className="footer-shield-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="footer-brand-name">
                NEX<span className="footer-brand-accent">SHIELD</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Strengthening digital confidence through security intelligence and protection.
            </p>
            <div className="footer-badge font-mono">
              <span className="footer-status-dot" />
              <span>Zero-Trust Autonomous Defense</span>
            </div>
          </div>

          {/* Column 2 — Platform */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">Platform</h4>
            <ul className="footer-links-list">
              <li>
                <a 
                  href="#platform" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#platform')}
                >
                  Platform Architecture
                </a>
              </li>
              <li>
                <a 
                  href="#solutions" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#solutions')}
                >
                  Cyber Defence Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#platform" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#platform')}
                >
                  Security Features
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">Company</h4>
            <ul className="footer-links-list">
              <li>
                <a 
                  href="#about" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#about')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  Enterprise Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">Resources</h4>
            <ul className="footer-links-list">
              <li>
                <a 
                  href="#about" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#about')}
                >
                  Security Insights
                </a>
              </li>
              <li>
                <a 
                  href="#platform" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#platform')}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '#about')}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 NexShield. All rights reserved.
          </p>
          <div className="footer-bottom-meta font-mono">
            <span>Kernel Telemetry // Quantum-Safe Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
