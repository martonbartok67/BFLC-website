"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { TextReveal } from "@/components/motion/text-reveal"

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Financial Literacy Club presentation event"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-primary opacity-70" />

      {/* Bold animated background orbs — this is the single boldest motion
          moment on the site. Three blobs, different sizes/durations/delays
          so they never sync, multi-axis drift (not just up-down). */}
      <div aria-hidden="true" className="absolute top-10 right-0 w-96 h-96 bg-white/15 rounded-full mix-blend-overlay filter blur-3xl animate-hero-drift" />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-hero-drift"
        style={{ animationDelay: "2.5s", animationDuration: "14s" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#C5B0E1]/10 rounded-full mix-blend-overlay filter blur-3xl animate-hero-drift"
        style={{ animationDelay: "5s", animationDuration: "9s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
            <TextReveal text="Budapest Financial Literacy Club" delay={0.1} wordDelay={0.12} />
          </h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.65 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            A jövőd a legjobb befektetés!
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="group rounded-2xl leading-8 hover-lift font-semibold"
            >
              <Link href="https://m.me/cm/AbaU8rQOgYlXAugE/" target="_blank" rel="noopener noreferrer">
                Csatlakozz a klubhoz
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-2xl leading-8 transition-all duration-300"
            >
              <Link href="/about">
                Tudj meg többet
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] border-0 text-white hover:brightness-110 rounded-2xl leading-8 transition-all duration-300 hover-lift shadow-lg hover:shadow-[0_0_30px_rgba(214,41,118,0.5)]"
            >
              <Link href="https://www.instagram.com/budapestflc/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Kövess Instagramon
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Diagonal seam into the next section -- replaces a flat horizontal
          edge with an intentional angled cut. Scale-invariant corner-to-corner
          triangle, safe at any width. Sits below z-10 content so it can never
          visually clip the headline/buttons even on very short viewports. */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 lg:h-24 bg-background"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.5, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-primary-foreground/70"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Görgess</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
