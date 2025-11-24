import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

export function EventsSection() {
  const upcomingEvents = [
    {
      date: "November 27.",
      topic: "Hogyan lesz egy ötletből valóság? – Bogyó Sanyi és a Wordy története",
      content:
        "Ezen a héten Bogyó Sándor jön hozzánk, az  OTP Junior Piacralépők verseny nyertese. A Wordy nevű nyelvtanuló-appjáról fog mesélni (ami már megelőzte a Duolingót is!). Megosztja velünk hogy hogyan épített fel a nulláról egy nemzetközi vállalkozást, milyen nehézségekbe futott bele és mit tanácsolna annak aki ugyanerre az útra térne.",
    },
    {
      date: "December 4.",
      topic: "Mit tanultunk a startup month alatt?",
      content: "Egy izgalmas workshoppal összefoglaljuk mindazt, amit a startup month során átvettünk.",
    },
    {
      date: "December 11.",
      topic: "Hogyan elemezzünk tőzsdei chart-okat?",
      content: "Farkas Gábor elemző mesél a közgazdaságtan alapjairól és megtudjuk, hogy hogyan lehet elemezni az elsőre érthetetlennek tűnő tőzsdei chart-okat is!",
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
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Session</Badge>
                </div>
                <CardTitle className="text-xl text-balance text-popover-foreground">{event.topic}</CardTitle>
              </CardHeader>
              <CardContent className="text-background">
                {event.content && <p className="text-muted-foreground mb-4 leading-relaxed">{event.content}</p>}
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>15:45</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>10-es terem, Eötvös József Gimnázium - Budapest, Reáltanoda utca 7, 1053</span>
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
