import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/collaboration",
  },
}

export default function CollaborationLayout({ children }: { children: React.ReactNode }) {
  return children
}

