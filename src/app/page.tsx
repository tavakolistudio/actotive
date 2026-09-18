import { CinematicHero } from "@/components/home/CinematicHero";
import { HomeSections } from "@/components/home/HomeSections";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function Home() { return <main><Header /><CinematicHero /><HomeSections /><Footer /><WhatsAppButton /></main>; }
