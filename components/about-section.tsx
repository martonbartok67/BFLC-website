import { Card, CardContent } from "@/components/ui/card"
import { Presentation, Trophy, Users, Briefcase } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

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

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-background lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">A klubunkról</h2>
          <p className="text-lg text-pretty leading-relaxed text-foreground">
            A Financial Literacy Club 2024 májusában alakult, azzal a céllal, hogy diákok számára biztosítson alapvető
            és a mindennapokban releváns pénzügyi ismereteket, amelyek a középiskolai oktatásból gyakran hiányoznak. Bár
            a klubot diákok vezetik, az oktatási programokat és tevékenységeket szakértő támogatók és partnerek segítik,
            hogy hasznos és praktikus ismereteket sajátíthassanak el diákjaink.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={index} delay={index * 0.1}>
                <Card
                  className="border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary text-background transition-transform hover:scale-110 hover:rotate-6">
                      <Icon className="h-6 w-6 text-background" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 bg-card text-popover-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
