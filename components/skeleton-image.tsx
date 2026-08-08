"use client"

import Image from "next/image"
import { useState } from "react"

interface SkeletonImageProps {
  src: string
  alt: string
  sizes?: string
  priority?: boolean
  /** "dark" for use on navy/dark backgrounds, "light" for white/light ones */
  tone?: "dark" | "light"
  className?: string
}

export function SkeletonImage({ src, alt, sizes, priority, tone = "dark", className }: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false)

  const skeletonClass =
    tone === "dark"
      ? "bg-gradient-to-br from-white/10 via-white/5 to-white/10"
      : "bg-gradient-to-br from-muted via-muted/60 to-muted"

  return (
    <>
      {!loaded && <div aria-hidden="true" className={`absolute inset-0 animate-pulse ${skeletonClass}`} />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 25vw, 50vw"}
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
      />
    </>
  )
}
