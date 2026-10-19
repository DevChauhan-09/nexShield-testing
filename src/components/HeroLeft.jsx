import React from 'react';
import './HeroLeft.css';

export default function HeroLeft({ 
  onScrollToCapabilities, 
  onExplorePlatform 
}) {
  return (
    <div className="hero-content-wrapper">
      {/* Eyebrow */}
      <div className="hero-eyebrow font-mono">
        CONFIDENCE IN EVERY CONNECTION
      </div>

      {/* Main headline, on two lines */}
      <h1 className="hero-title">
        <span className="hero-title-line">Your Digital World.</span>
        <span className="hero-title-line title-highlight">Under a Stronger Shield.</span>
      </h1>

      {/* Description */}
      <p className="hero-description">
        Gain a clearer picture of your digital risks with security intelligence designed to help you protect critical systems and move forward confidently.
      </p>

      {/* Primary CTA & Secondary CTA */}
      <div className="hero-cta-group">
        <button
          type="button"
          className="btn btn-primary hero-btn-main"
          onClick={onScrollToCapabilities}
          aria-label="Get Started with NexShield"
        >
          Get Started
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
          aria-label="Learn More about NexShield"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

