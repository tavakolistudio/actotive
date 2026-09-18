import { CinematicHero } from "@/components/home/CinematicHero";
import { HomeSections } from "@/components/home/HomeSections";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import type { Locale } from "@/data/locale";
import { faqs } from "@/data/actotive";

export function Site({ locale }: { locale: Locale }) {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <><Header locale={locale} /><main lang={locale}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><CinematicHero locale={locale} /><HomeSections locale={locale} /></main><Footer locale={locale} /><WhatsAppButton /></>;
}
