import React from 'react';
import './NavbarCyberVisual.css';

/**
 * NavbarCyberVisual renders a sophisticated animated cybersecurity visual
 * (fine flowing data paths, connected security nodes, and a subtle glowing security grid)
 * that is STRICTLY confined within the floating navbar container via CSS overflow: hidden.
 */
export default function NavbarCyberVisual() {
  return (
    <div className="nav-cyber-visual" aria-hidden="true">
      {/* Deep gradient background overlay */}
      <div className="nav-cyber-backdrop" />

      {/* Subtle digital security mesh lines */}
      <div className="nav-cyber-grid" />

      {/* SVG Fine data paths & connected security nodes */}
      <svg 
        className="nav-cyber-svg" 
        viewBox="0 0 1200 68" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="navCyberLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0" />
            <stop offset="30%" stopColor="#00f2fe" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#8a2be2" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8a2be2" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="navCyberLineGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
          </linearGradient>

          <filter id="navGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Path 1: Top flowing telemetry wave */}
        <path
          d="M 0 34 Q 200 12 400 34 T 800 34 T 1200 24"
          fill="none"
          stroke="url(#navCyberLineGrad1)"
          strokeWidth="1.2"
          className="nav-path-wave1"
        />

        {/* Path 2: Interconnected cross data trajectory */}
        <path
          d="M 0 46 Q 300 58 600 34 T 1200 48"
          fill="none"
          stroke="url(#navCyberLineGrad2)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="nav-path-wave2"
        />

        {/* Micro Connected Nodes along the path */}
        <g className="nav-mesh-nodes">
          <circle cx="160" cy="24" r="2" fill="#00f2fe" filter="url(#navGlow)" />
          <line x1="160" y1="24" x2="240" y2="40" stroke="rgba(0, 242, 254, 0.25)" strokeWidth="0.8" />
          
          <circle cx="240" cy="40" r="2.5" fill="#38bdf8" />
          <circle cx="380" cy="28" r="2" fill="#a855f7" />
          <line x1="240" y1="40" x2="380" y2="28" stroke="rgba(138, 43, 226, 0.25)" strokeWidth="0.8" />

          <circle cx="540" cy="38" r="2" fill="#00f2fe" />
          <circle cx="680" cy="22" r="2.5" fill="#8a2be2" filter="url(#navGlow)" />
          <line x1="540" y1="38" x2="680" y2="22" stroke="rgba(0, 242, 254, 0.25)" strokeWidth="0.8" />

          <circle cx="820" cy="42" r="2" fill="#38bdf8" />
          <line x1="680" y1="22" x2="820" y2="42" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="0.8" />

          <circle cx="980" cy="28" r="2.5" fill="#00f2fe" filter="url(#navGlow)" />
          <line x1="820" y1="42" x2="980" y2="28" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="0.8" />

          <circle cx="1090" cy="36" r="2" fill="#a855f7" />
          <line x1="980" y1="28" x2="1090" y2="36" stroke="rgba(138, 43, 226, 0.2)" strokeWidth="0.8" />
        </g>

        {/* Pulse packet moving smoothly across the security pipeline */}
        <circle cx="0" cy="0" r="3" fill="#00f2fe" className="nav-data-pulse" filter="url(#navGlow)">
          <animateMotion 
            path="M 0 34 Q 200 12 400 34 T 800 34 T 1200 24" 
            dur="9s" 
            repeatCount="indefinite" 
          />
        </circle>
        
        <circle cx="0" cy="0" r="2.5" fill="#c084fc" className="nav-data-pulse-2" filter="url(#navGlow)">
          <animateMotion 
            path="M 1200 48 Q 900 58 600 34 T 0 46" 
            dur="13s" 
            repeatCount="indefinite" 
          />
        </circle>
      </svg>
    </div>
  );
}
