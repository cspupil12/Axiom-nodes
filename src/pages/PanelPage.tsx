import React from "react"
import { ShieldAlert, ExternalLink, UserPlus, MessageSquare, AlertTriangle, CheckCircle2, Lock, Server } from "lucide-react"

const PANEL_URL = "https://panel.axiomsolution.site/"
const DISCORD_URL = "https://discord.gg/T6kZGrsHG4"

export function PanelPage() {
  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Server Management</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
            Game <span className="text-primary">Panel</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            AXIOM SOLUTIONS uses the <strong className="text-foreground">Pterodactyl Panel</strong> to manage your Minecraft server. Register a free account before ordering — our staff will set up your server directly in your account.
          </p>
        </div>

        {/* ⚠️ SECURITY WARNING BANNER */}
        <div className="bg-red-950/60 border border-red-500/60 rounded-xl p-6 mb-10 flex items-start gap-4 shadow-lg shadow-red-950/40">
          <ShieldAlert className="w-8 h-8 text-red-400 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-red-400 font-bold text-lg uppercase mb-2 tracking-wide">
              ⚠️ Security Warning
            </h2>
            <p className="text-red-200 text-sm leading-relaxed">
              <strong>AXIOM SOLUTIONS staff will NEVER ask for your panel account password.</strong> If anyone claiming to be our staff asks for your password via Discord or any other platform, it is a <strong>scam</strong>. Please report it immediately in our Discord server.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-red-300">
              <Lock className="w-4 h-4" />
              <span>Your password is private. Never share it with anyone — including our team.</span>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="bg-secondary/40 border border-border/60 rounded-xl p-8 mb-10">
          <h2 className="text-xl font-bold uppercase mb-6 text-foreground">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-bold text-lg">1</div>
              <h3 className="font-bold text-foreground">Register a Free Account</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click the button below and create your free Pterodactyl panel account on <span className="text-primary font-mono">panel.axiomsolution.site</span>.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-bold text-lg">2</div>
              <h3 className="font-bold text-foreground">Order on Discord</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Join our Discord and open a support ticket to place your order. Share your <strong className="text-foreground">panel email</strong> (NOT your password) so we can assign your server.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-bold text-lg">3</div>
              <h3 className="font-bold text-foreground">Get Your Server</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our staff deploys your Minecraft server in your panel account. Log in and start your server instantly!
              </p>
            </div>
          </div>
        </div>

        {/* REGISTER PANEL CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Panel Register Card */}
          <div className="bg-secondary/60 border border-primary/40 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <UserPlus className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold uppercase">Step 1: Register</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Create your <strong className="text-foreground">free Pterodactyl panel account</strong> at AXIOM SOLUTIONS. This is required before you can order any server plan.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Free account, no credit card required
                </li>
                <li className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Manage your server 24/7 from panel
                </li>
                <li className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Full console, file manager & backups
                </li>
                <li className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Instant server start/stop controls
                </li>
              </ul>
            </div>
            <a
              href={PANEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-primary-foreground font-bold py-4 rounded text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              <UserPlus className="w-5 h-5" /> Register on Panel
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Already Registered? Login Card */}
          <div className="bg-secondary/30 border border-border/60 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold uppercase">Already Registered?</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                If you already have a panel account, log in to manage your Minecraft servers, view console logs, upload files, and manage backups.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Start/stop/restart your server anytime
                </li>
                <li className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Upload plugins & world files via SFTP
                </li>
                <li className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> View server logs in real-time console
                </li>
                <li className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Create & restore server backups
                </li>
              </ul>
            </div>
            <a
              href={PANEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-secondary border border-border hover:border-primary/60 text-foreground font-bold py-4 rounded text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-secondary/80 transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Login to Panel
            </a>
          </div>
        </div>

        {/* AFTER REGISTERING - ORDER ON DISCORD */}
        <div className="bg-gradient-to-r from-secondary/60 to-primary/10 border border-primary/30 p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <h3 className="text-2xl font-bold uppercase mb-2">Step 2: Order Your Server</h3>
            <p className="text-muted-foreground text-sm max-w-xl">
              After registering on the panel, join our Discord and open a ticket. Share your <strong className="text-foreground">panel account email</strong> and the plan you want — our staff will deploy your server within minutes.
            </p>
          </div>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-bold px-8 py-4 text-sm uppercase tracking-wider rounded hover:brightness-110 transition-all shrink-0 inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Order on Discord
          </a>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-950/40 border border-yellow-600/40 rounded-xl p-6 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-yellow-400 font-bold text-sm uppercase mb-2">Important — Share Email, Not Password</h4>
            <p className="text-yellow-200/80 text-sm leading-relaxed">
              When placing an order on Discord, our staff will ask for your <strong className="text-yellow-100">panel account email address</strong> so we can assign the server to your account. <strong className="text-yellow-100">Never share your password.</strong> We only need your email to link the server to your account.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
