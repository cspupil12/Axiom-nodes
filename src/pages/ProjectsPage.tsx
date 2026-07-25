import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, ShieldCheck, Filter, CheckCircle2 } from "lucide-react"

const projectsList = [
  {
    id: "facility-alpha",
    category: "Aerospace & Defense",
    title: "Facility Alpha Perimeter Hardening",
    location: "Ohio, USA",
    description: "Deployed 48 thermal neural sensors and multi-factor biometric turnstiles across a 120-acre defense manufacturing campus.",
    metrics: ["100% Perimeter Coverage", "72 Hour Turnup", "0 False Alarms"],
    hardware: "48x AXION Thermal Nodes, 12x Biometric Mantraps, Dual Microwave Mesh",
  },
  {
    id: "financial-tower",
    category: "Financial Infrastructure",
    title: "Core Financial Tower Cyber-Physical Mesh",
    location: "Columbus, OH",
    description: "Zero-trust access integration for data vault floors with sub-second AI facial recognition and emergency lockdown automation.",
    metrics: ["0 Breach Security Index", "<0.2s Unlock Latency", "SOC-2 Type II"],
    hardware: "36x Vision Access Terminals, Encrypted BLE Backhaul, 1U Edge Rack",
  },
  {
    id: "freight-hub",
    category: "Logistics & Transport",
    title: "Automated Freight Hub Surveillance",
    location: "Midwest Region",
    description: "Automated license plate, vehicle ID, and cargo bay monitoring system managing 2,400 daily vehicle ingresses with zero manual oversight.",
    metrics: ["2,400 Vehicles/Day Monitored", "99.8% OCR Accuracy", "100% Automated Gate"],
    hardware: "16x LPR High-Speed Nodes, Acoustic Intrusion Arrays, Barrier Controllers",
  },
  {
    id: "medical-center",
    category: "Healthcare Infrastructure",
    title: "Metro Health Data Vault & Pharmacy Mesh",
    location: "Cleveland, OH",
    description: "Biometric audit tracking and air-gapped camera surveillance for narcotic storage vaults and high-density ICU access doors.",
    metrics: ["HIPAA Compliant", "Audit Trail Immutable", "Dual-Token Access"],
    hardware: "24x Biometric Readers, 18x Air-Gapped Cameras, Interlock Controls",
  },
  {
    id: "power-substation",
    category: "Critical Utilities",
    title: "Regional Electric Grid Substation Grid",
    location: "Central Ohio",
    description: "Autonomous thermal drone perimeter monitoring and microwave barrier mesh protecting high-voltage transformer arrays.",
    metrics: ["2.5 km Perimeter Protected", "Solar Power Backhaul", "IP-68 Hardened"],
    hardware: "14x Long-Range Thermal Nodes, Sub-GHz RF Mesh, Solar Battery Storage",
  },
  {
    id: "data-center",
    category: "Financial Infrastructure",
    title: "Tier-4 Hyper-Scale Data Center Zero-Trust",
    location: "Columbus Suburbs",
    description: "Multi-factor mantrap access control with real-time tailgating detection for 20,000 server racks across 3 buildings.",
    metrics: ["0 Tailgating Incidents", "Sub-Second Face Auth", "ISO 27001 Certified"],
    hardware: "64x Depth-Camera Access Nodes, Mantrap Interlocks, Central Dispatch Relay",
  },
]

export function ProjectsPage() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All"
    ? projectsList
    : projectsList.filter((p) => p.category === filter)

  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Proven Deployments</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
            Case Studies & <span className="text-primary">Projects</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Explore how enterprise facilities, defense manufacturers, and financial hubs use AXION NODES hardware to eliminate breach risks.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border/60 pb-4">
          {["All", "Aerospace & Defense", "Financial Infrastructure", "Logistics & Transport", "Healthcare Infrastructure", "Critical Utilities"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-secondary/30 border border-border/60 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-colors"
            >
              <div className="p-8">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="text-primary font-semibold">{project.category}</span>
                  <span className="font-mono">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-foreground/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-8 pb-6 pt-4 border-t border-border/40 bg-secondary/20">
                <p className="text-[11px] text-muted-foreground/80 font-mono mb-2">HARDWARE SPEC</p>
                <p className="text-xs text-foreground/80 font-mono leading-tight mb-4">{project.hardware}</p>
                <Link
                  to="/contacts"
                  className="text-xs text-primary font-bold uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Request Similar System <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-secondary/60 to-primary/10 border border-primary/30 p-10 rounded-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold uppercase mb-2">Require Custom Engineering for Your Site?</h3>
            <p className="text-muted-foreground text-sm max-w-xl">
              Our engineering team conducts physical site walkthroughs and RF spectrum surveys for complex facilities.
            </p>
          </div>
          <Link
            to="/contacts"
            className="bg-primary text-primary-foreground font-bold px-8 py-4 text-sm uppercase tracking-wider rounded hover:brightness-110 transition-all shrink-0"
          >
            Schedule Site Audit
          </Link>
        </div>
      </div>
    </div>
  )
}
