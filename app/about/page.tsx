import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, BookOpen, Award, Target, Lightbulb } from "lucide-react"

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

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower students with practical financial knowledge and skills that will serve them throughout their lives.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "A generation of financially literate young adults who make informed decisions and contribute to economic prosperity.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">About Our Club</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                The Financial Literacy Club at Eötvös József Gimnázium is a student-led initiative dedicated to building
                financial knowledge and confidence. We believe every student deserves to understand money management,
                investing, and economic principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="border-border bg-card">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">What We Offer</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Our club provides comprehensive financial education through various activities and programs.
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

        <section className="py-20 sm:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Join Our Community</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
                Whether you're a complete beginner or already have some financial knowledge, there's a place for you in
                our club. We meet every week and welcome all students from Eötvös József Gimnázium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/schedule"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  View Schedule
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
