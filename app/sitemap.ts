import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://oceangatedjibouti.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#mission`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#heritage`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...insights.map((post) => ({
      url: `${base}/insights/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
