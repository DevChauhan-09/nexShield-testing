import React, { useState } from 'react';
import './CapabilitiesSection.css';

export default function CapabilitiesSection({ capabilities, onCapabilitySelect }) {
  const [activeCapId, setActiveCapId] = useState(capabilities[0]?.id);

  return (
    <section className="capabilities-section" id="solutions">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge font-mono">CYBER DEFENSE SOLUTIONS</div>
          <h2 className="section-title">
            Engineered for <span className="highlight-text">Zero Compromise</span>
          </h2>
          <p className="section-subtitle">
            Autonomous threat eradication built upon kernel-level instrumentation, 
            quantum-resistant cryptosystems, and continuous identity verification.
          </p>
        </div>

        {/* 3 Capabilities Grid */}
        <div className="capabilities-grid">
          {capabilities.map((cap) => {
            const isActive = activeCapId === cap.id;
            return (
              <div 
                key={cap.id} 
                className={`capability-card ${isActive ? 'active-card' : ''}`}
                onClick={() => {
                  setActiveCapId(cap.id);
                  if (onCapabilitySelect) onCapabilitySelect(cap);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCapId(cap.id);
                    if (onCapabilitySelect) onCapabilitySelect(cap);
                  }
                }}
                role="button"
                tabIndex="0"
                aria-pressed={isActive}
              >
                <div className="cap-top-row">
                  <span className="cap-code font-mono">{cap.code}</span>
                  <span className="cap-badge font-mono">{cap.badge}</span>
                </div>

                <div className="cap-icon-box">
                  {cap.id === 'cap-1' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cap-svg">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  )}
                  {cap.id === 'cap-2' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cap-svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  )}
                  {cap.id === 'cap-3' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cap-svg">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>

                <h3 className="cap-title">{cap.title}</h3>
                <p className="cap-desc">{cap.description}</p>

                <div className="cap-metrics-footer">
                  <span className="metric-callout font-mono">{cap.metrics}</span>
                  <span className="interactive-arrow">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
