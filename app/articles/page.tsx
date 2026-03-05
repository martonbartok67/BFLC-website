import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, TrendingUp, BookOpen, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.jpg"
              alt="FLC Articles"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-primary/90 opacity-70" />
          </div>
          <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-100">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm text-primary-foreground/90">Klubunk írásai</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-primary-foreground">
                Cikkek
              </h1>
              <p className="text-lg text-pretty leading-relaxed text-primary-foreground/90">
                Klubtagjaink által írt cikkek a pénzügyi tudatosságról, ennek fontosságáról vagy különböző témaköreiről. Publikáld itt Te is a cikkeid!
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="bg-card rounded-lg shadow-sm border p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <TrendingUp className="w-3 h-3" />
                      Pénzügyi tudatosság
                    </span>
                    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Lightbulb className="w-3 h-3" />
                      Oktatás
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-primary">
                    Pénzügyi tudatosság tinédzserként? Miért kell időben elkezdeni?
                  </h1>

                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-l-4 border-primary pl-4 py-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">Balogh Bendegúz & Bartók Márton</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2025. 02. 06.</span>
                    </div>
                  </div>
                </div>

                <div className="w-16 h-1 bg-primary/20 rounded-full mb-8" />

                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed">
                    Egyre többen találjuk magunkat szemben azzal, hogy tinédzserként nincsenek alapvető pénzügyi
                    ismereteink, holott a gazdasági környezet kihívásai – például az árak gyors növekedése – minket is
                    napi szinten érintenek. Az ismereteink korai bővítése és a tudatos pénzkezelés elsajátítása nemcsak
                    a jövőnk megalapozásában segít, hanem abban is, hogy magabiztosabbá váljunk pénzügyi döntéseinkben.
                  </p>

                  <p className="mb-6 leading-relaxed">
                    Diákként úgy gondoljuk, hogy minél hamarabb elkezdünk foglalkozni a pénzügyi tudatossággal, annál
                    könnyebben navigálhatjuk pénzügyileg a jövőnket. Szerencsére a fiatalok körében egyre ismertebb és
                    gyakoribb téma mind a pénzügyek, mind a vállalkozás világa, ahol a tájékozódáshoz elengedhetetlen a
                    tudatosság. Saját magunkból kiindulva, hogy milyen hasznos lenne az ilyen témájú oktatás, diákként
                    mi is tettünk ennek érdekében.
                  </p>

                  <p className="mb-8 leading-relaxed">
                    Na de hogyan érdemes belevágni, és miért különösen fontos ez a mai világban? Cikkünkben ezekre a
                    kérdésekre keressük a választ.
                  </p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      1
                    </span>
                    A pénzügyi ismeretek hiányának hatásai
                  </h2>

                  <p className="mb-6 leading-relaxed">
                    A pénzügyi tudás hiánya gyakran vezet impulzusvásárláshoz és a megtakarítások elmaradásához, ami
                    rövid és hosszú távon is súlyos problémákat okozhat a fiatalok számára. Sok tizenéves, megfelelő
                    ismeretek nélkül, hajlamos hirtelen döntéseket hozni költekezéskor: például egy új fülhallgató vagy
                    divatos ruhadarab megvásárlása rövid távon örömöt ad, de tervezés nélkül ezek a kiadások könnyen
                    felboríthatják a havi költségvetést, anyagi stresszt okozva ezzel.
                  </p>

                  <p className="mb-6 leading-relaxed">
                    Bár tinédzserként még többnyire zsebpénzből gazdálkodunk, a költségvetés vezetésének hiánya miatt
                    sokan már most sem látják át reálisan pénzügyi helyzetüket, és nehezen terveznek a jövőre. Az MNB
                    2024-es felmérése szerint a lakosság pénzügyi egészségét 100 pontos skálán mérve az átlagos index
                    mindössze 53 pontot ér el, és a lakosság 14 százalékának kifejezetten alacsony, 30 pont alatti az
                    eredménye. Pozitívum azonban, hogy a 'kontroll a pénzügyek felett' alindexben már a fiatalok – 30 év
                    alatti korosztály – érik el a legmagasabb pontszámot.
                  </p>

                  <p className="mb-8 leading-relaxed">
                    A digitális korszak előrehaladtával egyre fiatalabb korosztályokat érnek el a pénzügyi impulzusok és
                    reklámok. Az interneten számtalan üzenettel találkozunk, amelyek a gyors meggazdagodás ígéretét,
                    különböző online kurzusok és tréningek reklámozását, valamint olyan e-kereskedelmi modelleket
                    népszerűsítenek, mint az affiliate marketing vagy a dropshipping. Ezek a hatások – főleg, ha még
                    nincs munkatapasztalatunk – könnyen torzított pénzügyi világképet, értékrendet eredményezhetnek -
                    ahol nem tudjuk a pénz "valódi értékét".
                  </p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3 text-primary">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      2
                    </span>
                    A pénzügyi oktatás Magyarországon - hiánya és lehetőségek
                  </h2>

                  <p className="mb-6 leading-relaxed">
                    Magyarországon az iskolai tantervekben szinte egyáltalán nem szerepelnek átfogó, gyakorlati pénzügyi
                    ismeretek, így a diákok nem tanulják meg időben például a költségvetés-készítés, a megtakarítás vagy
                    a kockázatkezelés alapjait. Sokan az interneten próbálnak önállóan tájékozódni, de ez időigényes, és
                    a források önmagukban nem elegendők ahhoz, hogy ténylegesen megalapozzák a tudatos pénzügyi
                    szemléletet.
                  </p>

                  <p className="mb-6 leading-relaxed">
                    Léteznek olyan kezdeményezések – például az OTP Fáy András program vagy a BeEconomist –, amelyek
                    némi segítséget nyújthatnak, ám sajnos ezek kevésbé ismertek vagy nem mindenki számára
                    hozzáférhetők.
                  </p>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8 text-primary">
                    <p className="leading-relaxed font-medium text-primary">
                      Mi azzal a céllal hoztuk létre tavaly májusban a Budapest Financial Literacy Club-ot az Eötvös
                      József Gimnáziumban, hogy középiskolás diákok számára biztosítson alapvető és releváns pénzügyi
                      ismereteket heti rendszerességgel, szakértők előadásain és workshopokon keresztül. Jelenleg számos
                      budapesti gimnáziummal állunk kapcsolatban, és diákjaik számára teljes mértékben elérhető
                      programunk.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      3
                    </span>
                    Hogyan segíthet személyes szinten a pénzügyi oktatás?
                  </h2>

                  <p className="mb-6 leading-relaxed">
                    Már az gimnáziumi éveink alatt is naponta kerülünk döntéshelyzetekbe, – Megvegyem-e ezt a
                    hamburgert, vagy inkább használjam fel ezt a pénzt majd valami másra? – és ilyenkor tudjuk
                    lefektetni a pénzünk kezeléséhez való hozzáállásunk alapjait. Kisebb összegekkel való gazdálkodás
                    során a fiatalok hamarabb megismerhetik és korrigálhatják pénzügyi hibáikat.
                  </p>

                  <p className="mb-6 leading-relaxed">
                    Ez stabil alapot nyújt a későbbiekben költségvetés vezetéséhez és konkrét lépések megfogalmazásához
                    a költségek kiegyensúlyozása érdekében, hiszen az ezt követő időszakban, – legyen ez egyetem, vagy
                    akár belevágás a munka világába – már nagyobb jelentőségű döntéseket hozunk, nagyobb összegekkel.
                    Ehhez kiemelten fontos minél hamarabb találkozni megfelelő pénzügyi oktatással, ami azonban nem
                    ekvivalens a bonyolult közgazdasági ismeretekkel, hanem egyszerű és elérhető eszközök saját
                    életünkre való alkalmazásáról szól.
                  </p>

                  <p className="mb-6 leading-relaxed">
                    A megtakarítás fontos, hogy megvalósíthassuk terveinket és ne kényszerüljünk nehéz helyzetekbe nem
                    várt kiadásokkal. A tudatosság az ilyen célokra és szituációkra való felkészültség során testesül
                    meg. Szintén az MNB felmérése szerint, a megtakarítási és törekvést mutató alindexben a 30 év
                    alattiak vannak az élen ami jó tendenciát mutat, de még ígyis a magyarok kevesebb mint ötöde érzi
                    úgy, hogy sikerül felkészülnie a nyugdíjas évekre.
                  </p>

                  <p className="mb-8 leading-relaxed">
                    Bár tizenévesen önmagában még kevésbé releváns, de akár ha már hamarabb vállalkozást indítunk, képbe
                    kerül az adózás kérdése is. Mindenki számára elengedhetetlen lesz ismerni az adórendszer alapvető
                    működését: hogyan számoljuk ki adóinkat, milyen adókedvezmények vehetők igénybe, és hogyan lehet
                    optimalizálni az adófizetést, így létfontosságú ezen a téren is tájékozódnunk.
                  </p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      4
                    </span>
                    Jövőkép: A pénzügyi tudatosság hosszú távú hatása
                  </h2>

                  <p className="mb-6 leading-relaxed">
                    A pénzügyi készségek fejlesztése hozzájárul a személyes fejlődéshez is: növeli önfegyelmet,
                    felelősségtudatot és csökkenti a sebezhetőségünket az átverések és impulzusvásárlások ellen is.
                  </p>

                  <p className="mb-8 leading-relaxed">
                    Ha egyre többen szerzik meg fiatal korban ezeket az alapokat, az nemcsak az egyéni élethelyzetekre,
                    hanem a társadalom egészére is pozitív hatást gyakorol. Amikor a lakosság egyre nagyobb része képes
                    előrelátóan tervezni, biztonsági tartalékot kialakítani és reális célokat kitűzni, akkor mérséklődik
                    a pénzügyi kiszolgáltatottság, és egy olyan társadalmi szféra alakul ki, ahol a tudatosság és a
                    stabilitás kerül előtérbe. Ezek a folyamatok nemcsak a mostani fiatal generáció életkilátásait
                    javítják, hanem a jövő nemzedékei számára is kiszámíthatóbb, kiegyensúlyozottabb alapokat
                    teremtenek.
                  </p>

                  <div className="w-16 h-1 bg-primary/20 rounded-full my-12 mx-auto" />

                  <div className="text-center text-muted-foreground mt-12 pt-8 border-t">
                    <p className="font-medium mb-2">2025. 02. 06.</p>
                    <p className="text-lg">Balogh Bendegúz & Bartók Márton</p>
                    <p className="text-sm">11. osztályos diákok - a Financial Literacy Club vezetősége</p>
                  </div>

                  <div className="mt-12 pt-8 border-t">
                    <h3 className="text-sm font-semibold mb-4 text-muted-foreground">Források:</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>
                        1.{" "}
                        <a
                          href="https://www.mnb.hu/sajtoszoba/sajtokozlemenyek/2024-evi-sajtokozlemenyek/a-penzugyi-egeszseg-nem-csupan-az-anyagi-helyzettol-fugg"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          MNB - A pénzügyi egészség nem csupán az anyagi helyzettől függ
                        </a>
                      </li>
                      <li>
                        2.{" "}
                        <a
                          href="https://beconomist.hu/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          BeEconomist
                        </a>
                      </li>
                      <li>
                        3.{" "}
                        <a
                          href="https://www.otpfayalapitvany.hu/web/aloldal/digitalis_oktatasi_program"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          OTP Fáy András Alapítvány - Digitális oktatási program
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">További tartalmak</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">További cikkek hamarosan!</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                  Klubtagjaink folyamatosan dolgoznak új, érdekes és informatív cikkeken különböző pénzügyi témákban.
                  Kövess minket a közösségi médiában, hogy értesülj az új tartalmakról!
                </p>
                <Button asChild size="lg">
                  <a href="https://www.instagram.com/budapestflc/" target="_blank" rel="noopener noreferrer">
                    Kövess Instagramon
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
