"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  once?: boolean
}

/**
 * Scroll-triggered reveal (Intersection Observer under the hood via
 * Framer's `whileInView`, never a scroll listener — no scroll-jank).
 * Replaces the old `animate-fade-in-up` CSS class, which fired the
 * instant an element mounted regardless of scroll position, so anything
 * below the fold had already finished animating before anyone saw it.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  )
}
