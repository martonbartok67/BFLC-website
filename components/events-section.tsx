import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react"

export function EventsSection() {
  const upcomingEvents = [
    {
      date: "Március 23.",
      topic: "OTP céglátogatás",
      content:
        "A program egy, a pénzügyi tudatosság témakörét feldolgozó, rövid szakmai előadással veszi kezdetét, amelyet egy átfogóbb panelbeszélgetés követ. Az esemény végül egy vezetett épületbejárással zárul.",
      location: "Budapest, Madarász Viktor utca 12, 1131",
      time: "13:00 - 15:00",
      type: "Céglátogatás",
      registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScFuwg1nkGmR6SBpp4YXpUgIw8-c4-zPFyvP_sQ6XYUGwYBXQ/viewform?usp=publish-editor",
    },
    {
      date: "Március 25.",
      topic: "AmCham céglátogatás",
      content:
        "Ellátogatunk az AmCham Hungary, az amerikai-magyar kereskedelmi kamara irodájába, ahol megismerkedhetünk a professzionális üzleti advocacy és nemzetközi kereskedelmi szektorral.",
      location: "Budapest, Szent István tér 11, 1051",
      time: "15:00 - 16:00",
      type: "Céglátogatás",
      registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSewvGnksU-4FucGxola_j_nRyVYpKvocUQmfzBbKM-OR6z-Fw/viewform",
    },
  ]

  return (
    <section id="events" className="py-20 sm:py-24 bg-secondary/30 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Közelgő események</h2>
          <p className="text-lg text-pretty leading-relaxed text-foreground">
            Csatlakozz hozzánk workshopokra, vendégelőadókhoz és versenyekre, amelyek célja a pénzügyi tudásod bővítése.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <Card
              key={index}
              className="border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="transition-transform hover:scale-110">
                    {event.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-balance text-popover-foreground">{event.topic}</CardTitle>
              </CardHeader>
              <CardContent className="text-background">
                {event.content && <p className="text-muted-foreground mb-4 leading-relaxed">{event.content}</p>}
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex items-center gap-2 text-muted-foreground transition-all hover:translate-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground transition-all hover:translate-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground transition-all hover:translate-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                {event.registrationUrl && (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Jelentkezés
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
