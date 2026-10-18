import React from 'react';
import NetworkNodeMesh from './NetworkNodeMesh';
import SecurityDashboard from './SecurityDashboard';
import './HeroRightVisual.css';

export default function HeroRightVisual({
  nodes,
  edges,
  selectedNodeId,
  onSelectNode,
  attackActive,
  onMitigateThreat
}) {
  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="hero-right-visual" id="network-demo">
      {/* Decorative backdrop aura */}
      <div className="cyber-glow-aura"></div>

      {/* Frame container */}
      <div className="cyber-frame">
        {/* Top HUD Status Bar */}
        <div className="cyber-hud-top">
          <div className="hud-badge">
            <span className="hud-blip"></span>
            <span className="hud-title font-mono">LIVE TOPOLOGY TELEMETRY</span>
          </div>
          <div className="hud-stats font-mono">
            <span>PACKETS: <strong>14.2k/s</strong></span>
            <span>NODES: <strong>{nodes.length} ONLINE</strong></span>
          </div>
        </div>

        {/* SVG Network Visual */}
        <NetworkNodeMesh
          nodes={nodes}
          edges={edges}
          selectedNodeId={selectedNodeId}
          onSelectNode={onSelectNode}
          attackActive={attackActive}
        />

        {/* Floating Security Telemetry Dashboard */}
        <SecurityDashboard
          selectedNode={selectedNode}
          attackActive={attackActive}
          onMitigateThreat={onMitigateThreat}
        />
      </div>
    </div>
  );
}
