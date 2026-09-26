/**
 * Essar Enterprises - Centralized SEO, Brand Entity & Knowledge Graph Configuration
 * Single Source of Truth for Technical SEO, OpenGraph, Canonical URLs, and Schema.org
 */

export const SEO_CONFIG = {
  // Canonical Domain (Verified HTTP 200 OK - No redirect loops)
  canonicalUrl: "https://www.essarenterprises.co.in",
  siteUrl: "https://www.essarenterprises.co.in",

  // Brand Entity Information (Disambiguated from Essar Group)
  brandName: "Essar Enterprises",
  legalName: "Essar Enterprises",
  alternateNames: ["Essar Water Plant Consultants", "Essar Enterprises Water Solutions"],
  foundingYear: 2004,
  yearsOfExperience: "20+",
  tagline: "From Idea To First Bottle | Plan to Plant",
  corePromise: "Plan to Plant: Complete Bottled Water Business Consultancy",
  turnaroundTarget: "First Commercial Bottle in 6 Months",

  // Knowledge Graph Disambiguation
  disambiguatingDescription:
    "Essar Enterprises is an independent water engineering and business consultancy firm established in 2004 in South India, specializing in packaged drinking water plant setup, commercial reverse osmosis (RO) plants, BIS IS 14543 licensing, FSSAI regulatory compliance, and in-house microbiological laboratory setup across Kerala, Karnataka, and Tamil Nadu. Not affiliated with the Essar Group conglomerate.",

  // Primary Contact
  contactEmail: "info@essarenterprises.co.in",
  contactPhone: "+91-8884677773",
  contactPhoneRaw: "918884677773",
  secondaryPhone: "+91-8553185300",

  // Social & Web Presence
  socialLinks: [
    "https://www.instagram.com/essar.enterprises",
  ],

  // Geographic Service Areas
  serviceArea: [
    { name: "Kerala", type: "State" },
    { name: "Karnataka", type: "State" },
    { name: "Tamil Nadu", type: "State" },
    { name: "South India", type: "AdministrativeArea" },
    { name: "India", type: "Country" },
  ],

  // Verified Regional Office Locations (Entity NAP)
  offices: [
    {
      id: "kerala",
      name: "Essar Enterprises - Kerala Regional Office",
      streetAddress: "Bypass Road, Kondotty",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      postalCode: "673638",
      addressCountry: "IN",
      telephone: "+91-8884677773",
      email: "info@essarenterprises.co.in",
      priceRange: "$$",
      openingHours: "Mo-Sa 09:00-18:00",
      geo: {
        latitude: "11.1485",
        longitude: "75.9622",
      },
    },
    {
      id: "karnataka",
      name: "Essar Enterprises - Karnataka Office",
      streetAddress: "Segahalli, KR Puram",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560049",
      addressCountry: "IN",
      telephone: "+91-8553185300",
      email: "info@essarenterprises.co.in",
      priceRange: "$$",
      openingHours: "Mo-Sa 09:00-18:00",
      geo: {
        latitude: "13.0118",
        longitude: "77.7214",
      },
    },
    {
      id: "tamil-nadu",
      name: "Essar Enterprises - Tamil Nadu Office",
      streetAddress: "Spencer Plaza, Anna Salai",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600002",
      addressCountry: "IN",
      telephone: "+91-8884677773",
      email: "info@essarenterprises.co.in",
      priceRange: "$$",
      openingHours: "Mo-Sa 09:00-18:00",
      geo: {
        latitude: "13.0604",
        longitude: "80.2608",
      },
    },
  ],

  // Knowledge Graph Know-About Topics
  knowsAbout: [
    "Packaged Drinking Water Plant Setup",
    "BIS IS 14543 Certification",
    "FSSAI Water Plant Licensing",
    "Industrial Reverse Osmosis (RO) Engineering",
    "Water Testing Laboratory Setup",
    "Microbiological Water Testing",
    "Chemical Water Analysis",
    "Hygienic Factory Floor Plan Design",
    "PET Bottle Blow Moulding Machinery",
    "Automatic Rinsing, Filling & Capping (RFC)",
    "Turnkey Water Project Reports",
    "Commercial Water Plant ROI Calculation",
  ],

  // Core Google Sitelinks Navigation Routes
  siteNavigation: [
    {
      name: "About Essar",
      url: "https://www.essarenterprises.co.in/about",
      description: "Over 20 years of packaged drinking water consulting experience since 2004.",
    },
    {
      name: "Consultancy Services",
      url: "https://www.essarenterprises.co.in/services",
      description: "Turnkey planning, hygienic architecture, lab setup, and BIS licensing.",
    },
    {
      name: "Completed Projects",
      url: "https://www.essarenterprises.co.in/projects",
      description: "Case studies of commercial packaged water plants engineered across South India.",
    },
    {
      name: "Plant Cost Calculator",
      url: "https://www.essarenterprises.co.in/tools/calculator",
      description: "Interactive machinery, licensing, and CAPEX estimate tool.",
    },
    {
      name: "Turnkey Quotation",
      url: "https://www.essarenterprises.co.in/quotation",
      description: "Request an investment and plant design proposal for your location.",
    },
    {
      name: "Contact & Offices",
      url: "https://www.essarenterprises.co.in/contact",
      description: "Connect with our engineering teams in Kerala, Bangalore, and Chennai.",
    },
  ],
};

/**
 * Reusable Schema.org JSON-LD Generators
 */

// 1. Organization Schema with Multi-Location Departments & Entity Disambiguation
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.canonicalUrl}/#organization`,
    name: SEO_CONFIG.brandName,
    legalName: SEO_CONFIG.legalName,
    alternateName: SEO_CONFIG.alternateNames,
    url: SEO_CONFIG.canonicalUrl,
    logo: {
      "@type": "ImageObject",
      url: `${SEO_CONFIG.canonicalUrl}/logos/logo-dark.png`,
      caption: "Essar Enterprises Official Logo",
    },
    image: `${SEO_CONFIG.canonicalUrl}/logos/logo-dark.png`,
    description: SEO_CONFIG.disambiguatingDescription,
    disambiguatingDescription: SEO_CONFIG.disambiguatingDescription,
    foundingDate: "2004",
    email: SEO_CONFIG.contactEmail,
    telephone: SEO_CONFIG.contactPhone,
    areaServed: SEO_CONFIG.serviceArea.map((area) => ({
      "@type": area.type,
      name: area.name,
    })),
    knowsAbout: SEO_CONFIG.knowsAbout,
    sameAs: SEO_CONFIG.socialLinks,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SEO_CONFIG.contactPhone,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam", "Hindi", "Tamil"],
      },
    ],
    department: SEO_CONFIG.offices.map((office) => ({
      "@type": "ProfessionalService",
      name: office.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.streetAddress,
        addressLocality: office.addressLocality,
        addressRegion: office.addressRegion,
        postalCode: office.postalCode,
        addressCountry: office.addressCountry,
      },
      telephone: office.telephone,
      email: office.email,
      priceRange: office.priceRange,
      openingHours: office.openingHours,
      geo: {
        "@type": "GeoCoordinates",
        latitude: office.geo.latitude,
        longitude: office.geo.longitude,
      },
    })),
  };
}

// 2. WebSite Schema with SearchAction
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.canonicalUrl}/#website`,
    name: SEO_CONFIG.brandName,
    alternateName: "Essar Enterprises Water Plant Solutions",
    url: SEO_CONFIG.canonicalUrl,
    description: "Official website of Essar Enterprises - Premium Packaged Drinking Water Plant Consultants in South India.",
    publisher: {
      "@id": `${SEO_CONFIG.canonicalUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO_CONFIG.canonicalUrl}/services?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// 3. Google Expanded Sitelinks Schema (SiteNavigationElement ItemList)
export function getSiteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SEO_CONFIG.siteNavigation.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url,
    })),
  };
}

// 4. BreadcrumbList Schema Generator
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SEO_CONFIG.canonicalUrl}${item.url}`,
    })),
  };
}

// 5. HowTo Schema: Plan to Plant Methodology
export function getHowToPlanToPlantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Build a Packaged Drinking Water Plant: Plan to Plant Methodology",
    description:
      "Essar Enterprises' structured 6-stage roadmap for establishing a fully compliant commercial bottled water manufacturing plant from bare land to first bottle.",
    totalTime: "P6M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "3500000 to 12000000",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Land Feasibility & Raw Water Testing",
        text: "Analyze raw water source parameters (TDS, heavy metals, microbial load) and verify zoning clearances and water extraction NOCs.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Hygienic Civil Architecture & Layout Design",
        text: "Design sterile, contamination-free factory floor plans with epoxy flooring, cleanrooms, and drainage adhering strictly to IS 14543 requirements.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Machinery Sizing & Turnkey Procurement",
        text: "Select and install commercial reverse osmosis (RO), micron filtration, UV sterilizers, ozone systems, and automatic bottle rinsing, filling, and capping (RFC) units.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "In-House Testing Laboratory Setup",
        text: "Procure and calibrate chemical and microbiological testing apparatus (incubators, laminar airflow, colony counters, spectrophotometers) and train plant chemists.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "BIS (IS 14543) & FSSAI Licensing Audit Preparation",
        text: "Prepare standard operating procedures, documentation manuals, conduct mock regulatory audits, and accompany government inspection officials.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Production Trial & Commercial Market Launch",
        text: "Conduct continuous bottle test batches, verify shelf-life parameters, finalize shrink packaging, and officially launch commercial distribution.",
      },
    ],
  };
}

// 6. LocalBusiness Schema for Regional Offices
export function getLocalBusinessSchema(officeId: string) {
  const office = SEO_CONFIG.offices.find((o) => o.id === officeId) || SEO_CONFIG.offices[0];
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: office.name,
    image: `${SEO_CONFIG.canonicalUrl}/logos/logo-dark.png`,
    telephone: office.telephone,
    email: office.email,
    priceRange: office.priceRange,
    openingHours: office.openingHours,
    url: `${SEO_CONFIG.canonicalUrl}/locations/${office.id === "kerala" ? "kerala" : office.id === "karnataka" ? "bangalore" : "chennai"}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      addressRegion: office.addressRegion,
      postalCode: office.postalCode,
      addressCountry: office.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.geo.latitude,
      longitude: office.geo.longitude,
    },
    areaServed: office.addressRegion,
  };
}

// 7. FAQPage Schema Generator
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
