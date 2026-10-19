import React, { useState, useEffect, useRef } from 'react';
import { NAVBAR_MENU, LANGUAGES } from '../data/navbarData';
import './Navbar.css';

export default function Navbar({ onScrollToSection, onGetStarted, onSignIn }) {
  // Active dropdown state: 'platform' | 'solutions' | 'services' | 'resources' | 'company' | null
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null);

  const navRef = useRef(null);

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setLanguageOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setLanguageOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavCategoryClick = (catKey) => {
    setActiveDropdown((prev) => (prev === catKey ? null : catKey));
    setLanguageOpen(false);
  };

  const handleNavCategoryMouseEnter = (catKey) => {
    // Only open on hover if a dropdown is already active or for desktop ease
    if (window.innerWidth > 1040) {
      setActiveDropdown(catKey);
    }
  };

  const handleLinkClick = (e, targetHref) => {
    if (targetHref && targetHref.startsWith('#')) {
      e.preventDefault();
      const sectionId = targetHref.replace('#', '');
      onScrollToSection(sectionId);
      setActiveDropdown(null);
      setLanguageOpen(false);
      setMobileMenuOpen(false);
    }
  };

  const toggleLanguageDropdown = (e) => {
    e.stopPropagation();
    setLanguageOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const selectLanguage = (code) => {
    setCurrentLang(code);
    setLanguageOpen(false);
  };

  const handleGetStartedClick = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      onScrollToSection('solutions');
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleSignInClick = () => {
    if (onSignIn) {
      onSignIn();
    } else {
      onScrollToSection('contact');
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <div className="floating-navbar-wrapper" ref={navRef}>
      {/* 
        The Floating Navbar Container:
        Clean, static, translucent blue-tinted glass surface complementing the hero section.
        Completely static with no animations or moving visuals.
      */}
      <header className="floating-navbar">
        {/* Interactive Navbar Content Layer */}
        <div className="navbar-inner-content">
          {/* GROUP 1: Brand Group (Logo icon + Brand Name) */}
          <div className="nav-brand-group">
            <a 
              href="#hero" 
              className="navbar-brand-link" 
              onClick={(e) => handleLinkClick(e, '#hero')}
              aria-label="NexShield Home"
            >
              <div className="brand-icon-hex">
                <svg
                  className="brand-shield-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="brand-title">
                NEX<span className="brand-title-accent">SHIELD</span>
              </span>
            </a>
          </div>

          {/* GROUP 2: Primary Navigation Categories (All on 1 line on desktop) */}
          <nav className="nav-categories-group" aria-label="Main Navigation">
            {Object.keys(NAVBAR_MENU).map((key) => {
              const category = NAVBAR_MENU[key];
              const isOpen = activeDropdown === key;
              return (
                <div 
                  key={key} 
                  className="nav-item-dropdown-wrapper"
                  onMouseEnter={() => handleNavCategoryMouseEnter(key)}
                >
                  <button
                    type="button"
                    className={`nav-category-trigger ${isOpen ? 'active' : ''}`}
                    onClick={() => handleNavCategoryClick(key)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{category.title}</span>
                    <svg
                      className={`nav-chevron-icon ${isOpen ? 'rotate' : ''}`}
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="4 6 8 10 12 6" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </nav>

          {/* GROUP 3: Account Actions & Prominent CTA */}
          <div className="nav-actions-group">
            {/* Subtle Vertical Divider */}
            <span className="nav-action-divider" aria-hidden="true" />

            {/* Sign In */}
            <button
              type="button"
              className="nav-btn-signin"
              onClick={handleSignInClick}
              aria-label="Sign In to NexShield Security Portal"
            >
              Sign In
            </button>

            {/* Language / Globe Icon & Compact Dropdown */}
            <div className="nav-lang-wrapper">
              <button
                type="button"
                className={`nav-btn-globe ${languageOpen ? 'active' : ''}`}
                onClick={toggleLanguageDropdown}
                aria-expanded={languageOpen}
                aria-haspopup="true"
                aria-label="Select website display language"
                title="Select Language"
              >
                <svg
                  className="globe-svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="lang-code-text font-mono">{currentLang.toUpperCase()}</span>
              </button>

              {/* Compact Language Selector Menu */}
              {languageOpen && (
                <div className="lang-dropdown-menu" role="menu">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      className={`lang-option-btn ${currentLang === lang.code ? 'selected' : ''}`}
                      onClick={() => selectLanguage(lang.code)}
                      role="menuitem"
                    >
                      <span className="lang-name font-sans">{lang.label}</span>
                      {currentLang === lang.code && (
                        <svg className="check-svg" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Prominent CTA: Get Started */}
            <button
              type="button"
              className="btn btn-primary nav-btn-cta"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`hamburger-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </header>

      {/* 
        EXTERNAL DROPDOWN MENUS:
        Positioned relative to the floating-navbar-wrapper so they are NOT
        clipped by the navbar container's overflow:hidden.
      */}
      {activeDropdown && (
        <div 
          className="nav-desktop-dropdown-panel"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="dropdown-panel-inner">
            {/* Top Category Tagline */}
            <div className="dropdown-tagline-bar">
              <span className="tagline-badge font-mono">{NAVBAR_MENU[activeDropdown]?.title}</span>
              <span className="tagline-text">{NAVBAR_MENU[activeDropdown]?.tagline}</span>
            </div>

            <div className="dropdown-panel-content">
              {/* Left/Middle Column Sections */}
              <div className="dropdown-sections-grid">
                {NAVBAR_MENU[activeDropdown]?.sections.map((section, idx) => (
                  <div key={idx} className="dropdown-sub-section">
                    <h4 className="dropdown-section-header font-mono">{section.header}</h4>
                    <ul className="dropdown-links-list">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href={item.link}
                            className="dropdown-menu-item-link"
                            onClick={(e) => handleLinkClick(e, item.link)}
                          >
                            <span className="item-title">{item.name}</span>
                            <span className="item-desc">{item.desc}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Featured Card */}
              {NAVBAR_MENU[activeDropdown]?.featured && (
                <div className="dropdown-featured-card">
                  <div className="featured-top-row">
                    <span className="featured-badge font-mono">{NAVBAR_MENU[activeDropdown].featured.badge}</span>
                  </div>
                  <h4 className="featured-title">{NAVBAR_MENU[activeDropdown].featured.title}</h4>
                  <p className="featured-desc">{NAVBAR_MENU[activeDropdown].featured.desc}</p>
                  <a
                    href={NAVBAR_MENU[activeDropdown].featured.link}
                    className="featured-cta-link"
                    onClick={(e) => handleLinkClick(e, NAVBAR_MENU[activeDropdown].featured.link)}
                  >
                    Explore Architecture &rarr;
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 
        MOBILE DRAWER NAVIGATION:
        Clean mobile panel containing categories, language selector, Sign In & Get Started
      */}
      {mobileMenuOpen && (
        <div className="nav-mobile-panel" role="dialog" aria-modal="true">
          <div className="mobile-panel-inner">
            {/* Mobile Categories Accordion */}
            <div className="mobile-categories-list">
              {Object.keys(NAVBAR_MENU).map((key) => {
                const category = NAVBAR_MENU[key];
                const isExpanded = mobileExpandedCat === key;
                return (
                  <div key={key} className="mobile-category-block">
                    <button
                      type="button"
                      className="mobile-cat-header-btn"
                      onClick={() => setMobileExpandedCat(isExpanded ? null : key)}
                    >
                      <span className="mobile-cat-title">{category.title}</span>
                      <svg
                        className={`mobile-chevron ${isExpanded ? 'rotate' : ''}`}
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="4 6 8 10 12 6" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="mobile-cat-subitems">
                        {category.sections.flatMap((s) => s.items).map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link}
                            className="mobile-subitem-link"
                            onClick={(e) => handleLinkClick(e, item.link)}
                          >
                            <span className="subitem-name">{item.name}</span>
                            <span className="subitem-desc">{item.desc}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Actions: Language + Sign In + Get Started */}
            <div className="mobile-actions-panel">
              {/* Language Selector */}
              <div className="mobile-lang-row">
                <span className="mobile-lang-label font-mono">LANGUAGE:</span>
                <div className="mobile-lang-options">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      className={`mobile-lang-chip ${currentLang === lang.code ? 'active' : ''}`}
                      onClick={() => selectLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mobile-btn-group">
                <button
                  type="button"
                  className="btn btn-secondary mobile-signin-btn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="btn btn-primary mobile-cta-btn"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
