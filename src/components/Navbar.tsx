import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Server Plans", path: "/plans" },
  { name: "Panel", path: "/panel" },
  { name: "About Us", path: "/about" },
  { name: "Nodes & Hardware", path: "/nodes" },
  { name: "Team", path: "/team" },
  { name: "Support", path: "/contacts" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open to prevent underlying content bleeding/scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-[101] flex items-center justify-between px-6 lg:px-16 py-5 border-b border-white/5 transition-colors ${
      mobileMenuOpen ? "bg-black" : "bg-black/90 md:bg-hero-bg/40 md:backdrop-blur-md"
    }`}>
      {/* Left: Logo */}
      <Link
        to="/"
        onClick={() => setMobileMenuOpen(false)}
        className="text-foreground text-xl font-bold tracking-tight hover:opacity-90 transition-opacity flex items-center gap-2 z-[102]"
      >
        <span>AXIOM</span>
        <span className="text-primary">SOLUTIONS</span>
      </Link>

      {/* Center: Desktop Nav links */}
      <nav className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-xs uppercase tracking-widest transition-colors ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Right: Desktop Deploy Server Button */}
      <Link to="/plans" className="hidden md:inline-block">
        <Button
          variant="hero"
          size="lg"
          className="rounded-lg uppercase text-xs tracking-widest px-6 cursor-pointer font-bold shadow-lg shadow-primary/20"
        >
          Deploy Server
        </Button>
      </Link>

      {/* Mobile Hamburger Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-foreground p-2 rounded-lg bg-secondary/80 border border-border/80 z-[102] cursor-pointer"
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer Overlay with SOLID 100% Black Background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-black z-[100] flex flex-col justify-between p-8 pt-28 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base uppercase tracking-widest font-bold transition-colors border-b border-white/10 pb-3 ${
                    isActive ? "text-primary pl-2 border-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-4 mb-6">
            <Link to="/plans" onClick={() => setMobileMenuOpen(false)} className="block">
              <Button
                variant="hero"
                size="lg"
                className="w-full rounded-lg uppercase text-xs tracking-widest py-4 font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" /> Deploy Server Now
              </Button>
            </Link>
            <p className="text-center text-xs font-mono text-muted-foreground/60">
              AXIOM SOLUTIONS • High-Performance Minecraft Hosting
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
