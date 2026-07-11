import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

// Mission + Vision — unique to this page, not on the homepage
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

// Timeline — the one thing this page has that the homepage doesn't.
// Content drawn from what's verifiably stated on the site.
const timeline = [
  {
    date: "2024. május",
    title: "Megalakul a klub",
    description:
      "A Budapest Financial Literacy Club az Eötvös József Gimnáziumban jön létre. Célja: alapvető és mindennapokban releváns pénzügyi ismeretek diákoknak, amelyek a középiskolai oktatásból hiányoznak.",
  },
  {
    date: "2024. szeptember",
    title: "Rendszeres csütörtöki alkalmak",
    description:
      "Megkezdődnek a heti foglalkozások: saját előadások, interaktív workshopok, vendégelőadók — strukturált, modulszerű tudásépítéssel.",
  },
  {
    date: "2024–2025",
    title: "Versenyek, céglátogatások, európai szint",
    description:
      "A klub diákjai pénzügyi és közgazdasági versenyeken vesznek részt, céglátogatásokon és az Európai Parlamentben is megjelennek.",
  },
  {
    date: "2025",
    title: "Bővülés több iskolára",
    description:
      "Számos fővárosi és vidéki gimnázium diákjai számára is elérhetővé válik a program. A klub nyitott minden középiskolásnak.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* ── Hero: light split layout, team photo ──────────────────────── */}
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

        {/* ── Timeline ──────────────────────────────────────────────────────
            Replaces the "Mit nyújtunk?" card grid (identical to the homepage
            bento section) and the duplicate team photo in "Csapatunk".
            A timeline is the one content type that belongs only on this page
            and can't exist on the homepage. */}
        <section className="py-20 sm:py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center mb-16">
              <SectionLabel>Történetünk</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">Hogyan kezdődött</h2>
            </Reveal>

            <div className="max-w-2xl mx-auto relative">
              {/* Vertical track */}
              <div aria-hidden="true" className="absolute left-3 top-2 bottom-2 w-px bg-border" />

              <div className="space-y-10">
                {timeline.map((event, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="relative pl-12">
                      {/* Dot */}
                      <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>

                      <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.18em] mb-1">
                        {event.date}
                      </span>
                      <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{event.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission + Vision ──────────────────────────────────────────────
            Not on the homepage — unique content this page justifies. */}
        <section className="py-20 sm:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center mb-12">
              <SectionLabel>Értékeink</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">Küldetés & Vízió</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <Card className="border-border hover:border-primary transition-colors h-full">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Csatlakozz közösségünkhöz</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
                Akár teljesen kezdő vagy, akár már van némi előzetes tudásod, szeretettel várunk klubunkban. Minden
                diákot szívesen látunk bármely középiskolából!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:bflc@bflc.hu"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]"
                >
                  Lépj kapcsolatba
                </a>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-8 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  Naptár megtekintése
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
