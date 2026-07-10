import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Instagram, Mail, Linkedin, Heart, Lightbulb, Users,
  Presentation, Megaphone, Handshake, Building2,
} from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

export default function CollaborationPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        {/* Dark navy, left-aligned. The old "Együttműködés" pill badge + centered
            title read the same as every other page. Benefit chips (the actual
            four collaboration types from the body) and a CTA in the hero means
            partners can understand the offer and act without scrolling. */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground">
          <div aria-hidden="true" className="absolute -top-16 right-0 w-96 h-96 rounded-full bg-white/[0.05] blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#C5B0E1]/[0.04] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
            <div className="max-w-3xl">
              <Reveal>
                <SectionLabel tone="light" align="start">Együttműködés</SectionLabel>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
                  Építsük együtt<br className="hidden sm:block" /> a jövőt
                </h1>
                <p className="text-lg text-pretty leading-relaxed text-primary-foreground/85 mb-8 max-w-2xl">
                  Segíts nekünk abban, hogy még több diákot érhessünk el pénzügyi oktatási programunkkal!
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Vendégelőadások", "Céglátogatások", "Szponzorálás", "Iskolai látogatások"].map(chip => (
                    <span key={chip} className="bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-sm text-primary-foreground/90">
                      {chip}
                    </span>
                  ))}
                </div>
                <a
                  href="mailto:bflc@bflc.hu"
                  className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" />
                  Kapcsolatfelvétel
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Collaboration Info */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Miért működj együtt velünk?</h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  A Financial Literacy Club diákok által vezetett kezdeményezés, amely pénzügyi tudatosságot épít a
                  fiatalok körében. Együttműködéseddel segíted, hogy programjainkat bővíthessük, több diákot érhessünk
                  el, és minőségi előadókat, workshopokat szervezhessünk.
                </p>
              </div>

              <Card className="mb-12 border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Együttműködési lehetőségek</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Keresünk partnereket és támogatókat, akik segítenek küldetésünk megvalósításában!
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background rounded-lg p-6 border">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Iskolai látogatások</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Szívesen tartunk bemutatkozó előadásokat és workshopokat más iskolákban is.
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-6 border">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Presentation className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Vendégelőadások</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Várjuk szakértők jelentkezését, akik megosztanák tudásukat diákjainkkal.
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-6 border">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Céglátogatások</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Szívesen látogatnánk meg vállalatokat, hogy diákjaink betekintést nyerjenek a pénzügyi szektor
                        működésébe.
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-6 border">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Megaphone className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Promóciós együttműködés</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Közös marketing kampányok és rendezvények szervezése partnerekkel.
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-6 border md:col-span-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Handshake className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Szponzorálás</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Pénzügyi támogatás rendezvényeinkhez, eszközbeszerzéshez és programjainkhoz.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Érdekel az együttműködés? Vedd fel velünk a kapcsolatot!
                    </p>
                    <Button asChild size="lg">
                      <a href="mailto:bflc@bflc.hu">
                        <Mail className="mr-2 h-4 w-4" />
                        Kapcsolatfelvétel
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact for Collaboration */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold mb-6">Lépj kapcsolatba velünk</h3>
                <p className="text-muted-foreground mb-8">
                  Ha érdekel az együttműködés vagy partnerség, vedd fel velünk a kapcsolatot az alábbi elérhetőségeken:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <Card className="hover:shadow-lg transition-shadow border-2 border-primary/30">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center relative">
                        <Mail className="w-8 h-8 text-white" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          Elsődleges
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Email</h4>
                        <p className="text-sm text-muted-foreground mb-4 break-all">bflc@bflc.hu</p>
                      </div>
                      <Button asChild className="w-full">
                        <a href="mailto:bflc@bflc.hu">Írj nekünk</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Instagram className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Instagram</h4>
                        <p className="text-sm text-muted-foreground mb-4">@budapestflc</p>
                      </div>
                      <Button asChild className="w-full">
                        <a href="https://www.instagram.com/budapestflc/" target="_blank" rel="noopener noreferrer">
                          Követés
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                        <Linkedin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground mb-4">Financial Literacy Club BP</p>
                      </div>
                      <Button asChild className="w-full">
                        <a
                          href="https://www.linkedin.com/company/financial-literacy-club-bp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Követés
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
