import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
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
      
      {/* Animated background orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
            Budapest Financial Literacy Club
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A jövőd a legjobb befektetés!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
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
              className="bg-gradient-to-r from-[#102664]/30 to-[#8B61C2]/30 border border-[#8B61C2]/50 text-primary-foreground rounded-2xl leading-8 transition-all duration-300 animate-pulse-subtle hover-lift shadow-lg"
              style={{
                "--tw-shadow": "0 0 30px rgba(139, 97, 194, 0.4)"
              } as React.CSSProperties}
            >
              <Link href="https://form.jotform.com/261445662237055" target="_blank" rel="noopener noreferrer">
                Jelentkezem!
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
