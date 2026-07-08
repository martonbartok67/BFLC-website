"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
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
  const pathname                    = usePathname()
  const shouldReduceMotion          = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

          {/* ── Desktop nav (per-link underlines, unchanged for now) ──────── */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map(item => (
              <Link
                key={item.link}
                href={item.link}
                className="relative group text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 pb-1"
                onClick={scrollToTop}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#102664] to-[#C5B0E1] transition-all duration-300 ${
                    isActive(item.link) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            <Button size="sm" asChild className="rounded-xl hover:scale-105 hover:shadow-lg transition-all">
              <Link href="https://m.me/cm/AbaU8rQOgYlXAugE/" target="_blank" rel="noopener noreferrer">
                Csatlakozz!
              </Link>
            </Button>
          </nav>

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
