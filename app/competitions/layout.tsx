import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/competitions",
  },
}

export default function CompetitionsLayout({ children }: { children: React.ReactNode }) {
  return children
}

