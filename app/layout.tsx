import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { AmbientBackground } from "@/components/ambient-background"
import { CookieConsent } from "@/components/cookie-consent"
import { StructuredData } from "@/components/structured-data"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Budapest Financial Literacy Club | BFLC",
    template: "%s | BFLC",
  },
  description: "A Budapest Financial Literacy Club (BFLC) célja a pénzügyi tudatosság fejlesztése középiskolások számára gyakorlatias tudással és vállalati látogatásokkal.",
  keywords: ["BFLC", "Financial Literacy", "Pénzügyi tudatosság", "Budapest", "Eötvös József Gimnázium", "Középiskola"],
  authors: [{ name: "BFLC Team" }],
  creator: "Budapest Financial Literacy Club",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: siteUrl,
    title: "Budapest Financial Literacy Club - Fejleszd a pénzügyi tudásod!",
    description: "Csatlakozz te is a BFLC-hez! Gyakorlatias pénzügyi ismeretek, mentorprogram és exkluzív vállalati látogatások.",
    siteName: "BFLC",
    images: [
      {
        url: "/images/flc-logo-no-text.png", 
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budapest Financial Literacy Club",
    description: "Pénzügyi tudatosság középiskolásoknak.",
    images: ["/images/flc-logo-no-text.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  generator: "BFLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="bg-background">
      <body className={`font-sans ${GeistSans.className} ${GeistSans.variable}`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[300] -translate-y-24 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Ugrás a tartalomra
        </a>
        <AmbientBackground />
        <CookieConsent />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <StructuredData />
      </body>
    </html>
  )
}
