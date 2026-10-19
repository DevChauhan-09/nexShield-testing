import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

/**
 * AboutSection placed directly below the Hero section.
 * - Exact required copy & typography
 * - Two-column desktop layout (Left: Text, Right: Abstract Cybersecurity Visual), stacking on mobile
 * - Guaranteed once-only viewport scroll-reveal entrance animation with subtle staggered timing
 * - Fallback safety ensuring content is never trapped in an invisible state
 */
export default function AboutSection({ onDiscoverApproach }) {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    // Safety fallback: if IntersectionObserver is not available, immediately reveal
    if (typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        } else {
          // Replay when scrolling away and returning to the section
          setIsRevealed(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`about-section ${isRevealed ? 'is-revealed' : ''}`} 
      id="about"
      aria-label="About NexShield"
    >
      {/* Visual connector transition from Hero */}
      <div className="about-transition-connector" aria-hidden="true" />
      <div className="about-ambient-glow" aria-hidden="true" />

      <div className="container">
        <div className="about-two-col-layout">
          {/* Left Column: Text Content with Staggered Reveal */}
          <div className="about-text-col">
            <div className="about-eyebrow font-mono about-reveal-item delay-eyebrow">
              ABOUT NEXSHIELD
            </div>

            <h2 className="about-headline about-reveal-item delay-headline">
              Security for a World That <span className="highlight-cyan">Never Stops Connecting.</span>
            </h2>

            <p className="about-description about-reveal-item delay-desc">
              NexShield is built around a simple idea: make digital security easier to understand. 
              We aim to help businesses identify risks, improve visibility, and navigate the digital 
              world with greater confidence.
            </p>

            <div className="about-action-group about-reveal-item delay-btn">
              <button 
                type="button" 
                className="about-cta-btn"
                onClick={onDiscoverApproach}
              >
                <span>Discover Our Approach</span>
                <span className="about-cta-arrow" aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Cybersecurity Visual Panel */}
          <div className="about-visual-col about-reveal-item delay-visual">
            <div className="about-visual-card">
              <div className="visual-header font-mono">
                <div className="visual-badge">
                  <span className="visual-pulse-dot" />
                  <span>NEXSHIELD CLOUD ENCLAVE</span>
                </div>
                <span className="visual-metric-tag">LATENCY &lt; 1ms</span>
              </div>

              <div className="visual-hologram-container">
                <div className="hologram-shield-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
              </div>

              <div className="visual-stats-grid font-mono">
                <div className="stat-pill">
                  <span className="stat-pill-label">THREAT MITIGATION</span>
                  <span className="stat-pill-val cyan">Continuous</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-pill-label">VISIBILITY INDEX</span>
                  <span className="stat-pill-val">100% Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
