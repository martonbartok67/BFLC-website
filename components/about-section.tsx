import Link from "next/link"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

const features = [
  {
    title: "Sokszínű alkalmak",
    description:
      "Rendszeres vendégelőadások mellett, interaktív workshopok és beszélgetések színesítik alkalmainkat és garantálják, hogy minél több felületen találkozzunk hasznosítható tudással és újdonságokkal. Az év során modulszerű egységek biztosítják a strukturált tudásépítést.",
  },
  {
    title: "Soft skillek fejlesztése",
    description:
      "Csapatmunkán, beszélgetéseken és prezentációkon át nyújtunk lehetőséget a nyilvános beszédkészség, kritikus gondolkodás, csapatmunka és vezetői képességek fejlesztésére. Ezek mindannyiunk jövőjében (és jelenjében is!) kiemelten fontos készségek, hiszen minden közösségben szükségünk lesz rájuk.",
  },
  {
    title: "Kapcsolatépítés és karrier",
    description:
      "Kialakíthatsz értékes kapcsolatokat diáktársaiddal és szakértőkkel, részt vehetsz céglátogatásokon és előadásokon, és építhetsz olyan kapcsolatrendszert, amely karriered alapját képezheti.",
  },
  {
    title: "Pályaorientáció",
    description:
      "Programunk részeként betekintést kaphatunk a felsőoktatás lehetőségeibe. Megismerhetjük ezeknek fontos elemeit és különbségeit is. Mindezt oktatással foglalkozó szakemberek tanácsai és szakértő előadóink tapasztalatai, karrierútjai segítik.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-background lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel>Rólunk</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">A klubunkról</h2>
          <p className="text-lg text-pretty leading-relaxed text-foreground">
            A Financial Literacy Club 2024 májusában alakult, azzal a céllal, hogy diákok számára biztosítson alapvető
            és a mindennapokban releváns pénzügyi ismereteket, amelyek a középiskolai oktatásból gyakran hiányoznak. Bár
            a klubot diákok vezetik, az oktatási programokat és tevékenységeket szakértő támogatók és partnerek segítik,
            hogy hasznos és praktikus ismereteket sajátíthassanak el diákjaink.
          </p>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <Link
              href="/about"
              className="inline-flex text-4xl font-bold leading-tight text-primary text-balance transition-colors hover:text-[#0a1a47] sm:text-5xl"
            >
              Mit nyújtunk?
            </Link>
          </Reveal>

          <div className="border-t border-primary/15">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.08}>
                <article className="group grid gap-5 border-b border-primary/15 py-8 transition-colors hover:bg-primary/[0.025] lg:grid-cols-[0.75fr_1.25fr]">
                  <h3 className="max-w-xl text-2xl font-semibold leading-tight text-primary text-balance transition-colors group-hover:text-[#0a1a47] sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base lg:pt-2">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
