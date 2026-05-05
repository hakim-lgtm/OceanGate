import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://oceangatedjibouti.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oceangate International Shipping — Maritime Agency in Djibouti",
    template: "%s · Oceangate Djibouti",
  },
  description:
    "Oceangate is the leading maritime agency at the Port of Djibouti — ship agency, cargo handling, customs, bunkering, crew services, and inland logistics. 24/7, six languages, at the gateway of the Red Sea.",
  keywords: [
    "Djibouti shipping agency",
    "maritime agency Djibouti",
    "Port of Djibouti",
    "ship agency Red Sea",
    "Djibouti port agent",
    "ship agency Horn of Africa",
    "bunkering Djibouti",
    "crew change Djibouti",
    "cargo handling Djibouti",
    "Ethiopia transit corridor",
    "Oceangate",
    "Oceangate International Shipping",
  ],
  authors: [{ name: "Oceangate International Shipping" }],
  creator: "Oceangate International Shipping",
  publisher: "Oceangate International Shipping",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Oceangate International Shipping",
    title: "Oceangate — From the world to Djibouti",
    description:
      "Maritime agency at the gateway of the Red Sea. Ship agency, cargo, customs, bunkering, crew, logistics — 24/7.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oceangate International Shipping",
    description:
      "Leading maritime agency at the Port of Djibouti — 24/7 service at the gateway of the Red Sea.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#organization`,
  name: "Oceangate International Shipping",
  alternateName: "Oceangate",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og.jpg`,
  description:
    "Leading maritime agency at the Port of Djibouti. Ship agency, cargo handling, customs, bunkering, crew services, and inland logistics — 24/7.",
  email: "commercial@oceangateshipping.com",
  telephone: ["+253 77 81 48 53", "+253 77 32 79 24"],
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Horizon Building, Héron",
    addressLocality: "Djibouti",
    addressCountry: "DJ",
  },
  areaServed: [
    { "@type": "Country", name: "Djibouti" },
    { "@type": "Place", name: "Red Sea" },
    { "@type": "Place", name: "Horn of Africa" },
    { "@type": "Country", name: "Ethiopia" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  knowsLanguage: ["en", "fr", "ar", "so", "aa", "zh"],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Maritime Services",
    itemListElement: [
      "Ship Agency",
      "Cargo Handling",
      "Customs & Administration",
      "Digital Reporting",
      "Shipowners' Representation",
      "Bunkering & Ship Supply",
      "Technical Assistance",
      "Crew Services",
      "Logistics & Warehousing",
    ].map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: s },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
