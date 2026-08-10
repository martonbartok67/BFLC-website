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
import { useState, useEffect } from "react"
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "@/components/cookie-consent"
import { googleMapsUrl } from "@/lib/site"

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

const calendarEmbedUrl =
  "https://calendar.google.com/calendar/embed?src=ejgfinance%40gmail.com&ctz=Europe%2FBudapest&mode=AGENDA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0"

export default function SchedulePage() {
  const [consent, setConsent] = useState<"accepted" | "essential" | null>(null)
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  useEffect(() => {
    setConsent(getCookieConsent())
    const onConsentChange = () => setConsent(getCookieConsent())
    window.addEventListener("storage", onConsentChange)
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentChange)
    return () => {
      window.removeEventListener("storage", onConsentChange)
      window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentChange)
    }
  }, [])

  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground">
          <div aria-hidden="true" className="absolute -top-16 right-1/4 w-80 h-80 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
            <div className="grid max-w-6xl mx-auto gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

              <Reveal>
                <SectionLabel tone="light" align="start">Eseménynaptár</SectionLabel>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
                  Heti alkalmak
                </h1>
                <p className="text-lg text-pretty leading-relaxed text-primary-foreground/85 max-w-lg">
                  Rendszeres csütörtöki foglalkozások, versenyek és különleges vendégelőadások az egész tanév során.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="grid gap-5 text-sm sm:text-base lg:justify-self-end lg:min-w-[24rem]">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-5 w-5 flex-shrink-0 text-primary-foreground/70" />
                    <span className="font-semibold">Minden csütörtök</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 flex-shrink-0 text-primary-foreground/70" />
                    <span className="font-semibold">15:45 – 16:45</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary-foreground/70" />
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline-offset-4 hover:underline"
                    >
                      10-es terem, Eötvös József Gimnázium
                    </a>
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
              <div className="mb-20 max-w-4xl mx-auto">
                <div className="mb-6 text-center">
                  <h2 className="text-3xl font-bold">Letölthető programterv</h2>
                </div>

                {consent === "accepted" ? (
                  <div className="relative overflow-hidden rounded-lg border bg-white">
                    {!calendarLoaded && (
                      <div className="absolute inset-0 z-10 bg-white p-5">
                        <div className="mb-5 flex items-center justify-between">
                          <div className="h-5 w-40 animate-pulse rounded-full bg-primary/10" />
                          <div className="h-8 w-24 animate-pulse rounded-md bg-muted" />
                        </div>
                        <div className="space-y-3">
                          {[0, 1, 2, 3].map(row => (
                            <div key={row} className="grid grid-cols-[5rem_1fr] gap-4 border-t border-border/70 pt-3">
                              <div className="h-4 w-16 animate-pulse rounded-full bg-primary/10" />
                              <div className="space-y-2">
                                <div className="h-4 w-3/4 animate-pulse rounded-full bg-muted" />
                                <div className="h-3 w-1/2 animate-pulse rounded-full bg-muted/70" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <iframe
                      title="Budapest Financial Literacy Club Google Naptár"
                      src={calendarEmbedUrl}
                      width="100%"
                      height="420"
                      frameBorder="0"
                      scrolling="no"
                      onLoad={() => setCalendarLoaded(true)}
                      className="block h-[360px] w-full sm:h-[420px]"
                    />
                  </div>
                ) : (
                  // Placeholder shown when cookies not yet accepted or declined
                  <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 rounded-lg border bg-secondary/20 p-8 text-center">
                    <Calendar className="h-10 w-10 text-muted-foreground/40" />
                    <div>
                      <p className="font-semibold mb-1">A naptár megtekintéséhez süti-hozzájárulás szükséges</p>
                      <p className="text-sm text-muted-foreground max-w-sm">
                        A Google Naptár beágyazás sütikhez fér hozzá. Fogadd el a sütiket az oldal alján megjelenő értesítőben a naptár betöltéséhez.
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <a
                      href="https://calendar.google.com/calendar/ical/ejgfinance%40gmail.com/public/basic.ics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarPlus className="h-4 w-4" />
                      Feliratkozás
                    </a>
                  </Button>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-center border-0 mb-0 py-0 mt-16">Heti alkalmak</h2>

              <div className="space-y-12 mb-20 mt-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">2026/2027</h3>
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-primary mb-2">Évkezdés</h4>
                  </div>

                  <Card className="border-border bg-background transition-all duration-200 hover:-translate-y-1 hover:shadow-sm">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                        <Badge className="font-medium text-base w-fit" variant="secondary">
                          Hamarosan
                        </Badge>
                        <div className="flex-1 md:order-first">
                          <CardTitle className="text-xl text-balance">Hamarosan!</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">2025/2026</h3>

                  <div className="space-y-12">
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
                                      <a
                                        href={googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline-offset-4 hover:text-primary hover:underline"
                                      >
                                        10-es terem, Eötvös József Gimnázium
                                      </a>
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
                </div>
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
