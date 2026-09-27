/** @type {import('next').NextConfig} */

/**
 * Security headers applied to every HTTP response via Vercel's edge
 * routing. Using next.config.mjs headers() rather than middleware.ts
 * because these are static values -- no per-request logic needed, and
 * this approach compiles directly into Vercel's CDN layer with zero
 * runtime overhead.
 */
const isDev = process.env.NODE_ENV !== "production"

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      // Restrict all resource types to self by default
      "default-src 'self'",

      // Next.js App Router injects inline hydration scripts at build time.
      // 'unsafe-inline' is required for those; it still blocks scripts from
      // arbitrary third-party domains, which is the main XSS vector.
      // Note: if a nonce-based strict CSP is ever needed, it requires
      // Next.js middleware to inject nonces per-request.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,

      // Tailwind uses inline styles throughout; 'unsafe-inline' required
      "style-src 'self' 'unsafe-inline'",

      // All images are self-hosted; data: and blob: are used by Next.js
      // image optimization internals; https: covers any external <img> src
      "img-src 'self' data: blob: https:",

      // Geist is self-hosted via the geist npm package -- no external CDN
      "font-src 'self'",

      // The schedule page embeds a Google Calendar iframe
      "frame-src https://calendar.google.com",

      // No external API calls from the frontend on this static site.
      // If the contact form ever submits to a third-party service,
      // add that origin here (e.g. https://api.emailjs.com)
      "connect-src 'self'",

      // Blocks all plugin content (<object>, <embed>, <applet>)
      "object-src 'none'",

      // Prevent other sites from embedding this site in frames.
      "frame-ancestors 'self'",

      // No service workers used
      "worker-src 'none'",

      // Prevents <base> tag hijacking
      "base-uri 'self'",

      // Contact form submits to self (Next.js route handler or API).
      // Add third-party form endpoints here if needed
      "form-action 'self'",

      // Upgrade any accidental http:// sub-resource requests to https://
      ...(isDev ? [] : ["upgrade-insecure-requests"]),
    ].join("; "),
  },
  {
    // Disable browser features the site does not use
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "display-capture=()",
      "interest-cohort=()",        // opt out of deprecated FLoC
      "autoplay=()",
      "fullscreen=(self)",         // allow the page but not iframes
    ].join(", "),
  },
  {
    // Send the origin + path when navigating same-origin;
    // only the origin (no path/query) on cross-origin requests
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Prevents browsers from MIME-sniffing a response away from the
    // declared Content-Type (e.g. treating a .txt file as JavaScript)
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  ...(isDev
    ? []
    : [
        {
          // Tell browsers to use HTTPS for this domain after the first secure visit.
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
      ]),
]

const nextConfig = {
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        // Apply to every route, including API routes, static files,
        // and Next.js internals (/_next/*)
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
