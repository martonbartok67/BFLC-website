import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, BookOpen, Award } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Investment Basics",
    description: "Learn about stocks, bonds, and building a diversified portfolio for long-term growth.",
  },
  {
    icon: Users,
    title: "Peer Learning",
    description: "Collaborate with fellow students in workshops, discussions, and real-world simulations.",
  },
  {
    icon: BookOpen,
    title: "Financial Education",
    description: "Master budgeting, saving, and understanding credit to make informed financial decisions.",
  },
  {
    icon: Award,
    title: "Competitions",
    description: "Participate in national and international financial literacy competitions and challenges.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">About Our Club</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            The Financial Literacy Club at Eötvös József Gimnázium is a student-led initiative dedicated to building
            financial knowledge and confidence. We believe every student deserves to understand money management,
            investing, and economic principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
