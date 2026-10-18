import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroLeft from './components/HeroLeft';
import HeroRightVisual from './components/HeroRightVisual';
import CapabilitiesSection from './components/CapabilitiesSection';
import { NETWORK_NODES, NETWORK_EDGES, CAPABILITIES } from './data/cyberData';
import './App.css';

export default function App() {
  // State management for interactive nodes & simulation
  const [nodes, setNodes] = useState(NETWORK_NODES);
  const [selectedNodeId, setSelectedNodeId] = useState('node-core');
  const [attackActive, setAttackActive] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Animated live metrics counter state
  const [metrics, setMetrics] = useState({
    threatsBlocked: 148290,
    latencyMs: 1.2,
    meshIntegrity: 99.98
  });

  // Simulated live counter ticker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 4),
        latencyMs: attackActive ? 34.6 : +(1.1 + Math.random() * 0.3).toFixed(1),
        meshIntegrity: attackActive ? 98.42 : +(99.96 + Math.random() * 0.03).toFixed(2)
      }));
    }, 2800);

    return () => clearInterval(interval);
  }, [attackActive]);

  // Handle node selection
  const handleSelectNode = (nodeId) => {
    setSelectedNodeId(nodeId);
    const targetNode = nodes.find(n => n.id === nodeId);
    showToast(`Inspecting ${targetNode?.label || 'Node'}: Telemetry Stream Synced`);
  };

  // Trigger attack simulation
  const handleTriggerSimulation = () => {
    setAttackActive(true);
    setSelectedNodeId('node-edge');
    setMetrics(prev => ({
      ...prev,
      threatsBlocked: prev.threatsBlocked + 18,
      latencyMs: 48.2,
      meshIntegrity: 97.8
    }));
    showToast('🚨 Simulated DDoS Vector Injected into AP-East Gateway!');
  };

  // Mitigate attack
  const handleMitigateThreat = () => {
    setAttackActive(false);
    setMetrics(prev => ({
      ...prev,
      threatsBlocked: prev.threatsBlocked + 1,
      latencyMs: 1.4,
      meshIntegrity: 99.99
    }));
    showToast('🛡️ Threat Vector Isolated: eBPF BGP Anycast Filter Applied');
  };

  // Toast notification system
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => prev === msg ? null : prev);
    }, 3800);
  };

  // Smooth scroll handler
  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Ambient background graphics */}
      <div className="ambient-grid" aria-hidden="true"></div>
      <div className="glow-orb-top-left" aria-hidden="true"></div>
      <div className="glow-orb-top-right" aria-hidden="true"></div>

      {/* Responsive Navbar */}
      <Navbar
        onScrollToSection={handleScrollToSection}
        onTriggerSimulation={handleTriggerSimulation}
      />

      {/* Main Hero Container */}
      <main id="hero" className="hero-section">
        <div className="container hero-layout-split">
          {/* Left Column: Headlines & Actions */}
          <HeroLeft
            metrics={metrics}
            onInspectNode={handleSelectNode}
            onScrollToCapabilities={() => handleScrollToSection('capabilities')}
            activeSimulation={attackActive}
          />

          {/* Right Column: Visual Mesh + Floating Dashboard */}
          <HeroRightVisual
            nodes={nodes}
            edges={NETWORK_EDGES}
            selectedNodeId={selectedNodeId}
            onSelectNode={handleSelectNode}
            attackActive={attackActive}
            onMitigateThreat={handleMitigateThreat}
          />
        </div>
      </main>

      {/* Capabilities Section */}
      <CapabilitiesSection
        capabilities={CAPABILITIES}
        onCapabilitySelect={(cap) => {
          showToast(`Capability selected: ${cap.title}`);
        }}
      />

      {/* Simple Footer */}
      <footer className="app-footer">
        <div className="container footer-content">
          <div className="footer-brand font-mono">
            AEGISNODE <span>// ZERO-TRUST AUTONOMOUS TELEMETRY</span>
          </div>
          <div className="footer-note">
            Built for enterprise-grade defense demonstration. Simulated telemetry data.
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
