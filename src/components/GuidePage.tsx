import type { Metadata } from "next";
import { guides, type GuideSlug } from "@/data/guides";
import { certificateGallery } from "@/data/actotive";
import type { Locale } from "@/data/locale";

const origin = "https://actotive.tavakolistudio.workers.dev";
export function guideMetadata(slug: GuideSlug, locale: Locale): Metadata {
  const page = guides[slug][locale];
  const path = `${locale === "tr" ? "/tr" : ""}/${slug}`;
  return { title: page.title, description: page.description,
    alternates: { canonical: path, languages: { en: `/${slug}`, tr: `/tr/${slug}`, "x-default": `/${slug}` } },
    openGraph: { title: page.title, description: page.description, url: path, type: "website", locale: locale === "tr" ? "tr_TR" : "en_US", images: [{ url: "/videos/actotive/hero-poster.jpg", alt: "ACTOTIVE rail and marine supply" }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/videos/actotive/hero-poster.jpg"] },
  };
}

export function GuidePage({ slug, locale }: { slug: GuideSlug; locale: Locale }) {
  const page = guides[slug][locale];
  const base = locale === "tr" ? "/tr" : "";
  const url = `${origin}${base}/${slug}`;
  const schema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#page`, url, name: page.title, description: page.description, inLanguage: locale, dateModified: "2026-09-18", isPartOf: { "@id": `${origin}/#website` } };
  return <main className="guide-page" lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav aria-label={locale === "tr" ? "Sayfa gezinmesi" : "Page navigation"}><a href={base || "/"}>ACTOTIVE / {locale === "tr" ? "Ana sayfa" : "Home"}</a><a href={`${locale === "tr" ? "" : "/tr"}/${slug}`} hrefLang={locale === "tr" ? "en" : "tr"}>{locale === "tr" ? "English" : "Türkçe"}</a></nav>
    <article><p className="kicker">ACTOTIVE RAIL TRADE</p><h1>{page.title}</h1><p className="guide-lead">{page.description}</p>
      {page.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
      {slug === "quality" ? <section><h2>{locale === "tr" ? "Asıl belgeler" : "Original documents"}</h2><ul>{certificateGallery.map(cert => <li key={cert.title}><a href={cert.href}>{cert.title} ↗</a></li>)}</ul></section> : null}
      <section><h2>{locale === "tr" ? "İlgili bilgiler" : "Related information"}</h2><ul>{(Object.keys(guides) as GuideSlug[]).filter(key => key !== slug).map(key => <li key={key}><a href={`${base}/${key}`}>{guides[key][locale].title}</a></li>)}</ul><p><a href={`${base || "/"}#contact`}>{locale === "tr" ? "Ekibimizle iletişime geçin" : "Contact our sourcing team"}</a> · <a href="mailto:sales@actotive.co">sales@actotive.co</a></p></section>
      <p className="guide-updated">{locale === "tr" ? "Son güncelleme" : "Last updated"}: <time dateTime="2026-09-18">18 September 2026</time></p>
    </article>
  </main>;
}
