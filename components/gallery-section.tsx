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
    <section id="gallery" className="py-20 sm:py-24 bg-background lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Galéria</h2>
          <p className="text-lg text-pretty leading-relaxed text-muted-foreground">
            Pillanatok workshopjainkról, eseményeinkről és tevékenységeinkről az év során.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted group cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
