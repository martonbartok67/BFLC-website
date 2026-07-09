"use client"

import { useEffect, useCallback } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { SkeletonImage } from "@/components/skeleton-image"

interface LightboxProps {
  images: { src: string; alt: string }[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const shouldReduceMotion = useReducedMotion()
  const isOpen = index !== null
  const image  = index !== null ? images[index] : null

  // Keyboard nav
  const onKey = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return
    if (e.key === "Escape")     onClose()
    if (e.key === "ArrowLeft")  onPrev()
    if (e.key === "ArrowRight") onNext()
  }, [isOpen, onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onKey])

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          key="lightbox-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Image container -- stop propagation so clicking the image
              itself doesn't close the lightbox */}
          <motion.div
            key={index}
            className="relative max-w-5xl max-h-[85vh] w-full mx-4 rounded-xl overflow-hidden shadow-2xl"
            initial={shouldReduceMotion ? false : { scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={e => e.stopPropagation()}
          >
            <SkeletonImage
              src={image.src}
              alt={image.alt}
              tone="dark"
              sizes="(min-width: 1280px) 1024px, 90vw"
              className="object-contain max-h-[85vh]"
            />
          </motion.div>

          {/* Caption */}
          <motion.p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center px-4 max-w-lg"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.25 }}
          >
            {image.alt}
          </motion.p>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
            {(index ?? 0) + 1} / {images.length}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Bezár"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          {(index ?? 0) > 0 && (
            <button
              onClick={e => { e.stopPropagation(); onPrev() }}
              aria-label="Előző"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Next */}
          {(index ?? 0) < images.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); onNext() }}
              aria-label="Következő"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
