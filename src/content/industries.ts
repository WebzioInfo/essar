export type Industry = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
};

export const industries: Industry[] = [
  {
    slug: "packaged-drinking-water",
    title: "Packaged Drinking Water Plants",
    subtitle: "Complete Bottling Lines for Commercial Water Sales",
    description:
      "The packaged drinking water industry is profitable but heavily regulated. Essar provides turnkey setup support for 500ml, 1L, and 2L PET bottling lines, with hygienic civil layouts, RO purification systems, and automated filling machines.",
    applications: ["Retail bottled water brands", "Private label hotel water", "Corporate packaged water", "Event and catering supplies"],
  },
  {
    slug: "mineral-water",
    title: "Natural Mineral Water Plants",
    subtitle: "Premium Processing for Natural Sources",
    description:
      "Natural mineral water requires specialized filtration that protects mineral character while eliminating biological contamination. Essar plans systems for source protection, ultrafiltration, and premium bottling.",
    applications: ["Premium restaurant supply", "Export quality mineral water", "Health and wellness beverage brands", "Spring water processing"],
  },
  {
    slug: "commercial-ro",
    title: "Commercial & Industrial RO Plants",
    subtitle: "High-Capacity Water Purification Systems",
    description:
      "Industries, hospitals, and large residential complexes require reliable continuous purification. Essar builds high-capacity RO systems customized for feed water TDS and output requirements.",
    applications: ["Hospitality and resorts", "Pharmaceutical manufacturing", "Textile and dyeing industries", "Large apartment complexes"],
  },
  {
    slug: "20l-jar-plants",
    title: "20L Jar Water Plants",
    subtitle: "Automated Washing, Filling, and Capping Lines",
    description:
      "The 20L jar business is central to urban water supply. Essar installs efficient jar washing, filling, and capping systems that reduce human contact and improve production speed.",
    applications: ["Corporate office water supply", "Residential delivery services", "Retail bulk water distribution", "Institutional catering"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
