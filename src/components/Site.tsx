import { CinematicHero } from "@/components/home/CinematicHero";
import { HomeSections } from "@/components/home/HomeSections";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import type { Locale } from "@/data/locale";

export function Site({ locale }: { locale: Locale }) { return <main lang={locale}><Header locale={locale} /><CinematicHero locale={locale} /><HomeSections locale={locale} /><Footer locale={locale} /><WhatsAppButton /></main>; }
