import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/impresszum",
  },
}

export default function ImpresszumLayout({ children }: { children: React.ReactNode }) {
  return children
}

