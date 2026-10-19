export const NETWORK_NODES = [
  {
    id: 'node-core',
    label: 'Core Mesh',
    cx: 260,
    cy: 220,
    radius: 28,
    status: 'nominal',
    detail: {
      id: 'NODE-01',
      name: 'Central Telemetry Core',
      category: 'Neural Engine',
      status: 'nominal',
      ipAddress: '10.244.0.1/16',
      load: '42.8% Capacity',
      lastAnomaly: 'None (Zero active policy leaks)',
      mitigation: 'Autonomous heuristic packet filtering enabled',
      latency: '1.2ms'
    }
  },
  {
    id: 'node-auth',
    label: 'IAM Broker',
    cx: 140,
    cy: 110,
    radius: 20,
    status: 'nominal',
    detail: {
      id: 'NODE-02',
      name: 'Global Identity Broker',
      category: 'IAM Broker',
      status: 'nominal',
      ipAddress: '172.16.88.14',
      load: '27.4% Capacity',
      lastAnomaly: 'Simulated brute-force spoof throttled',
      mitigation: 'FIDO2 hardware assertion enforced',
      latency: '3.4ms'
    }
  },
  {
    id: 'node-edge',
    label: 'Edge Sentinel',
    cx: 410,
    cy: 130,
    radius: 22,
    status: 'warning',
    detail: {
      id: 'NODE-03',
      name: 'AP-East Perimeter Gateway',
      category: 'Edge Gateway',
      status: 'warning',
      ipAddress: '198.51.100.22',
      load: '84.1% Elevated',
      lastAnomaly: 'DDoS SYN Flood signature matched',
      mitigation: 'Dynamic BGP Anycast scrubbing engaged',
      latency: '14.8ms'
    }
  },
  {
    id: 'node-vault',
    label: 'Secret Vault',
    cx: 120,
    cy: 330,
    radius: 22,
    status: 'nominal',
    detail: {
      id: 'NODE-04',
      name: 'Quantum-Safe Secret Enclave',
      category: 'Zero-Trust Vault',
      status: 'nominal',
      ipAddress: '10.99.12.5',
      load: '14.2% Capacity',
      lastAnomaly: 'None (Key rotations synced)',
      mitigation: 'Kyber-1024 post-quantum lattice encryption active',
      latency: '0.9ms'
    }
  },
  {
    id: 'node-cluster',
    label: 'Compute Node',
    cx: 390,
    cy: 320,
    radius: 20,
    status: 'nominal',
    detail: {
      id: 'NODE-05',
      name: 'Ephemeral Microservice Fabric',
      category: 'Cloud Cluster',
      status: 'nominal',
      ipAddress: '10.244.33.109',
      load: '59.3% Capacity',
      lastAnomaly: 'Lateral port scan quarantined in sandbox',
      mitigation: 'eBPF kernel-level socket severance',
      latency: '2.1ms'
    }
  }
];

export const NETWORK_EDGES = [
  { source: 'node-auth', target: 'node-core' },
  { source: 'node-edge', target: 'node-core' },
  { source: 'node-vault', target: 'node-core' },
  { source: 'node-cluster', target: 'node-core' },
  { source: 'node-auth', target: 'node-vault' },
  { source: 'node-edge', target: 'node-cluster' }
];

export const CAPABILITIES = [
  {
    id: 'cap-1',
    code: 'SHIELD-01',
    title: 'Autonomous Perimeter Scrubbing',
    description: 'Sub-millisecond packet introspection powered by deep eBPF kernel instrumentation, nullifying layer 3/4 and layer 7 bursts before reaching ingress controllers.',
    metrics: '< 1.4ms Ingress Latency',
    badge: 'Real-time eBPF'
  },
  {
    id: 'cap-2',
    code: 'CRYPTO-02',
    title: 'Post-Quantum Lattice Enclaves',
    description: 'NIST-certified lattice cryptography algorithms embedded into zero-trust access tunnels, safeguarding long-lived enterprise session tokens from retrospective decryption.',
    metrics: 'Kyber-1024 Compliant',
    badge: 'Hardware Root of Trust'
  },
  {
    id: 'cap-3',
    code: 'NEURAL-03',
    title: 'Adaptive Identity Quarantine',
    description: 'Continuous Bayesian behavioral anomaly scoring across workforce endpoints. Instantly constrains credential blast radius the exact moment abnormal telemetry surfaces.',
    metrics: '99.98% Anomaly Catch Rate',
    badge: 'Continuous Verification'
  },
  {
    id: 'cap-4',
    code: 'FABRIC-04',
    title: 'Cloud Workload Micro-Segmentation',
    description: 'Granular process-level policy controls for containers and Kubernetes clusters, preventing lateral adversary traversal across distributed multi-cloud nodes.',
    metrics: 'Zero-Trust Pod Isolation',
    badge: 'Kube-Native eBPF'
  },
  {
    id: 'cap-5',
    code: 'DECEPT-05',
    title: 'Autonomous Honeynet Deception',
    description: 'Dynamic decoy tokens, synthetic secrets, and breadcrumb microservices that lure advanced persistent threats into high-interaction forensic honeypots.',
    metrics: 'Immediate Intruder Baiting',
    badge: 'Active Defense'
  },
  {
    id: 'cap-6',
    code: 'GATE-06',
    title: 'API Sentinel & Protocol Inspection',
    description: 'Deep GraphQL, REST, and gRPC payload sanitization that neutralizes broken object-level authorization (BOLA) and injection attacks in real time.',
    metrics: '100% Schema Conformance',
    badge: 'L7 Deep Inspection'
  }
];
