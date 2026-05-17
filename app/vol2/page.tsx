'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function Vol2Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102664]/5 via-background to-[#8B61C2]/5" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#8B61C2]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#102664]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Teaser Badge */}
            

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
              <span className="text-[rgba(16,38,100,1)]">Fektess</span> a
              <br />
              <span className="text-[#8B61C2]">Jövődbe!</span>
              <br />
              <span className="text-2xl sm:text-4xl md:text-5xl text-primary/70">Vol. 2</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed text-popover-foreground font-medium">
              Az eddig legambiciózusabb projektünk. Készülj fel!.
            </p>

            {/* Coming Soon Info */}
            <div className="p-8 bg-gradient-to-br from-[#102664]/10 to-[#8B61C2]/10 border-[#8B61C2]/20 mb-12 leading-7 py-1 px-0 border-2 rounded-full">
              
              <p className="text-primary text-lg font-semibold">Részletek hamarosan</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild className="group rounded-2xl leading-8">
                <Link href="https://m.me/cm/AbaU8rQOgYlXAugE/" target="_blank" rel="noopener noreferrer">
                  Értesítést szeretnék
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-primary text-primary hover:bg-primary/10 rounded-2xl leading-8"
              >
                <Link href="/about">
                  Tudj meg többet a klubról
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#102664]/5 to-[#8B61C2]/5 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nem akarasz lemaradni?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Csatlakozz a klubhoz és légy az elsők között, akik megtudják, mikor indul a Fektess a Jövődbe! Vol. 2!
          </p>
          <Button size="lg" asChild className="rounded-2xl">
            <Link
              href="https://m.me/cm/AbaU8rQOgYlXAugE/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Csatlakozz Most
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      </main>
    </>
  )
}
