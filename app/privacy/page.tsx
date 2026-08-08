import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Reveal>
            <SectionLabel align="start">Adatvédelem</SectionLabel>
            <h1 className="text-4xl font-bold mb-8">Adatvédelmi Tájékoztató</h1>
            <div className="prose prose-slate dark:prose-invert">
              <p><strong>Utoljára frissítve:</strong> 2026. augusztus 8.</p>

              <h2>1. Bevezetés</h2>
              <p>A Budapest Financial Literacy Club elkötelezett a felhasználók adatainak védelme mellett.</p>

              <h2>2. Adatkezelés</h2>
              <p>Jelenleg a weboldalunk nem gyűjt, nem tárol és nem dolgoz fel személyes adatokat szerveroldali adatbázisokban. A kapcsolatfelvételi űrlapunk egy <code>mailto:</code> linket használ, ami azt jelenti, hogy az üzenetedet a saját e-mail kliensed kezeli.</p>
              <p>A süti-hozzájárulásnál választott beállítást a böngésződ helyi tárhelyében tároljuk <code>bflc-cookie-consent</code> néven. Ez csak azt jelzi, hogy elfogadtad-e a beágyazott naptár megjelenítéséhez szükséges hozzájárulást; személyes adatot nem tartalmaz.</p>

              <h2>3. Sütik (Cookies)</h2>
              <p>Weboldalunk nem használ saját sütiket a felhasználók nyomon követésére, és nem használ analitikai vagy hirdetési sütiket.</p>
              <p>Az oldalon beágyazott Google Naptár található. A naptár csak akkor töltődik be, ha az „Elfogadás” gombra kattintasz a süti-hozzájárulási értesítésben. A Google Naptár betöltésekor a Google saját sütiket vagy hasonló technológiákat használhat a szolgáltatás működtetéséhez.</p>
              <p>Ha a „Csak szükséges” lehetőséget választod, a Google Naptár beágyazás nem töltődik be, így ezen keresztül nem kerül kapcsolatba a böngésződ a Google Naptár szolgáltatásával.</p>

              <h2>4. Harmadik felek</h2>
              <p>A weboldalunkon szerepelhetnek hivatkozások külső közösségi média oldalakra, valamint beágyazott Google Naptár. Ezen szolgáltatók adatkezelési gyakorlatáért nem vállalunk felelősséget; kérjük, olvasd el az adott szolgáltató adatvédelmi tájékoztatóját.</p>

              <h2>5. Kapcsolat</h2>
              <p>Ha kérdésed van az adatkezeléssel kapcsolatban, lépj velünk kapcsolatba a <a href="mailto:bflc@bflc.hu">bflc@bflc.hu</a> e-mail címen.</p>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
