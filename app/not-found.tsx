import Link from "next/link"
import { ArrowLeft, Home, Calendar, Users } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-xl w-full text-center">

        <Reveal>
          {/* Large typographic 404 -- brand blue, oversized, purely decorative */}
          <p className="text-[9rem] sm:text-[12rem] font-bold leading-none text-primary/[0.07] select-none mb-0">
            404
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 -mt-6">
            Ez az oldal nem létezik
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10">
            A keresett oldal nem található. Lehet, hogy átnevezték, törölték,<br className="hidden sm:block" />
            vagy sosem létezett.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <Home className="h-4 w-4" />
              Főoldal
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Naptár
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Users className="h-4 w-4" />
              Rólunk
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mt-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Vissza a főoldalra
          </Link>
        </Reveal>

      </div>
    </main>
  )
}
