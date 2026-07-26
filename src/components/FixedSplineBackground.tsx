import React, { Suspense, useState, useEffect } from "react"

const Spline = React.lazy(() => import("@splinetool/react-spline"))

export function FixedSplineBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check initial window width & listen for resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {!isMobile ? (
        /* Desktop: Render 3D Spline Canvas with WebGL */
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full pointer-events-none"
          />
        </Suspense>
      ) : (
        /* Mobile: Zero-lag hardware-accelerated CSS space mesh gradient */
        <div className="absolute inset-0 bg-hero-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.5),rgba(10,10,10,0.95))]" />
        </div>
      )}

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />
    </div>
  )
}
