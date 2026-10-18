import React from 'react';
import './SecurityDashboard.css';

export default function SecurityDashboard({ 
  selectedNode, 
  attackActive, 
  onMitigateThreat 
}) {
  const detail = selectedNode.detail;
  const isThreat = attackActive && selectedNode.id === 'node-edge';

  const getStatusBadge = () => {
    if (isThreat) {
      return <span className="dash-badge badge-critical">CRITICAL ALERT // MITIGATING</span>;
    }
    switch (detail.status) {
      case 'warning':
        return <span className="dash-badge badge-warning">ELEVATED LOAD</span>;
      case 'nominal':
      default:
        return <span className="dash-badge badge-nominal">HEALTHY // ENCRYPTED</span>;
    }
  };

  return (
    <div className={`floating-dashboard ${isThreat ? 'threat-state' : ''}`}>
      {/* Dashboard Header Bar */}
      <div className="dash-header">
        <div className="dash-title-wrap">
          <div className="dash-status-indicator">
            <span className={`dash-dot ${isThreat ? 'dot-critical' : 'dot-nominal'}`}></span>
          </div>
          <div>
            <h3 className="dash-node-title font-mono">{detail.name}</h3>
            <span className="dash-node-cat">{detail.category} &bull; {detail.id}</span>
          </div>
        </div>
        {getStatusBadge()}
      </div>

      {/* Grid of Telemetry Metrics */}
      <div className="dash-grid">
        <div className="dash-metric-card">
          <span className="metric-tag font-mono">IP ENDPOINT</span>
          <span className="metric-val font-mono">{detail.ipAddress}</span>
        </div>
        <div className="dash-metric-card">
          <span className="metric-tag font-mono">INGRESS LATENCY</span>
          <span className="metric-val font-mono highlight-cyan">{isThreat ? '48.2ms (Spike)' : detail.latency}</span>
        </div>
        <div className="dash-metric-card">
          <span className="metric-tag font-mono">CAPACITY / LOAD</span>
          <span className="metric-val font-mono">{isThreat ? '96.4% CRITICAL' : detail.load}</span>
        </div>
        <div className="dash-metric-card">
          <span className="metric-tag font-mono">CIPHER SUITE</span>
          <span className="metric-val font-mono highlight-violet">AES-256-GCM / Kyber</span>
        </div>
      </div>

      {/* Threat / Event Stream Details */}
      <div className="dash-threat-box">
        <div className="threat-header">
          <span className="threat-label font-mono">ACTIVE EVENT STREAM:</span>
          <span className="threat-timestamp font-mono">UTC 17:16:37.042</span>
        </div>
        <p className="threat-desc">
          {isThreat 
            ? '⚡ Automated BGP SYN-flood deflection triggered. Ingress quarantine active across edge zone AP-East.' 
            : detail.lastAnomaly}
        </p>
      </div>

      {/* Real-time Defense Action */}
      <div className="dash-footer">
        <div className="defense-status">
          <span className="defense-label">Autonomous Policy:</span>
          <span className="defense-val font-mono">{detail.mitigation}</span>
        </div>

        {isThreat && (
          <button
            type="button"
            className="btn btn-primary btn-isolate"
            onClick={onMitigateThreat}
          >
            Quarantine Vector
          </button>
        )}
      </div>
    </div>
  );
}
