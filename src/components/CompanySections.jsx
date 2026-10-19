import React from 'react';
import useSectionTransition from '../hooks/useSectionTransition';
import './CompanySections.css';

export default function PlatformSection({ onScrollToNetwork, onTriggerSimulation }) {
  const [sectionRef] = useSectionTransition({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="company-section platform-section section-scroll-transition" id="platform">
      <div className="section-transition-top" aria-hidden="true" />
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <div className="section-badge font-mono">PLATFORM ARCHITECTURE</div>
          <h2 className="section-title">
            The <span className="highlight-text">NexShield Telemetry Mesh</span>
          </h2>
          <p className="section-subtitle">
            Demystifying how NexShield orchestrates kernel-level packet inspection, 
            autonomous telemetry correlation, and instant micro-isolation across distributed hybrid environments.
          </p>
        </div>

        <div className="platform-grid">
          <div className="platform-card reveal-on-scroll">
            <div className="platform-step-num font-mono">01</div>
            <div className="platform-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="platform-card-title">Distributed Node Mesh</h3>
            <p className="platform-card-desc">
              Every cloud cluster, gateway, and secret enclave operates as an autonomous node in the mesh.
              Telemetry streams communicate via lightweight eBPF hooks without degrading workload throughput.
            </p>
            <div className="platform-card-meta font-mono">Sub-millisecond packet telemetry</div>
          </div>

          <div className="platform-card reveal-on-scroll reveal-delay-1">
            <div className="platform-step-num font-mono">02</div>
            <div className="platform-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3 className="platform-card-title">Real-Time Threat Visualization</h3>
            <p className="platform-card-desc">
              The live interactive topology above maps nominal versus critical node states instantaneously.
              Security teams gain single-pane visibility over ingress traffic, anomalous spikes, and cipher suites.
            </p>
            <div className="platform-card-meta font-mono">Dynamic node topology &amp; indicators</div>
          </div>

          <div className="platform-card reveal-on-scroll reveal-delay-2">
            <div className="platform-step-num font-mono">03</div>
            <div className="platform-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="platform-card-title">Automated Micro-Isolation</h3>
            <p className="platform-card-desc">
              When malicious vectors strike, the platform engages BGP Anycast diversion and container network severance.
              Lateral movement is stopped before unauthorized exfiltration can materialize.
            </p>
            <div className="platform-card-meta font-mono">Self-healing zero-trust enforcement</div>
          </div>
        </div>

        <div className="platform-cta-banner reveal-on-scroll reveal-delay-3">
          <div className="platform-banner-text">
            <h4>Explore NexShield Enterprise Capabilities</h4>
            <p>Deploy kernel-level observability, quantum-safe cryptosystems, and automated perimeter micro-isolation.</p>
          </div>
          <div className="platform-banner-actions">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onScrollToNetwork}
            >
              Explore Solutions &darr;
            </button>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={onTriggerSimulation}
            >
              Simulate Threat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ onContactAction }) {
  const [sectionRef] = useSectionTransition({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="company-section contact-section section-scroll-transition" id="contact">
      <div className="section-transition-top" aria-hidden="true" />
      <div className="container">
        <div className="contact-box reveal-on-scroll">
          <div className="contact-glow-circle"></div>
          
          <div className="section-badge font-mono">ENTERPRISE INQUIRIES</div>
          <h2 className="section-title">
            Ready to Fortify Your <span className="highlight-text">Cloud Infrastructure?</span>
          </h2>
          <p className="contact-desc">
            Speak with a NexShield defense architect, schedule a deep architecture review, 
            or initiate a zero-trust telemetry sandbox in your staging environment.
          </p>

          <div className="contact-details-row font-mono">
            <div className="contact-detail-pill">
              <span className="detail-icon">✉</span>
              <span>security@nexshield.demo</span>
            </div>
            <div className="contact-detail-pill">
              <span className="detail-icon">📍</span>
              <span>Global Mesh Ops &bull; San Francisco &bull; Zurich &bull; Tokyo</span>
            </div>
            <div className="contact-detail-pill">
              <span className="detail-icon">🔒</span>
              <span>Encrypted PGP Key: 0x9AF4E81C</span>
            </div>
          </div>

          <div className="contact-cta-wrapper">
            <button 
              type="button" 
              className="btn btn-primary contact-cta-btn"
              onClick={() => onContactAction('Request Enterprise Sandbox')}
            >
              Request Enterprise Sandbox
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => onContactAction('Schedule Architect Briefing')}
            >
              Schedule Architect Briefing
            </button>
          </div>
          
          <div className="contact-footnote font-mono">
            Demo demonstration environment &bull; No credentials or credit card required
          </div>
        </div>
      </div>
    </section>
  );
}
