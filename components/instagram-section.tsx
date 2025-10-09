import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function InstagramSection() {
  return (
    <section className="py-20 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Instagram className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Follow Us on Instagram</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Stay updated with our latest events, tips, and behind-the-scenes content. Join our growing community!
          </p>
          <Button size="lg" asChild>
            <a
              href="https://www.instagram.com/flc_ejg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              @flc_ejg
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
