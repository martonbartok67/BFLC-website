import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Trophy, Calendar, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CompetitionsPage() {
  const events: { title: string; date: string; location: string; description: string; link: string }[] = []

  const competitions = [
    {
      title: "Future Makers Innovációs és Gazdasági Verseny",
      deadline: "2026. március 4. 23:59",
      date: "Jelenleg nem ismert",
      description:
        "Szívesen kipróbálnád magad innovátorként, agrárgazdasági problémák megoldójaként? Most itt a lehetőség, hogy megmutasd, mit tudsz! Légy Te a jövő innovatív vállalkozója! A Future Makers 2026 középpontjában valós innovációs és gazdasági kihívások állnak. A verseny célja, hogy a résztvevők kreatív ötleteken és stratégiai gondolkodáson keresztül dolgozzanak fel egy gyakorlati problémát.",
      eligibility: "Középiskolás diákcsapatok",
      link: "https://futuremakers.hu/",
    },
    {
      title: "K&H Vigyázz, kész, pénz!",
      deadline: "2026. január 23.",
      date: "2026. január 23. - 1. teszt leadási határidő",
      description:
        "Felnőttként szeretnél majd Te is okos pénzügyi döntéseket hozni? A K&H társadalmi felelősségvállalásának részeként 2010-ben éppen ezért indította el a K&H Vigyázz, kész, pénz! pénzügyi vetélkedőt.",
      eligibility: "Középiskolai diákcsapatok, legfeljebb 11.-es korig.",
      link: "https://vigyazzkeszpenz.kh.hu/versenyrol.php",
    },
    {
      title: "KEBA Student Investor Challenge",
      deadline: "2025. november 19.",
      date: "2025. 11. 19–26. - 1. teszt; 2025. 12. 10. - 1. döntő",
      description:
        "A töri és a kémia mellett érdemes lenne a pénzről és a befektetésekről is tanulni? Ha ezzel egyetértesz, a legjobb helyen jársz, hiszen a 'Tőzsdejáték Középiskolásoknak!' hazánk leghosszabb múlttal rendelkező pénzügyi versenye",
      eligibility: "9–12. osztályos diákok, 3 fős csapatok.",
      link: "https://kebaverseny.hu/",
    },
    {
      title: "High School Business Challenge",
      deadline: "2025. november 7.",
      date: "Online forduló 2025. 10. 11 – 11. 20.; országos döntő 2025. december",
      description:
        "A High School Business Challenge egy üzleti verseny, amely középiskolás diákokat céloz meg, akik érdeklődnek a gazdaság és az üzleti élet iránt. A pályázaton kívül a projekt küldetése a vállalkozói készség és a fiatalok kompetenciafejlesztésének elősegítése.",
      eligibility: "Középiskolai csapatok.",
      link: "https://businessismore.eu/",
    },
    {
      title: "A4S International Case Competition",
      deadline: "2025. december 14.",
      date: "Elődöntő: 2026. február 9–13, Döntő: 2026. március",
      description:
        "The A4S International Case Competition is an exciting opportunity for students across the globe to help shape a future where sustainable business is business as usual. This is the chance for your ideas to be seen and heard by leaders from some of the world’s largest and most influential companies.",
      eligibility: "Diákcsapatok (egyetemi diákok is).",
      link: "https://www.accountingforsustainability.org/en.html",
    },
    {
      title: "Cégre fel!",
      deadline: "2025. november 30.",
      date: "1. forduló: december 01-07; 2. forduló: január 10-25, 2026; Döntő: február 27, 2026",
      description:
        "Egy esettanulmányi verseny középiskolásoknak, ahol a vállalkozói szemlélet és előadásmód mellett a csapatmunka és a praktikus képességek kerülnek a középpontba. Az 1. forduló tesztkérdéseket és összetett feladatokat tartalmaz, a 2. fordulóban üzleti terv és pitch készítésére kerül sor. A döntőbe jutva szakértőkből álló zsűri előtt prezentálhatjátok megoldásaitokat Budapesten, a legjobb csapatok pedig értékes nyereményekben részesülnek!",
      eligibility: "Középiskolás diákcsapatok - 3 fő.",
      link: "https://cegrefel.hu/",
    },
    {
      title: "JÉG Középiskolás verseny",
      deadline: "jelentkezés hamarosan",
      date: "Jelenleg nem ismert",
      description:
        "Azok számára, akiket érdekel a közgazdaságtudomány, a verseny mélyebb ismereteket ad, a többieknek pedig lehetőséget, hogy jobban betekinthessenek ebbe a színes és sokoldalú területbe.",
      eligibility: "Középiskolás diákcsapatok - 3 fő",
      link: "https://jovotepitok.hu/kozepiskolas-verseny/",
    },
    {
      title: "Start Ideathlon",
      deadline: "2025. október 26.",
      date: "1. alkalom: 2025. november 29.",
      description:
        "A START Ideathon a 16-20 éves középiskolás diákok ötletversenye. A  folyamatos mentorálás és támogatás célja a vállalkozói kedv felkeltése, a vállalkozói tehetség korai felismerése és a közösségépítés.",
      eligibility: "Középiskolás diákcsapatok",
      link: "https://nemzetitehetsegprogram.hu/program/start-ideathon",
    },
    {
      title: "Blue Ocean Competition",
      deadline: "2026. február 22.",
      date: "Leadási határidő: 2026.február 22.",
      description:
        "The Blue Ocean Student Entrepreneur Competition is a virtual competition that attracts the very best high school aged entrepreneurs from all over the world. Here, students pitch their innovative business concepts to experienced entrepreneurs and business-people, receive feedback on their ideas, join a community of like-minded students, and compete for thousands in cash prizes.",
      eligibility: "Középiskolás diákcsapatok vagy egyéni versenyzők",
      link: "https://blueoceancompetition.org/",
    },
    {
      title: "KÖB Középiskolás Ötletbörze",
      deadline: "2026. május 24.",
      date: "jelenleg nem ismert",
      description:
        "A KÖB célja olyan innovatív ötletekre épülő csapatok kiválasztása és támogatása, akik a versenyt követően is képesek lehetnek az általuk kitalált ötletek alapján üzleti modellek kialakítására, erre építve sikeres vállalkozások működtetésére. Megmutathatjátok CSAPATOTOK mennyire jártas új, innovatív termékek, szolgáltatások ötleteinek kitalálásában, kidolgozásában, prezentálásában.",
      eligibility: "Középiskolás diákcsapatok - 3 fő",
      link: "https://www.gtk.uni-pannon.hu/hu/kob2025/",
    },
    {
      title: "Közgazdasági Diákolimpiára",
      deadline: "jelentkezés hamarosan",
      date: "jelenleg nem ismert",
      description:
        "A verseny célja, hogy a középiskolások számára játékos tanulási lehetőséget biztosítson, amely során bővíthetik közgazdasági-pénzügyi ismereteiket, és a legjobbak értékes nyereményekben is részesülhetnek. Mindennek tetejébe pedig az egyes országok legjobb diákjai egymással is összemérhetik tudásukat a nemzetközi döntőben!",
      eligibility: "Középiskolás diákcsapatok - 3 fő",
      link: "https://kozgazdasagiolimpia.hu/",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.jpg"
              alt="FLC Competitions"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-primary/90 opacity-70" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-primary-foreground">
                Versenyek és Események
              </h1>
              <p className="text-lg text-pretty leading-relaxed text-primary-foreground/90">
                Vegyél részt izgalmas pénzügyi, közgazdasági vagy esettanulmányi versenyeken, valamint inspiráló
                eseményeken! Értékes képességek és ismeretek elsajátítása mellett a CV-d színesítésére is kiváló
                lehetőség.
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Események</h2>
                <p className="text-muted-foreground text-lg">
                  Konferenciák és egyéb izgalmas események, ahol bővítheted tudásod és kapcsolataidat
                </p>
              </div>

              <div className="space-y-8">
                {events.map((event, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-colors bg-card">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{event.title}</CardTitle>
                      <CardDescription className="space-y-1 text-base">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            <strong>Időpont:</strong> {event.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>
                            <strong>Helyszín:</strong> {event.location}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground leading-relaxed">{event.description}</p>
                      <Button asChild>
                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                          További információ és regisztráció
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competitions List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Versenyek</h2>
                <p className="text-muted-foreground text-lg">
                  Pénzügyi, közgazdasági és esettanulmányi versenyek középiskolásoknak
                </p>
              </div>

              <div className="space-y-8">
                {competitions.map((competition, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{competition.title}</CardTitle>
                      <CardDescription className="space-y-1 text-base">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            <strong>Jelentkezési határidő:</strong> {competition.deadline}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            <strong>Verseny időpontja:</strong> {competition.date}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground leading-relaxed">{competition.description}</p>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Ki jelentkezhet:</strong> {competition.eligibility}
                        </span>
                      </div>
                      <Button asChild>
                        <a href={competition.link} target="_blank" rel="noopener noreferrer">
                          További információ
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
