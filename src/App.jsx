import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroLeft from './components/HeroLeft';
import AboutSection from './components/AboutSection';
import TrustedByMarquee from './components/TrustedByMarquee';
import CapabilitiesSection from './components/CapabilitiesSection';
import PlatformSection, { ContactSection } from './components/CompanySections';
import Footer from './components/Footer';
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

      {/* Main Hero Container with Local Background Video */}
      <main id="hero" className="hero-section">
        {/* Background Video Layer */}
        <div className="hero-video-container" aria-hidden="true">
          <video
            className="hero-bg-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/nexshield-background.mp4" type="video/mp4" />
          </video>
          {/* Balanced translucent overlay ensuring high contrast & readability */}
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-container-static">
          {/* Headlines & Actions */}
          <HeroLeft
            onScrollToCapabilities={() => handleScrollToSection('about')}
            onExplorePlatform={() => handleScrollToSection('solutions')}
          />
        </div>
      </main>

      {/* About NexShield Section — Placed directly below the Hero section */}
      <AboutSection 
        onDiscoverApproach={() => {
          handleScrollToSection('solutions');
          showToast('🛡️ Exploring NexShield cyber defense methodology.');
        }}
      />

      {/* Trusted By Logo Marquee — Placed immediately below About Us */}
      <TrustedByMarquee />

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

      {/* Contact & Inquiries Section */}
      <ContactSection 
        onContactAction={(actionName) => {
          showToast(`⚡ ${actionName} initiated. Our security team will connect shortly.`);
        }}
      />

      {/* Professional Multi-Column Website Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

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
