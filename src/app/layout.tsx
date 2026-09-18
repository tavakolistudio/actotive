import type { Metadata } from "next";
import { faqs } from "@/data/actotive";
import Script from "next/script";
import "./globals.css";
import "./certificates.css";
import "./footer-credit.css";
import "./seo-content.css";
import "./certificate-preview.css";
import "./certificate-card.css";
import "./contact.css";
import "./contact-panel.css";
import "./language.css";
import "./hero-data.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://actotive.tavakolistudio.workers.dev"),
  title: { default: "ACTOTIVE | Rail & Marine Parts, Engineering & Global Supply", template: "%s | ACTOTIVE" },
  description: "ACTOTIVE supplies locomotive, rolling stock, turbocharger and marine engine components with engineering support and worldwide logistics.",
  keywords: ["locomotive spare parts", "railway components", "turbocharger components", "marine engine components", "freight forwarding", "railway supply chain", "ACTOTIVE"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "ACTOTIVE", title: "ACTOTIVE | Rail & Marine Parts, Engineering & Global Supply", description: "Railway and marine components, engineering support and global logistics." },
  twitter: { card: "summary", title: "ACTOTIVE | Rail & Marine Parts", description: "Railway and marine components, engineering support and global logistics." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", name: "ACTOTIVE RAIL TRADE", url: "https://actotive.tavakolistudio.workers.dev", description: "Global supplier of locomotive, rolling stock, passenger car and marine engine components, freight forwarding and technical support.", areaServed: ["Europe", "Middle East", "Africa", "Asia"], knowsAbout: ["Locomotive spare parts", "Railway components", "Turbocharger components", "Marine engine components", "Freight forwarding"], sameAs: ["https://actotive.co/"] }, { "@type": "WebSite", name: "ACTOTIVE", url: "https://actotive.tavakolistudio.workers.dev", inLanguage: "en" }, { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }] };
  return <html lang="en"><body><Script src="https://news.google.com/swg/js/v1/publisher.js" strategy="beforeInteractive" /> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
