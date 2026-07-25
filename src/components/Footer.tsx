import { Link } from "react-router-dom"
import { Server, MessageSquare, Zap, Shield, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40 bg-hero-bg/90 backdrop-blur-md text-foreground py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="text-xl font-bold tracking-tight inline-block text-foreground">
            AXIOM<span className="text-primary"> SOLUTIONS</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            High-Performance Minecraft Server Hosting powered by Intel i9 processors, NVMe SSD storage arrays, sub-millisecond network latency, and 99.99% guaranteed uptime.
          </p>
          <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground/80 font-mono">
            <Shield className="w-4 h-4 text-primary" />
            <span>99.99% Uptime Guarantee • 24/7 Support</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/plans" className="text-foreground/80 hover:text-primary transition-colors">Server Plans</Link>
            </li>
            <li>
              <Link to="/panel" className="text-foreground/80 hover:text-primary transition-colors">Game Panel</Link>
            </li>
            <li>
              <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About AXIOM</Link>
            </li>
            <li>
              <Link to="/nodes" className="text-foreground/80 hover:text-primary transition-colors">Nodes & Hardware</Link>
            </li>
            <li>
              <Link to="/team" className="text-foreground/80 hover:text-primary transition-colors">Staff & Team</Link>
            </li>
            <li>
              <Link to="/contacts" className="text-foreground/80 hover:text-primary transition-colors">Support & Order</Link>
            </li>
          </ul>
        </div>

        {/* Featured Plans */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Popular Plans</h4>
          <ul className="space-y-2.5 text-sm text-foreground/80 font-mono">
            <li>Fire Plan (2GB) — ₹20/mo</li>
            <li>Mace Plan (4GB) — ₹40/mo</li>
            <li>Axe Plan (8GB) — ₹80/mo</li>
            <li>Obsidian i9 (4GB) — ₹60/mo</li>
            <li>Beast i9 (64GB) — ₹5,000/mo</li>
          </ul>
        </div>

        {/* Discord & Community */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Community</h4>
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Order servers, receive 24/7 instant ticket support, and chat with our network admins on Discord.
            </p>
            <a
              href="https://discord.gg/T6kZGrsHG4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              <MessageSquare className="w-4 h-4" /> Join Discord & Buy
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
        <p>© {new Date().getFullYear()} AXIOM SOLUTIONS Hosting. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">SLA Agreement</a>
        </div>
      </div>
    </footer>
  )
}
