import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/logos"],
    },
    sitemap: "https://oceangate.dj/sitemap.xml",
    host: "https://oceangate.dj",
  };
}
