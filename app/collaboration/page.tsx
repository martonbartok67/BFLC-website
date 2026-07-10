import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Instagram,
  Mail,
  Linkedin,
  Heart,
  Lightbulb,
  Users,
  Presentation,
  Megaphone,
  Handshake,
  Building2,
} from "lucide-react"
import Image from "next/image"

export default function CollaborationPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.jpg"
              alt="FLC Collaboration"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-primary/90 opacity-70" />
          </div>
          <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm text-primary-foreground/90">Együttműködés</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-primary-foreground">
                Együttműködés
              </h1>
              <p className="text-lg text-pretty leading-relaxed text-primary-foreground/90">
                Segíts nekünk abban, hogy még több diákot érhessünk el pénzügyi oktatási programunkkal!
              </p>
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
