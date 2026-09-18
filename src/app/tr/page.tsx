import type { Metadata } from "next";
import { Site } from "@/components/Site";

export const metadata: Metadata = { title: "ACTOTIVE | Demiryolu ve Denizcilik Parçaları", description: "ACTOTIVE; lokomotif, demiryolu, turboşarj ve deniz motoru bileşenleri ile küresel lojistik desteği sunar.", alternates: { canonical: "/tr" } };
export default function TurkishHome() { return <Site locale="tr" />; }
