/**
 * Site-wide ambient background.
 *
 * Two very low-opacity blue blobs that drift slowly behind page content.
 * Pure CSS (no JS) so it costs nothing on first paint, sits behind
 * everything (-z-10, fixed), and is ignored by screen readers since it
 * carries no information. Respects prefers-reduced-motion via the
 * .animate-float rule already guarded in globals.css.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-primary/[0.04] blur-3xl animate-float" />
      <div
        className="absolute bottom-[-10%] right-[-8%] h-[480px] w-[480px] rounded-full bg-primary/[0.03] blur-3xl animate-float"
        style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
      />
    </div>
  )
}
