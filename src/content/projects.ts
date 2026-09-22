export type Project = {
  slug: string;
  brand: string;
  company: string;
  location: string;
  status: string;
  projectType: string;
  services: string[];
  serviceSlugs?: string[];
  description: string;
  challenge: string;
  intervention?: string;
  revival?: string;
  solution: string;
  outcome?: string;
  highlights?: string[];
  featuredOnHome?: boolean;
  homeSummary?: string;
  coverImage?: string;
  brandLogo?: string;
  websiteUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "kenby",
    brand: "KENBY",
    company: "Eranad Beverages Pvt Ltd",
    location: "Kerala",
    status: "Completed",
    projectType: "Turnkey Plant Setup",
    services: ["Turnkey Plant Setup", "Civil Layout", "BIS Licensing", "FSSAI Licensing", "Laboratory Setup"],
    serviceSlugs: ["planning", "architecture", "laboratory", "licensing"],
    description: "Turnkey packaged drinking water plant establishment, licensing, and launch.",
    challenge:
      "The client required a complete factory setup from bare land, including civil layout design and BIS licensing readiness within a strict launch window.",
    intervention:
      "Essar Enterprises executed a Plan to Plant strategy, delivering factory blueprints, machinery installation coordination, QC lab setup, and staff training for audit readiness.",
    solution:
      "Essar Enterprises executed a Plan to Plant strategy, delivering factory blueprints, machinery installation coordination, QC lab setup, and staff training for audit readiness.",
    outcome:
      "Full commercial facility commissioned with BIS and FSSAI approvals, launching the KENBY brand into the market.",
    highlights: [
      "Bare-land to commercial commissioning execution",
      "Hygienic civil layout aligned to IS 14543",
      "Turnkey machinery sizing and calibration",
      "Complete in-house testing laboratory setup"
    ],
    featuredOnHome: true,
    homeSummary:
      "A comprehensive packaged drinking water facility established from bare land for Eranad Beverages, covering civil design, machinery installation, and regulatory clearance.",
    coverImage: "/images/projects/kenby/kenbyimage.jpg",
    brandLogo: "/images/projects/kenby/kenby-Photoroom.png",
  },
  {
    slug: "gangothri",
    brand: "Gangothri",
    company: "Gangothri Water",
    location: "Changarakulam, Kerala",
    status: "Managed By Essar",
    projectType: "Plant Revival & Management",
    websiteUrl: "https://www.gangothri.in/",
    services: ["Plant Management", "Water Plant Modernization", "In-House Laboratory Setup", "Production Optimization", "Quality Control"],
    serviceSlugs: ["modernization", "laboratory", "licensing"],
    description:
      "An existing packaged drinking water business that had ceased operations, revived and brought back into active commercial production through technical overhaul and ongoing operational management.",
    challenge:
      "The plant had previously stopped operations. Production bottlenecks, inconsistent water quality, and operational standstills had halted output, requiring an in-depth assessment and structured intervention to resume commercial viability.",
    intervention:
      "Essar Enterprises conducted a detailed technical evaluation, overhauled the reverse osmosis membrane stages, re-engineered the automated filling line, and established an in-house laboratory for daily chemical and microbiological testing.",
    revival:
      "Following comprehensive machinery servicing, hygiene restoration, and staff retraining, the facility successfully reopened and resumed active commercial production under Essar's direct operational management.",
    solution:
      "Essar took over management, modernized RO membrane operations, optimized filling lines, and implemented daily lab testing controls.",
    outcome:
      "Operational commercial plant actively producing 20L jars and packaged water under Essar's continuous management and daily quality testing.",
    highlights: [
      "Revived an inactive water business back to active commercial production",
      "Modernized reverse osmosis membranes and high-efficiency filling lines",
      "Commissioned chemical and microbiological testing facilities",
      "Ongoing plant operations and quality control managed directly by Essar"
    ],
    featuredOnHome: true,
    homeSummary:
      "An existing water business brought back into operation through structured engineering intervention, laboratory setup, and ongoing operational management.",
    coverImage: "/images/projects/gangothri/01-gangothri-bottle-can.png",
  },
  {
    slug: "instapani",
    brand: "INSTAPANI",
    company: "Instapani Beverages",
    location: "South India",
    status: "Completed",
    projectType: "Turnkey Setup & Production Floor",
    services: ["Turnkey Plant Setup", "Plant Design", "Branding Support", "QC Training"],
    serviceSlugs: ["planning", "branding", "laboratory"],
    description: "Comprehensive factory setup, laboratory installation, and regulatory approvals.",
    challenge:
      "The client needed a high-capacity bottling line and stronger brand identity to compete in a crowded local market.",
    intervention:
      "Essar designed a high-efficiency RO system, assisted with PET packaging decisions, and coordinated FSSAI and BIS compliance readiness.",
    solution:
      "Essar designed a high-efficiency RO system, assisted with PET packaging decisions, and coordinated FSSAI and BIS compliance readiness.",
    outcome:
      "High-capacity automated bottling line and clean laboratory facility established for commercial distribution.",
    highlights: [
      "High-capacity 20L jar and packaging line integration",
      "In-house laboratory calibration for production checks",
      "Packaging and label design guidance"
    ],
    featuredOnHome: true,
    homeSummary:
      "An advanced production floor and high-tech laboratory integration for Instapani Beverages, ensuring uncompromising daily quality control.",
    coverImage: "/images/projects/instapani/instapani-jar-production.webp",
  },
  {
    slug: "faiha",
    brand: "Faiha",
    company: "Faiha Beverages",
    location: "Edavanna, Kerala",
    status: "Managed By Essar",
    projectType: "Plant Management & Optimization",
    services: ["Plant Management", "Machinery Optimization", "Quality Assurance"],
    serviceSlugs: ["modernization"],
    description: "Ongoing plant management in Edavanna, maintaining strict quality control.",
    challenge: "Operational inefficiencies were increasing downtime and reducing daily production reliability.",
    intervention:
      "Essar implemented preventive maintenance schedules and trained operators on efficient handling of automated equipment.",
    solution:
      "Essar implemented preventive maintenance schedules and trained operators on efficient handling of automated equipment.",
    outcome:
      "Stable, predictable daily operations with reduced machinery downtime and consistent water output.",
    highlights: [
      "Preventive maintenance schedules implemented",
      "Operator training on automated equipment",
      "Consistent daily production reliability"
    ],
    coverImage: "/images/projects/faiha/faiha-site-02.webp",
    featuredOnHome: false,
  },
  {
    slug: "greenmount",
    brand: "Greenmount",
    company: "Greenmount Beverages",
    location: "Tirur, Kerala",
    status: "Ongoing Execution",
    projectType: "Active Facility Setup & Architecture",
    services: ["Civil Layout", "Machinery Installation", "Cleanroom Engineering", "Regulatory Planning"],
    serviceSlugs: ["architecture", "planning"],
    description: "Turnkey packaged drinking water facility setup, civil architecture, and cleanroom engineering in Tirur, Kerala.",
    challenge: "The facility required precision hygienic zoning, cleanroom civil architecture, and optimized workflow routing compliant with BIS IS 14543 standards.",
    intervention:
      "Essar provides on-site engineering supervision, civil layout blueprints, and machinery installation planning ensuring clean-room audit readiness.",
    solution: "Essar provides on-site engineering supervision, civil layout blueprints, and machinery installation planning ensuring clean-room audit readiness.",
    outcome: "Active facility setup progressing through hygienic civil construction and machinery positioning.",
    highlights: [
      "Hygienic civil layout execution",
      "Clean-room architecture supervision",
      "Machinery positioning & piping layout"
    ],
    coverImage: "/images/projects/tirur/tirur-interior-01.webp",
    featuredOnHome: false,
  },
  {
    slug: "greenway",
    brand: "Greenway",
    company: "Greenway Beverages",
    location: "Ponnani, Kerala",
    status: "Planning & Licensing",
    projectType: "Project Planning & BIS Licensing",
    services: ["Project Planning", "BIS Licensing", "FSSAI Approvals", "Water Source Feasibility"],
    serviceSlugs: ["planning", "licensing"],
    description: "Regulatory coordination, water source feasibility, and licensing pathway execution for Greenway in Ponnani, Kerala.",
    challenge: "Establishing regulatory readiness, groundwater extraction permissions, and municipal documentation ahead of equipment procurement.",
    intervention:
      "Essar's licensing team is coordinating documentation, timelines, and municipal approval dependencies.",
    solution: "Essar's licensing team is coordinating documentation, timelines, and municipal approval dependencies.",
    outcome: "Structured regulatory pathway establishing full compliance readiness prior to capital deployment.",
    highlights: [
      "Groundwater & municipal documentation",
      "Pre-audit inspection preparation",
      "Statutory risk mitigation"
    ],
    coverImage: "/images/projects/ponnani/ponnani-filling-line-01.webp",
    featuredOnHome: false,
  },
];

export function getProject(slug: string): Project | undefined {
  const normalizedSlug = slug === "tirur-project" ? "greenmount" : slug === "ponnani-project" ? "greenway" : slug;
  return projects.find((project) => project.slug === normalizedSlug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featuredOnHome);
}
