import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import Script from "next/script"
import { Montserrat as V0_Font_Montserrat } from "next/font/google"

// Initialize fonts
const _montserrat = V0_Font_Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
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
    url: "https://bflc.hu",
    title: "Budapest Financial Literacy Club - Fejleszd a pénzügyi tudásod!",
    description: "Csatlakozz te is a BFLC-hez! Gyakorlatias pénzügyi ismeretek, mentorprogram és exkluzív vállalati látogatások.",
    siteName: "BFLC",
    images: [
      {
        url: "/images/og-image.png", // Make sure to place an image at this path in your /public folder
        width: 1200,
        height: 630,
        alt: "BFLC Budapest Financial Literacy Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budapest Financial Literacy Club",
    description: "Pénzügyi tudatosság középiskolásoknak.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`font-sans ${_montserrat.className}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Script
          id="live2support"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){var pp=document.createElement('script'), ppr=document.getElementsByTagName('script')[0]; stid='aUgyYjM4bnJMWmFZcHNpbTVqWkZVUT09';pp.type='text/javascript'; pp.async=true; pp.src=('https:' == document.location.protocol ? 'https://' : 'http://') + 's01.live2support.com/dashboardv2/chatwindow/'; ppr.parentNode.insertBefore(pp, ppr);})();`,
          }}
        />
        <Script async src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
