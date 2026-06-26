"use client"

import { motion, useReducedMotion } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  wordDelay?: number
}

/**
 * Splits text into words and reveals them in sequence. Used for the hero
 * headline only — this is the single boldest motion moment on the site,
 * everything else stays calmer so this doesn't get diluted.
 */
export function TextReveal({ text, className, delay = 0, wordDelay = 0.1 }: TextRevealProps) {
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay + i * wordDelay }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
