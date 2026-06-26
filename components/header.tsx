"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border text-primary bg-background transition-all duration-300 ${isScrolled ? "h-14 shadow-md" : "h-16"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-background">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105"
            onClick={scrollToTop}
          >
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
              className={`text-sm font-medium relative transition-all hover:text-primary group ${isActive("/about") ? "text-primary" : ""}`}
              onClick={scrollToTop}
            >
              Rólunk
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#102664] to-[#C5B0E1] transition-all duration-300 ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
            <Link
              href="/schedule"
              className={`text-sm font-medium relative transition-all hover:text-primary group ${isActive("/schedule") ? "text-primary" : ""}`}
              onClick={scrollToTop}
            >
              Naptár
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#102664] to-[#C5B0E1] transition-all duration-300 ${isActive("/schedule") ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium relative transition-all hover:text-primary group"
              onClick={scrollToTop}
            >
              Cikkek
            </Link>
            <Link
              href="/competitions"
              className="text-sm font-medium hover:text-primary transition-all hover:scale-105"
              onClick={scrollToTop}
            >
              Versenyek és Események
            </Link>
            <Link
              href="/collaboration"
              className="text-sm font-medium hover:text-primary transition-all hover:scale-105"
              onClick={scrollToTop}
            >
              Együttműködés
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-all hover:scale-105"
              onClick={scrollToTop}
            >
              Kapcsolat
            </Link>
            <Button className="rounded-xl transition-all hover:scale-105 hover:shadow-lg" size="sm" asChild>
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

          <button
            className={`md:hidden transition-transform hover:scale-110 duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary transition-all hover:translate-x-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Rólunk
              </Link>
              <Link
                href="/schedule"
                className="text-sm font-medium hover:text-primary transition-all hover:translate-x-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Naptár
              </Link>
              <Link
                href="/articles"
                className="text-sm font-medium hover:text-primary transition-all hover:translate-x-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Cikkek
              </Link>
              <Link
                href="/competitions"
                className="text-sm font-medium hover:text-primary transition-all hover:translate-x-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Versenyek és Események
              </Link>
              <Link
                href="/collaboration"
                className="text-sm font-medium hover:text-primary transition-all hover:translate-x-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Együttműködés
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-all hover:translate-x-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
              >
                Kapcsolat
              </Link>
              <Button size="sm" asChild className="w-full transition-all hover:scale-105">
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
        </div>
      </div>
    </header>
  )
}
