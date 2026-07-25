import React, { useState } from "react"
import { ShieldCheck, MessageSquare, Send, CheckCircle2, Zap, Clock, Cpu } from "lucide-react"

const DISCORD_BUY_URL = "https://discord.gg/T6kZGrsHG4"

export function ContactsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    discordTag: "",
    email: "",
    plan: "Axe Plan (8GB RAM - ₹80/mo)",
    serverType: "Paper / Purpur (Optimized)",
    playerSlots: "20 - 50 Players",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Order & Support</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
            Support & <span className="text-primary">Order Inquiry</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Need a custom server spec, bulk node allocation, or help choosing a plan? Submit an inquiry below or join our Discord channel for instant setup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-secondary/30 border border-border/80 p-8 rounded-xl space-y-6">
              <h3 className="text-xl font-bold uppercase text-foreground border-b border-border/60 pb-4">
                Instant Discord Ordering
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Click below to open our official Discord channel and buy any server plan directly with instant ticket support.
              </p>

              <a
                href={DISCORD_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-primary/20"
              >
                <MessageSquare className="w-5 h-5" /> BUY NOW ON DISCORD
              </a>

              <div className="pt-4 border-t border-border/60 space-y-3 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>99.99% Uptime SLA Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>24/7 Discord Ticket Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Instant Node Activation</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 border border-border/60 p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase font-bold">
                <Clock className="w-4 h-4" /> Instant Activation Guarantee
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Server credentials and Pterodactyl control panel logins are issued automatically upon payment confirmation.
              </p>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-secondary/40 border border-border/80 p-8 md:p-10 rounded-xl">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <ShieldCheck className="w-20 h-20 text-primary mx-auto" />
                  <h3 className="text-3xl font-bold uppercase">Order Inquiry Received</h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    Thank you, <span className="text-foreground font-semibold">{formData.name}</span>. Our team will contact your Discord <span className="text-primary font-semibold">({formData.discordTag || formData.email})</span> shortly to fulfill your <span className="text-foreground font-semibold">{formData.plan}</span> server order.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-secondary hover:bg-secondary/80 text-foreground px-8 py-3 rounded text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold uppercase border-b border-border/60 pb-4">
                    Custom Server Configurator & Inquiry
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Steve"
                        className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Discord Username / Tag *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.discordTag}
                        onChange={(e) => setFormData({ ...formData, discordTag: e.target.value })}
                        placeholder="username#0000"
                        className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Work / Personal Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@gmail.com"
                        className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Target Plan
                      </label>
                      <select
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
                      >
                        <option value="Fire Plan (2GB RAM - ₹20/mo)">Fire Plan (2GB RAM - ₹20/mo)</option>
                        <option value="Mace Plan (4GB RAM - ₹40/mo)">Mace Plan (4GB RAM - ₹40/mo)</option>
                        <option value="Axe Plan (8GB RAM - ₹80/mo)">Axe Plan (8GB RAM - ₹80/mo)</option>
                        <option value="Hammer Plan (12GB RAM - ₹120/mo)">Hammer Plan (12GB RAM - ₹120/mo)</option>
                        <option value="Aura Plan (16GB RAM - ₹160/mo)">Aura Plan (16GB RAM - ₹160/mo)</option>
                        <option value="Bow Plan (32GB RAM - ₹280/mo)">Bow Plan (32GB RAM - ₹280/mo)</option>
                        <option value="Lapis Plan (48GB RAM - ₹560/mo)">Lapis Plan (48GB RAM - ₹560/mo)</option>
                        <option value="Obsidian i9 (4GB RAM - ₹60/mo)">Obsidian i9 (4GB RAM - ₹60/mo)</option>
                        <option value="Warrior i9 (8GB RAM - ₹120/mo)">Warrior i9 (8GB RAM - ₹120/mo)</option>
                        <option value="Diamond i9 (12GB RAM - ₹250/mo)">Diamond i9 (12GB RAM - ₹250/mo)</option>
                        <option value="Creeper i9 (16GB RAM - ₹510/mo)">Creeper i9 (16GB RAM - ₹510/mo)</option>
                        <option value="Emerald i9 (32GB RAM - ₹1,100/mo)">Emerald i9 (32GB RAM - ₹1,100/mo)</option>
                        <option value="Bedrock i9 (48GB RAM - ₹2,400/mo)">Bedrock i9 (48GB RAM - ₹2,400/mo)</option>
                        <option value="Beast i9 (64GB RAM - ₹5,000/mo)">Beast i9 (64GB RAM - ₹5,000/mo)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Custom Requirements / Plugins
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify your server type (e.g. Paper 1.20, Forge Modpack, Bedrock Crossplay, Custom Plugins)..."
                      className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-bold py-4 rounded text-sm uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
