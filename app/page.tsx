import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <AboutSection />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <GallerySection />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <SocialMediaSection />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}
