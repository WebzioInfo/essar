import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

const siteUrl = "https://essarenterprises.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/projects",
    "/services",
    "/tools/calculator",
    "/quotation",
  ];

  const generatedRoutes = [
    ...services.map((service) => `/services/${service.slug}`),
    ...projects.map((project) => `/projects/${project.slug}`),
    ...industries.map((industry) => `/industries/${industry.slug}`),
    ...locations.map((location) => `/locations/${location.slug}`),
  ];

  return [...staticRoutes, ...generatedRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/contact") ? 0.9 : 0.7,
  }));
}
