import React from 'react';
import './NetworkNodeMesh.css';

export default function NetworkNodeMesh({ 
  nodes, 
  edges, 
  selectedNodeId, 
  onSelectNode,
  attackActive 
}) {
  // Map of node id to coordinates for drawing SVG lines
  const nodeMap = nodes.reduce((acc, node) => {
    acc[node.id] = node;
    return acc;
  }, {});

  return (
    <div className="network-mesh-container">
      {/* SVG canvas with node network and connection data-flows */}
      <svg 
        className="network-svg" 
        viewBox="0 0 520 440" 
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Interactive cybersecurity network diagram showing mesh nodes and real-time packet telemetry"
      >
        <defs>
          {/* Linear gradient for nominal links */}
          <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8a2be2" stopOpacity="0.4" />
          </linearGradient>

          {/* Linear gradient for active attack links */}
          <linearGradient id="attackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>

          {/* Radial glow filter for nodes */}
          <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="threatGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer security boundary ring */}
        <circle 
          cx="260" 
          cy="220" 
          r="195" 
          className="security-boundary-ring" 
        />
        <circle 
          cx="260" 
          cy="220" 
          r="135" 
          className="security-inner-ring" 
        />

        {/* Network Edges (Connections) */}
        <g className="edges-group">
          {edges.map((edge, idx) => {
            const src = nodeMap[edge.source];
            const tgt = nodeMap[edge.target];
            if (!src || !tgt) return null;

            const isAttacked = attackActive && (edge.source === 'node-edge' || edge.target === 'node-edge');

            return (
              <g key={`${edge.source}-${edge.target}-${idx}`}>
                {/* Background base wire */}
                <line
                  x1={src.cx}
                  y1={src.cy}
                  x2={tgt.cx}
                  y2={tgt.cy}
                  className={`edge-wire ${isAttacked ? 'wire-threat' : ''}`}
                />
                {/* Animated traveling data particle */}
                <line
                  x1={src.cx}
                  y1={src.cy}
                  x2={tgt.cx}
                  y2={tgt.cy}
                  className={`edge-particle ${isAttacked ? 'particle-threat' : ''}`}
                  strokeDasharray="6, 120"
                />
              </g>
            );
          })}
        </g>

        {/* Network Nodes */}
        <g className="nodes-group">
          {nodes.map((node) => {
            const isSelected = selectedNodeId === node.id;
            const isCritical = attackActive && node.id === 'node-edge';
            const isWarning = node.status === 'warning' && !isCritical;
            
            let statusClass = 'status-nominal';
            if (isCritical) statusClass = 'status-critical';
            else if (isWarning) statusClass = 'status-warning';

            return (
              <g
                key={node.id}
                className={`node-group ${isSelected ? 'selected' : ''} ${statusClass}`}
                onClick={() => onSelectNode(node.id)}
                role="button"
                tabIndex="0"
                aria-pressed={isSelected}
                aria-label={`Inspect ${node.label} - Status ${isCritical ? 'Critical' : node.status}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectNode(node.id);
                  }
                }}
              >
                {/* Outer Pulse Wave for selected or alert node */}
                {(isSelected || isCritical) && (
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.radius + 12}
                    className={`node-pulse ${isCritical ? 'pulse-critical' : 'pulse-selected'}`}
                  />
                )}

                {/* Ambient Halo */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.radius + 4}
                  className="node-halo"
                />

                {/* Main Node Body */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.radius}
                  className="node-body"
                />

                {/* Center Core Dot / Icon */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.radius > 24 ? 7 : 4.5}
                  className="node-core-dot"
                />

                {/* Node Label Text */}
                <text
                  x={node.cx}
                  y={node.cy + node.radius + 18}
                  className="node-label"
                  textAnchor="middle"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Interactive Helper Hint */}
      <div className="mesh-hint-badge">
        <span className="mesh-hint-icon">⚡</span>
        <span>Click any node to view real-time cryptographic &amp; threat telemetry</span>
      </div>
    </div>
  );
}
