"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"
import { TextReveal } from "@/components/motion/text-reveal"
import { motion, useReducedMotion } from "framer-motion"

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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">

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

        {/* ── About: dark editorial section ─────────────────────────────
            Uses the original "Csapatunk" + "Mit nyújtunk?" text verbatim.
            The problem was never the text — it was the same card pattern
            as the homepage. Here the founding paragraph runs at editorial
            scale in dark navy, and the four features sit below as a clean
            typographic 2×2 grid instead of duplicated card components. */}
        <section className="relative bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#C5B0E1]/[0.04] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative z-10">
            <div className="max-w-6xl mx-auto">

              {/* Founding statement — word-by-word scroll reveal at editorial scale */}
              <div className="mb-16">
                <Reveal className="mb-6">
                  <SectionLabel tone="light" align="start">A klubunkról</SectionLabel>
                </Reveal>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-primary-foreground/90 max-w-4xl">
                  <TextReveal
                    scroll
                    text="Mi azzal a céllal hoztuk létre 2024 májusában a Budapest Financial Literacy Club-ot az Eötvös József Gimnáziumban, hogy középiskolás diákok számára biztosítson alapvető és releváns pénzügyi ismereteket heti rendszerességgel, szakértők előadásain, interaktív workshopokon és céglátogatásokon keresztül. Jelenleg számos budapesti és vidéki gimnáziummal állunk kapcsolatban, és diákjaik számára teljes mértékben elérhető programunk."
                    wordDelay={0.04}
                  />
                </p>
              </div>

              {/* Four features as typographic 2×2 grid — original text, no card clones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 border-t border-white/10 pt-12">
                {[
                  {
                    title: "Sokszínű alkalmak",
                    text: "Rendszeres vendégelőadások mellett, interaktív workshopok és beszélgetések színesítik alkalmainkat és garantálják, hogy minél több felületen találkozzunk hasznosítható tudással és újdonságokkal. Az év során modulszerű egységek biztosítják a strukturált tudásépítést.",
                  },
                  {
                    title: "Soft skillek fejlesztése",
                    text: "Csapatmunkán, beszélgetéseken és prezentációkon át nyújtunk lehetőséget a nyilvános beszédkészség, kritikus gondolkodás, csapatmunka és vezetői képességek fejlesztésére. Ezek mindannyiunk jövőjében és jelenjében is kiemelten fontos készségek.",
                  },
                  {
                    title: "Kapcsolatépítés és karrier",
                    text: "Kialakíthatsz értékes kapcsolatokat diáktársaiddal és szakértőkkel, részt vehetsz céglátogatásokon és előadásokon, és építhetsz olyan kapcsolatrendszert, amely karriered alapját képezheti.",
                  },
                  {
                    title: "Pályaorientáció",
                    text: "Programunk részeként betekintést kaphatunk a felsőoktatás lehetőségeibe. Megismerhetjük ezek fontos elemeit és különbségeit is. Mindezt oktatással foglalkozó szakemberek tanácsai és szakértő előadóink tapasztalatai, karrierútjai segítik.",
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="flex flex-col gap-2">
                      <motion.span
                        aria-hidden="true"
                        className="block h-px bg-white/50 mb-1 origin-left"
                        style={{ width: "2rem" }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
                      />
                      <h3 className="text-base font-semibold text-primary-foreground">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
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
