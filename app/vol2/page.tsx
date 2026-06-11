'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Users, Mic2, TrendingUp, Handshake, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"

export default function Vol2Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102664]/5 via-background to-[#8B61C2]/5" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#8B61C2]/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#102664]/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 animate-fade-in-up flex justify-center">
              <div className="bg-white rounded-3xl px-6 py-8 sm:px-10 sm:py-10 shadow-xl shadow-[#102664]/10 ring-1 ring-[#102664]/5">
                <Image
                  src="/images/fektess-a-jovodbe-vol2-logo.jpeg"
                  alt="Fektess a jövődbe vol. 2"
                  width={1100}
                  height={520}
                  priority
                  className="w-full max-w-xl h-auto"
                />
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl mx-auto text-pretty leading-relaxed text-popover-foreground font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Pénzügy, gazdaság, pályaorientáció és a jelenlegi politikai-gazdasági változások fókuszban.
            </p>

            {/* Event Info Badge */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#102664]/10 rounded-full text-primary">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">2026. június 18.</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#8B61C2]/10 rounded-full text-primary">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">MCC Budapest</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#102664]/10 rounded-full text-primary">
                <Users className="h-4 w-4" />
                <span className="font-medium">100+ résztvevő tavaly</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Button size="lg" variant="secondary" asChild className="group rounded-2xl leading-8 hover-lift font-semibold">
                <Link href="https://form.jotform.com/261445662237055" target="_blank" rel="noopener noreferrer">
                  Jelentkezem!
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-primary text-primary hover:bg-primary/10 rounded-2xl leading-8 transition-all duration-300"
              >
                <Link href="/about">
                  Tudj meg többet a klubról
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 bg-gradient-to-b from-background to-[#102664]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center animate-fade-in-up">
              Részletek
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Location & Time Card */}
              <div className="p-6 bg-background border border-border rounded-2xl hover-lift animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#8B61C2]" />
                  Helyszín és Időpont
                </h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Helyszín:</strong> MCC - Budapest, Tas Vezér utca 3.
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Időpont:</strong> 2026. június 18. (csütörtök), 10:00-14:00
                </p>
                <div className="flex items-center gap-2 mt-4 text-[#102664]">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Igazolható tanulmányi eseményként</span>
                </div>
              </div>

              {/* Registration Card */}
              <div className="p-6 bg-background border border-border rounded-2xl hover-lift animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#8B61C2]" />
                  Részvétel
                </h3>
                <p className="text-muted-foreground mb-4">
                  A részvétel <strong>ingyenes</strong>, de regisztrációhoz kötött. A tavalyi rendezvényen több mint 100 motivált és érdeklődő középiskolás vett részt!
                </p>
                <Button asChild className="w-full rounded-xl">
                  <Link href="https://form.jotform.com/261445662237055" target="_blank" rel="noopener noreferrer">
                    Regisztrálok
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Program Cards */}
            <h3 className="text-2xl font-bold mb-6 text-center">Program</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Panel Discussion */}
              <div className="p-6 bg-gradient-to-br from-[#102664]/5 to-transparent border border-border rounded-2xl hover-lift animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-12 h-12 bg-[#102664]/10 rounded-xl flex items-center justify-center mb-4">
                  <Mic2 className="h-6 w-6 text-[#102664]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Panelbeszélgetés</h4>
                <p className="text-muted-foreground text-sm">
                  Meghívott vendégeinkkel beszélgetünk különböző pénzügyi és üzleti karrierutakról, a munkaerőpiaci tapasztalatokról. Lehetőség lesz kérdéseket feltenni!
                </p>
              </div>

              {/* Presentation */}
              <div className="p-6 bg-gradient-to-br from-[#8B61C2]/5 to-transparent border border-border rounded-2xl hover-lift animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="w-12 h-12 bg-[#8B61C2]/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#8B61C2]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Előadás</h4>
                <p className="text-muted-foreground text-sm">
                  A kormányváltás gazdasági következményei - hogyan hathat egy politikai fordulat a gazdaságra, a vállalkozásokra és a fiatalok jövőbeli lehetőségeire?
                </p>
              </div>

              {/* Networking */}
              <div className="p-6 bg-gradient-to-br from-[#102664]/5 to-transparent border border-border rounded-2xl hover-lift animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="w-12 h-12 bg-[#102664]/10 rounded-xl flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-[#102664]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Networking & Standok</h4>
                <p className="text-muted-foreground text-sm">
                  A félórás networking szünet során lehetőség lesz standoknál beszélgetni, kérdezni és kapcsolatot építeni a meghívott vendégekkel és szervezetekkel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#102664]/5 to-[#8B61C2]/5 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Szeretettel várunk!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ne maradj le az év egyik legizgalmasabb pénzügyi eseményéről. Regisztrálj most és biztosítsd a helyed!
          </p>
          <Button size="lg" asChild className="rounded-2xl hover-lift">
            <Link
              href="https://form.jotform.com/261445662237055"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jelentkezem!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      </main>
    </>
  )
}
