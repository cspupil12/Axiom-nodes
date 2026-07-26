import React from "react"
import { CheckCircle2, MessageSquare, Shield, Crown, Terminal, Sparkles, Megaphone, HeadphoneOff, Headphones } from "lucide-react"
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
    initials: "LN",
    name: "Leon <3",
    role: "Co-Founder & Owner",
    bio: "Overlooks global vision, host infrastructure partnerships, and core executive direction at AXIOM SOLUTIONS.",
    credentials: ["Co-Founder", "Platform Owner", "Infrastructure Director"],
    icon: Crown,
  },
  {
    initials: "JS",
    name: "Jaspreet Singh",
    role: "CEO & CTO",
    bio: "Leads technical architecture, software development, Pterodactyl integration, and systems engineering.",
    credentials: ["Chief Executive Officer", "Chief Technology Officer", "Systems Architect"],
    icon: Terminal,
  },
  {
    initials: "DK",
    name: "Daku",
    role: "Co-Founder & CEO",
    bio: "Drives business strategy, operational management, client relations, and growth expansion.",
    credentials: ["Co-Founder", "Chief Executive Officer", "Operations Lead"],
    icon: Shield,
  },
  {
    initials: "RE",
    name: "MrRedEvil",
    role: "Co-Founder & HOD (Marketing)",
    bio: "Head of Marketing Department overseeing growth campaigns, creator sponsorships, and brand outreach.",
    credentials: ["Co-Founder", "HOD Marketing", "Brand Strategist"],
    icon: Megaphone,
  },
  {
    initials: "IS",
    name: "Ishawar Singh",
    role: "Marketing Manager",
    bio: "Manages social media campaigns, Minecraft community partnerships, and public relations.",
    credentials: ["Marketing Manager", "Community Outreach", "Campaign Lead"],
    icon: Sparkles,
  },
  {
    initials: "SM",
    name: "Sam",
    role: "Discord Manager & Support Head",
    bio: "Head of customer support and Discord administration ensuring 24/7 instant ticket processing.",
    credentials: ["Support Head", "Discord Manager", "24/7 Operations"],
    icon: Headphones,
  },
]

export function TeamPage() {
  return (
    <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-hero-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">Leadership & Operations</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
              Staff & <span className="text-primary">Team</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Meet the founders, executives, systems engineers, and support leads powering AXIOM SOLUTIONS.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, idx) => {
            const RoleIcon = member.icon
            return (
              <ScrollReveal key={member.name} delay={idx * 80}>
                <div className="bg-secondary/30 border border-border/60 p-8 rounded-xl flex flex-col justify-between group hover:border-primary/50 transition-colors h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary text-xl font-bold group-hover:scale-105 transition-transform">
                        {member.initials}
                      </div>
                      <RoleIcon className="w-6 h-6 text-primary/70" />
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4 font-mono">{member.role}</p>
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
            )
          })}
        </div>

        {/* Join Discord Banner */}
        <ScrollReveal>
          <div className="bg-secondary/40 border border-border/80 p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-2">Need Assistance or Custom Setup?</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Our leadership and support team are active 24/7 on Discord to help you select plans, migrate worlds, or request custom configurations.
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
