import React from "react"
import { Link } from "react-router-dom"
import { Cpu, Zap, HardDrive, Shield, MessageSquare, ArrowRight, CheckCircle2, Server, Flame, ShieldAlert, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const DISCORD_INVITE_URL = "https://discord.gg/T6kZGrsHG4"

function ScrollReveal({ children, className = "", direction = "up", delay = 0 }: {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right"
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  const baseClass = direction === "up" ? "scroll-hidden" : direction === "left" ? "scroll-hidden-left" : "scroll-hidden-right"
  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? "scroll-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function HomePage() {
  return (
    <div className="relative z-10">
      {/* HERO SECTION (full-screen, content at bottom-left) */}
      <section className="relative min-h-screen flex items-end overflow-hidden pb-12">
        <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
          <h1
            className="opacity-0 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase"
            style={{ animationDelay: "0.2s" }}
          >
            AXIOM<span className="text-primary"> SOLUTIONS</span>
          </h1>
          <p
            className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6"
            style={{ animationDelay: "0.4s" }}
          >
            Ultra-Fast Minecraft Server Hosting.
          </p>
          <p
            className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8"
            style={{ animationDelay: "0.55s" }}
          >
            Enterprise-grade Minecraft nodes running on Intel i9 processors. Instant deployment, zero lag spikes, DDoS protection, and 99.99% uptime guarantee for your gaming community.
          </p>
          <div
            className="opacity-0 animate-fade-up flex flex-wrap gap-3 font-bold"
            style={{ animationDelay: "0.7s" }}
          >
            <Link
              to="/plans"
              className="pointer-events-auto bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] inline-flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Zap className="w-4 h-4" /> Deploy a Server Now
            </Link>
            <Link
              to="/plans"
              className="pointer-events-auto bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] inline-block"
            >
              View All Plans
            </Link>
          </div>
          <p
            className="opacity-0 animate-fade-up text-muted-foreground/60 text-xs font-light mt-4 md:mt-6"
            style={{ animationDelay: "0.85s" }}
          >
            Trusted Minecraft host. 99.99% Uptime Guarantee. 24/7 Support.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section id="home-overview" className="py-24 px-6 md:px-12 lg:px-16 border-t border-border/40 bg-hero-bg/85 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">

          {/* Telemetry Status Bar */}
          <ScrollReveal>
            <div className="bg-secondary/40 border border-primary/20 rounded-lg p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary">Node Network Status</span>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 text-xs font-mono text-muted-foreground">
                <div>Processor: <span className="text-foreground font-semibold">Intel i9 Ultra</span></div>
                <div>Uptime: <span className="text-foreground font-semibold">99.99%</span></div>
                <div>Network: <span className="text-foreground font-semibold">10 Gbps Anti-DDoS</span></div>
                <div>Support: <span className="text-foreground font-semibold">24/7 Discord Ticket</span></div>
              </div>
            </div>
          </ScrollReveal>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">High Performance Hardware</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6 leading-tight">
                  Built for Modpacks, SMPs, & Competitive Servers
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Don't let TPS drops ruin your players' experience. AXIOM SOLUTIONS runs on top-tier Intel i9 processors paired with NVMe SSDs and unmetered DDoS mitigation to guarantee flawless 20 TPS performance.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/90 font-medium">Instant automated server deployment upon purchase</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/90 font-medium">Full SFTP, MySQL Database & Backup support included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/90 font-medium">Support for Paper, Purpur, Fabric, Forge, Modpacks & Bedrock</span>
                  </div>
                </div>
                <Link
                  to="/plans"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Browse All 14 Server Plans <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Cpu, title: "Intel i9 CPUs", desc: "High single-thread clock speeds engineered for heavy Minecraft entity processing.", delay: 0 },
                { icon: HardDrive, title: "NVMe SSD Storage", desc: "Ultra-fast world loading and zero chunk generation stuttering.", delay: 100 },
                { icon: ShieldAlert, title: "DDoS Protection", desc: "Always-on Layer 4 and Layer 7 filtration shielding your server from attacks.", delay: 200 },
                { icon: MessageSquare, title: "24/7 Discord Support", desc: "Direct assistance with server setups, plugin errors, and optimizations.", delay: 300 },
              ].map(({ icon: Icon, title, desc, delay }) => (
                <ScrollReveal key={title} direction="right" delay={delay}>
                  <div className="bg-secondary/40 border border-border/60 p-6 rounded-lg h-full">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Quick Pricing Teaser */}
          <div className="mb-16">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-1">Budget to High-End</span>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase">Popular Server Plans</h3>
                </div>
                <Link to="/plans" className="text-xs font-bold text-primary uppercase tracking-wider hover:underline">
                  See All 14 Plans →
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Budget Tier", icon: Flame, iconColor: "text-orange-500", name: "Fire Plan", price: "₹20", specs: ["2GB RAM", "50% CPU", "8GB NVMe SSD", "1x Backup"], delay: 0 },
                { label: "Starter Tier", icon: Sparkles, iconColor: "text-primary", name: "Mace Plan", price: "₹40", specs: ["4GB RAM", "100% CPU", "15GB SSD", "1x Backup | 1x DB"], delay: 100 },
                { label: "Popular", icon: Zap, iconColor: "text-yellow-400", name: "Axe Plan", price: "₹80", specs: ["8GB RAM", "150% CPU", "30GB SSD", "1x Backup | 1x DB"], delay: 200 },
                { label: "i9 Extreme", icon: Cpu, iconColor: "text-primary", name: "Obsidian Plan", price: "₹60", specs: ["4GB RAM | 100% i9 CPU", "20GB SSD", "2x Backup | 2x DB", "1x Add. Port | 1x Splitter"], delay: 300, featured: true },
              ].map(({ label, icon: Icon, iconColor, name, price, specs, delay, featured }) => (
                <ScrollReveal key={name} delay={delay}>
                  <div className={`${featured ? "bg-secondary/60 border-primary/40" : "bg-secondary/40 border-border/60"} border p-6 rounded-lg flex flex-col justify-between hover:border-primary/50 transition-colors h-full relative overflow-hidden`}>
                    {featured && (
                      <div className="absolute -right-8 top-3 bg-primary text-primary-foreground font-mono text-[10px] uppercase font-bold py-0.5 px-8 rotate-45">
                        Intel i9
                      </div>
                    )}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono uppercase text-primary">{label}</span>
                        <Icon className={`w-5 h-5 ${iconColor}`} />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{name}</h4>
                      <div className="text-2xl font-bold text-primary mb-4 font-mono">{price} <span className="text-xs text-muted-foreground">/month</span></div>
                      <ul className="space-y-2 text-xs text-muted-foreground mb-6 font-mono">
                        {specs.map(s => <li key={s}>• {s}</li>)}
                      </ul>
                    </div>
                    <a
                      href={DISCORD_INVITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary text-primary-foreground font-bold py-2.5 rounded text-xs uppercase tracking-wider text-center block hover:brightness-110"
                    >
                      Buy Now
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Discord CTA Banner */}
          <ScrollReveal>
            <div className="bg-gradient-to-r from-secondary/60 to-primary/10 border border-primary/30 p-10 rounded-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Deploy Your Server on Discord Now</h3>
                <p className="text-muted-foreground text-sm max-w-xl">
                  Get instant 1-on-1 setup assistance, custom plan upgrades, and instant ticket processing on our Discord server.
                </p>
              </div>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground font-bold px-8 py-4 text-sm uppercase tracking-wider rounded hover:brightness-110 transition-all shrink-0 inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> JOIN DISCORD SERVER
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
