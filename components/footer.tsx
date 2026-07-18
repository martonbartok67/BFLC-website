"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

const navLinks = [
  { label: "Rólunk",                   href: "/about"         },
  { label: "Naptár",                   href: "/schedule"      },
  { label: "Cikkek",                   href: "/articles"      },
  { label: "Versenyek és Események",   href: "/competitions"  },
  { label: "Együttműködés",            href: "/collaboration" },
  { label: "Kapcsolat",                href: "/contact"       },
]

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/budapestflc/",                        icon: Instagram   },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/financial-literacy-club-bp",   icon: Linkedin    },
  { label: "Messenger", href: "https://m.me/cm/AbaU8rQOgYlXAugE/",                            icon: MessageCircle },
  { label: "Email",     href: "mailto:bflc@bflc.hu",                                   icon: Mail        },
]

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground overflow-hidden">

      {/* Ambient blobs — same language as hero + gallery, ties all three
          dark sections together as a deliberate visual pair/trio */}
      <div aria-hidden="true" className="absolute top-0 right-0 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#C5B0E1]/[0.04] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Big CTA line ────────────────────────────────────────────────
            The footer is the last thing someone reads. Make it an
            invitation, not just a sitemap. */}
        <Reveal className="py-16 sm:py-20 border-b border-white/10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
            Csatlakozz hozzánk
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight mb-8">
            Építsd a pénzügyi jövőd<br className="hidden sm:block" /> velünk csütörtökönként.
          </h2>
          <a
            href="https://m.me/cm/AbaU8rQOgYlXAugE/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
          >
            Csatlakozz ingyen
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </Reveal>

        {/* ── Links + socials + logo ─────────────────────────────────────── */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/images/flc-logo-no-text.png"
                  alt="Budapest Financial Literacy Club"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold leading-tight text-sm">
                Budapest<br />Financial Literacy Club
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Minden diákot szívesen látunk. Nincs szükség előzetes tudásra!
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">Oldalak</p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={scrollToTop}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials as text links, not icon chips */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">Közösség</p>
            <ul className="space-y-3">
              {socials.map(s => {
                const Icon = s.icon
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                    >
                      <Icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      {s.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Session info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">Alkalmak</p>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>📅 Minden csütörtök</p>
              <p>🏫 Eötvös József Gimnázium</p>
              <p>🕐 15:45 – 16:45</p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────────── */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Budapest Financial Literacy Club</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Adatvédelem</Link>
            <Link href="/impresszum" className="hover:text-primary-foreground transition-colors">Impresszum</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-primary-foreground transition-colors duration-200 flex items-center gap-1"
          >
            Vissza az elejére ↑
          </button>
        </div>

      </div>
    </footer>
  )
}
