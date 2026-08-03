import type { MetadataRoute } from "next"

/**
 * Generates /robots.txt at build time.
 * The Sitemap line is the key SEO directive — any crawler that
 * respects robots.txt will discover and fetch the sitemap automatically,
 * without needing manual submission to every search engine.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://bflc.hu/sitemap.xml",
  }
}
