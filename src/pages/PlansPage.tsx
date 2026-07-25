import React, { useState } from "react"
import { Zap, Cpu, HardDrive, Shield, MessageSquare, Check, Sparkles, Flame, ShieldAlert, Server } from "lucide-react"

const DISCORD_BUY_URL = "https://discord.gg/T6kZGrsHG4"

const standardPlans = [
  {
    name: "Fire Plan",
    ram: "2GB",
    cpu: "50%",
    storage: "8GB NVMe SSD",
    backups: "1x Backup",
    databases: "—",
    ports: "—",
    splitters: "—",
    price: "₹20",
    badge: "Budget",
  },
  {
    name: "Mace Plan",
    ram: "4GB",
    cpu: "100%",
    storage: "15GB SSD",
    backups: "1x Backup",
    databases: "1x Database",
    ports: "—",
    splitters: "—",
    price: "₹40",
    badge: "Starter",
  },
  {
    name: "Axe Plan",
    ram: "8GB",
    cpu: "150%",
    storage: "30GB SSD",
    backups: "1x Backup",
    databases: "1x Database",
    ports: "—",
    splitters: "—",
    price: "₹80",
    badge: "Popular",
  },
  {
    name: "Hammer Plan",
    ram: "12GB",
    cpu: "250%",
    storage: "40GB SSD",
    backups: "1x Backup",
    databases: "1x Database",
    ports: "—",
    splitters: "—",
    price: "₹120",
    badge: "Value",
  },
  {
    name: "Aura Plan",
    ram: "16GB",
    cpu: "300%",
    storage: "50GB SSD",
    backups: "2x Backup",
    databases: "2x Database",
    ports: "—",
    splitters: "—",
    price: "₹160",
    badge: "Community",
  },
  {
    name: "Bow Plan",
    ram: "32GB",
    cpu: "450%",
    storage: "60GB SSD",
    backups: "2x Backup",
    databases: "2x Database",
    ports: "—",
    splitters: "—",
    price: "₹280",
    badge: "Pro",
  },
  {
    name: "Lapis Plan",
    ram: "48GB",
    cpu: "550%",
    storage: "70GB SSD",
    backups: "2x Backup",
    databases: "2x Database",
    ports: "—",
    splitters: "—",
    price: "₹560",
    badge: "Mega",
  },
]

const premiumPlans = [
  {
    name: "Obsidian Plan",
    ram: "4GB",
    cpu: "100% i9",
    storage: "20GB SSD",
    backups: "2x Backup",
    databases: "2x Database",
    ports: "1x Additional Port",
    splitters: "1x Splitter",
    price: "₹60",
    badge: "Intel i9",
  },
  {
    name: "Warrior Plan",
    ram: "8GB",
    cpu: "150% i9",
    storage: "30GB SSD",
    backups: "2x Backup",
    databases: "2x Database",
    ports: "1x Additional Port",
    splitters: "1x Splitter",
    price: "₹120",
    badge: "Intel i9",
  },
  {
    name: "Diamond Plan",
    ram: "12GB",
    cpu: "250% i9",
    storage: "40GB SSD",
    backups: "2x Backup",
    databases: "2x Database",
    ports: "1x Additional Port",
    splitters: "1x Splitter",
    price: "₹250",
    badge: "Intel i9",
  },
  {
    name: "Creeper Plan",
    ram: "16GB",
    cpu: "300% i9",
    storage: "50GB SSD",
    backups: "3x Backup",
    databases: "3x Database",
    ports: "1x Additional Port",
    splitters: "1x Splitter",
    price: "₹510",
    badge: "Intel i9",
  },
  {
    name: "Emerald Plan",
    ram: "32GB",
    cpu: "450% i9",
    storage: "60GB SSD",
    backups: "3x Backup",
    databases: "3x Database",
    ports: "1x Additional Port",
    splitters: "1x Splitter",
    price: "₹1,100",
    badge: "Intel i9 High Performance",
  },
  {
    name: "Bedrock Plan",
    ram: "48GB",
    cpu: "600% i9",
    storage: "70GB SSD",
    backups: "3x Backup",
    databases: "3x Database",
    ports: "1x Additional Port",
    splitters: "1x Splitter",
    price: "₹2,400",
    badge: "Extreme i9",
  },
  {
    name: "Beast Plan",
    ram: "64GB",
    cpu: "800% i9",
    storage: "100GB NVMe SSD",
    backups: "5x Backup",
    databases: "5x Database",
    ports: "2x Additional Port",
    splitters: "2x Splitter",
    price: "₹5,000",
    badge: "Ultimate Beast i9",
  },
]

export function PlansPage() {
  const [tab, setTab] = useState<"standard" | "premium">("standard")

  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Deploy A Server Now</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
            Minecraft <span className="text-primary">Server Plans</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            All plans include 99.99% Uptime Guarantee, 24/7 Support, DDoS Protection, and instant automated setup upon order.
          </p>
        </div>

        {/* Tab Toggle Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12 border-b border-border/60 pb-6">
          <button
            onClick={() => setTab("standard")}
            className={`px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              tab === "standard"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            <Flame className="w-4 h-4 text-orange-400" /> Standard Plans (7 Plans)
          </button>
          <button
            onClick={() => setTab("premium")}
            className={`px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              tab === "premium"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            <Cpu className="w-4 h-4 text-cyan-400" /> Intel i9 Premium Plans (7 Plans)
          </button>
        </div>

        {/* Processor Badge Notice */}
        {tab === "premium" && (
          <div className="bg-gradient-to-r from-cyan-950/60 via-secondary/60 to-primary/20 border border-primary/40 rounded-lg p-6 mb-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="text-sm font-bold uppercase text-foreground">Processor: Intel i9 Ultra High-Clock Hardware</h4>
                <p className="text-xs text-muted-foreground">Includes additional network ports, server splitters, and increased backup slots.</p>
              </div>
            </div>
            <span className="text-xs font-mono text-primary font-bold uppercase border border-primary/50 px-3 py-1 rounded hidden sm:inline-block">
              i9 Extreme Performance
            </span>
          </div>
        )}

        {/* Standard Plans Grid */}
        {tab === "standard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {standardPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-secondary/40 border border-border/70 rounded-xl p-6 flex flex-col justify-between hover:border-primary/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase text-primary font-bold px-2 py-0.5 rounded bg-primary/10">
                      {plan.badge}
                    </span>
                    <Sparkles className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary font-mono mb-6">
                    {plan.price} <span className="text-xs text-muted-foreground font-sans">/month</span>
                  </div>

                  <div className="space-y-2.5 text-xs font-mono text-muted-foreground mb-8 border-t border-border/50 pt-4">
                    <div className="flex justify-between">
                      <span>RAM:</span>
                      <span className="text-foreground font-semibold">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span className="text-foreground font-semibold">{plan.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage:</span>
                      <span className="text-foreground font-semibold">{plan.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Backups:</span>
                      <span className="text-foreground font-semibold">{plan.backups}</span>
                    </div>
                    {plan.databases !== "—" && (
                      <div className="flex justify-between">
                        <span>Databases:</span>
                        <span className="text-foreground font-semibold">{plan.databases}</span>
                      </div>
                    )}
                  </div>
                </div>

                <a
                  href={DISCORD_BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-primary-foreground font-bold py-3 rounded text-xs uppercase tracking-wider text-center block hover:brightness-110 active:scale-[0.98] transition-all shadow-md"
                >
                  BUY NOW ON DISCORD
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Premium Intel i9 Plans Grid */}
        {tab === "premium" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {premiumPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-secondary/60 border border-primary/40 rounded-xl p-6 flex flex-col justify-between hover:border-primary transition-all relative overflow-hidden group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase text-primary font-bold px-2 py-0.5 rounded bg-primary/20">
                      {plan.badge}
                    </span>
                    <Cpu className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary font-mono mb-6">
                    {plan.price} <span className="text-xs text-muted-foreground font-sans">/month</span>
                  </div>

                  <div className="space-y-2.5 text-xs font-mono text-muted-foreground mb-8 border-t border-border/50 pt-4">
                    <div className="flex justify-between">
                      <span>RAM:</span>
                      <span className="text-foreground font-semibold">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span className="text-foreground font-semibold">{plan.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage:</span>
                      <span className="text-foreground font-semibold">{plan.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Backups:</span>
                      <span className="text-foreground font-semibold">{plan.backups}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Databases:</span>
                      <span className="text-foreground font-semibold">{plan.databases}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Port:</span>
                      <span className="text-primary font-semibold">{plan.ports}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Splitter:</span>
                      <span className="text-primary font-semibold">{plan.splitters}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={DISCORD_BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-primary-foreground font-bold py-3 rounded text-xs uppercase tracking-wider text-center block hover:brightness-110 active:scale-[0.98] transition-all shadow-md"
                >
                  BUY NOW ON DISCORD
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Guarantee Banner */}
        <div className="bg-secondary/30 border border-border/80 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl font-bold uppercase">All Server Plans Feature:</h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5 text-foreground"><Check className="w-4 h-4 text-primary" /> 99.99% Uptime Guarantee</span>
              <span className="flex items-center gap-1.5 text-foreground"><Check className="w-4 h-4 text-primary" /> 24/7 Discord Support</span>
              <span className="flex items-center gap-1.5 text-foreground"><Check className="w-4 h-4 text-primary" /> Instant Node Deployment</span>
            </div>
          </div>

          <a
            href={DISCORD_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-bold px-8 py-3.5 text-xs uppercase tracking-wider rounded hover:brightness-110 shrink-0 inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> ORDER NOW ON DISCORD
          </a>
        </div>
      </div>
    </div>
  )
}
