export type CompanyMetric = {
  id: string;
  value: string;
  numericValue?: number;
  label: string;
  context: string;
  scope?: string;
};

export type OfficeLocation = {
  id: string;
  name: string;
  state: string;
  city: string;
  address: string;
  pincode: string;
  phone: string;
  phoneRaw: string;
  landmark?: string;
};

export type CompanyProfile = {
  name: string;
  foundedYear: number;
  yearsOfExperience: string;
  tagline: string;
  positioning: string;
  corePromise: string;
  turnaroundTarget: string;
  geographicCoverage: string;
  headquarters: string;
  contactNumber: string;
  contactEmail: string;
  offices: OfficeLocation[];
  metrics: {
    experience: CompanyMetric;
    roPlantsServiced: CompanyMetric;
    companiesConsulted: CompanyMetric;
    commercialPlantsSupported: CompanyMetric;
  };
};

export const companyData: CompanyProfile = {
  name: "Essar Enterprises",
  foundedYear: 2004,
  yearsOfExperience: "20+",
  tagline: "From Idea To First Bottle",
  positioning: "Water Business Consultant",
  corePromise: "Plan to Plant",
  turnaroundTarget: "First Bottle in 6 Months",
  geographicCoverage: "South India (Kerala, Karnataka, Tamil Nadu)",
  headquarters: "South India",
  contactNumber: "+91 88846 77773",
  contactEmail: "info@essarenterprises.co.in",
  offices: [
    {
      id: "kerala",
      name: "Kerala Regional Office",
      state: "Kerala",
      city: "Malappuram",
      address: "Bypass Road, Kondotty",
      pincode: "673638",
      phone: "+91 88846 77773",
      phoneRaw: "918884677773",
    },
    {
      id: "karnataka",
      name: "Karnataka Office",
      state: "Karnataka",
      city: "Bengaluru",
      address: "Segahalli, KR Puram",
      pincode: "560049",
      phone: "+91 88846 77773",
      phoneRaw: "918884677773",
    },
    {
      id: "tamil-nadu",
      name: "Tamil Nadu Office",
      state: "Tamil Nadu",
      city: "Chennai",
      address: "Spencer Plaza, Anna Salai",
      pincode: "600002",
      phone: "+91 88846 77773",
      phoneRaw: "918884677773",
    },
  ],
  metrics: {
    experience: {
      id: "experience",
      value: "20+",
      numericValue: 20,
      label: "Years Experience",
      context: "Operating continuously in the packaged water sector since 2004",
      scope: "Industry Track Record",
    },
    roPlantsServiced: {
      id: "ro-plants-serviced",
      value: "50+",
      numericValue: 50,
      label: "RO & Water Plants Serviced",
      context: "Reverse osmosis, filtration systems, and treatment setups serviced and maintained",
      scope: "Technical & Plant Servicing",
    },
    companiesConsulted: {
      id: "companies-consulted",
      value: "36+",
      numericValue: 36,
      label: "Companies Consulted",
      context: "Entrepreneurs and plant founders guided through planning, setup, and audits",
      scope: "Business & Advisory",
    },
    commercialPlantsSupported: {
      id: "commercial-plants-supported",
      value: "50+",
      numericValue: 50,
      label: "Commercial Plants Supported",
      context: "Operational facilities supported across Kerala, Karnataka, and Tamil Nadu",
      scope: "Regional Footprint",
    },
  },
};

/**
 * Ordered list of primary track record metrics for display on homepage and about page.
 */
export const trackRecordMetrics: CompanyMetric[] = [
  companyData.metrics.experience,
  companyData.metrics.roPlantsServiced,
  companyData.metrics.companiesConsulted,
  companyData.metrics.commercialPlantsSupported,
];
