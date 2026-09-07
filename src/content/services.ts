export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "planning",
    title: "Turnkey Water Plant Setup",
    subtitle: "From Bare Land to Commercial Production",
    description:
      "Our turnkey execution service handles everything required to start your packaged drinking water business. We manage machinery sizing, civil layout advice, mechanical installation, and final commissioning so you can focus on building your brand.",
    benefits: [
      "Single point of contact for the entire project",
      "BIS and FSSAI layout planning support",
      "High-efficiency machinery selection based on your budget",
      "Faster time-to-market with reduced trial-and-error",
    ],
  },
  {
    slug: "architecture",
    title: "Civil & Hygienic Plant Design",
    subtitle: "Architectural Layouts Built for BIS Approval",
    description:
      "A water plant's success begins with its floor plan. We provide expert civil engineering layouts focused on hygienic workflow, epoxy flooring, clean rooms, and drainage systems for regulatory inspections.",
    benefits: [
      "Custom floor plans for different land sizes",
      "Prevents costly rebuilds caused by failed audits",
      "Optimized workflow for reduced labor costs",
      "Planning aligned to IS 14543 hygiene expectations",
    ],
  },
  {
    slug: "laboratory",
    title: "In-House Laboratory Setup",
    subtitle: "Chemical & Microbiological Testing Facilities",
    description:
      "Every BIS-approved packaged drinking water plant requires strict in-house testing. We procure, install, and calibrate chemical and microbiological lab equipment so the plant is ready for production control.",
    benefits: [
      "Equipment planning for pH meters, incubators, and laminar airflow",
      "Calibration and setup coordination",
      "Laboratory layout aligned to BIS audit needs",
      "Hands-on training for plant chemists",
    ],
  },
  {
    slug: "licensing",
    title: "BIS & FSSAI Licensing Consultancy",
    subtitle: "Regulatory Planning and Audit Support",
    description:
      "Navigating government regulations is one of the biggest hurdles for new water plants. Our consultants support document compilation, application filing, pre-audit readiness, and factory inspection coordination.",
    benefits: [
      "Structured application and documentation process",
      "Pre-audit factory readiness reviews",
      "Support for NOCs and related approvals",
      "Clear licensing timeline and responsibility tracking",
    ],
  },
  {
    slug: "branding",
    title: "Brand Registration & Label Design",
    subtitle: "Create a Premium Water Brand",
    description:
      "Do not just sell water; build a brand. We assist with trademark coordination, bottle shape selection, vendor decisions, and label guidance aligned to packaged drinking water compliance needs.",
    benefits: [
      "Trademark registration coordination",
      "PET bottle and packaging vendor guidance",
      "Label artwork compliance review",
      "Vendor connections for shrink-wrap and cartons",
    ],
  },
  {
    slug: "modernization",
    title: "Water Plant Modernization & Upgrades",
    subtitle: "Scale Your Production Capacity",
    description:
      "If your current RO plant has high maintenance costs, bottlenecks, or quality failures, we upgrade machinery, membranes, automation, and filling lines to improve reliability and output.",
    benefits: [
      "Reduce manual labor with automation",
      "Improve recovery rate and water consistency",
      "Minimize downtime and maintenance costs",
      "Integrate upgrades into the existing floor plan",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
