import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://actotive.tavakolistudio.workers.dev";
  return ["", ...Object.keys(guides).map(slug => `/${slug}`)].flatMap(path => ["en", "tr"].map(locale => ({
    url: `${origin}${locale === "tr" ? "/tr" : ""}${path || (locale === "en" ? "/" : "")}`,
    lastModified: "2026-09-18", changeFrequency: "monthly" as const,
    alternates: { languages: { en: `${origin}${path || "/"}`, tr: `${origin}/tr${path}`, "x-default": `${origin}${path || "/"}` } },
  })));
}
