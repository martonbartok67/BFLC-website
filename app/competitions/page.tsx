import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Trophy, Calendar, Users, Sparkles, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

export default function CompetitionsPage() {
  const events: { title: string; date: string; location: string; description: string; link: string }[] = []

  const currentCompetitions = [
    {
      title: "High School Business Challenge",
      deadline: "2026. november 27.",
      date: "Online forduló: 2026. november 30. – december 14.; országos forduló: 2027. január 25. – február 13.; nemzetközi döntő: 2027. március 1–13.",
      description:
        "A Business is More által szervezett nemzetközi üzleti verseny középiskolásoknak. Háromfordulós megmérettetés valós üzleti kihívásokkal: az első forduló online teszt anyanyelven, a második (országos) forduló és a nemzetközi döntő esettanulmányokra épül, angol nyelven. A részvétel ingyenes, a nemzetközi döntő útiköltségét és szállását a szervezők állják, a díjazás 1. hely: 3000 €, 2. hely: 1500 €, 3. hely: 1000 €, 4. hely: 500 €.",
      eligibility: "Középiskolás csapatok (3–5 fő) vagy egyéni jelentkezők, akiket a szervezők csapatba osztanak.",
      link: "https://businessismore.eu/hu/regisztracio/",
    },
    {
      title: "K&H Vigyázz, kész, pénz!",
      deadline: "2027. január 22. 23:59",
      date: "1. forduló: 2027. január 22-ig; 2. forduló: február 22. – március 5.; regionális középdöntő: április 27–28.; országos döntő: június 1–2. (Budapest)",
      description:
        "A K&H immár 17. alkalommal rendezi meg pénzügyi vetélkedőjét. Az első három forduló online zajlik, a döntő személyes esemény lesz. A feladatok a mindennapi pénzköltéshez, takarékoskodáshoz és bankoláshoz kapcsolódnak; a felkészülést a vigyázz#KáPé vlog és app is segíti. A részvétel ingyenes.",
      eligibility: "3–11. évfolyamos általános és középiskolások, 3–5 fős csapatokban; négy korcsoportban.",
      link: "https://vigyazzkeszpenz.kh.hu/",
    },
    {
      title: "Blue Ocean Student Entrepreneur Competition",
      deadline: "2027. február 21. éjfél (helyi idő szerint)",
      date: "Pitchvideó leadása: 2027. február 21.; Top 500 és Top 100: április 5.; Top 30: április 22.; Top 10: május 4.; eredményhirdetés: május 13.",
      description:
        "Nemzetközi, teljesen online vállalkozói verseny középiskolásoknak: egy valós problémára épülő, innovatív üzleti ötletet kell bemutatni egy legfeljebb 5 perces, angol nyelvű videópitchben. A részvétel ingyenes, a pályázók egyénileg vagy legfeljebb 5 fős csapatban indulhatnak. Az első három helyezett 1000, 750, illetve 500 dollárt, a közönségdíjas 750 dollárt, továbbá regionális díjakat nyerhet.",
      eligibility: "Bárhonnan jelentkező középiskolások, egyénileg vagy legfeljebb 5 fős csapatban.",
      link: "https://blueoceancompetition.org/",
    },
    {
      title: "Legyél Te is Pénzügyi Junior Klasszis!",
      deadline: "2026. október 18. (lezárult)",
      date: "1. online forduló: 2026. október 20.; 2. online forduló: november 4–19.; országos döntő: december 10. (Budapest)",
      description:
        "A Privátbankár.hu pénzügyi tudatossági versenyén a csapatok pénzügyi alapismeretekből mérhetik össze tudásukat, és szakértők által összeállított tananyagokkal készülhetnek. Az első két forduló online, a budapesti országos döntő személyesen zajlik. A szervezők értékes nyereményeket, többek között tanulmányutat és ajándékutalványokat ajánlanak fel.",
      eligibility: "Technikumok és szakképző iskolák tanulói, 4 fős csapatokban, felkészítő tanárral.",
      link: "https://juniorklasszis.hu/",
    },
    {
      title: "Megoldások a holnapért kihívás",
      deadline: "2026. november 25.",
      date: "TOP30 kihirdetése: 2026. december 11.; fejlesztési program: 2027. január 9. – április 11.; TOP8 kihirdetése: március 2.; döntő: április 16.",
      description:
        "A Samsung Solve for Tomorrow hazai, EdisonKids által szervezett ötletversenyén valódi problémákra dolgozhattok ki megoldásokat mentorok segítségével. A négy hónapos programban design thinkinget, prezentálást és AI-eszközök használatát tanulhatjátok. A dobogós csapatok összesen 6 millió forint értékű Samsung-eszközt választhatnak; a TOP30-ba jutók oklevelet és referenciát kapnak.",
      eligibility: "7–12. évfolyamos diákok 2–4 fős csapatai, egy kísérőtanárral, edzővel vagy foglalkozásvezetővel.",
      link: "https://www.edisonkids.org/",
    },
    {
      title: "START Ideathon",
      deadline: "2026. december 13.",
      date: "A program január végén indul; online workshopok és mentorálás február–áprilisban; Demo Day: 2027. április 17. (Budapest)",
      description:
        "A Nemzeti Tehetség Program ötletversenyén mentorok támogatásával juthattok el az ötlettől a megoldás bemutatásáig, akár prototípusig is. A program fejleszti a vállalkozói gondolkodást, kreatív problémamegoldást és csapatmunkát. Az első három csapat tagjai három hónapon át havi 30 000 Ft ösztöndíjat és fejenként 150 000, 100 000, illetve 50 000 Ft értékű utalványt nyernek, valamint bekerülnek a következő évi START programba.",
      eligibility: "16–20 éves középiskolások, 2–5 fős csapatokban; Magyarországról és határon túlról is.",
      link: "https://nemzetitehetsegprogram.hu/program/start-ideathon",
    },
    {
      title: "FOXCONN Jövő Innovátora 2026",
      deadline: "2026. november 8. 23:59",
      date: "Shortlist: 2026. november 10.; zsűrizés: november 17.; eredményhirdetés és díjátadó: november 27.",
      description:
        "A Foxconn pályázata olyan szoftveres vagy hardveres technológiai újításokat keres, amelyek innovatívak, megvalósíthatók és üzletileg vagy társadalmilag hasznosak. A pályázat egy 1–2 perces bemutatkozó videóból és egy online űrlapban megválaszolt kérdésekből áll. A középiskolai kategória díjai: 500 000 Ft és szakmai mentoráció az első helyezettnek, 300 000 Ft a másodiknak, 200 000 Ft a harmadiknak.",
      eligibility: "16–22 éves, magyarországi lakóhellyel és érvényes diákstátusszal rendelkező fiatalok, egyénileg vagy csapatban.",
      link: "https://www.foxconn.hu/jovo-innovatora-2026-palyazat/",
    },
  ]

  const pastCompetitions = [
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
      title: "KEBA Student Investor Challenge",
      deadline: "2025. november 19.",
      date: "2025. 11. 19–26. - 1. teszt; 2025. 12. 10. - 1. döntő",
      description:
        "A töri és a kémia mellett érdemes lenne a pénzről és a befektetésekről is tanulni? Ha ezzel egyetértesz, a legjobb helyen jársz, hiszen a 'Tőzsdejáték Középiskolásoknak!' hazánk leghosszabb múlttal rendelkező pénzügyi versenye",
      eligibility: "9–12. osztályos diákok, 3 fős csapatok.",
      link: "https://kebaverseny.hu/",
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
        "Egy esettanulmányi verseny középiskolásoknak, ahol a vállalkozói szemlélet és előadásmód mellett a csapatmunka és a praktikus képességek kerülnek a középpontba. Az 1. forduló tesztkérdéseket és összetett feladatokat tartalmaz, a 2. fordulóban üzleti terv és pitch készítésére kerül sor. A döntőbe jutva szakértőkből álló zsűri előtt prezentálhatjátok megoldásaitokat Budapesten, a legjobb csapatok pedig értékes nyereményekben részesülhetnek!",
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
      <main id="main-content" className="pt-16">
        {/* Dark navy, left-aligned. The centered icon-above-title treatment was
            identical to every other page. Giant ghost trophy at low opacity gives
            it a visual signature without competing with the content. */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground">
          <div aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
            <Trophy strokeWidth={0.6} className="w-[28rem] h-[28rem] text-white/[0.05]" />
          </div>
          <div aria-hidden="true" className="absolute -top-16 left-1/3 w-80 h-80 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
            <div className="max-w-3xl">
              <Reveal>
                <SectionLabel tone="light" align="start">Versenyek & Események</SectionLabel>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
                  Versenyek és Események
                </h1>
                <p className="text-lg text-pretty leading-relaxed text-primary-foreground/85 max-w-2xl">
                  Vegyél részt izgalmas pénzügyi, közgazdasági vagy esettanulmányi versenyeken, valamint inspiráló
                  eseményeken! Értékes képességek és ismeretek elsajátítása mellett a CV-d színesítésére is kiváló lehetőség.
                </p>
              </Reveal>
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Versenyek · 2026/27</h2>
                <p className="text-muted-foreground text-lg">
                  Az idei tanév pénzügyi, vállalkozói és üzleti versenyei.
                </p>
              </div>

              <div className="border-t border-primary/15">
                {currentCompetitions.map((competition, index) => (
                  <article
                    key={competition.title}
                    className="group grid gap-5 border-b border-primary/15 py-8 transition-colors hover:bg-primary/[0.025] sm:grid-cols-[4rem_1fr] lg:grid-cols-[4rem_1fr_17rem]"
                  >
                    <div className="text-sm font-semibold tabular-nums text-primary/50 sm:pt-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="max-w-3xl text-3xl font-bold leading-tight text-primary text-balance transition-colors group-hover:text-[#0a1a47] sm:text-4xl">
                        {competition.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                        {competition.description}
                      </p>
                      <div className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                        <Users className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          <strong>Ki jelentkezhet:</strong> {competition.eligibility}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4 text-sm text-muted-foreground lg:pt-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>
                          <strong className="block text-foreground">Jelentkezési határidő</strong>
                          {competition.deadline}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>
                          <strong className="block text-foreground">Verseny időpontja</strong>
                          {competition.date}
                        </span>
                      </div>
                      <Button asChild variant="outline" className="mt-2">
                        <a href={competition.link} target="_blank" rel="noopener noreferrer">
                          További információ
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Korábbi versenyek · 2025/26</h2>
                <p className="text-lg text-muted-foreground">Az előző tanév versenyeinek archivált adatai.</p>
              </div>
              <div className="border-t border-primary/15">
                {pastCompetitions.map((competition, index) => (
                  <article
                    key={competition.title}
                    className="group grid gap-5 border-b border-primary/15 py-8 transition-colors hover:bg-background/70 sm:grid-cols-[4rem_1fr] lg:grid-cols-[4rem_1fr_17rem]"
                  >
                    <div className="text-sm font-semibold tabular-nums text-primary/50 sm:pt-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="max-w-3xl text-3xl font-bold leading-tight text-primary text-balance transition-colors group-hover:text-[#0a1a47] sm:text-4xl">
                        {competition.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                        {competition.description}
                      </p>
                      <div className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                        <Users className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span><strong>Ki jelentkezhet:</strong> {competition.eligibility}</span>
                      </div>
                    </div>
                    <div className="space-y-4 text-sm text-muted-foreground lg:pt-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span><strong className="block text-foreground">Jelentkezési határidő</strong>{competition.deadline}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span><strong className="block text-foreground">Verseny időpontja</strong>{competition.date}</span>
                      </div>
                      <Button asChild variant="outline" className="mt-2">
                        <a href={competition.link} target="_blank" rel="noopener noreferrer">
                          További információ<ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
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
                  Konferenciák és egyéb izgalmas események, ahol új dolgokat tanulhatsz és személyesen találkozhatsz a profikkal!
                </p>
              </div>

              <div className="border-t border-primary/15">
                {events.map((event, index) => (
                  <article
                    key={event.title}
                    className="group grid gap-5 border-b border-primary/15 py-8 transition-colors hover:bg-background/70 sm:grid-cols-[4rem_1fr] lg:grid-cols-[4rem_1fr_17rem]"
                  >
                    <div className="text-sm font-semibold tabular-nums text-primary/50 sm:pt-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="max-w-3xl text-3xl font-bold leading-tight text-primary text-balance sm:text-4xl">
                        {event.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                        {event.description}
                      </p>
                    </div>
                    <div className="space-y-4 text-sm text-muted-foreground lg:pt-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>
                          <strong className="block text-foreground">Időpont</strong>
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>
                          <strong className="block text-foreground">Helyszín</strong>
                          {event.location}
                        </span>
                      </div>
                      <Button asChild variant="outline" className="mt-2">
                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                          További információ és regisztráció
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </article>
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
