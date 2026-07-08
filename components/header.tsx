"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"
import { StaggeredMenu } from "@/components/staggered-menu"

const navItems = [
  { label: "Rólunk",                   link: "/about"         },
  { label: "Naptár",                   link: "/schedule"      },
  { label: "Cikkek",                   link: "/articles"      },
  { label: "Versenyek és Események",   link: "/competitions"  },
  { label: "Együttműködés",            link: "/collaboration" },
  { label: "Kapcsolat",                link: "/contact"       },
]

const socialItems = [
  { label: "Instagram", link: "https://www.instagram.com/budapestflc/"                      },
  { label: "Messenger", link: "https://m.me/cm/AbaU8rQOgYlXAugE/"                          },
  { label: "Email",     link: "mailto:ejgfinance@gmail.com"                                 },
  { label: "LinkedIn",  link: "https://www.linkedin.com/company/financial-literacy-club-bp" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [indicator, setIndicator]   = useState({ left: 0, width: 0, opacity: 0 })
  const pathname                    = usePathname()
  const shouldReduceMotion          = useReducedMotion()

  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const navRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // useLayoutEffect so the indicator is positioned before the browser paints --
  // avoids a one-frame spring from left:0 on initial load.
  // Safe to use here because the component is "use client" (never runs on server).
  useLayoutEffect(() => {
    const targetIdx = hoveredIdx ?? navItems.findIndex(item => item.link === pathname)
    const linkEl    = linkRefs.current[targetIdx]
    const navEl     = navRef.current

    if (targetIdx === -1 || !linkEl || !navEl) {
      setIndicator(s => ({ ...s, opacity: 0 }))
      return
    }

    const linkRect = linkEl.getBoundingClientRect()
    const navRect  = navEl.getBoundingClientRect()
    setIndicator({ left: linkRect.left - navRect.left, width: linkRect.width, opacity: 1 })
  }, [pathname, hoveredIdx])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const isActive    = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background text-primary transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}>

          {/* ── Logo ─────────────────────────────────────────────────────────
              Spring animation synced with the header height change:
              - Logo mark: 40px → 32px (same ratio as h-16 → h-14)
              - Text: opacity 1 → 0.75, scale 1 → 0.94 from left origin
              stiffness 320 / damping 28 = snappy, not elastic */}
          <Link href="/" className="flex items-center gap-2" onClick={scrollToTop}>
            <motion.div
              className="relative flex-shrink-0"
              animate={shouldReduceMotion ? undefined : {
                width:  isScrolled ? 32 : 40,
                height: isScrolled ? 32 : 40,
              }}
              initial={{ width: 40, height: 40 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              <Image
                src="/images/flc-logo-no-text.png"
                alt="Financial Literacy Club"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>

            <motion.span
              className="font-semibold hidden sm:inline leading-none"
              style={{ transformOrigin: "left center" }}
              animate={shouldReduceMotion ? undefined : {
                opacity: isScrolled ? 0.75 : 1,
                scale:   isScrolled ? 0.94 : 1,
              }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              Budapest Financial Literacy Club
            </motion.span>
          </Link>

          {/* ── Desktop nav with shared sliding indicator ─────────────────
              One motion.div slides between links via spring animation --
              stiffness 400 / damping 32 = decisive slide, not elastic.
              Snaps back to the active route when mouse leaves the nav.
              indicator state is set via DOM measurement (useLayoutEffect)
              so the position is exact regardless of link label length. */}
          <div
            ref={navRef}
            className="hidden lg:flex items-center gap-7 relative"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {!shouldReduceMotion && (
              <motion.div
                aria-hidden="true"
                className="absolute bottom-0 h-[2px] rounded-full bg-gradient-to-r from-primary to-[#C5B0E1] pointer-events-none"
                animate={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}

            {navItems.map((item, i) => (
              <Link
                key={item.link}
                href={item.link}
                ref={el => { linkRefs.current[i] = el }}
                className={`text-sm font-medium pb-1 transition-colors duration-200 ${
                  isActive(item.link) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onMouseEnter={() => setHoveredIdx(i)}
                onClick={scrollToTop}
              >
                {item.label}
              </Link>
            ))}

            <Button size="sm" asChild className="rounded-xl hover:scale-105 hover:shadow-lg transition-all">
              <Link href="https://m.me/cm/AbaU8rQOgYlXAugE/" target="_blank" rel="noopener noreferrer">
                Csatlakozz!
              </Link>
            </Button>
          </div>

          {/* ── Mobile / narrow landscape ────────────────────────────────── */}
          <div className="lg:hidden">
            <StaggeredMenu
              items={navItems}
              socialItems={socialItems}
              ctaLabel="Csatlakozz!"
              ctaLink="https://m.me/cm/AbaU8rQOgYlXAugE/"
              buttonColor="var(--primary)"
            />
          </div>

        </div>
      </div>
    </header>
  )
}
