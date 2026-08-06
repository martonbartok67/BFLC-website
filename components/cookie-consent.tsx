"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Link from "next/link"

export type CookieConsent = "accepted" | "essential" | null

const STORAGE_KEY = "bflc-cookie-consent"

export function getCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null
  return (localStorage.getItem(STORAGE_KEY) as CookieConsent) ?? null
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Only show if no prior choice has been stored
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so the banner doesn't flash in before the page renders
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
    // Reload so the calendar iframe initialises with consent granted
    window.location.reload()
  }

  function essential() {
    localStorage.setItem(STORAGE_KEY, "essential")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie hozzájárulás"
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-[200] p-4 sm:p-6"
          initial={shouldReduceMotion ? false : { y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "110%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-[#0a1a47] text-primary-foreground rounded-2xl shadow-2xl ring-1 ring-white/10 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm leading-relaxed text-primary-foreground/90">
                Az oldal Google Naptár beágyazást használ, amelyhez a Google sütiket helyez el.
                Az „Elfogadás" gombra kattintva hozzájárulsz a nem szükséges sütik használatához.
                Bővebben:{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 hover:text-white transition-colors"
                >
                  Adatvédelem
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={essential}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Csak szükséges
              </button>
              <button
                onClick={accept}
                className="text-sm font-semibold bg-white text-primary px-5 py-2 rounded-xl hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Elfogadás
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
