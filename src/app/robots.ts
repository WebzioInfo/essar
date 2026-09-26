import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/thank-you",
        "/quotation/result",
        "/_next/",
      ],
    },
    sitemap: `${SEO_CONFIG.canonicalUrl}/sitemap.xml`,
    host: SEO_CONFIG.canonicalUrl,
  };
}
