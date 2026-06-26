import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Reveal
              key={index}
              delay={index * 0.08}
              className={index === 0 ? "col-span-2 row-span-1" : ""}
            >
              <div
                className={`relative overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 group cursor-pointer shadow-xl shadow-black/20 ${
                  index === 0 ? "aspect-[16/10]" : "aspect-square"
                }`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a47]/50 to-[#0a1a47]/0 group-hover:from-[#0a1a47]/70 transition-all duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
