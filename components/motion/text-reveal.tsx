"use client"

import { motion, useReducedMotion } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  wordDelay?: number
  /** When true, fires on scroll (whileInView) instead of immediately on mount.
   *  Use false (default) for hero headlines that are visible on load. */
  scroll?: boolean
}

export function TextReveal({ text, className, delay = 0, wordDelay = 0.1, scroll = false }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(" ")

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 30 }}
          {...(scroll
            ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 } }
            : { animate: { opacity: 1, y: 0 } }
          )}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay + i * wordDelay }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
