import React, { useState, useRef, useEffect } from 'react';
import useSectionTransition from '../hooks/useSectionTransition';
import './CapabilitiesSection.css';

export default function CapabilitiesSection({ capabilities, onCapabilitySelect }) {
  const [sectionRef] = useSectionTransition({ threshold: 0.1 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const viewportRef = useRef(null);

  // Update arrow button enabled states based on scroll position
  const checkScrollability = () => {
    const el = viewportRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollability();
    const el = viewportRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);

    return () => {
      el.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [capabilities]);

  const handleScroll = (direction) => {
    if (!viewportRef.current) return;
    const cardWidth = 380;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    viewportRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="capabilities-section section-scroll-transition" id="solutions">
      <div className="section-transition-top" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge font-mono">CYBER DEFENSE SOLUTIONS</div>
          <h2 className="section-title">
            Engineered for <span className="highlight-text">Zero Compromise</span>
          </h2>
          <p className="section-subtitle">
            Autonomous threat eradication built upon kernel-level instrumentation, 
            quantum-resistant cryptosystems, and continuous identity verification.
          </p>
        </div>

        {/* Horizontal Carousel Container */}
        <div className="capabilities-carousel-container is-expanded">
          {/* Navigation Arrow Left (visible when scrollable to left) */}
          <button
            type="button"
            className={`carousel-nav-btn carousel-nav-prev ${canScrollLeft ? 'is-visible' : ''}`}
            onClick={() => handleScroll('left')}
            aria-label="Previous solutions"
            disabled={!canScrollLeft}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Carousel Viewport (Single Horizontal Row) */}
          <div 
            ref={viewportRef} 
            className="capabilities-carousel-viewport"
            role="region"
            aria-label="Cyber Defence Solutions Carousel"
            tabIndex="0"
          >
            <div className="capabilities-carousel-track">
              {capabilities.map((cap) => {
                return (
                  <div 
                    key={cap.id} 
                    className="capability-card"
                    onClick={() => {
                      if (onCapabilitySelect) onCapabilitySelect(cap);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (onCapabilitySelect) onCapabilitySelect(cap);
                      }
                    }}
                    role="button"
                    tabIndex="0"
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
                      {cap.id === 'cap-4' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cap-svg">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                          <line x1="6" y1="6" x2="6.01" y2="6" />
                          <line x1="6" y1="18" x2="6.01" y2="18" />
                        </svg>
                      )}
                      {cap.id === 'cap-5' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cap-svg">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      )}
                      {cap.id === 'cap-6' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cap-svg">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      )}
                    </div>

                    <h3 className="cap-title">{cap.title}</h3>
                    <p className="cap-desc">{cap.description}</p>

                    <div className="cap-metrics-footer">
                      <span className="metric-callout font-mono">{cap.metrics}</span>
                      <span className="interactive-arrow" aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrow Right (visible when scrollable to right) */}
          <button
            type="button"
            className={`carousel-nav-btn carousel-nav-next ${canScrollRight ? 'is-visible' : ''}`}
            onClick={() => handleScroll('right')}
            aria-label="Next solutions"
            disabled={!canScrollRight}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

