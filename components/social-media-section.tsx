import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, Mail, Linkedin } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

export function SocialMediaSection() {
  // components/social-media-section (replace the socialLinks array inside the file)
const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@budapestflc",
    description: "Kövess minket a legfrissebb tartalmakért és fontos friss információkért!",
    link: "https://www.instagram.com/budapestflc/",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    isExternal: true,
  },
  {
    icon: MessageCircle,
    name: "Messenger Csoport",
    handle: "FLC Közösség",
    description: "Csatlakozz közösségünkhöz, hogy ne maradj le a alkalmainkról!",
    link: "https://m.me/cm/AbaU8rQOgYlXAugE/",
    color: "bg-blue-500",
    isExternal: true,
  },
  {
    icon: Mail,
    // normalized fields so the renderer finds them
    name: "Email",
    handle: "bflc@bflc.hu",
    description: "Írj nekünk bátran bármilyen kérdéseddel kapcsolatban és hamarosan válaszolunk!",
    link: "mailto:bflc@bflc.hu",
    color: "bg-primary",
    isExternal: true,
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "Financial Literacy Club BP",
    description: "Professzionális felületünk és egyéb információ elérhető a LinkedIn-en is!",
    link: "https://www.linkedin.com/company/financial-literacy-club-bp",
    color: "bg-blue-600",
    isExternal: true,
  },
]


  return (
    <section className="py-20 sm:py-24 bg-muted/30 lg:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel>Közösség</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Elérhetőségeink</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Kövess minket és csatlakozz közösségünkhöz a különböző platformokon, hogy ne maradj le semmiről!
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <Reveal key={social.name} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-shadow rounded-4xl h-full">
                  <CardContent className="p-6 flex h-full flex-col text-center gap-4 items-center">
                    <div className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{social.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium mb-3">{social.handle}</p>
                      <p className="text-sm text-muted-foreground mb-4">{social.description}</p>
                    </div>
                    <Button asChild className="mt-auto w-full">
                      <a href={social.link} {...(social.isExternal && { target: "_blank", rel: "noopener noreferrer" })}>
                        {social.name === "Email" ? "Írj nekünk" : "Követés"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
