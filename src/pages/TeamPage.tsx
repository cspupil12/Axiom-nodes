import React from "react"
import { CheckCircle2, MessageSquare } from "lucide-react"
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

const teamMembers = [
  {
    initials: "SR",
    name: "Stanislav R.",
    role: "Lead Systems Administrator",
    bio: "Linux kernel & Pterodactyl panel specialist; manages physical node deployments and Intel i9 hardware provisioning.",
    credentials: ["10+ Yrs Linux SysAdmin", "Intel i9 Kernel Tuning", "DDoS Mitigation Specialist"],
  },
  {
    initials: "EV",
    name: "Elena Vance",
    role: "Network Security & Anti-DDoS Lead",
    bio: "Engineers custom Layer 4 / Layer 7 UDP scrubbing filters protecting Minecraft game servers from bot floods.",
    credentials: ["L7 Anti-DDoS Architect", "10Gbps Network Scrubbing", "BGP Routing Specialist"],
  },
  {
    initials: "MK",
    name: "Marcus K.",
    role: "Plugin & Performance Engineer",
    bio: "Paper, Purpur, and Spark profiler expert; helps clients diagnose TPS drops, entity lag, and chunk generation bottlenecks.",
    credentials: ["Paper/Purpur Profiler Expert", "Modpack Optimization", "MySQL Tuning"],
  },
  {
    initials: "TC",
    name: "Tanya Chen",
    role: "Head of Support & Community",
    bio: "Manages our 24/7 Discord support ticket system, ensuring fast response times for server setup and order inquiries.",
    credentials: ["24/7 Support Lead", "Instant Ticket Processing", "Community Operations"],
  },
]

export function TeamPage() {
  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Support & Operations</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
              Staff & <span className="text-primary">Team</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              AXIOM SOLUTIONS is built by veteran Minecraft system administrators, network security engineers, and modpack profiler experts keeping your servers online with 20 TPS performance.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={member.name} delay={idx * 100}>
              <div className="bg-secondary/30 border border-border/60 p-8 rounded-xl flex flex-col justify-between group hover:border-primary/50 transition-colors h-full">
                <div>
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/40 mb-6 flex items-center justify-center text-primary text-2xl font-bold group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>
                </div>

                <div className="border-t border-border/40 pt-4 space-y-2">
                  {member.credentials.map((cred, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Join Discord Banner */}
        <ScrollReveal>
          <div className="bg-secondary/40 border border-border/80 p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-2">Need Technical Help or Custom Setup?</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Our team is active 24/7 on Discord to help you select a plan, migrate worlds, or troubleshoot plugins.
              </p>
            </div>
            <a
              href={DISCORD_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-bold px-8 py-4 text-sm uppercase tracking-wider rounded inline-flex items-center gap-2 hover:brightness-110 shrink-0"
            >
              <MessageSquare className="w-4 h-4" /> Open Support Ticket
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
