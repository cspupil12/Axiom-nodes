import React from "react"
import { ShieldCheck, Award, Zap, MessageSquare, CheckCircle2 } from "lucide-react"

const DISCORD_BUY_URL = "https://discord.gg/T6kZGrsHG4"

export function AboutPage() {
  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Our Mission & Standards</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
            About <span className="text-primary">AXIOM SOLUTIONS</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            AXIOM SOLUTIONS was built by Minecraft server developers and system administrators tired of overpriced hosting providers offering oversold CPUs and slow customer support.
          </p>
        </div>

        {/* Mission Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
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

          <div className="bg-secondary/30 border border-border/80 p-8 rounded-xl space-y-6">
            <h3 className="text-xl font-bold uppercase text-foreground border-b border-border/60 pb-4">
              The AXIOM Advantage
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 text-primary rounded shrink-0 mt-1">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Instant Automated Deployment</h4>
                  <p className="text-xs text-muted-foreground mt-1">Your server credentials arrive automatically within seconds of ordering.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 text-primary rounded shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">99.99% Uptime Guarantee</h4>
                  <p className="text-xs text-muted-foreground mt-1">Backed by enterprise hardware redundancy and DDoS protection.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 text-primary rounded shrink-0 mt-1">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">24/7 Discord Support</h4>
                  <p className="text-xs text-muted-foreground mt-1">Direct assistance from experienced Minecraft server admins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg text-center">
            <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">14</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">Tailored Server Plans</span>
          </div>
          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg text-center">
            <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">5.8 GHz</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">Intel i9 Turbo Speed</span>
          </div>
          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg text-center">
            <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">99.99%</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">Uptime SLA Guarantee</span>
          </div>
          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg text-center">
            <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">₹20</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">Starting Price / Month</span>
          </div>
        </div>
      </div>
    </div>
  )
}
