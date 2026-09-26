import type { Industry } from "@/content/industries";
import type { LocationPageContent } from "@/content/locations";
import type { Project } from "@/content/projects";
import type { Service } from "@/content/services";
import {
  SEO_CONFIG,
  getOrganizationSchema,
  getWebSiteSchema,
  getSiteNavigationSchema,
  getBreadcrumbSchema,
  getHowToPlanToPlantSchema,
  getLocalBusinessSchema,
  getFAQSchema,
} from "@/config/seo";

// Re-export modern generators
export {
  SEO_CONFIG,
  getOrganizationSchema,
  getWebSiteSchema,
  getSiteNavigationSchema,
  getBreadcrumbSchema,
  getHowToPlanToPlantSchema,
  getLocalBusinessSchema,
  getFAQSchema,
};

const siteUrl = SEO_CONFIG.canonicalUrl;

export function organizationSchema() {
  return getOrganizationSchema();
}

export function websiteSchema() {
  return getWebSiteSchema();
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SEO_CONFIG.brandName,
      url: siteUrl,
      telephone: SEO_CONFIG.contactPhone,
      email: SEO_CONFIG.contactEmail,
    },
    areaServed: SEO_CONFIG.serviceArea.map((a) => a.name),
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.benefits.map((benefit, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: benefit,
        },
      })),
    },
  };
}

export function projectArticleSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.brand} - Commercial Water Plant Setup Case Study`,
    description: `Detailed case study on how Essar Enterprises supported ${project.brand} (${project.company}) in ${project.location} with packaged drinking water plant establishment, licensing, and commissioning.`,
    image: project.coverImage ? `${siteUrl}${project.coverImage}` : `${siteUrl}/logos/logo-dark.png`,
    author: {
      "@type": "Organization",
      name: SEO_CONFIG.brandName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_CONFIG.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logos/logo-dark.png`,
      },
    },
    about: project.services,
    ...(project.websiteUrl ? { sameAs: project.websiteUrl } : {}),
  };
}

export function industryServiceSchema(industry: Industry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.title,
    description: industry.description,
    provider: {
      "@type": "Organization",
      name: SEO_CONFIG.brandName,
      url: siteUrl,
      telephone: SEO_CONFIG.contactPhone,
    },
    serviceType: industry.title,
    areaServed: "South India",
  };
}

export function localBusinessSchema(location: LocationPageContent) {
  // Map location slug to matching office if available, or generate verified regional service schema
  const matchingOffice = SEO_CONFIG.offices.find(
    (o) =>
      o.addressRegion.toLowerCase().includes(location.slug.toLowerCase()) ||
      o.addressLocality.toLowerCase().includes(location.slug.toLowerCase()) ||
      location.slug.toLowerCase().includes(o.id)
  );

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Essar Enterprises - Packaged Drinking Water Plant Consultants in ${location.name}`,
    image: `${siteUrl}/logos/logo-dark.png`,
    telephone: matchingOffice ? matchingOffice.telephone : SEO_CONFIG.contactPhone,
    email: SEO_CONFIG.contactEmail,
    priceRange: "$$",
    areaServed: location.name,
    description: location.description,
    url: `${siteUrl}/locations/${location.slug}`,
    ...(matchingOffice
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: matchingOffice.streetAddress,
            addressLocality: matchingOffice.addressLocality,
            addressRegion: matchingOffice.addressRegion,
            postalCode: matchingOffice.postalCode,
            addressCountry: "IN",
          },
        }
      : {}),
  };
}
