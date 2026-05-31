import type { Metadata } from "next";
import { seoPages } from "../seoConfig";

const seo = seoPages.women;

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

export default function WomenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
