import type { Metadata } from "next";
import { contactDetails } from "@/data/actotive";
import Script from "next/script";
import "./globals.css";
import "./certificates.css";
import "./footer-credit.css";
import "./seo-content.css";
import "./certificate-preview.css";
import "./certificate-card.css";
import "./certificate-fit.css";
import "./contact.css";
import "./contact-panel.css";
import "./language.css";
import "./hero-data.css";
import "./hero-wordmark.css";
import "./guides.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://actotive.tavakolistudio.workers.dev"),
  title: { default: "ACTOTIVE | Rail & Marine Parts, Engineering & Global Supply", template: "%s | ACTOTIVE" },
  description: "ACTOTIVE supplies locomotive, rolling stock, turbocharger and marine engine components with engineering support and worldwide logistics.",
  keywords: ["locomotive spare parts", "railway components", "turbocharger components", "marine engine components", "freight forwarding", "railway supply chain", "ACTOTIVE"],
  alternates: { canonical: "/", languages: { en: "/", tr: "/tr", "x-default": "/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "ACTOTIVE", title: "ACTOTIVE | Rail & Marine Parts, Engineering & Global Supply", description: "Railway and marine components, engineering support and global logistics.", images: [{ url: "/videos/actotive/hero-poster.jpg", alt: "ACTOTIVE rail and marine component supply" }] },
  twitter: { card: "summary_large_image", title: "ACTOTIVE | Rail & Marine Parts", description: "Railway and marine components, engineering support and global logistics.", images: ["/videos/actotive/hero-poster.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://actotive.tavakolistudio.workers.dev/#organization", name: "ACTOTIVE RAIL TRADE", url: "https://actotive.tavakolistudio.workers.dev", telephone: contactDetails.phone, email: contactDetails.email, address: { "@type": "PostalAddress", streetAddress: "Bahçelievler Mah. Turhan Koçal Cad. No: 50/2", addressLocality: "Yalova", addressCountry: "TR" }, description: "Global supplier of locomotive, rolling stock, passenger car and marine engine components, freight forwarding and technical support.", areaServed: ["Europe", "Middle East", "Africa", "Asia"], sameAs: ["https://actotive.co/"] }, { "@type": "WebSite", "@id": "https://actotive.tavakolistudio.workers.dev/#website", name: "ACTOTIVE", url: "https://actotive.tavakolistudio.workers.dev", inLanguage: ["en", "tr"] }] };
  return <html lang="en"><body><Script src="https://news.google.com/swg/js/v1/publisher.js" strategy="beforeInteractive" /> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
