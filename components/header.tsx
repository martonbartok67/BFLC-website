"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border text-primary bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-background">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" onClick={scrollToTop}>
            <div className="w-10 h-10 relative">
              <Image
                src="/images/flc-logo-no-text.png"
                alt="Financial Literacy Club Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <span className="font-semibold text-lg hidden sm:inline">Budapest Financial Literacy Club</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Rólunk
            </Link>
            <Link
              href="/schedule"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Naptár
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Cikkek
            </Link>
            <Link
              href="/competitions"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Versenyek és Események
            </Link>
            <Link
              href="/collaboration"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Együttműködés
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Kapcsolat
            </Link>
            <Button className="rounded-xl" size="sm" asChild>
              <Link
                href="https://m.me/cm/AbaU8rQOgYlXAugE/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={scrollToTop}
              >
                Csatlakozz!
              </Link>
            </Button>
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Rólunk
              </Link>
              <Link
                href="/schedule"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Naptár
              </Link>
              <Link
                href="/articles"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Cikkek
              </Link>
              <Link
                href="/competitions"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Versenyek és Események
              </Link>
              <Link
                href="/collaboration"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Együttműködés
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Kapcsolat
              </Link>
              <Button size="sm" asChild className="w-full">
                <Link
                  href="https://m.me/cm/AbaU8rQOgYlXAugE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    scrollToTop()
                  }}
                >
                  Csatlakozz hozzánk
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
