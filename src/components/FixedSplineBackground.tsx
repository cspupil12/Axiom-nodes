import React, { Suspense } from "react"

const Spline = React.lazy(() => import("@splinetool/react-spline"))

export function FixedSplineBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 3D Spline Canvas with pointer-events-none so scrolling passes through */}
      <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
        <Spline
          scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
          className="w-full h-full pointer-events-none"
        />
      </Suspense>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />
    </div>
  )
}
