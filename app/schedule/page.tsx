"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Calendar, ExternalLink, CalendarPlus } from "lucide-react"
import { schedule } from "@/lib/schedule-data"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
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
        {/* Hero Section */}
        <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
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
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary-foreground">Eseménynaptár</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Kövess minket élőben! Itt találod a közelgő céglátogatásokat és a heti kurzusaink beosztását.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              {/* 1. UPCOMING VISUAL CARDS */}
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Calendar className="text-primary" /> Közelgő kiemelt események
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all shadow-md">
                    <div className="bg-primary/5 p-4 border-b">
                       <Badge variant="outline" className="bg-background">{event.type}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{event.description}</p>
                      <div className="grid grid-cols-1 gap-3 mb-6 bg-secondary/20 p-4 rounded-lg text-sm">
                        <div className="flex items-center gap-3"><Calendar className="h-4 w-4 text-primary" /> <strong>{event.date}</strong></div>
                        <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary" /> {event.time}</div>
                        <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> {event.location}</div>
                      </div>
                      <Button asChild className="w-full gap-2">
                        <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                          Jelentkezés az eseményre <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 2. GOOGLE CALENDAR INTEGRATION */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Interaktív Naptár</h2>
                <div className="rounded-xl overflow-hidden border shadow-xl bg-white p-2">
                  <iframe 
                    src="https://calendar.google.com/calendar/embed?src=hu.hungarian%23holiday%40group.v.calendar.google.com&ctz=Europe%2FBudapest" 
                    style={{ border: 0 }} 
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    scrolling="no"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="gap-2">
                    <CalendarPlus className="h-4 w-4" /> Add hozzá a saját naptáradhoz (.ics)
                  </Button>
                </div>
              </div>

              {/* 3. WEEKLY SCHEDULE LIST */}
              <h2 className="text-3xl font-bold mb-12 text-center">Heti alkalmak (Tanmenet)</h2>
              <div className="space-y-8">
                {schedule.map((module, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="text-2xl font-bold text-primary mb-4">{module.module}</h3>
                    <div className="grid gap-4">
                      {module.sessions.map((session, sIndex) => (
                        <Card key={sIndex} className="hover:bg-secondary/10 transition-colors">
                          <CardContent className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                              <p className="font-bold text-lg">{session.topic}</p>
                              <p className="text-sm text-muted-foreground">{session.content}</p>
                            </div>
                            <Badge variant="secondary" className="whitespace-nowrap">{session.date}</Badge>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
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
