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
              <p><strong>Utoljára frissítve:</strong> 2026. július 18.</p>

              <h2>1. Bevezetés</h2>
              <p>A Budapest Financial Literacy Club elkötelezett a felhasználók adatainak védelme mellett.</p>

              <h2>2. Adatkezelés</h2>
              <p>Jelenleg a weboldalunk nem gyűjt, nem tárol és nem dolgoz fel személyes adatokat szerveroldali adatbázisokban. A kapcsolatfelvételi űrlapunk egy <code>mailto:</code> linket használ, ami azt jelenti, hogy az üzenetedet a saját e-mail kliensed kezeli.</p>

              <h2>3. Sütik (Cookies)</h2>
              <p>Weboldalunk jelenleg nem használ saját sütiket a felhasználók nyomon követésére.</p>

              <h2>4. Harmadik felek</h2>
              <p>A weboldalunkon szerepelhetnek hivatkozások külső közösségi média oldalakra. Ezen oldalak adatkezelési gyakorlatáért nem vállalunk felelősséget.</p>

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
