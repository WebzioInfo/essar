export type Project = {
  slug: string;
  brand: string;
  company: string;
  location: string;
  status: string;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "kenby",
    brand: "KENBY",
    company: "Eranad Beverages Pvt Ltd",
    location: "Kerala",
    status: "Completed",
    services: ["Turnkey Plant Setup", "BIS Licensing", "FSSAI Licensing", "Laboratory Setup"],
    description: "Turnkey packaged drinking water plant establishment, licensing, and launch.",
    challenge:
      "The client required a complete factory setup from bare land, including civil layout design and BIS licensing readiness within a strict launch window.",
    solution:
      "Essar Enterprises executed a Plan to Plant strategy, delivering factory blueprints, machinery installation coordination, QC lab setup, and staff training for audit readiness.",
  },
  {
    slug: "instapani",
    brand: "INSTAPANI",
    company: "Instapani Beverages",
    location: "South India",
    status: "Completed",
    services: ["Turnkey Plant Setup", "Plant Design", "Branding Support", "QC Training"],
    description: "Comprehensive factory setup, laboratory installation, and regulatory approvals.",
    challenge:
      "The client needed a high-capacity bottling line and stronger brand identity to compete in a crowded local market.",
    solution:
      "Essar designed a high-efficiency RO system, assisted with PET packaging decisions, and coordinated FSSAI and BIS compliance readiness.",
  },
  {
    slug: "gangothri",
    brand: "Gangothri",
    company: "Gangothri Water",
    location: "Changarakulam",
    status: "Managed By Essar",
    services: ["Plant Management", "Production Optimization", "Quality Control"],
    description: "Ongoing plant management, maintenance, and production optimization in Changarakulam.",
    challenge: "The existing plant was facing production bottlenecks and inconsistent water quality.",
    solution:
      "Essar took over management, modernized RO membrane operations, optimized filling lines, and implemented daily lab testing controls.",
  },
  {
    slug: "faiha",
    brand: "Faiha",
    company: "Faiha Beverages",
    location: "Edavanna",
    status: "Managed By Essar",
    services: ["Plant Management", "Machinery Optimization"],
    description: "Ongoing plant management in Edavanna, maintaining strict quality control.",
    challenge: "Operational inefficiencies were increasing downtime and reducing daily production reliability.",
    solution:
      "Essar implemented preventive maintenance schedules and trained operators on efficient handling of automated equipment.",
  },
  {
    slug: "tirur-project",
    brand: "Tirur Plant",
    company: "Confidential",
    location: "Tirur",
    status: "Ongoing Execution",
    services: ["Civil Layout", "Machinery Installation"],
    description: "Current active project undergoing civil layout and machinery installation.",
    challenge: "The project is in civil construction and must preserve clean-room readiness for future audits.",
    solution: "Essar provides on-site supervision and layout guidance for packaged drinking water plant compliance needs.",
  },
  {
    slug: "ponnani-project",
    brand: "Ponnani Plant",
    company: "Confidential",
    location: "Ponnani",
    status: "Ongoing Execution",
    services: ["Project Planning", "Licensing Approval"],
    description: "Current active project in the planning and BIS licensing phase.",
    challenge: "The project requires local regulatory coordination and groundwater approval planning.",
    solution: "Essar's licensing team is coordinating documentation, timelines, and municipal approval dependencies.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
