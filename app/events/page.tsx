import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

const upcomingEvents = [
  {
    title: "Introduction to Stock Market",
    date: "March 15, 2025",
    time: "15:30 - 17:00",
    location: "Room 204",
    type: "Workshop",
    description: "Learn the fundamentals of stock market investing and how to analyze companies.",
  },
  {
    title: "Guest Speaker: Investment Banker",
    date: "March 22, 2025",
    time: "16:00 - 17:30",
    location: "Auditorium",
    type: "Guest Speaker",
    description: "Hear from a professional investment banker about career paths in finance.",
  },
  {
    title: "Budgeting Challenge",
    date: "April 5, 2025",
    time: "15:30 - 18:00",
    location: "Computer Lab",
    type: "Competition",
    description: "Team-based budgeting simulation with real-world scenarios and prizes.",
  },
  {
    title: "Personal Finance Workshop",
    date: "April 12, 2025",
    time: "15:30 - 17:00",
    location: "Room 204",
    type: "Workshop",
    description: "Master the basics of budgeting, saving, and managing personal finances effectively.",
  },
  {
    title: "Cryptocurrency Basics",
    date: "April 19, 2025",
    time: "16:00 - 17:30",
    location: "Room 204",
    type: "Workshop",
    description: "Understand blockchain technology, Bitcoin, and the world of digital currencies.",
  },
  {
    title: "National Finance Competition",
    date: "May 10, 2025",
    time: "09:00 - 16:00",
    location: "Budapest Convention Center",
    type: "Competition",
    description: "Represent our school in the national financial literacy competition.",
  },
]

const pastEvents = [
  {
    title: "Introduction to Economics",
    date: "February 15, 2025",
    type: "Workshop",
    description: "Covered fundamental economic principles and their real-world applications.",
  },
  {
    title: "Tax Basics for Students",
    date: "February 8, 2025",
    type: "Workshop",
    description: "Learned about the Hungarian tax system and how it affects young adults.",
  },
  {
    title: "Investment Portfolio Simulation",
    date: "January 25, 2025",
    type: "Competition",
    description: "Students competed in a month-long stock market simulation challenge.",
  },
]

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Events</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Join us for workshops, guest speakers, and competitions designed to enhance your financial knowledge.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{event.type}</Badge>
                      </div>
                      <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Past Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
