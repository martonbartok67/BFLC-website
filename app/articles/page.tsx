import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

const mccArticleUrl =
  "https://mcc.hu/hir/kozepiskolasok-a-penzugyi-jovorol-az-mcc-es-az-eotvos-gimnazium-kozos-kezdemenyezese"

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        {/* Light background, editorial masthead feel. Horizontal rules, volume
            number, tracked small-caps label — signals "this is published content"
            rather than another generic page header. */}
        <section className="relative overflow-hidden bg-background border-b border-border">
          <div aria-hidden="true" className="absolute top-0 right-12 w-64 h-64 rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative z-10">
            <Reveal>
              <div className="w-full h-px bg-border mb-8" />
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <SectionLabel align="start" className="mb-0">Cikkek & Írások</SectionLabel>
                <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Vol. 01 · 2024–25</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-[1.05] tracking-tight max-w-3xl">
                A pénzügyi tudatosságról
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
                Klubtagjaink által írt cikkek a pénzügyi tudatosságról, ennek fontosságáról vagy különböző témaköreiről.
              </p>
              <div className="w-full h-px bg-border" />
            </Reveal>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Reveal className="mb-16">
                <div className="border-y border-primary/15 py-8">
                  <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    Tartalomjegyzék
                  </p>
                  <div className="space-y-5">
                    <a
                      href="#penzugyi-tudatossag-tinedzserkent"
                      className="group block"
                    >
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        BFLC alapítói cikk
                      </span>
                      <span className="text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                        Pénzügyi tudatosság tinédzserként? Miért kell időben elkezdeni?
                      </span>
                    </a>
                    <a
                      href={mccArticleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Az MCC beszámolója a Fektess a jövődbe! vol. 2 konferenciánkról
                      </span>
                      <span className="text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                        Középiskolások a pénzügyi jövőről
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>

              <article id="penzugyi-tudatossag-tinedzserkent" className="scroll-mt-24">
                <div className="mb-10">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance leading-snug">
                    Pénzügyi tudatosság tinédzserként? Miért kell időben elkezdeni?
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground py-4 border-y border-border">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium text-foreground">Balogh Bendegúz & Bartók Márton</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>2025. február 6.</span>
                    </div>
                    <span className="hidden sm:inline text-border">·</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Pénzügyi tudatosság</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="drop-cap text-lg text-muted-foreground mb-8 leading-relaxed">
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

                  <div className="mt-14 mb-5">
                    <span className="text-xs font-bold text-primary/60 tracking-[0.2em] uppercase block mb-1">01</span>
                    <h2 className="text-2xl sm:text-3xl font-bold leading-snug">A pénzügyi ismeretek hiányának hatásai</h2>
                  </div>

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

                  <div className="mt-14 mb-5">
                    <span className="text-xs font-bold text-primary/60 tracking-[0.2em] uppercase block mb-1">02</span>
                    <h2 className="text-2xl sm:text-3xl font-bold leading-snug">A pénzügyi oktatás Magyarországon — hiánya és lehetőségek</h2>
                  </div>

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

                  <blockquote className="my-12 -mx-4 sm:-mx-8 md:-mx-16 px-8 sm:px-12 py-8 bg-primary text-primary-foreground rounded-2xl relative overflow-hidden">
                    <div aria-hidden="true" className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/[0.06] blur-2xl" />
                    <span aria-hidden="true" className="absolute top-2 left-6 text-7xl font-bold text-white/10 leading-none select-none">"</span>
                    <p className="text-lg sm:text-xl font-medium leading-relaxed relative z-10 mb-4">
                      Mi azzal a céllal hoztuk létre 2024 májusában a Budapest Financial Literacy Club-ot, hogy középiskolás diákok számára biztosítson alapvető és releváns pénzügyi ismereteket heti rendszerességgel, szakértők előadásain és workshopokon keresztül.
                    </p>
                    <cite className="text-sm text-primary-foreground/70 not-italic">— Balogh Bendegúz & Bartók Márton, alapítók</cite>
                  </blockquote>

                  <div className="mt-14 mb-5">
                    <span className="text-xs font-bold text-primary/60 tracking-[0.2em] uppercase block mb-1">03</span>
                    <h2 className="text-2xl sm:text-3xl font-bold leading-snug">Hogyan segíthet személyes szinten a pénzügyi oktatás?</h2>
                  </div>

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

                  <div className="mt-14 mb-5">
                    <span className="text-xs font-bold text-primary/60 tracking-[0.2em] uppercase block mb-1">04</span>
                    <h2 className="text-2xl sm:text-3xl font-bold leading-snug">Jövőkép — a pénzügyi tudatosság hosszú távú hatása</h2>
                  </div>

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

                  <div className="mt-14 pt-8 border-t border-border">
                    <div className="flex items-start gap-4 mb-10">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Balogh Bendegúz & Bartók Márton</p>
                        <p className="text-sm text-muted-foreground">11. osztályos diákok · Budapest Financial Literacy Club alapítói</p>
                        <p className="text-xs text-muted-foreground mt-1">2025. február 6.</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">Források</p>
                      <ol className="text-sm text-muted-foreground space-y-2 list-none">
                        <li>
                          <a href="https://www.mnb.hu/sajtoszoba/sajtokozlemenyek/2024-evi-sajtokozlemenyek/a-penzugyi-egeszseg-nem-csupan-az-anyagi-helyzettol-fugg" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                            MNB — A pénzügyi egészség nem csupán az anyagi helyzettől függ
                          </a>
                        </li>
                        <li>
                          <a href="https://beconomist.hu/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                            BeEconomist
                          </a>
                        </li>
                        <li>
                          <a href="https://www.otpfayalapitvany.hu/web/aloldal/digitalis_oktatasi_program" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                            OTP Fáy András Alapítvány — Digitális oktatási program
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </article>

              <div className="mt-20 pt-12 border-t border-border text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Folytatás</p>
                <h2 className="text-2xl font-bold mb-3">További cikkek hamarosan</h2>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
                  Klubtagjaink folyamatosan dolgoznak új cikkeken. Kövess minket, hogy értesülj az új tartalmakról.
                </p>
                <Button asChild size="lg" className="rounded-xl">
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
