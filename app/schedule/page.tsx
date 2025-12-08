"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Calendar } from "lucide-react"
import { schedule } from "@/lib/schedule-data"
import Image from "next/image"
import { useEffect, useState } from "react"

const upcomingEvents = [
  {
    title: "Közgazdaságtan és tőzsde",
    date: "2025. december 11.",
    time: "15:45 - 16:45",
    location: "10-es terem, Eötvös József Gimnázium",
    type: "Vendégelőadás",
    description:
      "Farkas Gábor elemző mesél a közgazdaságtan alapjairól és megtudjuk, hogy hogyan lehet elemezni az elsőre érthetetlennek tűnő tőzsdei chart-okat is!",
  },
  {
    title: "Ismerkedő karácsonyi előtti session",
    date: "2025. december 18.",
    time: "15:45 - 16:45",
    location: "10-es terem, Eötvös József Gimnázium",
    type: "Session",
    description:
      "Az utolsó találkozónk az év végén, ahol összefoglaljuk az eddigi tapasztalatokat és kötetlenül beszélgetünk.",
  },
  {
    title: "Budapest Investment Club előadás",
    date: "2026. január 8.",
    time: "15:45 - 16:45",
    location: "10-es terem, Eötvös József Gimnázium",
    type: "Előadás",
    description:
      "Januárban visszatérünk egy izgalmas előadással a Budapest Investment Club-tól a pénzügyi műveltség témakörében.",
  },
]

export default function SchedulePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.jpg"
              alt="FLC Event"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-primary/90 opacity-70" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-100">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-primary-foreground">
                Eseménynaptár
              </h1>
              <p className="text-lg text-pretty leading-relaxed text-primary-foreground/90">
                Heti alkalmaink minden csütörtökön 15:45-kor a 10-es teremben az Eötvös József Gimnáziumban.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Közelgő események</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}
                  >
                    <Card className="border-border hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="italic" variant="secondary">
                            {event.type}
                          </Badge>
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
                  </div>
                ))}
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Heti alkalmak</h2>
              <div className="space-y-12 mb-20">
                {schedule.map((module, index) => (
                  <div key={index}>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-primary mb-2">{module.module}</h3>
                      {module.sessions.length === 0 && <p className="text-muted-foreground italic">Szünet</p>}
                    </div>

                    {module.sessions.length > 0 && (
                      <div className="grid grid-cols-1 gap-4">
                        {module.sessions.map((session, sessionIndex) => (
                          <Card
                            key={sessionIndex}
                            className="border-border bg-background transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
                          >
                            <CardHeader>
                              <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div className="flex-1">
                                  <CardTitle className="text-xl text-balance mb-2">{session.topic}</CardTitle>
                                  {session.content && (
                                    <p className="text-sm text-muted-foreground">{session.content}</p>
                                  )}
                                </div>
                                <Badge className="font-medium text-base" variant="secondary">
                                  {session.date}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  <span className="">15:45</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <MapPin className="h-4 w-4" />
                                  <span>10-es terem, Eötvös József Gimnázium</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span>Csütörtök</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-secondary/30 rounded-lg p-8 mt-16">
                <h2 className="text-3xl font-bold mb-6 text-center">További információk</h2>
                <div className="space-y-4 text-center max-w-2xl mx-auto">
                  <p className="text-muted-foreground leading-relaxed">
                    Minden középiskolás diákot szívesen látunk csütörtöki alkalmainkon. Nincs szükség előzetes
                    regisztrációra vagy pénzügyi tudásra!
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A naptár a tanév során változhat. Csatlakozz Messenger-közösségünkhöz és kövess minket Instagramon a
                    legfrissebb információkért!
                  </p>
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
