import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, Lock, Cpu, Terminal, Shield, CheckCircle2, ArrowRight, Server, Radio, Database } from "lucide-react"

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"vision" | "access" | "perimeter" | "command">("vision")

  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Technical Capabilities</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
            Services & <span className="text-primary">Architecture</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            AXION NODES delivers end-to-end physical security infrastructure powered by edge neural networks, air-gapped cryptographic tokens, and automated perimeter threat neutralization.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 border-b border-border/60 pb-4 mb-12">
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "vision"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            <Eye className="w-4 h-4" /> AI Vision Surveillance
          </button>
          <button
            onClick={() => setActiveTab("access")}
            className={`px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "access"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            <Lock className="w-4 h-4" /> Zero-Trust Access
          </button>
          <button
            onClick={() => setActiveTab("perimeter")}
            className={`px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "perimeter"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            <Cpu className="w-4 h-4" /> Perimeter Matrix
          </button>
          <button
            onClick={() => setActiveTab("command")}
            className={`px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "command"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            <Terminal className="w-4 h-4" /> Command Center
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="bg-secondary/30 border border-border/80 rounded-xl p-8 md:p-12 mb-16">
          {activeTab === "vision" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-4">
                  <Eye className="w-4 h-4" /> Real-Time Computer Vision
                </div>
                <h2 className="text-3xl font-bold uppercase mb-4">AI Vision Threat Detection</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Our proprietary neural vision models process 4K camera streams at 60 FPS directly on local edge accelerators. Detect weapons, forced entry, tailgating, and perimeter breaches in under 400 milliseconds.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Real-time object & weapon detection (YOLOv8 + custom TensorRT kernels)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Thermal anomaly & smoke/fire multi-spectral fusion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Zero cloud latency — 100% on-premises edge processing</span>
                  </div>
                </div>
                <Link to="/contacts" className="bg-primary text-primary-foreground font-bold px-6 py-3 text-xs uppercase tracking-wider rounded inline-block hover:brightness-110">
                  Deploy Vision System
                </Link>
              </div>

              <div className="bg-hero-bg/90 border border-border/80 p-6 rounded-lg font-mono text-xs text-muted-foreground space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-primary font-bold">NODE-VISION-01 TELEMETRY</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="space-y-2 text-foreground/90">
                  <p>&gt; Stream 01: 3840x2160 @ 60 FPS — Inference: 3.2ms</p>
                  <p>&gt; Stream 02: Thermal FLIR — Inference: 2.8ms</p>
                  <p>&gt; Threat State: CLEAR (0 Anomaly Flags)</p>
                  <p>&gt; License Plate OCR: 99.84% Confidence</p>
                </div>
                <div className="pt-2 border-t border-border/60 text-primary">
                  [SUCCESS] Air-gapped neural model synchronized.
                </div>
              </div>
            </div>
          )}

          {activeTab === "access" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-4">
                  <Lock className="w-4 h-4" /> Zero-Trust Access Mesh
                </div>
                <h2 className="text-3xl font-bold uppercase mb-4">Biometric & Cryptographic Access</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Replace outdated RFID cards with multi-factor biometric verification and dynamic time-based tokenization. Eliminate badge sharing and cloned physical keycards across high-security zones.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">3D facial depth mapping resistant to spoofing & printed images</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Dynamic BLE / NFC mobile tokens with 30-second TTL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Automated mantrap & emergency lockdown interlocks</span>
                  </div>
                </div>
                <Link to="/contacts" className="bg-primary text-primary-foreground font-bold px-6 py-3 text-xs uppercase tracking-wider rounded inline-block hover:brightness-110">
                  Configure Access Mesh
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-hero-bg/90 border border-border/80 p-6 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary block mb-1">0.18s</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Door Unlock Latency</span>
                </div>
                <div className="bg-hero-bg/90 border border-border/80 p-6 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary block mb-1">AES-256</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Token Encryption</span>
                </div>
                <div className="bg-hero-bg/90 border border-border/80 p-6 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary block mb-1">100%</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Spoof Resistance</span>
                </div>
                <div className="bg-hero-bg/90 border border-border/80 p-6 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary block mb-1">50K+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Users Supported</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "perimeter" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-4">
                  <Cpu className="w-4 h-4" /> Multi-Spectral Defense
                </div>
                <h2 className="text-3xl font-bold uppercase mb-4">Perimeter Defense Matrix</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Hardened exterior protection featuring active laser tripwires, microwave barrier sensors, and long-range acoustic detection. Detect breaches before intruders reach facility doors.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Long-range thermal perimeter tripwires (up to 2.5 km range)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Acoustic gunshot and glass-break triangulation arrays</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Automated spotlighting and deterrence audio dispatch</span>
                  </div>
                </div>
                <Link to="/contacts" className="bg-primary text-primary-foreground font-bold px-6 py-3 text-xs uppercase tracking-wider rounded inline-block hover:brightness-110">
                  Assess Perimeter
                </Link>
              </div>

              <div className="bg-hero-bg/90 border border-border/80 p-6 rounded-lg font-mono text-xs text-muted-foreground space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-primary font-bold">PERIMETER MATRIX STATUS</span>
                  <span className="text-green-400">HARDENED</span>
                </div>
                <div className="space-y-2">
                  <p>Zone A (North Fence): Laser Tripwire ACTIVE</p>
                  <p>Zone B (Gate 04): Thermal Radar ACTIVE</p>
                  <p>Zone C (Cargo Dock): Microwave Mesh ACTIVE</p>
                  <p>Zone D (East Fence): Acoustic Triangulation ACTIVE</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "command" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-4">
                  <Terminal className="w-4 h-4" /> Command Integration
                </div>
                <h2 className="text-3xl font-bold uppercase mb-4">Unified Command Center</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Aggregate telemetry from legacy analog cameras, modern IP streams, access control panels, and fire suppression systems into a single web-based management dashboard.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Native ONVIF & RTSP legacy hardware integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Automated 911 & private security guard dispatch triggers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Immutable cryptographic audit trail for compliance</span>
                  </div>
                </div>
                <Link to="/contacts" className="bg-primary text-primary-foreground font-bold px-6 py-3 text-xs uppercase tracking-wider rounded inline-block hover:brightness-110">
                  Request Command Demo
                </Link>
              </div>

              <div className="bg-hero-bg/90 border border-border/80 p-6 rounded-lg font-mono text-xs text-muted-foreground space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-primary font-bold">CENTRAL DISPATCH MESH</span>
                  <span className="text-green-400">READY</span>
                </div>
                <div className="space-y-2">
                  <p>Telemetry Latency: 12ms</p>
                  <p>Dispatch Relay: Columbus Emergency Dispatch</p>
                  <p>Audit Log Hash: 0x8F4A...B92C (Immutable)</p>
                  <p>Failover Mode: Dual Satellite + Cellular Backhaul</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tech Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg">
            <Server className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">On-Premises Edge Servers</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Industrial 1U rack-mount neural accelerators equipped with redundant power supplies and hardware-level encryption key storage.
            </p>
          </div>

          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg">
            <Radio className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Encrypted Mesh Wireless</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Private 900MHz and Sub-GHz RF backhaul ensuring continuous sensor communication even during local power or internet outages.
            </p>
          </div>

          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg">
            <Database className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Immutable Cryptographic Audit</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every badge scan, door trigger, and camera threat flag is cryptographically signed and stored in tamper-proof audit ledgers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
