import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

/**
 * Generates /sitemap.xml at build time via Next.js App Router's
 * built-in sitemap support. No plugin or manual XML needed.
 *
 * Priorities:
 * 1.0  Homepage — the primary entry point
 * 0.9  Schedule — most time-sensitive, updated weekly
 * 0.8  About / Competitions / Articles / Collaboration — evergreen content
 * 0.6  Contact — utility page, low discovery value
 *
 * changeFrequency reflects how often each page's content realistically
 * changes, which helps crawlers budget their crawl time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/schedule`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/competitions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/articles`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/collaboration`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/impresszum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
