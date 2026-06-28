import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"
import { SkeletonImage } from "@/components/skeleton-image"

export function GallerySection() {
  const images = [
    {
      src: "/images/gallery/flc-presentation.jpg",
      alt: "Diákok a 'Fektess a jövődbe' prezentáción",
    },
    {
      src: "/images/gallery/flc-parliament-visit.jpg",
      alt: "FLC tagok az Európai Parlamentben",
    },
    {
      src: "/images/gallery/flc-event-table.jpg",
      alt: "Regisztrációs asztal klubeseményen",
    },
    {
      src: "/images/gallery/flc-outdoor-signup.jpg",
      alt: "Diákok jelentkeznek a klubba",
    },
    {
      src: "/images/gallery/flc-classroom-engagement.jpg",
      alt: "Aktív részvétel az osztályteremben",
    },
    {
      src: "/images/gallery/flc-speaker-event.jpg",
      alt: "Vendégelőadó prezentál FLC eseményen",
    },
  ]

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground overflow-hidden"
    >
      {/* Same ambient-blob language as the hero, but calmer -- ties the
          two dark sections together as a visual pair without competing
          with the hero for "boldest moment." */}
      <div aria-hidden="true" className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/[0.06] blur-3xl animate-float" />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-[#C5B0E1]/[0.05] blur-3xl animate-float"
        style={{ animationDelay: "1s", animationDuration: "5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel tone="light">Galéria</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Pillanatok rólunk</h2>
          <p className="text-lg text-pretty leading-relaxed text-primary-foreground/75">
            Pillanatok workshopjainkról, eseményeinkről és tevékenységeinkről az év során.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[9rem] sm:auto-rows-[11rem] lg:auto-rows-[14rem] gap-4 lg:gap-5 max-w-6xl mx-auto">
          {images.map((image, index) => {
            // Two featured tiles, placed diagonally (first + last) so the
            // grid fills with zero leftover gaps at every breakpoint --
            // 2 featured (col-span-2) + 4 normal (col-span-1) = 8 cells,
            // exactly a 4x2 grid on lg, and col-span-2 = full width on the
            // 2-col mobile grid too. No trailing empty cell at any size.
            const isFeatured = index === 0 || index === images.length - 1
            return (
              <Reveal key={index} delay={index * 0.08} className={isFeatured ? "col-span-2" : ""}>
                <div className="relative h-full overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 group cursor-pointer shadow-xl shadow-black/20">
                  <SkeletonImage
                    src={image.src}
                    alt={image.alt}
                    tone="dark"
                    sizes={isFeatured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a47]/50 to-[#0a1a47]/0 group-hover:from-[#0a1a47]/70 transition-all duration-300" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
