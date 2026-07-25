import React from "react"
import { Cpu, HardDrive, ShieldAlert, Server, Radio, Database, CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const DISCORD_BUY_URL = "https://discord.gg/T6kZGrsHG4"

function ScrollReveal({ children, className = "", direction = "up", delay = 0 }: {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right"
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  const baseClass = direction === "up" ? "scroll-hidden" : direction === "left" ? "scroll-hidden-left" : "scroll-hidden-right"
  return (
    <div ref={ref} className={`${baseClass} ${isVisible ? "scroll-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const specs = [
  { icon: Cpu, title: "Intel i9 Ultra Processors", tagline: "5.8 GHz Turbo Clock", desc: "Single-thread performance is king for Minecraft server tick loops. Our nodes feature Intel i9 processors clocked up to 5.8 GHz." },
  { icon: HardDrive, title: "Enterprise NVMe SSDs", tagline: "PCIe Gen4 7,000 MB/s", desc: "PCIe Gen4 NVMe SSDs delivering up to 7,000 MB/s read speeds to eliminate chunk loading stutter and disk I/O bottlenecks." },
  { icon: ShieldAlert, title: "Always-On DDoS Mitigation", tagline: "10Gbps+ Scrubbing Capacity", desc: "Custom-built Minecraft L7 mitigation filters UDP flood, SYN flood, and protocol exploit attacks automatically." },
  { icon: Radio, title: "Additional Ports & Splitters", tagline: "Included on i9 Premium Tiers", desc: "Support for VoiceChat plugins, dynmap ports, and BungeeCord / Velocity network splitters." },
  { icon: Database, title: "MySQL & Offsite Backups", tagline: "Automated Snapshot System", desc: "Free MySQL databases for LuckPerms, CoreProtect, and EssentialsX data, paired with automated offsite backup snapshots." },
  { icon: Server, title: "99.99% Guaranteed SLA", tagline: "Guaranteed Uptime SLA", desc: "Redundant power feeds, dual UPS battery backup, and multi-homed ISP backhauls ensure your server stays online 24/7." },
]

export function NodesPage() {
  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Hardware Infrastructure</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
              Nodes & <span className="text-primary">Hardware</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              AXIOM SOLUTIONS hosts Minecraft servers exclusively on high-frequency enterprise hardware to deliver maximum TPS and instant world generation.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {specs.map(({ icon: Icon, title, tagline, desc }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="bg-secondary/40 border border-border/60 p-8 rounded-xl h-full">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 uppercase">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                <span className="text-xs font-mono text-primary font-bold">{tagline}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Deploy Banner */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-secondary/60 to-primary/10 border border-primary/30 p-10 rounded-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-2">Ready to Host Your Minecraft World?</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Choose from 14 server plans starting from ₹20/month with instant activation.
              </p>
            </div>
            <a
              href={DISCORD_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-bold px-8 py-4 text-sm uppercase tracking-wider rounded hover:brightness-110 transition-all shrink-0"
            >
              BUY NOW ON DISCORD
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
