import { googleMapsUrl, siteUrl } from "@/lib/site"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: "Budapest Financial Literacy Club",
  alternateName: "BFLC",
  url: siteUrl,
  logo: `${siteUrl}/images/flc-logo-no-text.png`,
  email: "bflc@bflc.hu",
  foundingDate: "2024-05",
  description:
    "A Budapest Financial Literacy Club pénzügyi tudatosságot fejlesztő középiskolai diákszervezet Budapesten.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Reáltanoda utca 7.",
    postalCode: "1053",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
  location: {
    "@type": "Place",
    name: "Eötvös József Gimnázium",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Reáltanoda utca 7.",
      postalCode: "1053",
      addressLocality: "Budapest",
      addressCountry: "HU",
    },
    hasMap: googleMapsUrl,
  },
  sameAs: [
    "https://www.instagram.com/budapestflc/",
    "https://www.linkedin.com/company/financial-literacy-club-bp",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "bflc@bflc.hu",
    contactType: "general inquiries",
    availableLanguage: ["hu", "en"],
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Budapest Financial Literacy Club",
  alternateName: "BFLC",
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "hu-HU",
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, websiteSchema]),
      }}
    />
  )
}

