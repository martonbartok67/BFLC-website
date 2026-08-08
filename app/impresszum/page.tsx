import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

export default function ImpresszumPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Reveal>
            <SectionLabel align="start">Impresszum</SectionLabel>
            <h1 className="text-4xl font-bold mb-8">Impresszum</h1>
            <div className="prose prose-slate dark:prose-invert">
              <p><strong>A weboldal üzemeltetője:</strong></p>
              <p>BFLC (Budapest Financial Literacy Club)</p>
              
              <p><strong>Székhely:</strong></p>
              <p>1053 Budapest, Reáltanoda utca 7. - Eötvös József Gimnázium</p>
              
              <p><strong>Kapcsolattartás:</strong></p>
              <p>E-mail: bflc@bflc.hu</p>
              
              <p><strong>Tárhelyszolgáltató:</strong></p>
              <p>Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA)</p>
              
              <p><strong>A weboldal célja:</strong></p>
              <p>A BFLC (Budapest Financial Literacy Club) tevékenységének, programjainak és eseményeinek bemutatása, valamint diákok tájékoztatása a pénzügyi tudatosság fejlesztéséről.</p>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
