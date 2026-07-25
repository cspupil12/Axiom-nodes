import React from "react"
import { Link } from "react-router-dom"
import { Cpu, Zap, HardDrive, Shield, MessageSquare, ArrowRight, CheckCircle2, Server, Flame, ShieldAlert, Sparkles } from "lucide-react"

const DISCORD_INVITE_URL = "https://discord.gg/T6kZGrsHG4"

export function HomePage() {
  return (
    <div className="relative z-10">
      {/* HERO SECTION (full-screen, content at bottom-left) */}
      <section className="relative min-h-screen flex items-end overflow-hidden pb-12">
        {/* Hero Content Container */}
        <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
          {/* Heading (delay 0.2s) */}
          <h1
            className="opacity-0 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase"
            style={{ animationDelay: "0.2s" }}
          >
            AXIOM<span className="text-primary"> SOLUTIONS</span>
          </h1>

          {/* Subheading (delay 0.4s) */}
          <p
            className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6"
            style={{ animationDelay: "0.4s" }}
          >
            Ultra-Fast Minecraft Server Hosting.
          </p>

          {/* Description (delay 0.55s) */}
          <p
            className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8"
            style={{ animationDelay: "0.55s" }}
          >
            Enterprise-grade Minecraft nodes running on Intel i9 processors. Instant deployment, zero lag spikes, DDoS protection, and 99.99% uptime guarantee for your gaming community.
          </p>

          {/* Two CTA buttons (delay 0.7s) */}
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

          {/* Trust Line (delay 0.85s) */}
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-secondary/40 border border-border/60 p-6 rounded-lg">
                <Cpu className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Intel i9 CPUs</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High single-thread clock speeds engineered for heavy Minecraft entity processing.
                </p>
              </div>

              <div className="bg-secondary/40 border border-border/60 p-6 rounded-lg">
                <HardDrive className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">NVMe SSD Storage</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ultra-fast world loading and zero chunk generation stuttering.
                </p>
              </div>

              <div className="bg-secondary/40 border border-border/60 p-6 rounded-lg">
                <ShieldAlert className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">DDoS Protection</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Always-on Layer 4 and Layer 7 filtration shielding your server from attacks.
                </p>
              </div>

              <div className="bg-secondary/40 border border-border/60 p-6 rounded-lg">
                <MessageSquare className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">24/7 Discord Support</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Direct assistance with server setups, plugin errors, and optimizations.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Pricing Teaser Cards */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-1">Budget to High-End</span>
                <h3 className="text-2xl md:text-4xl font-bold uppercase">Popular Server Plans</h3>
              </div>
              <Link to="/plans" className="text-xs font-bold text-primary uppercase tracking-wider hover:underline">
                See All 14 Plans →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Fire Plan */}
              <div className="bg-secondary/40 border border-border/60 p-6 rounded-lg flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-primary">Budget Tier</span>
                    <Flame className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Fire Plan</h4>
                  <div className="text-2xl font-bold text-primary mb-4 font-mono">₹20 <span className="text-xs text-muted-foreground">/month</span></div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-6 font-mono">
                    <li>• 2GB RAM</li>
                    <li>• 50% CPU</li>
                    <li>• 8GB NVMe SSD</li>
                    <li>• 1x Backup</li>
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

              {/* Mace Plan */}
              <div className="bg-secondary/40 border border-border/60 p-6 rounded-lg flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-primary">Starter Tier</span>
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Mace Plan</h4>
                  <div className="text-2xl font-bold text-primary mb-4 font-mono">₹40 <span className="text-xs text-muted-foreground">/month</span></div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-6 font-mono">
                    <li>• 4GB RAM</li>
                    <li>• 100% CPU</li>
                    <li>• 15GB SSD</li>
                    <li>• 1x Backup | 1x DB</li>
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

              {/* Axe Plan */}
              <div className="bg-secondary/40 border border-border/60 p-6 rounded-lg flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-primary">Popular</span>
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Axe Plan</h4>
                  <div className="text-2xl font-bold text-primary mb-4 font-mono">₹80 <span className="text-xs text-muted-foreground">/month</span></div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-6 font-mono">
                    <li>• 8GB RAM</li>
                    <li>• 150% CPU</li>
                    <li>• 30GB SSD</li>
                    <li>• 1x Backup | 1x DB</li>
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

              {/* Obsidian Plan (i9) */}
              <div className="bg-secondary/60 border border-primary/40 p-6 rounded-lg flex flex-col justify-between hover:border-primary transition-colors relative overflow-hidden">
                <div className="absolute -right-8 top-3 bg-primary text-primary-foreground font-mono text-[10px] uppercase font-bold py-0.5 px-8 rotate-45">
                  Intel i9
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-primary font-bold">i9 Extreme</span>
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Obsidian Plan</h4>
                  <div className="text-2xl font-bold text-primary mb-4 font-mono">₹60 <span className="text-xs text-muted-foreground">/month</span></div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-6 font-mono">
                    <li>• 4GB RAM | 100% i9 CPU</li>
                    <li>• 20GB SSD</li>
                    <li>• 2x Backup | 2x DB</li>
                    <li>• 1x Add. Port | 1x Splitter</li>
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
            </div>
          </div>

          {/* Discord CTA Banner */}
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
        </div>
      </section>
    </div>
  )
}
