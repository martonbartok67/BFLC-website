import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Presentation, Trophy, Users, Briefcase, Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

const features = [
  {
    icon: Presentation,
    title: "Sokszínű alkalmak",
    description:
      "A rendszeres saját és vendég előadásokat interaktív workshopok és beszélgetések is kiegészítik, így biztosítva, hogy minél változatosabb formában adhassunk át hasznosítható ismereteket és újdonságokat. Az év során modulszerű egységek biztosítják a strukturált tudásépítést.",
  },
  {
    icon: Users,
    title: "Soft skill-ek fejlesztése",
    description:
      "Csapatmunkán, beszélgetéseken és prezentációkon át nyújtunk lehetőséget a nyilvános beszédkészség, kritikus gondolkodás, csapatmunka és vezetői képességek fejlesztésére is. Ezek mindannyiunk jövőjében (és jelenjében is!) kiemelten fontos készségek, hiszen minden közösségben szükségünk lesz rájuk.",
  },
  {
    icon: Briefcase,
    title: "Karrier- és kapcsolatépítés",
    description:
      " Építs ki az előadások és céglátogatások alkalmával már most olyan kapcsolatrendszert, amely karriered alapját képezheti. Kapcsolódj diák társaiddal és akár szakértőkkel is ezen alkalmakkor. ",
  },
  {
    icon: Trophy,
    title: "Pályaorientáció",
    description:
      "Programunk részeként betekintést kaphatunk felsőoktatási lehetőségekbe, megismerkedünk azok meghatározó elemeivel és különbségeivel is. Mindezt oktatással foglalkozó szakemberek tanácsai és szakértő előadóink tapasztalatai, karrierútjai segítik.",
  },
]

const values = [
  {
    icon: Target,
    title: "Küldetésünk",
    description:
      "Szerintünk a pénzügyi tudatosság kiemelten fontos már fiatal korban is. Ezért célunk olyan tájékozottságot adni diákoknak a pénzügyek terén, amely a mindennapjainkban is hasznosítható, azonban a középiskolai oktatásból hiányzik.",
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
        {/* Light background, split layout. The team photo has been buried below
            the fold on this page since launch -- moving it to the hero makes
            the club feel real immediately, before anyone reads anything. */}
        <section className="relative overflow-hidden bg-background border-b border-border">
          <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/[0.05] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

              <Reveal>
                <SectionLabel align="start">Rólunk</SectionLabel>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
                  Klubunkról
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  A Financial Literacy Club 2024 májusában alakult, azzal a céllal, hogy diákok számára biztosítson
                  alapvető és a mindennapokban releváns pénzügyi ismereteket, amelyek a középiskolai oktatásból
                  gyakran hiányoznak.
                </p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-px w-8 bg-primary/30" />
                  <span>Alapítva: 2024. május · Eötvös József Gimnázium</span>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/[0.06]">
                  <Image
                    src="/images/flc-team-2025.jpeg"
                    alt="A Budapest Financial Literacy Club csapata 2025-ben"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                </div>
              </Reveal>

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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-center">Csapatunk</h2>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/flc-team-2025.jpeg"
                  alt="Financial Literacy Club csapata 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground text-pretty leading-relaxed">
                Mi azzal a céllal hoztuk létre 2024 májusában a Budapest Financial Literacy Club-ot, hogy középiskolás diákok számára biztosítson alapvető és releváns pénzügyi ismereteket
                heti rendszerességgel, szakértők előadásain, interaktív workshopokon és céglátogatásokon keresztül. Jelenleg számos budapesti
                és vidéki gimnáziummal állunk kapcsolatban, és diákjaik számára teljes mértékben elérhető programunk.
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Csatlakozz közösségünkhöz</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
                Akár teljesen kezdő vagy, akár már van némi előzetes tudásod, szeretettel várunk klubunkban. Minden
                diákot szívesen látunk bármely középiskolából!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:bflc@bflc.hu"
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
