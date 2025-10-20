import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Trophy, Calendar, Users } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CompetitionsPage() {
  const competitions = [
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
      deadline: "Jelenleg nem ismert",
      date: "Jelenleg nem ismert",
      description:
        "Egy esettanulmányi verseny középiskolásoknak, ahol a vállalkozói szemlélet és előadásmód mellett a csapatmunka és a praktikus képességek kerülnek a középpontba.",
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
                Versenyek
              </h1>
              <p className="text-lg text-pretty leading-relaxed text-primary-foreground/90">
                Vegyél részt izgalmas pénzügyi, közgazdasági vagy esettanulmányi versenyeken! Értékes képességek és ismeretek elsajátítása mellett a CV-d színesítésére is kiváló lehetőség.
              </p>
            </div>
          </div>
        </section>

        {/* Competitions List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
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
        </section>
      </main>
      <Footer />
    </>
  )
}
