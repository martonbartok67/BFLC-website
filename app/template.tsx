"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export default function Template({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
