import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Playfair_Display, Inter } from "next/font/google";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

import type { Metadata } from "next";
import { seoPages } from "./seoConfig";

const seo = seoPages.home;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical,
    siteName: "STYLAND Family Salon",
    images: [
      {
        url: "https://stylandfamilysalon-phi.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STYLAND Family Salon Madhapur Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["https://stylandfamilysalon-phi.vercel.app/og-image.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "STYLAND Family Salon",
  url: "https://stylandfamilysalon-phi.vercel.app/",
  image: "https://stylandfamilysalon-phi.vercel.app/og-image.jpg",
  telephone: "+91 77023 97311",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Doctor's Colony, Madhapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "487",
  },
  sameAs: [],
};

export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      <body className="bg-black" suppressHydrationWarning>
        <Navbar />
        <main className="pt-24">{children}</main>
        <ChatbotWidget />
      </body>
    </html>
  );
}