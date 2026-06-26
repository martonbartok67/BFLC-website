import type { ReactNode } from "react"

interface SectionLabelProps {
  children: ReactNode
  /** "dark" for normal (light) section backgrounds, "light" for dark/navy backgrounds */
  tone?: "dark" | "light"
  className?: string
}

export function SectionLabel({ children, tone = "dark", className }: SectionLabelProps) {
  const textClass = tone === "light" ? "text-primary-foreground/80" : "text-primary"
  const lineClass = tone === "light" ? "bg-primary-foreground/30" : "bg-primary/40"

  return (
    <div className={`flex items-center justify-center gap-3 mb-4 ${className ?? ""}`}>
      <span className={`h-px w-8 ${lineClass}`} />
      <span className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${textClass}`}>{children}</span>
      <span className={`h-px w-8 ${lineClass}`} />
    </div>
  )
}
