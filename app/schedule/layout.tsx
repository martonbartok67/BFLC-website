import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/schedule",
  },
}

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children
}

