import React from "react"
import { ShieldCheck, Zap, MessageSquare, CheckCircle2 } from "lucide-react"
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

export function AboutPage() {
  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Our Mission & Standards</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
              About <span className="text-primary">AXIOM SOLUTIONS</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              AXIOM SOLUTIONS was built by Minecraft server developers and system administrators tired of overpriced hosting providers offering oversold CPUs and slow customer support.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <ScrollReveal direction="left">
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-foreground">
                Built by Gamers, Built for Performance
              </h2>
              <p>
                We believe every Minecraft community owner — whether running a small survival server with friends or a massive SMP network — deserves ultra-fast hardware at fair, transparent pricing.
              </p>
              <p>
                By utilizing top-frequency Intel i9 processors, NVMe SSD arrays, and optimized Pterodactyl control panels, AXIOM SOLUTIONS ensures stable 20 TPS even under heavy player loads and modpacks.
              </p>
              <p>
                Our 24/7 Discord support team assists you directly with plugin errors, Paper/Purpur configuration tuning, and backup restores.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-secondary/30 border border-border/80 p-8 rounded-xl space-y-6">
              <h3 className="text-xl font-bold uppercase text-foreground border-b border-border/60 pb-4">
                The AXIOM Advantage
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Instant Automated Deployment", desc: "Your server credentials arrive automatically within seconds of ordering." },
                  { icon: ShieldCheck, title: "99.99% Uptime Guarantee", desc: "Backed by enterprise hardware redundancy and DDoS protection." },
                  { icon: MessageSquare, title: "24/7 Discord Support", desc: "Direct assistance from experienced Minecraft server admins." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 text-primary rounded shrink-0 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { val: "14", label: "Tailored Server Plans", delay: 0 },
            { val: "5.8 GHz", label: "Intel i9 Turbo Speed", delay: 100 },
            { val: "99.99%", label: "Uptime SLA Guarantee", delay: 200 },
            { val: "₹20", label: "Starting Price / Month", delay: 300 },
          ].map(({ val, label, delay }) => (
            <ScrollReveal key={label} delay={delay}>
              <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg text-center">
                <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">{val}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">{label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
