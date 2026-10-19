import React from 'react';
import './HeroLeft.css';

export default function HeroLeft({ 
  onScrollToCapabilities, 
  onExplorePlatform 
}) {
  return (
    <div className="hero-content-wrapper">
      {/* Category / Eyebrow Tag */}
      <div className="hero-eyebrow font-mono">
        ENTERPRISE CYBER DEFENSE // KERNEL OBSERVABILITY
      </div>

      {/* Main Impact Headline */}
      <h1 className="hero-title">
        Autonomous Cloud Defense &amp;{' '}
        <span className="title-highlight">Threat Neutralization</span>
      </h1>

      {/* Supporting Descriptive Copy */}
      <p className="hero-description">
        Continuous kernel-level observability and automated micro-isolation. 
        Detect credential hijacking, anomalous telemetry, and multi-vector intrusions in 
        sub-millisecond execution loops before exfiltration begins.
      </p>

      {/* Primary & Secondary Action CTAs */}
      <div className="hero-cta-group">
        <button
          type="button"
          className="btn btn-primary hero-btn-main"
          onClick={onScrollToCapabilities}
          aria-label="Explore Enterprise Solutions"
        >
          Explore Solutions
          <svg
            className="btn-arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <button
          type="button"
          className="btn btn-secondary hero-btn-sub"
          onClick={onExplorePlatform}
          aria-label="View Platform Architecture"
        >
          View Platform Architecture
        </button>
      </div>
    </div>
  );
}

