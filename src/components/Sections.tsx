import React, { useState } from "react"
import { ShieldCheck, Eye, Cpu, Lock, Terminal, CheckCircle2, ArrowUpRight, Mail, Phone, MapPin, Send } from "lucide-react"

export function Sections() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", facility: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="bg-hero-bg text-foreground">
      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-16 border-t border-border/40 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Security Services</h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-md">
            Next-generation physical and Cyber-Physical Security System (CPSS) integration powered by real-time neural models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg hover:border-primary/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Vision Surveillance</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Edge-computed computer vision that identifies anomalies, unauthorized breaches, and weapon recognition instantly.
            </p>
            <span className="text-primary text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Capability <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg hover:border-primary/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Zero-Trust Access Control</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Biometric tokenization and dynamic role validation engineered to eliminate credential theft across high-security areas.
            </p>
            <span className="text-primary text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Capability <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg hover:border-primary/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Perimeter Defense Matrix</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Automated tripwires, multi-spectral thermal arrays, and acoustic threat localization built into facility perimeters.
            </p>
            <span className="text-primary text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Capability <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="bg-secondary/40 border border-border/60 p-8 rounded-lg hover:border-primary/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Command & Control Integration</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Unified operating picture aggregating telemetry from existing legacy hardware into a single intuitive dashboard.
            </p>
            <span className="text-primary text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Capability <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 px-6 md:px-12 lg:px-16 border-t border-border/40 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">About AXION NODES</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6 leading-tight">
              Engineering absolute clarity in complex environments
            </h2>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Founded in Columbus, Ohio, AXION NODES redefines enterprise security architecture. We replace bloated, slow-moving contractor models with rapid, precision-tested hardware and software deployments.
            </p>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Our zero-trust security grid combines neural vision models with physical access hardware, enabling enterprise facilities to achieve full perimeter hardening within days rather than months.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/90 font-medium">SOC 2 Type II & ISO 27001 Compliant Architectures</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/90 font-medium">Air-Gapped & On-Premises Neural Inference Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/90 font-medium">24/7 Redundant Emergency Command Dispatch</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary/60 border border-border/80 p-8 rounded-lg text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">12+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">Enterprise Systems Active</span>
            </div>
            <div className="bg-secondary/60 border border-border/80 p-8 rounded-lg text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">&lt;0.4s</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">Neural Threat Alert Latency</span>
            </div>
            <div className="bg-secondary/60 border border-border/80 p-8 rounded-lg text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">99.99%</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">SLA Operational Uptime</span>
            </div>
            <div className="bg-secondary/60 border border-border/80 p-8 rounded-lg text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">3 Days</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block">Average System Deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-16 border-t border-border/40 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-secondary/30 border border-border/60 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-colors">
            <div className="p-8">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>AEROSPACE & DEFENSE</span>
                <span className="text-primary font-mono">OHIO, USA</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Facility Alpha Perimeter Hardening</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Deployed 48 thermal neural sensors and multi-factor biometric turnstiles across a 120-acre defense manufacturing campus.
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-border/40 flex items-center justify-between">
              <span className="text-xs text-foreground/80 font-mono">100% Perimeter Coverage</span>
              <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="bg-secondary/30 border border-border/60 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-colors">
            <div className="p-8">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>FINANCIAL INFRASTRUCTURE</span>
                <span className="text-primary font-mono">COLUMBUS, OH</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Core Financial Tower Cyber-Physical Mesh</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Zero-trust access integration for data vault floors with sub-second AI facial recognition and emergency lockdown automation.
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-border/40 flex items-center justify-between">
              <span className="text-xs text-foreground/80 font-mono">0 Breach Security Index</span>
              <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="bg-secondary/30 border border-border/60 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-colors">
            <div className="p-8">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>LOGISTICS & DISTRIBUTION</span>
                <span className="text-primary font-mono">MIDWEST REGION</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Automated Freight Hub Surveillance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Automated license plate, vehicle ID, and cargo bay monitoring system managing 2,400 daily vehicle ingresses with zero manual oversight.
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-border/40 flex items-center justify-between">
              <span className="text-xs text-foreground/80 font-mono">2,400 Ships/Day Monitored</span>
              <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 md:px-12 lg:px-16 border-t border-border/40 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Security Engineers & Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary/50 border border-border/60 p-6 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 mx-auto mb-4 flex items-center justify-center text-primary text-2xl font-bold">
                SR
              </div>
              <h3 className="text-lg font-bold">Stanislav R.</h3>
              <p className="text-primary text-xs font-medium uppercase tracking-wider mb-3">Chief Security Architect</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Ex-defense hardware engineer with 14 years specializing in autonomous threat detection systems.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border/60 p-6 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 mx-auto mb-4 flex items-center justify-center text-primary text-2xl font-bold">
                EV
              </div>
              <h3 className="text-lg font-bold">Elena Vance</h3>
              <p className="text-primary text-xs font-medium uppercase tracking-wider mb-3">Head of AI Vision Models</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                PhD in Computer Vision; led neural inference optimization for real-time edge hardware.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border/60 p-6 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 mx-auto mb-4 flex items-center justify-center text-primary text-2xl font-bold">
                MK
              </div>
              <h3 className="text-lg font-bold">Marcus K.</h3>
              <p className="text-primary text-xs font-medium uppercase tracking-wider mb-3">Zero-Trust Systems Director</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Specialist in physical credential tokenization and air-gapped security infrastructure.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border/60 p-6 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 mx-auto mb-4 flex items-center justify-center text-primary text-2xl font-bold">
                TC
              </div>
              <h3 className="text-lg font-bold">Tanya Chen</h3>
              <p className="text-primary text-xs font-medium uppercase tracking-wider mb-3">Field Deployment Lead</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Over 80 enterprise hardware integrations executed on-site with zero downtime recorded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-24 px-6 md:px-12 lg:px-16 border-t border-border/40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6">Initiate Security Review</h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Schedule a security assessment or request a custom proposal for your facility. Our engineering team responds within 4 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-foreground">Headquarters</h4>
                  <p className="text-sm text-muted-foreground">Columbus, OH, United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-foreground">Email Contact</h4>
                  <p className="text-sm text-muted-foreground">contact@axion-nodes.security</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-foreground">Direct Line</h4>
                  <p className="text-sm text-muted-foreground">+1 (614) 555-0192</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 border border-border/80 p-8 rounded-lg">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <ShieldCheck className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Security Audit Requested</h3>
                <p className="text-muted-foreground text-sm max-w-sm mb-6">
                  Thank you. An AXION NODES security architect will review your facility profile and contact you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-2 rounded text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@organization.com"
                    className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Facility Type / Location
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.facility}
                    onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
                    placeholder="e.g. 50,000 sq ft Logistics Warehouse, Columbus OH"
                    className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Requirements Summary
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your access control, AI surveillance, or perimeter defense needs..."
                    className="w-full bg-secondary/60 border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-sm text-sm uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Request Quote & Audit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6 md:px-12 lg:px-16 text-center md:flex md:items-center md:justify-between text-xs text-muted-foreground max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} AXION NODES Inc. All rights reserved. Columbus, OH.</p>
        <div className="flex items-center justify-center gap-6 mt-4 md:mt-0 font-medium">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">SOC-2 Compliance</a>
        </div>
      </footer>
    </div>
  )
}
