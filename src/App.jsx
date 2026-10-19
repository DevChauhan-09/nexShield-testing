import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroLeft from './components/HeroLeft';
import CapabilitiesSection from './components/CapabilitiesSection';
import PlatformSection, { AboutSection, ContactSection } from './components/CompanySections';
import { CAPABILITIES } from './data/cyberData';
import './App.css';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  // Smooth scroll handler with support for Home (top)
  const handleScrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toast notification system
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => prev === msg ? null : prev);
    }, 3800);
  };

  return (
    <div className="app-wrapper">
      {/* Responsive Floating Cybersecurity Navbar */}
      <Navbar
        onScrollToSection={handleScrollToSection}
        onGetStarted={() => {
          handleScrollToSection('solutions');
          showToast('🚀 Welcome to NexShield. Choose an enterprise deployment option below.');
        }}
        onSignIn={() => {
          showToast('🔐 NexShield Zero-Trust Portal authentication initiated.');
        }}
      />

      {/* Main Hero Container */}
      <main id="hero" className="hero-section">
        <div className="container hero-container-static">
          {/* Headlines & Actions */}
          <HeroLeft
            onScrollToCapabilities={() => handleScrollToSection('solutions')}
            onExplorePlatform={() => handleScrollToSection('platform')}
          />
        </div>
      </main>

      {/* Solutions Section (3 Cybersecurity Capabilities) */}
      <CapabilitiesSection
        capabilities={CAPABILITIES}
        onCapabilitySelect={(cap) => {
          showToast(`Capability selected: ${cap.title}`);
        }}
      />

      {/* Platform Architecture & Monitoring Explanation */}
      <PlatformSection
        onScrollToNetwork={() => handleScrollToSection('solutions')}
        onTriggerSimulation={() => showToast('⚡ Autonomous telemetry verification stream active.')}
      />

      {/* About NexShield Section */}
      <AboutSection />

      {/* Contact & Inquiries Section */}
      <ContactSection 
        onContactAction={(actionName) => {
          showToast(`⚡ ${actionName} initiated. Our security team will connect shortly.`);
        }}
      />

      {/* Simple Footer */}
      <footer className="app-footer">
        <div className="container footer-content">
          <div className="footer-brand font-mono">
            NEXSHIELD <span>// ZERO-TRUST AUTONOMOUS TELEMETRY</span>
          </div>
          <div className="footer-note">
            Autonomous Cloud Defense &bull; Next-Gen Security Intelligence.
          </div>
        </div>
      </footer>

      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="interactive-toast" role="status" aria-live="polite">
          <span className="toast-dot"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
