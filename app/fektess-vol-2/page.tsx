import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FektessVol2Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-primary">Fektess a jövődbe! vol. 2</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Üdvözöljük a "Fektess a jövődbe! vol. 2" oldalon. Itt találod az összes információt a kampányról.
              </p>
              <p className="text-base text-muted-foreground">
                Hamarosan érkeznek a további tartalmak!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
