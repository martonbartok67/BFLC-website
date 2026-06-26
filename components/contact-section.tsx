// components/contact-section (replace the existing ContactSection component file with this)
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, MapPin, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Reveal } from "@/components/motion/reveal"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoLink = `mailto:ejgfinance@gmail.com?subject=Kapcsolatfelvétel - ${encodeURIComponent(
      formData.name,
    )}&body=${encodeURIComponent(`Név: ${formData.name}\nEmail: ${formData.email}\n\nÜzenet:\n${formData.message}`)}`

    try {
      // Try to open the user's email client in a new window/tab first
      const newWindow = window.open(mailtoLink, "_blank")
      if (newWindow) {
        // opened successfully
        toast({
          title: "Email kliens megnyitva!",
          description: "Küldd el az üzenetet az email kliensedből.",
        })
      } else {
        // If popup blocked or failed, copy link to clipboard as fallback
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(mailtoLink)
          toast({
            title: "Nem sikerült automatikusan megnyitni az email klienst",
            description: "A mailto linket a vágólapra másoltuk — illeszd be az email kliensedbe, vagy kattints a megadott email címre.",
          })
        } else {
          // Ultimate fallback: set location.href (might work)
          window.location.href = mailtoLink
          toast({
            title: "Email megnyitása folyamatban",
            description: "Ha nem történik semmi, kérem másold ki az email címet és használd az email kliensedet.",
          })
        }
      }
    } catch (err) {
      // If anything throws, fallback to location.href
      try {
        window.location.href = mailtoLink
        toast({
          title: "Email megnyitása folyamatban",
          description: "Ha nem történik semmi, kérem másold ki az email címet és használd az email kliensedet.",
        })
      } catch (e) {
        toast({
          title: "Hiba történt",
          description: "Nem sikerült automatikusan megnyitni az email klienset. Kérjük, küldj emailt az ejgfinance@gmail.com címre.",
        })
      }
    }

    // small delay so user can read the toast (keeps UX friendly)
    await new Promise((resolve) => setTimeout(resolve, 400))

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section className="py-20 sm:py-24 bg-background lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Kérdezz bátran!</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Csatlakoznál, vagy kérdésed merült fel? Vedd fel velünk a kapcsolatot itt:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Küldj üzenetet</CardTitle>
                <CardDescription>Töltsd ki a kapcsolatfelvételi lapot és rövidesen visszajelzünk!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Név</Label>
                    <Input
                      id="name"
                      placeholder="A neved"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ajovoflctagja@siker.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Üzenet</Label>
                    <Textarea
                      id="message"
                      placeholder="Jelentkezz, vagy küldj üzenetet..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Küldés..." : "Üzenet küldése"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Helyszín</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Eötvös József Gimnázium
                      <br />
                      Budapest, Reáltanoda utca 7, 1053
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:ejgfinance@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      ejgfinance@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Időpont</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Minden csütörtökön
                      <br />
                      15:45 - 16:45
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
