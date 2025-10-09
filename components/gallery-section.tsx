export function GallerySection() {
  const images = [
    {
      src: "/students-in-classroom-workshop-financial-literacy.jpg",
      alt: "Students participating in financial workshop",
    },
    {
      src: "/group-presentation-financial-charts-graphs.jpg",
      alt: "Group presentation on financial topics",
    },
    {
      src: "/students-collaborating-team-project-finance.jpg",
      alt: "Students collaborating on team project",
    },
    {
      src: "/guest-speaker-presenting-to-students-auditorium.jpg",
      alt: "Guest speaker presenting to students",
    },
    {
      src: "/students-celebrating-competition-award-ceremony.jpg",
      alt: "Students celebrating competition success",
    },
    {
      src: "/financial-literacy-club-meeting-discussion.jpg",
      alt: "Club meeting and discussion",
    },
  ]

  return (
    <section id="gallery" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Gallery</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Moments from our workshops, events, and activities throughout the year.
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
