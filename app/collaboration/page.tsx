import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Mail, Linkedin, Heart } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

export default function CollaborationPage() {
  const collaborationOptions = [
    {
      title: "Iskolai látogatások",
      text: "Szívesen tartunk bemutatkozó előadásokat és workshopokat más iskolákban is.",
    },
    {
      title: "Vendégelőadások",
      text: "Várjuk szakértők jelentkezését, akik megosztanák tudásukat diákjainkkal.",
    },
    {
      title: "Céglátogatások",
      text: "Szívesen látogatnánk meg vállalatokat, hogy diákjaink betekintést nyerjenek a pénzügyi szektor működésébe.",
    },
    {
      title: "Promóciós együttműködés",
      text: "Közös marketing kampányok és rendezvények szervezése partnerekkel.",
    },
    {
      title: "Szponzorálás",
      text: "Pénzügyi támogatás rendezvényeinkhez, eszközbeszerzéshez és programjainkhoz.",
    },
  ]

  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        {/* Dark navy, left-aligned. The old "Együttműködés" pill badge + centered
            title read the same as every other page. Benefit chips (the actual
            four collaboration types from the body) and a CTA in the hero means
            partners can understand the offer and act without scrolling. */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground">
          <div aria-hidden="true" className="absolute -top-16 right-0 w-96 h-96 rounded-full bg-white/[0.05] blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#C5B0E1]/[0.04] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
            <div className="max-w-5xl">
              <Reveal>
                <SectionLabel tone="light" align="start">Együttműködés</SectionLabel>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
                  Építsük együtt<br className="hidden sm:block" /> a jövőt
                </h1>
                <p className="text-lg text-pretty leading-relaxed text-primary-foreground/85 mb-8 max-w-2xl">
                  Segíts nekünk abban, hogy még több diákot érhessünk el pénzügyi oktatási programunkkal!
                </p>
                <div className="mb-8 flex flex-nowrap items-center gap-x-3 overflow-x-auto text-xs font-medium text-primary-foreground/75 sm:gap-x-4 sm:text-sm">
                  {[
                    "Iskolai látogatások",
                    "Vendégelőadások",
                    "Céglátogatások",
                    "Promóciós együttműködések",
                    "Szponzorálás",
                  ].map(chip => (
                    <span key={chip} className="relative shrink-0 after:ml-3 after:text-primary-foreground/30 after:content-['/'] last:after:content-[''] sm:after:ml-4">
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

              <div className="mb-16 py-8">
                <div className="mb-12">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Partnerség</p>
                  <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <h3 className="max-w-xl text-4xl font-bold leading-tight text-balance sm:text-5xl">
                      Együttműködési lehetőségek
                    </h3>
                    <p className="text-2xl font-semibold leading-snug text-foreground text-balance sm:text-3xl">
                      Keressük partnereinket és támogatóinkat, akik segítenek küldetésünk megvalósításában.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {collaborationOptions.map((option, index) => (
                    <div
                      key={option.title}
                      className={`group relative py-8 md:px-8 ${
                        index % 2 === 1 ? "md:border-l md:border-border" : ""
                      } ${index > 1 ? "border-t border-border" : index === 1 ? "border-t border-border md:border-t-0" : ""}`}
                    >
                      <div
                        aria-hidden="true"
                        className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-primary/80 to-[#C5B0E1]/70 transition-all duration-300 group-hover:w-24"
                      />
                      <h4 className="text-2xl font-semibold mb-3 text-foreground">{option.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{option.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex flex-col gap-5 border-y border-primary/15 py-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xl text-xl font-semibold leading-snug text-foreground text-balance">
                    Érdekel az együttműködés? Vedd fel velünk a kapcsolatot!
                  </p>
                  <Button asChild size="lg" className="w-fit">
                    <a href="mailto:bflc@bflc.hu">
                      <Mail className="mr-2 h-4 w-4" />
                      Kapcsolatfelvétel
                    </a>
                  </Button>
                </div>
              </div>

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
