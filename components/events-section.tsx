import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

export function EventsSection() {
  const upcomingEvents = [
    {
      date: "Február 12.",
      topic: "Juhász István & Pogány Marcell",
      content:
        "Ezen az interaktív workshopon megtanulhatod, hogyan lehet AI segítségével, programozói tudás nélkül applikációkat és weboldalakat létrehozni. Lépésről lépésre végigmegyünk azon, hogyan valósíthatod meg az ötleteidet a Google AI eszközeivel! Az alkalmat Juhász István, a 49x AI alapítója, Forbes 30 under 30-as vállalkozó vezeti, Pogány Marcell elballagott Eötvös-diákkal közösen.",
      location: "10-es terem, Eötvös József Gimnázium - Budapest, Reáltanoda utca 7, 1053",
      type: "AI Előadás",
    },
    {
      date: "Február 19.",
      topic: "BNPL előadás",
      content:
        "Bendi előadása a Buy Now Pay Later szolgáltatásokról.",
      location: "10-es terem, Eötvös József Gimnázium - Budapest, Reáltanoda utca 7, 1053",
      type: "Előadás",
    },
    {
      date: "Március 12.",
      topic: "HOLD céglátogatás",
      content:
        "Ellátogatunk a HOLD alapkezelő irodájába, ahol megismerkedhetünk a professzionális pénzügyi szektorral és a befektetéskezelés gyakorlatával.",
      location: "HOLD alapkezelő irodája",
      type: "Céglátogatás",
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
                    <span>15:45</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground transition-all hover:translate-x-1">
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
