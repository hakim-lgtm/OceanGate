import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/logos"],
    },
    sitemap: "https://oceangatedjibouti.com/sitemap.xml",
    host: "https://oceangatedjibouti.com",
  };
}
