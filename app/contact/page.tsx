import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { SocialMediaSection } from "@/components/social-media-section"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden mb-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
            />
            {/* Dark blue overlay */}
            <div className="absolute inset-0 bg-primary/90 border-0 py-0 px-0 my-0" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Kapcsolat</h1>
              <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 text-balance leading-relaxed">
                Vedd fel velünk a kapcsolatot, ha kérdésed van vagy csatlakoznál hozzánk!
              </p>
            </div>
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
