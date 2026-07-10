import type { ReactNode } from "react"

interface SectionLabelProps {
  children: ReactNode
  tone?: "dark" | "light"
  className?: string
  align?: "center" | "start"
}

export function SectionLabel({ children, tone = "dark", className, align = "center" }: SectionLabelProps) {
  const textClass = tone === "light" ? "text-primary-foreground/80" : "text-primary"
  const lineClass = tone === "light" ? "bg-primary-foreground/30" : "bg-primary/40"
  const justifyClass = align === "start" ? "justify-start" : "justify-center"

  return (
    <div className={`flex items-center gap-3 mb-4 ${justifyClass} ${className ?? ""}`}>
      <span className={`h-px w-8 ${lineClass}`} />
      <span className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${textClass}`}>{children}</span>
      <span className={`h-px w-8 ${lineClass}`} />
    </div>
  )
}
