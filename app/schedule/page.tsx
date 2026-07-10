"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Calendar, ExternalLink, CalendarPlus } from "lucide-react"
import { schedule } from "@/lib/schedule-data"
import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/section-label"

const upcomingEvents = [
  {
    title: "Vakáció! Találkozunk jövőre!",
    date: "",
    time: "",
    location: "",
    type: "",
    description: "",
    registrationUrl: null,
  },
]

export default function SchedulePage() {

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Dark navy, split layout. The "next session" info card on the right
            answers the most important question immediately: when and where.
            Previously this info was only inside the body, below the fold. */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground">
          <div aria-hidden="true" className="absolute -top-16 right-1/4 w-80 h-80 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

              <Reveal>
                <SectionLabel tone="light" align="start">Eseménynaptár</SectionLabel>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
                  Heti alkalmak
                </h1>
                <p className="text-lg text-pretty leading-relaxed text-primary-foreground/85 max-w-lg">
                  Rendszeres csütörtöki foglalkozások, versenyek és különleges vendégelőadások az egész tanév során.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 sm:p-8 space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
                    Rendszeres alkalmak
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-primary-foreground/50 mb-0.5">Nap</p>
                        <p className="font-bold text-lg">Minden csütörtök</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-primary-foreground/50 mb-0.5">Időpont</p>
                        <p className="font-bold text-lg">15:45 – 16:45</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-primary-foreground/50 mb-0.5">Helyszín</p>
                        <p className="font-bold">10-es terem<br /><span className="font-normal text-sm text-primary-foreground/75">Eötvös József Gimnázium</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Közelgő események</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {upcomingEvents.map((event, index) => (
                  <Reveal key={index} delay={index * 0.1}>
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
                        {event.description && (
                          <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                        )}
                        <div className="space-y-2 text-sm">
                          {event.date && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                          )}
                          {event.time && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          )}
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
                  </Reveal>
                ))}
              </div>

              {/* CALENDAR SECTION */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Interaktív Naptár</h2>
                <div className="rounded-xl overflow-hidden border shadow-xl bg-white p-2">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?src=ejgfinance%40gmail.com&ctz=Europe%2FBudapest"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <a
                      href="https://calendar.google.com/calendar/ical/ejgfinance%40gmail.com/public/basic.ics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarPlus className="h-4 w-4" />
                      Feliratkozás a naptárra (.ics)
                    </a>
                  </Button>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-center border-0 mb-0 py-0 mt-16">Heti alkalmak</h2>

              <div className="space-y-12 mb-20 mt-12">
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
