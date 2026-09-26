import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/config/seo";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SEO_CONFIG.canonicalUrl;
  const now = new Date();

  // Core High-Authority Pages
  const staticRoutes: { path: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.85, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.85, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/tools/calculator", priority: 0.8, changeFrequency: "monthly" },
    { path: "/quotation", priority: 0.85, changeFrequency: "monthly" },
    { path: "/about-ai", priority: 0.75, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  // Dynamic Service Pages
  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Project Case Studies
  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Dynamic Industry Vertical Pages
  const industryRoutes = industries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Regional Location Pages
  const locationRoutes = locations.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [
    ...staticEntries,
    ...serviceRoutes,
    ...projectRoutes,
    ...industryRoutes,
    ...locationRoutes,
  ];
}
