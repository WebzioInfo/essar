import type { Industry } from "@/content/industries";
import type { LocationPageContent } from "@/content/locations";
import type { Project } from "@/content/projects";
import type { Service } from "@/content/services";

const siteUrl = "https://essarenterprises.co.in";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Essar Enterprises",
    url: siteUrl,
    logo: `${siteUrl}/logos/logo-dark.png`,
    foundingYear: "2004",
    description:
      "Essar Enterprises helps investors move from idea to first bottle through packaged drinking water plant planning, licensing, design, machinery selection, laboratory setup, and launch support.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8884677773",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam", "Hindi", "Tamil"],
      },
    ],
    sameAs: ["https://www.instagram.com/essar.enterprises"],
  };
}

export function serviceSchema(service: Service) {
  return {
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Essar Enterprises",
      url: siteUrl,
    },
    areaServed: "South India",
    serviceType: service.title,
  };
}

export function projectArticleSchema(project: Project) {
  return {
    headline: `${project.brand} - Water Plant Project by Essar Enterprises`,
    description: `Case study on how Essar Enterprises supported the ${project.brand} packaged drinking water plant in ${project.location}.`,
    author: {
      "@type": "Organization",
      name: "Essar Enterprises",
    },
    about: project.services,
  };
}

export function industryServiceSchema(industry: Industry) {
  return {
    name: industry.title,
    description: industry.description,
    provider: {
      "@type": "Organization",
      name: "Essar Enterprises",
      url: siteUrl,
    },
    serviceType: industry.title,
  };
}

export function localBusinessSchema(location: LocationPageContent) {
  return {
    name: `Essar Enterprises - Water Plant Consultants in ${location.name}`,
    image: `${siteUrl}/seo/og-image.jpg`,
    telephone: "+91-8884677773",
    areaServed: location.name,
    description: location.description,
    url: `${siteUrl}/locations/${location.slug}`,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Essar Enterprises",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/services?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
