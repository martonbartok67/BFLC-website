// components/footer (replace your current Footer component with this)
import Link from "next/link"
import { Instagram, Mail, Linkedin } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-5">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4 gap-2.5">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">FL</span>
              </div>
              <span className="font-bold">Budapest Financial Literacy Club</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Minden budapesti diákot szívesen látunk csütörtöki alkalmainkon. Nincs szükség előzetes regisztrációra
              vagy pénzügyi tudásra!
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Linkek</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  onClick={scrollToTop}
                >
                  Rólunk
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  onClick={scrollToTop}
                >
                  Naptár
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  onClick={scrollToTop}
                >
                  Cikkek
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  onClick={scrollToTop}
                >
                  Támogatás
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Vedd fel velünk a kapcsolatot:</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/flc_ejg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
                onClick={scrollToTop}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/financial-literacy-club-bp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
                onClick={scrollToTop}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ejgfinance@gmail.com"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
                onClick={scrollToTop}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80 pt-3">
          <p>© {new Date().getFullYear()} Budapest Financial Literacy Club - Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  )
}
