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
  title: "Budapest Financial Literacy Club",
  description: "Diákvezetésű pénzügyi tudatossági klub Budapesten - Budapest Financial Literacy Club",
  generator: "v0.app",
}

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
