"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** Max tilt in degrees. Keep modest -- this should feel responsive, not gimmicky. */
  maxTilt?: number
  /** rgba string for the cursor-spotlight glow. Default suits light cards;
   * pass a light/white-based rgba for dark-background cards. */
  glowColor?: string
}

export function TiltCard({ children, className, maxTilt = 8, glowColor = "rgba(16,38,100,0.16)" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), { stiffness: 250, damping: 22 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), { stiffness: 250, damping: 22 })
  const glowX = useTransform(x, (v) => `${v * 100}%`)
  const glowY = useTransform(y, (v) => `${v * 100}%`)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    setHovered(false)
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformPerspective: 900,
      }}
      className={`relative [transform-style:preserve-3d] ${className ?? ""}`}
    >
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: useTransform(
              [glowX, glowY],
              (latest) => `radial-gradient(circle at ${latest[0]} ${latest[1]}, ${glowColor}, transparent 65%)`,
            ),
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
