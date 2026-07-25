import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { FixedSplineBackground } from "@/components/FixedSplineBackground"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HomePage } from "@/pages/HomePage"
import { PlansPage } from "@/pages/PlansPage"
import { AboutPage } from "@/pages/AboutPage"
import { NodesPage } from "@/pages/NodesPage"
import { TeamPage } from "@/pages/TeamPage"
import { ContactsPage } from "@/pages/ContactsPage"
import { PanelPage } from "@/pages/PanelPage"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-hero-bg text-foreground font-sora selection:bg-primary selection:text-primary-foreground">
        {/* Persistent 3D Spline Universe Background */}
        <FixedSplineBackground />

        {/* Global Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/panel" element={<PanelPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/nodes" element={<NodesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}
