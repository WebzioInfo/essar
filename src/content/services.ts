export type Service = {
  slug: string;
  divisionNumber: number;
  title: string;
  subtitle: string;
  description: string;
  tagline?: string;
  benefits: string[];
  capabilities: string[];
  aliases?: string[];
};

export const services: Service[] = [
  {
    slug: "planning",
    divisionNumber: 1,
    title: "Packaged Drinking Water Plant Setup",
    subtitle: "Planning, Consultancy, Design, Installation & Commissioning",
    tagline: "From Idea to First Commercial Bottle in 6 Months",
    description:
      "Complete end-to-end consultancy for starting a new packaged drinking water business. We guide investors from initial land selection and capacity planning to machinery installation and commercial production.",
    benefits: [
      "Single point of contact from raw land to first bottle",
      "Custom capacity planning based on market demand",
      "Bankable DPR (Detailed Project Report) for project loans",
      "Turnkey machinery sizing, installation & commissioning",
    ],
    capabilities: [
      "New plant project planning & feasibility studies",
      "Detailed Project Report (DPR) preparation for bank financing",
      "Plant capacity selection (BPH & 20L jars)",
      "Turnkey project execution & machinery installation",
      "Plant expansion & production optimization",
      "Existing plant problem identification & rectification",
    ],
    aliases: ["packaged-drinking-water-plant-setup", "turnkey-plant-setup"],
  },
  {
    slug: "water-treatment-ro",
    divisionNumber: 2,
    title: "RO & Water Treatment Solutions",
    subtitle: "RO, Filtration, UV, Ozone, Softening & Complete WTP Systems",
    tagline: "Engineered specifically around your raw water chemistry",
    description:
      "Advanced industrial and commercial water purification systems designed around your raw water test report. We engineer multi-stage filtration to achieve pure, safe, and sweet-tasting water that passes strict standards.",
    benefits: [
      "Custom multi-stage filtration designed for local raw water",
      "High-recovery commercial reverse osmosis (RO) systems",
      "Integrated UV sterilization and high-output ozonation",
      "Food-grade SS 304 / 316 storage tanks and hygienic piping",
    ],
    capabilities: [
      "Commercial & industrial RO plant design and installation",
      "Raw-water pre-treatment & multi-grade sand filtration",
      "Activated carbon filtration & iron removal systems",
      "Precision micron filtration & sediment removal",
      "UV purification & high-output ozonation systems",
      "pH correction, mineral dosing & SS storage tanks",
    ],
    aliases: ["water-treatment-solutions", "commercial-ro-systems"],
  },
  {
    slug: "bottling-packaging",
    divisionNumber: 3,
    title: "Bottling & Packaging Solutions",
    subtitle: "PET, Filling, Capping, Labeling, Shrink Packing & 20L Jars",
    tagline: "High-speed automated production with minimal product loss",
    description:
      "High-speed automated bottle production and packaging lines. We integrate reliable blow moulding, rinsing, filling, capping, labeling, and secondary packing machinery for small bottles and 20L jars.",
    benefits: [
      "Automated monoblock filling with zero manual contact",
      "Handles 250ml, 500ml, 1 Liter bottles and 20L commercial jars",
      "Precise BOPP hot-melt and shrink sleeve labeling",
      "End-of-line shrink wrapping and carton packaging",
    ],
    capabilities: [
      "PET preform bottle blowing machine setup",
      "Automated RFC (Rinsing, Filling, Capping) monoblock systems",
      "20-Liter jar washing, filling, and capping lines",
      "BOPP hot-melt labeling & sleeve labeling systems",
      "Online batch coding, date printing & conveyor integration",
      "Secondary packaging: shrink wrapping & carton packing systems",
    ],
    aliases: ["bottling-solutions", "packaging-machinery"],
  },
  {
    slug: "architecture",
    divisionNumber: 4,
    title: "Plant Engineering & Layout",
    subtitle: "Plant Design, Machinery Layout, Utilities & Production Planning",
    tagline: "Floor plans designed to pass government inspection on the first visit",
    description:
      "Hygienic civil architecture and production floor plans engineered specifically for BIS IS 14543 approval. We eliminate contamination risks and optimize material flow before construction begins.",
    benefits: [
      "Custom architectural layouts matching your plot dimensions",
      "Separated cleanrooms with positive air pressure for filling",
      "Prevents expensive civil rework during government audits",
      "Optimized flow from raw material to finished goods storage",
    ],
    capabilities: [
      "Complete factory layout and architectural blueprints",
      "Cleanroom, filling room & positive pressure air planning",
      "Water treatment & RO room structural planning",
      "Quality control laboratory layout & chemist cabins",
      "Raw material, packaging & finished goods storage flow",
      "Electrical, plumbing, drainage & utility coordination",
    ],
    aliases: ["plant-engineering-layout", "civil-hygienic-layout"],
  },
  {
    slug: "licensing",
    divisionNumber: 5,
    title: "Government Approvals & Certification",
    subtitle: "BIS, FSSAI, PCB, K-SWIFT, MSME, ISO & Legal Metrology",
    tagline: "Complete regulatory compliance and inspection accompaniment",
    description:
      "Complete assistance for all statutory and regulatory government clearances required to operate a packaged drinking water plant in South India. We prepare your documentation and support you through audits.",
    benefits: [
      "Structured documentation for BIS IS 14543 certification",
      "Central and State FSSAI food safety licenses",
      "State Pollution Control Board (PCB) Consent to Operate",
      "Single-window clearances (K-SWIFT) and local body approvals",
    ],
    capabilities: [
      "BIS / ISI Certification under IS 14543",
      "Central & State FSSAI food safety licensing",
      "State Pollution Control Board (PCB) approvals",
      "K-SWIFT single window clearances (Kerala)",
      "MSME / Udyam registration & Factory & Boilers approvals",
      "Legal Metrology, Groundwater / Irrigation NOCs & ISO certification",
    ],
    aliases: ["government-approvals-compliance", "bis-fssai-licensing"],
  },
  {
    slug: "laboratory",
    divisionNumber: 6,
    title: "Laboratory Setup & Quality Management",
    subtitle: "Lab Setup, Testing Equipment, Documentation, QC & Staff Training",
    tagline: "Complete in-house testing facilities for zero-defect production",
    description:
      "Complete setup of mandatory in-house testing laboratories. We procure, calibrate, and install all chemical and microbiological instruments required for BIS compliance and train your chemists.",
    benefits: [
      "Full chemical and microbiological testing apparatus",
      "Laminar airflow, autoclaves, incubators & colony counters",
      "Hands-on training for plant chemists and QC technicians",
      "BIS and FSSAI quality logbooks and daily testing records",
    ],
    capabilities: [
      "Complete water-testing laboratory equipment planning",
      "Microbiological laboratory apparatus & laminar airflow setup",
      "Chemical testing instruments, glassware & spectrophotometers",
      "Daily water quality testing protocol guidance",
      "Laboratory staff and chemist hands-on training",
      "BIS and FSSAI quality documentation & audit logbooks",
    ],
    aliases: ["laboratory-setup-quality-control", "in-house-lab"],
  },
  {
    slug: "ro-service-maintenance",
    divisionNumber: 7,
    title: "RO Service & Plant Maintenance",
    subtitle: "Repair, Servicing, Membrane/Filter Replacement, AMC & Troubleshooting",
    tagline: "Keep your plant running at peak recovery with minimal downtime",
    description:
      "Dedicated technical servicing and scheduled maintenance for commercial reverse osmosis plants. We solve low output, high TDS, membrane fouling, and mechanical breakdowns across South India.",
    benefits: [
      "Fast response for unexpected breakdowns and emergency repairs",
      "Genuine membrane and media replacement for consistent quality",
      "Annual Maintenance Contracts (AMC) for worry-free operation",
      "Extends machinery life and reduces expensive downtime",
    ],
    capabilities: [
      "Complete RO plant inspection & performance audits",
      "Low output & high TDS troubleshooting and rectification",
      "RO membrane replacement & chemical cleaning (CIP)",
      "Filter media replacement (sand, carbon, micron cartridges)",
      "High-pressure pump servicing & motor repairs",
      "Annual Maintenance Contracts (AMC) & periodic servicing",
    ],
    aliases: ["ro-service-and-maintenance", "ro-maintenance-amc"],
  },
  {
    slug: "modernization",
    divisionNumber: 8,
    title: "Existing Plant Problem Solving & Upgradation",
    subtitle: "Find the Problem. Fix the Plant. Improve the Production.",
    tagline: "Find the Problem. Fix the Plant. Improve the Production.",
    description:
      "Specialized diagnostics and engineering interventions for struggling water plants. If your plant has production losses, high wastage, or audit failures, our senior consultants find and fix the root causes.",
    benefits: [
      "Comprehensive diagnostic audit of the entire production line",
      "Stops water and preform packaging wastage immediately",
      "Resolves persistent taste, odor, or microbiological issues",
      "Upgrades plant capacity and automates manual bottlenecks",
    ],
    capabilities: [
      "Root-cause fault finding for production & quality problems",
      "Machinery breakdown, filling & capping issue resolution",
      "PET bottle blowing defect reduction & wastage minimization",
      "Plant hygiene & layout rectification to pass pending audits",
      "Bottleneck elimination to increase daily output capacity",
      "Plant modernization, automation additions & commercial expansion",
    ],
    aliases: ["plant-problem-solving", "existing-plant-problem-solving"],
  },
  {
    slug: "branding",
    divisionNumber: 9,
    title: "Business & Market Setup",
    subtitle: "Brand Development, Custom Bottle Shapes, Labeling & Sales Strategy",
    tagline: "Build a memorable, high-margin commercial brand",
    description:
      "Building a profitable packaged water brand. We guide brand identity, trademark filing, custom bottle shape engineering, compliant label design, and distribution market setup.",
    benefits: [
      "Unique custom bottle shapes that stand out on retail shelves",
      "100% compliant label artwork for BIS & FSSAI standards",
      "Trademark registration coordination to protect your brand",
      "Packaging vendor connections for labels, preforms, and cartons",
    ],
    capabilities: [
      "Brand name development & trademark registration coordination",
      "Custom PET bottle shape & mold design guidance",
      "Compliant label artwork review for BIS & FSSAI standards",
      "Vendor selection for preforms, caps, labels & cartons",
      "Plant financial viability & unit-economics modeling",
      "Distribution route & local market entry planning",
    ],
    aliases: ["brand-registration-label-design", "business-project-consultancy"],
  },
];

/**
 * Helper function to retrieve a service by primary slug or alias.
 */
export function getService(slug: string): Service | undefined {
  const normalized = slug.toLowerCase();
  return services.find(
    (service) =>
      service.slug === normalized ||
      (service.aliases && service.aliases.includes(normalized))
  );
}
