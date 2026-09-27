"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Link from "next/link"

export type CookieConsent = "accepted" | "essential" | null

const STORAGE_KEY = "bflc-cookie-consent"
export const COOKIE_CONSENT_EVENT = "bflc-cookie-consent-change"

export function getCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null
  return (localStorage.getItem(STORAGE_KEY) as CookieConsent) ?? null
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (getCookieConsent() !== null) return
    const t = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
  }

  function essential() {
    localStorage.setItem(STORAGE_KEY, "essential")
    setVisible(false)
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
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
                Az oldalon található beágyazott Google Naptárunk cookie-kat használ.
                Az „Elfogadás" gombra kattintva hozzájárulsz, hogy az oldalon megjelenhet a beágyazott naptár. Ez segíti a programok közti tájékozódásod. 
                Megtudhatsz többet az adatvédelmi nyilatkozatunkban:{" "}
                <Link
                  href="/privacy"
                  className="rounded-sm underline underline-offset-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Adatvédelem
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={essential}
                className="rounded-lg px-3 py-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:bg-white/10 hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Csak szükséges
              </button>
              <button
                onClick={accept}
                className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-primary transition-all hover:scale-[1.02] hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[0.98]"
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
