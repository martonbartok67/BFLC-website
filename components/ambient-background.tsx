/**
 * Site-wide ambient background.
 *
 * v2: pushed bolder per feedback -- the original 3-4% opacity blobs were
 * imperceptible on white sections. Now: larger blobs, real opacity,
 * three of them instead of two, plus a subtle grain texture layer for
 * tactile/premium feel (the kind of thing Stripe/Linear use -- a tiny
 * tiled noise SVG at ~3% opacity, costs nothing, reads as "designed").
 *
 * Still CSS-only, still aria-hidden, still respects prefers-reduced-motion
 * via the .animate-float guardrail already in globals.css.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-primary/[0.09] blur-[100px] animate-float" />
      <div
        className="absolute top-[35%] -right-40 h-[520px] w-[520px] rounded-full bg-primary/[0.07] blur-[100px] animate-float"
        style={{ animationDelay: "1.2s", animationDuration: "5s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[480px] w-[480px] rounded-full bg-[#C5B0E1]/[0.05] blur-[100px] animate-float"
        style={{ animationDelay: "0.6s", animationDuration: "4.2s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  )
}
