"use client"

import { useState } from "react"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"
import { SkeletonImage } from "@/components/skeleton-image"
import { Lightbox } from "@/components/lightbox"
import { Maximize2 } from "lucide-react"

const images = [
  { src: "/images/gallery/flc-presentation.jpg",         alt: "" },
  { src: "/images/gallery/flc-parliament-visit.jpg",     alt: "" },
  { src: "/images/gallery/flc-event-table.jpg",          alt: "" },
  { src: "/images/gallery/flc-outdoor-signup.jpg",       alt: "" },
  { src: "/images/gallery/flc-classroom-engagement.jpg", alt: "" },
  { src: "/images/gallery/flc-speaker-event.jpg",        alt: "" },
]

export function GallerySection() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground overflow-hidden"
    >
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
            const isFeatured = index === 0 || index === images.length - 1
            return (
              <Reveal key={index} delay={index * 0.08} className={isFeatured ? "col-span-2" : ""}>
                <button
                  className="relative h-full w-full overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 group shadow-xl shadow-black/20 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  onClick={() => setLightboxIdx(index)}
                  aria-label={`Galéria kép ${index + 1} megnyitása`}
                >
                  <SkeletonImage
                    src={image.src}
                    alt={image.alt}
                    tone="dark"
                    sizes={isFeatured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a47]/50 to-[#0a1a47]/0 group-hover:from-[#0a1a47]/70 transition-all duration-300" />

                  {/* Expand hint — appears on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
                      <Maximize2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      <Lightbox
        images={images}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onPrev={() => setLightboxIdx(i => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() => setLightboxIdx(i => (i !== null && i < images.length - 1 ? i + 1 : i))}
      />
    </section>
  )
}
