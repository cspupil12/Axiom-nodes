import { NavLink, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Server Plans", path: "/plans" },
  { name: "About Us", path: "/about" },
  { name: "Nodes & Hardware", path: "/nodes" },
  { name: "Team", path: "/team" },
  { name: "Support", path: "/contacts" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-5 bg-hero-bg/40 backdrop-blur-md border-b border-white/5">
      {/* Left: Logo */}
      <Link to="/" className="text-foreground text-xl font-bold tracking-tight hover:opacity-90 transition-opacity flex items-center gap-2">
        <span>AXIOM</span>
        <span className="text-primary">SOLUTIONS</span>
      </Link>

      {/* Center: Nav links */}
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

      {/* Right: Deploy Server Button */}
      <Link to="/plans">
        <Button
          variant="hero"
          size="lg"
          className="hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6 cursor-pointer font-bold shadow-lg shadow-primary/20"
        >
          Deploy Server
        </Button>
      </Link>
    </header>
  )
}
