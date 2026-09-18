import { notFound } from "next/navigation";
import { GuidePage, guideMetadata } from "@/components/GuidePage";
import { guides, type GuideSlug } from "@/data/guides";
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(guides).map(guide => ({ guide })); }
async function getSlug(params: Promise<{ guide: string }>) { const { guide } = await params; if (!Object.hasOwn(guides, guide)) notFound(); return guide as GuideSlug; }
export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }) { return guideMetadata(await getSlug(params), "tr"); }
export default async function Page({ params }: { params: Promise<{ guide: string }> }) { return <GuidePage slug={await getSlug(params)} locale="tr" />; }
