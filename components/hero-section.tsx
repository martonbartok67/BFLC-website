"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
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
              className="bg-gradient-to-r from-[#102664]/30 to-[#C5B0E1]/30 border border-[#C5B0E1]/50 text-primary-foreground hover:from-[#102664]/50 hover:to-[#C5B0E1]/50 hover:border-[#C5B0E1]/80 rounded-2xl leading-8 transition-all duration-300 animate-pulse-subtle hover-lift shadow-lg hover:shadow-[0_0_30px_rgba(197,176,225,0.4)]"
            >
              <Link href="https://form.jotform.com/261445662237055" target="_blank" rel="noopener noreferrer">
                Jelentkezem!
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
