'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Vol2Page() {
  return (
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B61C2]/10 border border-[#8B61C2]/30 mb-8">
              <Zap className="w-4 h-4 text-[#8B61C2]" />
              <span className="text-sm font-semibold text-[#8B61C2]">Valami nagyban készülünk</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
              <span className="text-primary">Fektess</span> a
              <br />
              <span className="text-[#8B61C2]">Jövődbe!</span>
              <br />
              <span className="text-2xl sm:text-4xl md:text-5xl text-primary/70">Vol. 2</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Az eddig legambiciózusabb projektünk. Készülj fel a pénzügyi világra - új szinten.
            </p>

            {/* Coming Soon Info */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#102664]/10 to-[#8B61C2]/10 border border-[#8B61C2]/20">
              <p className="text-sm font-semibold text-[#8B61C2] mb-2">TEASER CAMPAIGN</p>
              <p className="text-primary text-lg">Részletek hamarosan</p>
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
      <section className="py-20 border-t border-border relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
              Mit fog tartalmazni a Vol. 2?
            </h2>
            <p className="text-lg text-muted-foreground">
              Az előző évad után visszatérünk még nagyobb ambícióval, mélyebb tartalommal és exkluzívabb lehetőségekkel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Célzott Tananyag",
                description: "Fokuszált modulok a pénzügyi szektorban előrehaladók számára"
              },
              {
                icon: TrendingUp,
                title: "Valós Tapasztalatok",
                description: "Iparági szakértők és sikeres befektetők megosztják tudásukat"
              },
              {
                icon: Zap,
                title: "Exkluzív Hozzáférés",
                description: "VIP lehetőségek és networking csak a Vol. 2 tagok számára"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-border hover:border-[#8B61C2]/50 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B61C2]/10"
              >
                <feature.icon className="w-12 h-12 text-[#8B61C2] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#102664]/5 to-[#8B61C2]/5 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nem akarasz lemaradni?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Csatlakozz a klubhoz és légy az elsők között, akik megtudják, mikor indul a Vol. 2!
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
  )
}
