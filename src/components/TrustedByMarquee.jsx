import React from 'react';
import useSectionTransition from '../hooks/useSectionTransition';
import './TrustedByMarquee.css';

/**
 * Enterprise partner / infrastructure demo brand marks.
 * Clean, lightweight, professional SVG icons with neutral brand names.
 */
const TRUSTED_LOGOS = [
  {
    id: 'logo-1',
    name: 'Aether Cloud',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trusted-logo-icon">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    id: 'logo-2',
    name: 'Vanguard Enclave',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trusted-logo-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'logo-3',
    name: 'HyperScale Systems',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trusted-logo-icon">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'logo-4',
    name: 'CipherMesh Labs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trusted-logo-icon">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'logo-5',
    name: 'NovaTech Gateway',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trusted-logo-icon">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'logo-6',
    name: 'QuantumCore Defense',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trusted-logo-icon">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'logo-7',
    name: 'Synthetix Bank',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trusted-logo-icon">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function TrustedByMarquee() {
  const [sectionRef] = useSectionTransition({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="trusted-by-section section-scroll-transition" aria-label="Trusted By Enterprises">
      <div className="container trusted-by-container">
        {/* Sophisticated Popup-Inspired Floating Trust Panel */}
        <div className="trusted-floating-panel">
          {/* Subtle interior ambient glow */}
          <div className="panel-glow-aura" aria-hidden="true" />
          
          <div className="trusted-panel-header">
            <span className="panel-status-blip" aria-hidden="true" />
            <h3 className="trusted-by-heading">
              Trusted By
            </h3>
            <span className="panel-status-tag font-mono">ENTERPRISE VERIFIED</span>
          </div>

          {/* Seamless infinite marquee viewport within floating panel */}
          <div className="trusted-marquee-viewport" tabIndex="0" role="region" aria-label="Partner brands marquee">
            <div className="trusted-marquee-track">
              {/* First sequence */}
              <div className="trusted-logo-group">
                {TRUSTED_LOGOS.map((item) => (
                  <div key={item.id} className="trusted-logo-item">
                    {item.icon}
                    <span className="trusted-logo-name">{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Second identical sequence for seamless infinite loop */}
              <div className="trusted-logo-group" aria-hidden="true">
                {TRUSTED_LOGOS.map((item) => (
                  <div key={`dup-${item.id}`} className="trusted-logo-item">
                    {item.icon}
                    <span className="trusted-logo-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
