import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Presentation, Trophy, Users, Briefcase, Target, Lightbulb } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Presentation,
    title: "Sokszínű alkalmak",
    description:
      "Rendszeres vendégelőadások mellett, interaktív workshopok és beszélgetések színesítik alkalmainkat és garantálják, hogy minél több felületen találkozzunk hasznosítható tudással és újdonságokkal. Az év során modulszerű egységek biztosítják a strukturált tudásépítést.",
  },
  {
    icon: Users,
    title: "Soft skillek fejlesztése",
    description:
      "Csapatmunkán, beszélgetéseken és prezentációkon át nyújtunk lehetőséget a nyilvános beszédkészség, kritikus gondolkodás, csapatmunka és vezetői képességek fejlesztésére. Ezek mindannyiunk jövőjében (és jelenjében is!) kiemelten fontos készségek, hiszen minden közösségben szükségünk lesz rájuk.",
  },
  {
     icon: Briefcase,
    title: "Kapcsolatépítés és karrier",
    description:
      "Kialakíthatsz értékes kapcsolatokat diáktársaiddal és szakértőkkel, részt vehetsz céglátogatásokon és előadásokon és építs ki olían kapcsolatrendszert, amely karriered alapját képezheti.",
  },
  {
    icon: Trophy,
    title: "Pályaorientáció",
    description:
      "Programunk részeként betekintést kaphatunk a felsőoktatás lehetőségeibe. Megismerhetjük ezeknek fontos elemeit és különbségeit is. Mindezt oktatással foglalkozó szakemberek tanácsai és szakértő előadóink tapasztalatai, karrierútjai segítik.",
  },
]

const values = [
  {
    icon: Target,
    title: "Küldetésünk",
    description:
      "Szerintünk a pénzügyi tudatosság kiemelten fontos már fiatal korban is. Ezért célunk olyan tájékozottságot adni diákoknak a pénzügyek terén, amely a mindennapjainkban is hasznosítható, azonban a középiskolás tantervből hiányzik.",
  },
  {
    icon: Lightbulb,
    title: "Víziónk",
    description:
      "Szeretnénk egy olyan programot felépíteni, amely országszerte valódi alapot ad a középiskolásoknak a pénzügyeik megértéséhez és kezeléséhez, olyan tudást, ami segít nekik eligazodni a mindennapokban, és megalapozza a jövőjüket is.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.jpg"
              alt="FLC About"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-primary/90 opacity-70" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-primary-foreground">
                A klubunkról
              </h1>
              <p className="text-lg text-pretty leading-relaxed text-primary-foreground/90">
                A Financial Literacy Club 2024 májusában alakult, azzal a céllal, hogy
                diákok számára biztosítson alapvető és a mindennapokban releváns pénzügyi ismereteket, amelyek a középiskolai oktatásból gyakran hiányoznak. Bár a klubot diákok vezetik, az oktatási programokat és tevékenységeket szakértő támogatók és partnerek segítik, hogy hasznos és praktikus ismereteket sajátíthassanak el diákjaink.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Mit nyújtunk?</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Klubunk átfogó pénzügyi oktatást nyújt különböző tevékenységeken és programokon keresztül.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="border-border hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-center">A csapatunk</h2>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/flc-team-2025.jpeg"
                  alt="Financial Literacy Club csapata 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground text-pretty leading-relaxed">
                Diákokból álló lelkes csapatunk dolgozik azon, hogy az alapvető pénzügyi tudatosságot elérhetővé tegyük minden középiskolás számára Budapesten.
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Csatlakozz közösségünkhöz</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
                Akár teljesen kezdő vagy, akár már van némi előzetes tudásod, szeretettel várunk klubunkban. Minden héten találkozunk és minden diákot szívesen látunk az Eötvös József Gimnáziumból.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:ejgfinance@gmail.com"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Lépj kapcsolatba
                </a>
                <a
                  href="/schedule"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Naptár megtekintése
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
