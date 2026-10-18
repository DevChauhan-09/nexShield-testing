# AegisNode &mdash; Interactive Cybersecurity Hero Webpage

An enterprise-grade, modern cybersecurity landing page demo built with **React** and **Vite**. Features an original animated SVG node network mesh, interactive threat telemetry, live simulation states, and high-performance vanilla CSS aesthetics.

---

## 🚀 Key Features

1. **Aesthetic & Brand**:
   - Modern enterprise theme: deep navy/obsidian (`#040812`), electric cyan (`#00f2fe`), and subtle violet accents.
   - Clean typography using Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*).
   - Glassmorphic telemetry overlays, ambient background grid, and radial glow orbs.

2. **Hero Visual & Cyber Mesh**:
   - **Custom SVG Network Mesh**: Connected nodes with flowing packet animations, boundary rings, and real-time status pulses.
   - **Interactive Node Selection**: Click any node (*Core Mesh*, *IAM Broker*, *Edge Sentinel*, *Secret Vault*, *Compute Node*) to inspect IP endpoints, latency, cryptographic ciphers, and threat indicators in the floating security dashboard.
   - **Attack Simulation & Mitigation**:
     - Click **"Simulate Attack"** in the navbar or hero to trigger an active threat vector on the Edge Sentinel gateway.
     - Live metrics, packet flow lines, and telemetry turn into an alert state.
     - Click **"Quarantine Vector"** to test autonomous mitigation and restore nominal status.
   - **Live Metric Counters**: Auto-ticking counters for threats blocked, latency, and mesh integrity.

3. **Transition to Capabilities**:
   - 3 focused cybersecurity capabilities showcasing autonomous perimeter scrubbing, post-quantum lattice cryptography, and adaptive identity quarantine.
   - Interactive card states with metric callouts.

4. **Responsive & Accessible**:
   - Responsive layout adapting smoothly across desktop, tablet, and mobile.
   - Accessible mobile drawer menu with hamburger toggle and keyboard support.
   - Respects `prefers-reduced-motion` preferences.

---

## 🛠️ Technologies Used

- **Framework**: [React 19](https://react.dev/)
- **Bundler / Tooling**: [Vite 8](https://vitejs.dev/) with `@vitejs/plugin-react`
- **Styling**: Vanilla CSS (CSS variables, flexbox/grid, glassmorphism, responsive breakpoints)
- **Visuals**: Handcrafted inline SVG (no heavy third-party canvas or visual libraries)

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Run Locally (Development)
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Build for Production
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
