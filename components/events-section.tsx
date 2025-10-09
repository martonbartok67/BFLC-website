import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

const events = [
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
]

export function EventsSection() {
  return (
    <section id="events" className="py-20 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Join us for workshops, guest speakers, and competitions designed to enhance your financial knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
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
      </div>
    </section>
  )
}
