"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Calendar, ExternalLink } from "lucide-react"
import { schedule } from "@/lib/schedule-data"
import Image from "next/image"
import { useEffect, useState } from "react"

const upcomingEvents = [
  {
    title: "HOLD céglátogatás",
    date: "2026. március 12.",
    time: "13:00 - 15:00",
    location: "Budapest, Alkotás utca 50, 1123",
    type: "Céglátogatás",
    description:
      "Ellátogatunk a HOLD Alapkezelő irodájába, aki Magyarország egyik legmeghatározóbb ilyen cége. Itt bepillantást nyerhetünk a professzionális vagyonkezelés világába és megismerkedhetünk a befektetési alapok működésével.",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSclbwve6cLizyiGnIOfgRO0zid0-rrIvMwEB-eXN_aUKYpTTA/viewform?usp=dialog",
  },
  {
    title: "OTP céglátogatás",
    date: "2026. március 23.",
    time: "13:00 - 15:00",
    location: "Budapest, Madarász Viktor utca 12, 1131",
    type: "Céglátogatás",
    description:
      "A program egy, a pénzügyi tudatosság témakörét feldolgozó, rövid szakmai előadással veszi kezdetét, amelyet egy átfogóbb panelbeszélgetés követ. Az esemény végül egy vezetett épületbejárással zárul.",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScFuwg1nkGmR6SBpp4YXpUgIw8-c4-zPFyvP_sQ6XYUGwYBXQ/viewform?usp=publish-editor",
  },
  {
    title: "AmCham céglátogatás",
    date: "2026. március 25.",
    time: "15:00 - 16:00",
    location: "Budapest, Szent István tér 11, 1051",
    type: "Céglátogatás",
    description:
      "Ellátogatunk az AmCham Hungary, az amerikai-magyar kereskedelmi kamara irodájába, ahol megismerkedhetünk a professzionális üzleti advocacy és nemzetközi kereskedelmi szektorral.",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSewvGnksU-4FucGxola_j_nRyVYpKvocUQmfzBbKM-OR6z-Fw/viewform",
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
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                                <Badge className="font-medium text-base w-fit" variant="secondary">
                                  {session.date}
                                </Badge>
                                <div className="flex-1 md:order-first">
                                  <CardTitle className="text-xl text-balance mb-2">{session.topic}</CardTitle>
                                  {session.content && (
                                    <p className="text-sm text-muted-foreground leading-relaxed">{session.content}</p>
                                  )}
                                </div>
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
