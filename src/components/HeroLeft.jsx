import React from 'react';
import './HeroLeft.css';

export default function HeroLeft({ 
  metrics, 
  onInspectNode, 
  onScrollToCapabilities, 
  activeSimulation 
}) {
  return (
    <div className="hero-left-content">
      {/* Live Cyber Status Badge */}
      <div className="status-badge-container">
        <div className="status-indicator-pill">
          <span className={`status-beacon ${activeSimulation ? 'threat-detected' : 'nominal'}`}></span>
          <span className="status-text">
            {activeSimulation ? 'ANOMALY DETECTED // MITIGATING' : 'ZERO-TRUST MESH ACTIVE'}
          </span>
        </div>
        <span className="status-subtext">Heuristic Engine v4.8</span>
      </div>

      {/* Main Impact Headline */}
      <h1 className="hero-title">
        Autonomous Cloud Defense &amp;{' '}
        <span className="title-gradient-glow">Threat Neutralization</span>
      </h1>

      {/* Supporting Copy */}
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
          onClick={() => onInspectNode('node-edge')}
          aria-label="Inspect Edge Sentinel Node"
        >
          <svg
            className="btn-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Inspect Threat Node
        </button>

        <button
          type="button"
          className="btn btn-secondary hero-btn-sub"
          onClick={onScrollToCapabilities}
          aria-label="Explore Core Capabilities"
        >
          Explore Capabilities
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
      </div>

      {/* Trust & Live Metrics Bar */}
      <div className="hero-metrics-grid">
        <div className="metric-item">
          <div className="metric-value font-mono">
            {metrics.threatsBlocked.toLocaleString()}
            <span className="metric-unit">+</span>
          </div>
          <div className="metric-label">Threats Mitigated</div>
        </div>

        <div className="metric-divider"></div>

        <div className="metric-item">
          <div className="metric-value font-mono">
            {metrics.latencyMs}
            <span className="metric-unit">ms</span>
          </div>
          <div className="metric-label">Mean Isolation Time</div>
        </div>

        <div className="metric-divider"></div>

        <div className="metric-item">
          <div className="metric-value font-mono">
            {metrics.meshIntegrity}%
          </div>
          <div className="metric-label">Mesh Health Index</div>
        </div>
      </div>
    </div>
  );
}
