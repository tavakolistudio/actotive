import type { Metadata } from "next";
import { Site } from "@/components/Site";

export const metadata: Metadata = { title: "Demiryolu ve Denizcilik Parçaları", description: "ACTOTIVE; lokomotif, demiryolu, turboşarj ve deniz motoru bileşenleri ile küresel lojistik desteği sunar.", alternates: { canonical: "/tr", languages: { en: "/", tr: "/tr", "x-default": "/" } }, openGraph: { title: "ACTOTIVE | Demiryolu ve Denizcilik Parçaları", description: "Lokomotif ve deniz motoru parçaları, mühendislik ve küresel lojistik desteği.", url: "/tr", locale: "tr_TR", type: "website", images: ["/videos/actotive/hero-poster.jpg"] } };
export default function TurkishHome() { return <Site locale="tr" />; }
