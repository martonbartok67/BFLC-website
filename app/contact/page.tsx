import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Light background, minimal. The contact form below is the real
            content — this hero just sets the page context and gets out of the
            way. The ghost '@' echoes what email IS without being literal. */}
        <section className="relative overflow-hidden bg-background border-b border-border">
          <div
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 text-[18rem] font-bold leading-none text-primary/[0.04] select-none pointer-events-none"
          >
            @
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
            <Reveal>
              <SectionLabel align="start">Kapcsolat</SectionLabel>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-balance leading-[1.05] tracking-tight max-w-xl">
                Szólj hozzánk
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Kérdésed van? Csatlakoznál? Vedd fel velünk a kapcsolatot!
              </p>
            </Reveal>
          </div>
        </section>

        <SocialMediaSection />

        {/* Contact Form Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
