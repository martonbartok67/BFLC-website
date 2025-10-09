import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users } from "lucide-react"

const weeklySchedule = [
  {
    day: "Monday",
    activities: [
      {
        time: "15:30 - 17:00",
        title: "General Meeting",
        location: "Room 204",
        type: "Meeting",
        description: "Weekly club meeting for all members. Discuss upcoming events and share financial news.",
      },
    ],
  },
  {
    day: "Tuesday",
    activities: [
      {
        time: "16:00 - 17:30",
        title: "Investment Workshop",
        location: "Computer Lab",
        type: "Workshop",
        description: "Hands-on practice with stock market simulations and portfolio management.",
      },
    ],
  },
  {
    day: "Wednesday",
    activities: [
      {
        time: "15:30 - 17:00",
        title: "Study Group",
        location: "Library",
        type: "Study",
        description: "Collaborative learning session. Bring your questions and help fellow members.",
      },
    ],
  },
  {
    day: "Thursday",
    activities: [
      {
        time: "16:00 - 17:30",
        title: "Guest Speaker Series",
        location: "Auditorium",
        type: "Special Event",
        description: "Monthly guest speakers from finance industry (check events page for schedule).",
        isMonthly: true,
      },
    ],
  },
  {
    day: "Friday",
    activities: [
      {
        time: "15:30 - 16:30",
        title: "Competition Prep",
        location: "Room 204",
        type: "Practice",
        description: "Prepare for upcoming financial literacy competitions and challenges.",
      },
    ],
  },
]

const additionalInfo = [
  {
    title: "Office Hours",
    description: "Club leaders are available for one-on-one questions every Wednesday from 14:00 - 15:00 in Room 204.",
  },
  {
    title: "Special Events",
    description:
      "Check our Events page for special workshops, competitions, and guest speakers throughout the semester.",
  },
  {
    title: "Membership",
    description: "All students from Eötvös József Gimnázium are welcome. No prior financial knowledge required!",
  },
]

export default function SchedulePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Weekly Schedule</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Join us throughout the week for meetings, workshops, and learning opportunities. All activities are held
                at Eötvös József Gimnázium.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8 mb-20">
                {weeklySchedule.map((day, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold mb-4 text-primary">{day.day}</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {day.activities.map((activity, actIndex) => (
                        <Card key={actIndex} className="border-border hover:border-primary transition-colors">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                              <CardTitle className="text-xl text-balance">{activity.title}</CardTitle>
                              <Badge variant={activity.isMonthly ? "outline" : "secondary"}>
                                {activity.isMonthly ? "Monthly" : activity.type}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4 leading-relaxed">{activity.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{activity.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{activity.location}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Additional Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {additionalInfo.map((info, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
