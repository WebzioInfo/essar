export type RegionalOffice = {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  phoneRaw: string;
  email: string;
  workingHours: string;
  googleMapsUrl?: string;
};

export type LocationFAQ = {
  question: string;
  answer: string;
};

export type LocationCaseStudy = {
  name: string;
  slug: string;
  location: string;
  projectType: string;
  summary: string;
  deliverables: string[];
};

export type LocationWaterProfile = {
  sources: string;
  challenges: {
    title: string;
    description: string;
  }[];
  treatmentEngineering: string;
};

export type LocationRegulations = {
  singleWindowPortal: string;
  singleWindowDesc: string;
  pollutionControlBoard: string;
  pollutionControlDesc: string;
  groundwaterAuthority: string;
  bisBranchOffice: string;
  fssaiLicense: string;
  localBodyPermits: string;
};

export type LocationPageContent = {
  slug: string;
  name: string;
  state: string;
  description: string; // concise for meta description & backwards compatibility
  metaTitle: string;
  h1: string;
  heroBadge: string;
  heroSubtitle: string;
  marketOverview: string[];
  waterProfile: LocationWaterProfile;
  regulations: LocationRegulations;
  office?: RegionalOffice;
  caseStudies: LocationCaseStudy[];
  turnkeyStages: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: LocationFAQ[];
};

export const locations: LocationPageContent[] = [
  // 1. KERALA
  {
    slug: "kerala",
    name: "Kerala",
    state: "Kerala",
    description:
      "Turnkey packaged drinking water plant setup in Kerala. Complete consultancy for plant layout, commercial RO machinery, K-SWIFT approvals, BIS IS 14543 certification, and in-house testing lab setup.",
    metaTitle: "Packaged Drinking Water Plant Setup in Kerala | BIS & RO Consultants | Essar Enterprises",
    h1: "Packaged Drinking Water Plant Setup & Turnkey Consultants in Kerala",
    heroBadge: "Kerala Regional Office • Bypass Road, Kondotty",
    heroSubtitle:
      "Start your commercial packaged drinking water business in Kerala. From raw water testing and K-SWIFT single window clearances to hygienic factory architecture, high-efficiency RO systems, in-house lab setup, and BIS IS 14543 certification.",
    marketOverview: [
      "The packaged drinking water market in Kerala is experiencing strong, year-round demand driven by tourism, hospitality, healthcare, events, and growing health awareness across all 14 districts.",
      "However, setting up a bottling facility in Kerala requires navigating strict groundwater extraction laws, heavy seasonal monsoon variations, and stringent Kerala State Pollution Control Board (KSPCB) environmental regulations.",
      "Essar Enterprises has operated in Kerala for over 20 years from our regional office in Kondotty, Malappuram. We provide end-to-end engineering, legal clearance guidance, and equipment installation, helping new entrepreneurs and existing factory owners go from bare land to first commercial bottle in 6 months.",
    ],
    waterProfile: {
      sources: "Deep borewells, laterite open wells, and natural river basins across Malabar, Central, and South Kerala.",
      challenges: [
        {
          title: "High Iron & Manganese (Laterite Soil)",
          description:
            "Water from Kerala borewells frequently contains dissolved iron levels between 1.5 and 4.5 ppm (far above the BIS threshold of 0.3 ppm). When exposed to air, the water oxidizes and turns brownish-yellow.",
        },
        {
          title: "Monsoon Silt & High Turbidity",
          description:
            "Heavy rainfall during the Southwest and Northeast monsoons washes fine silt and organic debris into surface and shallow groundwater sources, causing turbidity spikes.",
        },
        {
          title: "Acidic pH Levels (5.5 to 6.2)",
          description:
            "Natural groundwater in many Kerala regions is slightly acidic. To achieve the BIS IS 14543 requirement of pH 6.5 to 8.5, precise alkaline remineralization dosing is required.",
        },
      ],
      treatmentEngineering:
        "We install high-capacity multi-grade sand media filters, catalytic Manganese Dioxide / Birm iron removal filters, commercial reverse osmosis (RO) systems, activated carbon filtration, micron polishing filters, UV sterilizers, ozone contactors, and automated pH correction dosing.",
    },
    regulations: {
      singleWindowPortal: "K-SWIFT (Kerala Single Window Interface for Fast Licensing)",
      singleWindowDesc: "Online unified portal for fast-track clearance of enterprise registrations, land conversions, and departmental NOCs.",
      pollutionControlBoard: "KSPCB (Kerala State Pollution Control Board)",
      pollutionControlDesc: "Consent to Establish (CTE) before factory construction and Consent to Operate (CTO) with dedicated RO reject water soaking or reuse plans.",
      groundwaterAuthority: "Kerala Groundwater Authority NOC for commercial borewell abstraction.",
      bisBranchOffice: "Bureau of Indian Standards (BIS IS 14543:2018) via BIS Kochi Branch Office (KBO) or Thiruvananthapuram Branch Office.",
      fssaiLicense: "FSSAI State or Central Food Safety Manufacturing License (Category 14.1.4).",
      localBodyPermits: "Grama Panchayat / Municipality Trade License (D&O Permit) and Factory & Boilers clearance.",
    },
    office: {
      name: "Essar Enterprises - Kerala Regional Office",
      address: "Bypass Road, Kondotty",
      city: "Malappuram",
      state: "Kerala",
      pincode: "673638",
      phone: "+91 88846 77773",
      phoneRaw: "918884677773",
      email: "info@essarenterprises.co.in",
      workingHours: "Monday to Saturday: 9:00 AM – 6:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=Kondotty+Malappuram+Kerala",
    },
    caseStudies: [
      {
        name: "KENBY",
        slug: "kenby",
        location: "Malappuram, Kerala",
        projectType: "Turnkey Plant Setup from Bare Land",
        summary: "Established a commercial water bottling plant from bare land for Eranad Beverages Pvt Ltd, delivering civil blueprints, machinery, in-house lab, and BIS clearance.",
        deliverables: ["Hygienic factory civil layout", "Commercial RO & bottling lines", "Complete in-house testing lab", "BIS IS 14543 & FSSAI licenses"],
      },
      {
        name: "Gangothri",
        slug: "gangothri",
        location: "Changarakulam, Kerala",
        projectType: "Plant Revival & Operational Management",
        summary: "Revived a non-operational packaged water facility through complete RO membrane overhaul, automated filling line re-engineering, and continuous on-site operational management.",
        deliverables: ["RO membrane restoration", "20L jar filling automation", "Chemical & microbial lab setup", "Ongoing daily quality supervision"],
      },
      {
        name: "Greenmount",
        slug: "greenmount",
        location: "Tirur, Kerala",
        projectType: "Cleanroom Architecture & Engineering",
        summary: "Supervised sterile cleanroom civil construction, epoxy flooring, air filtration, and machinery positioning for a new production facility.",
        deliverables: ["Hygienic zoning blueprints", "Cleanroom air management", "Machinery piping layout"],
      },
      {
        name: "Greenway",
        slug: "greenway",
        location: "Ponnani, Kerala",
        projectType: "Regulatory Licensing & Water Feasibility",
        summary: "Structured the regulatory pathway, groundwater clearance, and municipal permissions for Greenway Beverages prior to equipment procurement.",
        deliverables: ["Groundwater NOC coordination", "Pre-audit documentation", "Statutory risk mitigation"],
      },
    ],
    turnkeyStages: [
      { step: "01", title: "Raw Water Testing & Land Feasibility", desc: "Chemical and microbiological testing of your source water and site verification for K-SWIFT compliance." },
      { step: "02", title: "Hygienic Civil Layout & Blueprints", desc: "Designing contamination-free factory cleanrooms, epoxy flooring, drainage, and material flow compliant with IS 14543." },
      { step: "03", title: "Machinery Sizing & Turnkey Installation", desc: "Custom-built RO plants, iron filters, automatic 20L jar washing-filling-capping, and PET bottle packaging lines." },
      { step: "04", title: "In-House Quality Control Lab Setup", desc: "Supplying and calibrating laminar air flow, incubators, autoclave, colony counters, and training your lab chemist." },
      { step: "05", title: "BIS IS 14543 & FSSAI Audit Readiness", desc: "Preparing SOPs, documentation files, conducting mock inspections, and guiding you through official BIS audits." },
      { step: "06", title: "Commercial Production & AMC Support", desc: "Batch test runs, bottle shelf-life validation, operator training, and ongoing monthly RO servicing contracts." },
    ],
    faqs: [
      {
        question: "How much does it cost to set up a packaged drinking water plant in Kerala?",
        answer:
          "Setting up a standard commercial packaged drinking water plant in Kerala typically costs between ₹35 Lakhs and ₹85 Lakhs, depending on production capacity (such as 2,000 to 5,000 LPH), machinery automation level, and building civil requirements. This budget covers raw water treatment equipment (iron remover, sand filter, carbon filter, commercial RO, UV, and ozonator), 20L jar and PET bottle filling machinery, a fully equipped in-house testing laboratory, and government license fees.",
      },
      {
        question: "How long does it take to obtain BIS IS 14543 and FSSAI licenses in Kerala?",
        answer:
          "Through the K-SWIFT single window portal and our structured documentation process, obtaining your BIS IS 14543 certification and FSSAI license usually takes 4 to 6 months. This timeline includes factory civil construction according to BIS hygiene norms, machinery commissioning, laboratory setup, trial production batches, and passing the official BIS officer factory inspection and independent water testing.",
      },
      {
        question: "What is the minimum land and building size required in Kerala?",
        answer:
          "For a standard packaged drinking water plant producing 20-litre jars and retail PET bottles, you need approximately 1,500 to 3,000 square feet of built-up factory space on 10 to 15 cents of land. The factory layout must feature isolated hygienic rooms for raw water storage, RO filtration, sterile filling, packaging, finished goods storage, and an independent testing laboratory.",
      },
      {
        question: "How does Essar Enterprises solve high iron content in Kerala borewell water?",
        answer:
          "We install specialized pressure sand filters combined with catalytic iron removal media (such as Birm or Manganese Greensand) and aeration systems before the water enters the reverse osmosis membranes. This removes dissolved iron down to safe limits (< 0.1 ppm) and prevents membrane fouling, ensuring your final water passes all BIS IS 14543 parameters.",
      },
      {
        question: "Do you provide RO maintenance and emergency breakdown support in Kerala?",
        answer:
          "Yes. Our engineering headquarters is located in Kondotty, Malappuram. We offer Annual Maintenance Contracts (AMC), emergency RO troubleshooting, membrane replacement, high-pressure pump servicing, and consumable media replenishment across all 14 districts of Kerala.",
      },
    ],
  },

  // 2. KARNATAKA
  {
    slug: "karnataka",
    name: "Karnataka",
    state: "Karnataka",
    description:
      "Packaged drinking water plant setup in Karnataka. End-to-end consultancy for high-TDS commercial RO plants, automated 20L jar lines, Karnataka Udyog Mitra approvals, and BIS IS 14543 certification.",
    metaTitle: "Packaged Drinking Water Plant Setup in Karnataka | RO & BIS Consultants | Essar Enterprises",
    h1: "Packaged Drinking Water Plant Setup & Turnkey Engineering in Karnataka",
    heroBadge: "Karnataka Regional Office • Segahalli, KR Puram, Bangalore",
    heroSubtitle:
      "Establish a profitable packaged drinking water business in Karnataka. We handle deep borewell raw water analysis, high-TDS reverse osmosis engineering, Karnataka Udyog Mitra single-window clearances, BIS IS 14543 certification, in-house lab setup, and regular maintenance.",
    marketOverview: [
      "Karnataka represents one of India's largest markets for commercial packaged drinking water and 20-litre bubble-top jars, driven by rapid urbanization in Bengaluru, Mysuru, Hubli-Dharwad, and expanding industrial corridors.",
      "The primary technical hurdle in Karnataka is extreme groundwater depth (600 to 1,200+ feet) and high mineral hardness, requiring heavy-duty reverse osmosis systems engineered specifically for brackish water with high scaling potential.",
      "From our regional office in Segahalli, KR Puram, Essar Enterprises provides complete turnkey plant setup, machinery procurement, KSPCB reject water management compliance, and BIS IS 14543 certification guidance across Karnataka.",
    ],
    waterProfile: {
      sources: "Deep borewells (often 600 - 1,200 ft deep) in Bangalore, Tumakuru, Kolar, Mysuru, and Northern Karnataka.",
      challenges: [
        {
          title: "Extreme Total Dissolved Solids (TDS 1,000 - 2,500+ ppm)",
          description:
            "Deep borewells across Karnataka often yield highly mineralized brackish water with TDS levels exceeding 1,000 to 2,500 ppm, requiring high-rejection RO membrane arrays.",
        },
        {
          title: "High Calcium & Magnesium Hardness",
          description:
            "Excessive dissolved minerals cause rapid calcium carbonate scale on standard reverse osmosis membranes, requiring precision antiscalant dosing and automatic softeners.",
        },
        {
          title: "Silica & Fluoride Spikes",
          description:
            "Certain dry zones in Karnataka suffer from elevated silica and fluoride, requiring specialized multi-stage membrane recovery systems.",
        },
      ],
      treatmentEngineering:
        "We engineer heavy-duty brackish water RO (BWRO) plants with Grundfos/CNP vertical multistage high-pressure pumps, Dow Filmtec / Hydranautics membranes, automatic antiscalant dosing, sand/carbon filtration, and remineralization units.",
    },
    regulations: {
      singleWindowPortal: "Karnataka Udyog Mitra (KUM) / e-Suvidha Portal",
      singleWindowDesc: "Single window clearance for industrial land allocation, power sanctions, and state-level departmental approvals.",
      pollutionControlBoard: "KSPCB (Karnataka State Pollution Control Board)",
      pollutionControlDesc: "Consent for Establishment (CFE) and Consent for Operation (CFO) with strict RO reject water soak pit or recycling plans.",
      groundwaterAuthority: "Karnataka Groundwater Authority NOC for commercial groundwater extraction.",
      bisBranchOffice: "Bureau of Indian Standards (BIS IS 14543) via BIS Bangalore Branch Office (BNBO) in Peenya Industrial Area.",
      fssaiLicense: "FSSAI Karnataka State / Central Manufacturing License (Category 14.1.4).",
      localBodyPermits: "KIADB industrial estate clearance or local Grama Panchayat / City Municipal Council trade permit.",
    },
    office: {
      name: "Essar Enterprises - Karnataka Office",
      address: "Segahalli, KR Puram",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560049",
      phone: "+91 85531 85300",
      phoneRaw: "9553185300",
      email: "info@essarenterprises.co.in",
      workingHours: "Monday to Saturday: 9:00 AM – 6:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=KR+Puram+Bangalore+Karnataka",
    },
    caseStudies: [
      {
        name: "INSTAPANI",
        slug: "instapani",
        location: "South India / Karnataka",
        projectType: "Automated Bottling Line & In-House Lab",
        summary: "Integrated a high-capacity 20L bubble-top jar washing, filling, and capping line with an advanced testing laboratory for commercial distribution.",
        deliverables: ["20L automated RFC unit", "Microbiological cleanroom lab", "Packaging and brand guidance"],
      },
    ],
    turnkeyStages: [
      { step: "01", title: "Borewell Water Testing & Yield Audit", desc: "Detailed lab analysis of raw water TDS, hardness, silica, and sustainable borewell discharge capacity." },
      { step: "02", title: "Factory Architectural Planning", desc: "Designing hygienic plant layouts, cleanrooms, and drainage adhering strictly to KSPCB and BIS standards." },
      { step: "03", title: "Brackish Water RO & Bottling Machinery", desc: "Procuring and assembling high-recovery RO plants, 20L jar lines, and automated bottle packaging systems." },
      { step: "04", title: "In-House Testing Laboratory Setup", desc: "Complete chemical and microbiological testing apparatus setup and hands-on lab technician training." },
      { step: "05", title: "BIS IS 14543 & FSSAI Licensing Coordination", desc: "Comprehensive documentation, SOP preparation, and official audit support with BIS Bangalore officers." },
      { step: "06", title: "Plant Commissioning & Regular AMC Support", desc: "Trial production, quality parameter validation, operator training, and scheduled quarterly servicing." },
    ],
    faqs: [
      {
        question: "What is the cost of setting up a 20L jar packaged drinking water plant in Karnataka?",
        answer:
          "Setting up a 20-litre bubble top jar plant in Karnataka typically requires an investment of ₹30 Lakhs to ₹60 Lakhs, depending on the machinery capacity (such as 2,000 to 3,000 LPH) and whether you choose semi-automatic or fully automatic jar washing, filling, and capping equipment. This includes the complete RO plant, SS storage tanks, in-house testing laboratory, and statutory licensing support.",
      },
      {
        question: "How do you treat deep borewell water with high TDS in Karnataka?",
        answer:
          "We build multi-stage brackish water reverse osmosis (BWRO) systems featuring high-pressure vertical multistage pumps, Dow Filmtec / Hydranautics membranes, and automatic antiscalant dosing systems. This configuration rejects up to 98% of dissolved salts, producing clear, balanced water with 80–120 ppm TDS meeting BIS standards.",
      },
      {
        question: "What permissions are required from KSPCB for a drinking water plant in Karnataka?",
        answer:
          "You must obtain Consent for Establishment (CFE) before beginning civil works and Consent for Operation (CFO) prior to commercial production. KSPCB requires a clear reject water disposal plan, such as rainwater recharge, agricultural soak pits, or toilet flushing recycling, ensuring responsible water management.",
      },
      {
        question: "Can Essar Enterprises help revive an existing or closed RO water plant in Karnataka?",
        answer:
          "Yes. We conduct complete plant audits, inspect membrane fouling, repair or replace high-pressure pumps, upgrade electrical control panels, and re-certify testing laboratories to help closed or low-yield plants resume commercial production safely.",
      },
    ],
  },

  // 3. BANGALORE
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    description:
      "Packaged drinking water plant setup in Bangalore. Turnkey commercial RO plants, 20L bubble-top jar lines, PET bottling machines, BIS IS 14543 licensing, and AMC servicing.",
    metaTitle: "Packaged Drinking Water Plant Consultants in Bangalore | RO & BIS Setup | Essar Enterprises",
    h1: "Packaged Drinking Water Plant & Commercial RO Consultants in Bangalore",
    heroBadge: "Bangalore Office • Segahalli, KR Puram",
    heroSubtitle:
      "Turnkey water business consulting in Bangalore. We engineer commercial 20-litre jar plants, automatic PET bottling lines, high-TDS reverse osmosis systems, and guide you through KSPCB approvals, BIS IS 14543 certification, and FSSAI licenses.",
    marketOverview: [
      "Bangalore has one of the highest daily consumptions of 20-litre packaged drinking water cans in India, driven by major IT corridors (Whitefield, Electronic City, Manyata, ORR), residential apartment complexes, hotels, and corporate offices.",
      "Due to deep borewell extraction, raw water in outer Bangalore belts (Whitefield, KR Puram, Sarjapur, Electronic City, Devanahalli) frequently exhibits high TDS (1,200 to 2,200 ppm) and heavy calcium hardness.",
      "Essar Enterprises' Bangalore engineering team at Segahalli, KR Puram provides turnkey water business setup, equipment procurement, cleanroom civil architecture, and fast-track BIS licensing support for Bangalore entrepreneurs.",
    ],
    waterProfile: {
      sources: "Deep borewells (800 to 1,400 feet) and private water tanker supplies across outer Bangalore zones.",
      challenges: [
        {
          title: "Heavy Borewell Mineralization (TDS 1,200 - 2,200 ppm)",
          description:
            "Depleting groundwater tables lead to extreme mineral concentration, requiring specialized high-pressure membranes to reduce TDS to palatable BIS levels.",
        },
        {
          title: "Calcium & Magnesium Scaling",
          description:
            "Hard water causes severe calcium carbonate deposition on membranes within weeks without automated anti-scalant dosing and pre-softening.",
        },
        {
          title: "Strict Urban Wastewater Restrictions",
          description:
            "Operating inside Bangalore limits requires compliant RO reject water reuse (such as toilet flushing, landscaping, or dedicated dual-plumbing recycling).",
        },
      ],
      treatmentEngineering:
        "We build high-recovery commercial RO plants with automated antiscalant dosing, micron cartridge filtration, food-grade SS316 storage tanks, UV disinfection, and ozonation contact tanks.",
    },
    regulations: {
      singleWindowPortal: "Karnataka Udyog Mitra / e-Suvidha Portal",
      singleWindowDesc: "Fast-track clearances for Bangalore Urban and Rural industrial setups.",
      pollutionControlBoard: "KSPCB Regional Offices (Mahadevapura / Peenya / Whitefield)",
      pollutionControlDesc: "Consent to Establish (CTE) & Consent to Operate (CTO) with compliant reject management.",
      groundwaterAuthority: "Karnataka Groundwater Authority NOC for commercial borewells.",
      bisBranchOffice: "BIS Bangalore Branch Office (BNBO), Peenya Industrial Area for IS 14543 audits.",
      fssaiLicense: "FSSAI Bangalore Central / State Food Safety License.",
      localBodyPermits: "BBMP / City Municipal Council / Grama Panchayat trade license.",
    },
    office: {
      name: "Essar Enterprises - Karnataka Office",
      address: "Segahalli, KR Puram",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560049",
      phone: "+91 85531 85300",
      phoneRaw: "918553185300",
      email: "info@essarenterprises.co.in",
      workingHours: "Monday to Saturday: 9:00 AM – 6:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=KR+Puram+Bangalore",
    },
    caseStudies: [
      {
        name: "INSTAPANI",
        slug: "instapani",
        location: "Bangalore / South India",
        projectType: "Automated Packaging Line & Quality Lab",
        summary: "Turnkey delivery of automated 20L bubble top washing, filling, and sealing lines with an on-site laboratory for high-frequency urban supply.",
        deliverables: ["Automated RFC equipment", "Chemical & microbiological lab", "Standard operating procedures"],
      },
    ],
    turnkeyStages: [
      { step: "01", title: "Water Sample Audit & Feasibility", desc: "Comprehensive testing of borewell water chemistry and site feasibility analysis in Bangalore Urban/Rural." },
      { step: "02", title: "Factory Layout & Cleanroom Design", desc: "Designing BIS-compliant hygienic zones, air locks, and drainage layouts tailored to urban factory spaces." },
      { step: "03", title: "Commercial RO & Bottling Lines", desc: "Assembling high-rejection RO systems, automatic 20L jar lines, and retail PET packaging machines." },
      { step: "04", title: "In-House Quality Control Lab", desc: "Installing testing equipment for daily microbial and chemical water analysis and training lab technicians." },
      { step: "05", title: "BIS IS 14543 & FSSAI Certification", desc: "Complete documentation, file preparation, and on-site support during BIS officer audits." },
      { step: "06", title: "Handover & Ongoing AMC Support", desc: "Production launch, operator training, membrane replacement, and scheduled preventive maintenance." },
    ],
    faqs: [
      {
        question: "How profitable is a 20-litre bubble top jar business in Bangalore?",
        answer:
          "A 20-litre jar water plant in Bangalore is highly profitable due to steady daily commercial and residential consumption. With a production cost of roughly ₹7 to ₹10 per 20L jar (including water treatment, electricity, cap, and label) and wholesale/retail selling prices between ₹25 and ₹65 per jar, an established plant producing 1,000 to 2,000 jars daily generates reliable recurring monthly cash flow.",
      },
      {
        question: "Where is the best location around Bangalore to set up a water plant?",
        answer:
          "Ideal locations are on the outskirts of Bangalore with reliable road connectivity and stable groundwater yields, such as Hoskote, KR Puram periphery, Devanahalli, Nelamangala, Magadi Road, and Anekal. These locations offer lower land lease costs, easier KSPCB clearances, and fast transit access to high-demand urban clusters.",
      },
      {
        question: "How do you manage RO reject water within Bangalore KSPCB limits?",
        answer:
          "We design water recovery systems that reclaim up to 60-70% of raw water. The concentrated reject water is channeled into approved uses such as vehicle washing, landscape irrigation, toilet flushing systems, or authorized recharge soak pits compliant with KSPCB environmental standards.",
      },
      {
        question: "What is the turnaround time to launch a water plant in Bangalore?",
        answer:
          "With our Plan to Plant methodology, a standard plant in Bangalore takes between 4 to 6 months from initial site agreement to your first commercial bottle, covering factory civil setup, machinery commissioning, lab calibration, and BIS IS 14543 licensing.",
      },
    ],
  },

  // 4. TAMIL NADU
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    state: "Tamil Nadu",
    description:
      "Turnkey packaged drinking water plant setup in Tamil Nadu. High-recovery commercial RO plants, automated bottling machinery, Guidance TN single-window clearances, and BIS IS 14543 certification.",
    metaTitle: "Packaged Drinking Water Plant Setup in Tamil Nadu | BIS & RO Experts | Essar Enterprises",
    h1: "Packaged Drinking Water Plant Setup & Turnkey Consultancy in Tamil Nadu",
    heroBadge: "Tamil Nadu Regional Office • Spencer Plaza, Anna Salai, Chennai",
    heroSubtitle:
      "Launch a compliant packaged drinking water plant in Tamil Nadu. Turnkey solutions covering coastal salinity RO treatment, automated 20L & PET bottling machinery, Guidance Tamil Nadu approvals, in-house lab setup, and BIS IS 14543 certification.",
    marketOverview: [
      "Tamil Nadu is one of India's pioneer markets for packaged drinking water, with massive year-round consumption across Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem, and Tirupur.",
      "However, Tamil Nadu enforces strict environmental standards via the Tamil Nadu Pollution Control Board (TNPCB) and rigorous groundwater abstraction regulations across over-exploited and coastal zones.",
      "Essar Enterprises operates a regional office at Spencer Plaza, Anna Salai, Chennai. We guide plant owners and investors through high-recovery RO plant engineering, Zero Liquid Discharge (ZLD) considerations, automated bottling lines, and BIS IS 14543 certification.",
    ],
    waterProfile: {
      sources: "Borewells, agricultural aquifers, and brackish coastal aquifers across Tamil Nadu.",
      challenges: [
        {
          title: "Coastal Salinity & High Chlorides",
          description:
            "Coastal and delta districts suffer from saltwater intrusion and high chloride levels, which can corrode standard equipment and require food-grade SS316 components.",
        },
        {
          title: "High Hardness & Scaling Risk",
          description:
            "Inland districts like Coimbatore, Salem, and Erode frequently report high calcium hardness and TDS levels up to 2,000 ppm, requiring multi-stage RO membrane design.",
        },
        {
          title: "Stringent Water Conservation Norms",
          description:
            "TNPCB mandates high water recovery efficiency and compliant reject water utilization plans to prevent groundwater depletion.",
        },
      ],
      treatmentEngineering:
        "We build high-efficiency reverse osmosis plants with energy recovery devices, high-rejection seawater/brackish membranes, precision antiscalant systems, food-grade SS316 contact surfaces, and dual-barrier ozone/UV disinfection.",
    },
    regulations: {
      singleWindowPortal: "Guidance Tamil Nadu Single Window Portal",
      singleWindowDesc: "Streamlined single-window approval system for MSME and large manufacturing plants in Tamil Nadu.",
      pollutionControlBoard: "TNPCB (Tamil Nadu Pollution Control Board)",
      pollutionControlDesc: "Consent to Establish (CTE) & Consent to Operate (CTO) with strict reject water management and monitoring.",
      groundwaterAuthority: "Tamil Nadu Groundwater Development & Management Authority NOC.",
      bisBranchOffice: "Bureau of Indian Standards Southern Regional Office (BIS SRO), CIT Campus, Taramani, Chennai.",
      fssaiLicense: "FSSAI Tamil Nadu State / Central Food Safety Manufacturing License.",
      localBodyPermits: "Local Panchayat or Corporation Building Approval and D&O Trade License.",
    },
    office: {
      name: "Essar Enterprises - Tamil Nadu Office",
      address: "Spencer Plaza, Anna Salai",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600002",
      phone: "+91 88846 77773",
      phoneRaw: "918884677773",
      email: "info@essarenterprises.co.in",
      workingHours: "Monday to Saturday: 9:00 AM – 6:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=Spencer+Plaza+Chennai+Tamil+Nadu",
    },
    caseStudies: [
      {
        name: "INSTAPANI",
        slug: "instapani",
        location: "Tamil Nadu & South India",
        projectType: "Packaging Line Integration & Quality Lab",
        summary: "Engineered automated packaging and laboratory testing facilities for high-volume commercial bottled water distribution across South India.",
        deliverables: ["High-speed bottling integration", "Quality control lab", "BIS compliance audit support"],
      },
    ],
    turnkeyStages: [
      { step: "01", title: "Raw Water Analysis & Hydrogeological Study", desc: "Detailed water sampling for chlorides, TDS, and heavy metals, plus groundwater extraction clearance evaluation." },
      { step: "02", title: "Civil Architecture & Cleanroom Layout", desc: "Designing factory floor plans adhering to TNPCB zoning guidelines and BIS IS 14543 hygienic parameters." },
      { step: "03", title: "High-Recovery RO & Automated Machinery", desc: "Procuring and commissioning coastal-grade RO systems, automated bottle filling lines, and shrink wrapping machinery." },
      { step: "04", title: "In-House Testing Laboratory Setup", desc: "Installing complete chemical and microbiological lab equipment and training certified chemists." },
      { step: "05", title: "BIS IS 14543 & FSSAI Licensing Coordination", desc: "Drafting quality manuals, conducting mock inspection audits, and accompanying BIS Chennai officials." },
      { step: "06", title: "Commercial Commissioning & Regular Servicing", desc: "Trial production, container drop tests, market-ready packaging validation, and ongoing AMC maintenance." },
    ],
    faqs: [
      {
        question: "What is the cost of setting up a packaged water plant in Tamil Nadu?",
        answer:
          "In Tamil Nadu, establishing a commercial packaged drinking water plant ranges between ₹35 Lakhs and ₹80 Lakhs, depending on plant capacity (e.g., 2,000 to 5,000 LPH), automation degree of the filling line, and civil construction scope. This includes the complete pre-treatment, RO plant, SS storage, in-house lab, and government approval fees.",
      },
      {
        question: "How strict are TNPCB regulations for water plant reject water?",
        answer:
          "TNPCB strictly enforces water conservation guidelines. Plants must present an acceptable reject management plan, such as authorized soak pits, reuse for landscaping, industrial non-potable cleaning, or secondary recycling. Essar engineers designs that maximize product water recovery (up to 65-70%) to minimize reject volumes.",
      },
      {
        question: "How does BIS certification work through BIS Southern Regional Office (Chennai)?",
        answer:
          "The BIS Southern Regional Office (SRO) in Taramani, Chennai conducts rigorous pre-inspection audits of the plant's civil hygiene, machinery layout, and in-house laboratory capabilities. We handle full preparation—including calibration of instruments, test run documentation, and chemist training—ensuring high first-attempt pass rates.",
      },
      {
        question: "Does Essar Enterprises provide PET bottle blow moulding machines in Tamil Nadu?",
        answer:
          "Yes. We supply semi-automatic and fully automatic PET bottle blow moulding machines (from 200ml to 2,000ml) as well as 20-litre jar washing, filling, and capping lines, customized to your production targets.",
      },
    ],
  },

  // 5. CHENNAI
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    description:
      "Packaged drinking water plant setup in Chennai. Turnkey commercial RO plants, 20L jar lines, PET bottling machinery, TNPCB approvals, BIS IS 14543 licensing, and in-house testing lab setup.",
    metaTitle: "Packaged Drinking Water Plant Consultants in Chennai | RO & BIS Setup | Essar Enterprises",
    h1: "Packaged Drinking Water Plant & Bottling Consultants in Chennai",
    heroBadge: "Chennai Office • Spencer Plaza, Anna Salai",
    heroSubtitle:
      "Establish a commercial packaged drinking water plant in Chennai. We handle coastal water desalination, commercial RO plants, 20-litre bubble top lines, retail PET bottling machinery, TNPCB approvals, and BIS IS 14543 certification.",
    marketOverview: [
      "Chennai is one of the densest markets for commercial water delivery in India. The city relies heavily on 20-litre bubble top cans for daily drinking water across thousands of IT firms, corporate headquarters, high-rise residential complexes, and restaurants.",
      "Due to coastal geography, groundwater across Chennai outskirts (OMR, ECR, Sriperumbudur, Ambattur, Red Hills) frequently shows high salinity, dissolved chlorides, and fluctuating seasonal hardness.",
      "From our Chennai office in Spencer Plaza, Anna Salai, Essar Enterprises provides complete turnkey plant setup, corrosion-resistant SS316 RO systems, and end-to-end BIS IS 14543 licensing support.",
    ],
    waterProfile: {
      sources: "Borewells and industrial water tanker supplies across outer Chennai industrial corridors.",
      challenges: [
        {
          title: "Brackish Water & High Chlorides",
          description:
            "Coastal proximity causes elevated chloride and sodium levels, requiring high-rejection brackish water RO membranes and corrosion-resistant piping.",
        },
        {
          title: "Seasonal Quality Fluctuations",
          description:
            "Groundwater quality fluctuates heavily between the dry summer months and the Northeast monsoon, requiring flexible pre-treatment design.",
        },
        {
          title: "Urban Land & Drainage Constraints",
          description:
            "Chennai industrial zones mandate compact, high-efficiency factory layouts with zero stagnant water and strict drainage compliance.",
        },
      ],
      treatmentEngineering:
        "We build compact, high-recovery RO plants with SS316 high-pressure piping, Dow Filmtec / Hydranautics membranes, dual-stage micron filtration, UV sterilizers, and ozone dosing systems.",
    },
    regulations: {
      singleWindowPortal: "Guidance Tamil Nadu Single Window Portal",
      singleWindowDesc: "Fast-track clearances for Chennai, Kanchipuram, and Tiruvallur industrial setups.",
      pollutionControlBoard: "TNPCB Chennai / Maraimalai Nagar / Sriperumbudur Regional Offices",
      pollutionControlDesc: "Consent to Establish (CTE) and Consent to Operate (CTO) with compliant reject management.",
      groundwaterAuthority: "Tamil Nadu Groundwater Authority NOC.",
      bisBranchOffice: "BIS Southern Regional Office (SRO), CIT Campus, Taramani, Chennai.",
      fssaiLicense: "FSSAI Chennai Central / State Food Safety License.",
      localBodyPermits: "Greater Chennai Corporation or local Panchayat trade and building clearances.",
    },
    office: {
      name: "Essar Enterprises - Tamil Nadu Office",
      address: "Spencer Plaza, Anna Salai",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600002",
      phone: "+91 88846 77773",
      phoneRaw: "918884677773",
      email: "info@essarenterprises.co.in",
      workingHours: "Monday to Saturday: 9:00 AM – 6:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=Spencer+Plaza+Anna+Salai+Chennai",
    },
    caseStudies: [
      {
        name: "INSTAPANI",
        slug: "instapani",
        location: "Chennai / South India",
        projectType: "Automated Packaging Line & Quality Lab",
        summary: "Commissioned high-efficiency 20L bubble-top packaging lines and quality control lab for high-volume commercial drinking water distribution.",
        deliverables: ["High-speed 20L packaging line", "Cleanroom laboratory setup", "Staff technical training"],
      },
    ],
    turnkeyStages: [
      { step: "01", title: "Raw Water Salinity & Site Audit", desc: "Chemical analysis of TDS, chloride, and hardness levels, and site evaluation in outer Chennai zones." },
      { step: "02", title: "Civil Architecture & Cleanroom Layout", desc: "Designing contamination-free production floors compliant with BIS IS 14543 standards." },
      { step: "03", title: "Commercial RO & Bottling Equipment", desc: "Assembling corrosion-resistant RO plants, 20L washing-filling-capping units, and PET bottle lines." },
      { step: "04", title: "In-House Quality Control Lab Setup", desc: "Supplying laminar air flow, incubators, autoclave, and training certified water quality chemists." },
      { step: "05", title: "BIS IS 14543 & FSSAI Licensing", desc: "Coordinating with the BIS Southern Regional Office in Taramani for smooth inspection and approval." },
      { step: "06", title: "Production Launch & AMC Maintenance", desc: "Batch test runs, bottle drop tests, market release, and scheduled preventive maintenance visits." },
    ],
    faqs: [
      {
        question: "How do you treat coastal saline water for packaged drinking water in Chennai?",
        answer:
          "We install multi-stage brackish water reverse osmosis (BWRO) systems with high-rejection membranes and food-grade SS316 piping to resist chloride corrosion. We also incorporate automated antiscalant dosing and mineral balance stages so the finished water has optimal taste and mineral balance compliant with BIS IS 14543.",
      },
      {
        question: "How can I start a 20L can water distribution business in Chennai?",
        answer:
          "To start a successful 20L water business in Chennai, you need a suitable site (1,500–2,500 sq ft) with adequate water yield and 3-phase electricity, a 2,000–3,000 LPH RO plant, an automated jar washing-filling-capping line, an in-house testing lab, and BIS/FSSAI licenses. Essar provides the full turnkey solution, delivering your plant in 4 to 6 months.",
      },
      {
        question: "What are the space and electrical power requirements for a water plant in Chennai?",
        answer:
          "A standard 2,000 to 3,000 LPH plant in Chennai typically requires 1,500 to 2,500 square feet of built-up space and a 20 HP to 35 HP commercial three-phase electrical connection (LT or HT power sanction), depending on machinery automation levels.",
      },
      {
        question: "How quickly can your Chennai team visit our proposed site for inspection?",
        answer:
          "Our Chennai engineering team is stationed at Spencer Plaza, Anna Salai. We can schedule an on-site feasibility visit and raw water sampling across Chennai, Kanchipuram, and Tiruvallur within 24 to 48 hours.",
      },
    ],
  },

  // 6. SOUTH INDIA
  {
    slug: "south-india",
    name: "South India",
    state: "South India",
    description:
      "Premier packaged drinking water plant consultancy across South India. Turnkey water business setup, commercial RO engineering, automated bottling lines, BIS IS 14543 licensing, and in-house laboratory setup in Kerala, Karnataka, and Tamil Nadu.",
    metaTitle: "Packaged Drinking Water Plant Consultants in South India | Essar Enterprises",
    h1: "Premier Packaged Drinking Water Plant Consultants in South India",
    heroBadge: "South India Network • 3 Regional Engineering Offices",
    heroSubtitle:
      "Over 20 years of experience engineering profitable packaged drinking water plants across Kerala, Karnataka, and Tamil Nadu. We deliver turnkey solutions from bare land feasibility to your first commercial bottle.",
    marketOverview: [
      "South India is India's fastest-growing market for commercial packaged drinking water, 20-litre bubble top cans, and premium bottled water brands, supported by thriving metropolitan cities, growing tier-2 towns, and year-round warm climates.",
      "However, each state presents distinct hydrogeological conditions: Kerala requires heavy iron and silt removal; Karnataka requires deep borewell high-TDS desalination; and Tamil Nadu demands high water recovery efficiency and coastal salinity management.",
      "Essar Enterprises is the only dedicated water business consultancy with established physical engineering offices across Kerala (Kondotty), Karnataka (Bangalore), and Tamil Nadu (Chennai). We have guided dozens of entrepreneurs from bare land to profitable commercial operation.",
    ],
    waterProfile: {
      sources: "Borewells, open wells, river basins, and industrial water tankers across Kerala, Karnataka, and Tamil Nadu.",
      challenges: [
        {
          title: "Diverse Regional Water Chemistry",
          description:
            "From acidic laterite iron water in Kerala to high-TDS deep aquifers in Karnataka and brackish coastal aquifers in Tamil Nadu, no two water sources are identical.",
        },
        {
          title: "Complex State Regulatory Frameworks",
          description:
            "Navigating K-SWIFT, Karnataka Udyog Mitra, and Guidance TN, alongside differing state pollution control board norms, requires experienced local coordination.",
        },
        {
          title: "Mandatory In-House Quality Control",
          description:
            "BIS IS 14543 mandates that every licensed plant maintain an in-house chemical and microbiological laboratory for continuous daily batch testing.",
        },
      ],
      treatmentEngineering:
        "We engineer custom water treatment systems incorporating pressure sand filtration, catalytic iron removal, activated carbon adsorption, commercial RO membranes, remineralization, UV sterilization, and ozonation contact tanks.",
    },
    regulations: {
      singleWindowPortal: "K-SWIFT (Kerala) • Karnataka Udyog Mitra • Guidance Tamil Nadu",
      singleWindowDesc: "Single-window online approval systems across all southern states.",
      pollutionControlBoard: "State Pollution Control Boards (KSPCB / TNPCB)",
      pollutionControlDesc: "Consent to Establish (CTE) & Consent to Operate (CTO) with state-compliant reject management.",
      groundwaterAuthority: "State Groundwater Authorities NOC for commercial borewell extraction.",
      bisBranchOffice: "Bureau of Indian Standards (BIS IS 14543:2018) via Kochi, Bangalore, and Chennai branch offices.",
      fssaiLicense: "FSSAI State & Central Food Safety Manufacturing Licenses.",
      localBodyPermits: "Local Grama Panchayat / Municipal Corporation Trade Licenses and Factory & Boilers permits.",
    },
    office: {
      name: "Essar Enterprises - South India Regional Headquarters",
      address: "Bypass Road, Kondotty, Malappuram (Kerala) • KR Puram (Bangalore) • Spencer Plaza (Chennai)",
      city: "Kondotty / Bangalore / Chennai",
      state: "South India",
      pincode: "673638",
      phone: "+91 88846 77773 / +91 85531 85300",
      phoneRaw: "918884677773",
      email: "info@essarenterprises.co.in",
      workingHours: "Monday to Saturday: 9:00 AM – 6:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=Essar+Enterprises+Kondotty",
    },
    caseStudies: [
      {
        name: "KENBY",
        slug: "kenby",
        location: "Kerala",
        projectType: "Turnkey Plant Setup from Bare Land",
        summary: "Complete turnkey packaged drinking water plant establishment, civil layout, machinery, in-house lab, and BIS IS 14543 licensing for Eranad Beverages.",
        deliverables: ["Bare-land to first bottle execution", "IS 14543 civil layout", "In-house testing lab"],
      },
      {
        name: "Gangothri",
        slug: "gangothri",
        location: "Kerala",
        projectType: "Plant Revival & Operational Management",
        summary: "Revived a non-operational bottled water facility back to full commercial production with complete RO membrane restoration and daily operational management.",
        deliverables: ["RO membrane overhaul", "Daily quality testing lab", "Continuous plant management"],
      },
      {
        name: "INSTAPANI",
        slug: "instapani",
        location: "South India",
        projectType: "Automated Packaging Line & Quality Lab",
        summary: "Engineered automated packaging and laboratory testing facilities for high-volume commercial bottled water distribution across South India.",
        deliverables: ["High-speed 20L packaging line", "Cleanroom laboratory setup", "Staff technical training"],
      },
    ],
    turnkeyStages: [
      { step: "01", title: "Feasibility & Raw Water Chemistry", desc: "Comprehensive hydrogeological sampling and state-specific regulatory feasibility study." },
      { step: "02", title: "Hygienic Civil Blueprints", desc: "Detailed architectural drawings compliant with BIS IS 14543 hygienic zoning and state pollution boards." },
      { step: "03", title: "Machinery Procurement & Installation", desc: "Custom-sized commercial RO systems, automated 20L jar lines, and PET bottle packaging machinery." },
      { step: "04", title: "In-House Quality Control Lab Setup", desc: "Complete supply and calibration of chemical and microbiological testing apparatus and chemist training." },
      { step: "05", title: "BIS & FSSAI Licensing Audits", desc: "Document preparation, SOPs, mock inspections, and complete support during official government audits." },
      { step: "06", title: "Commercial Commissioning & AMC", desc: "Trial production, quality assurance certification, operator training, and ongoing monthly servicing." },
    ],
    faqs: [
      {
        question: "Why choose Essar Enterprises for water plant setup in South India?",
        answer:
          "Unlike equipment brokers or general civil contractors, Essar Enterprises has specialized exclusively in packaged drinking water plants for over 20 years. We maintain physical offices and engineering teams across Kerala, Karnataka, and Tamil Nadu, offering a true single-window solution that covers raw water testing, civil blueprints, machinery supply, in-house laboratory setup, BIS IS 14543 licensing, and long-term plant maintenance.",
      },
      {
        question: "What is Essar's 'Plan to Plant' methodology?",
        answer:
          "Our 'Plan to Plant' methodology is a structured 6-stage roadmap that takes you from an empty plot of land to your first commercial bottle in 6 months. We manage every phase: land feasibility, hygienic architecture, equipment procurement, laboratory commissioning, BIS licensing audits, and market launch.",
      },
      {
        question: "Do you support both new plant startups and existing plant modernization?",
        answer:
          "Yes. We support new investors launching their first brand as well as existing water factory owners seeking to solve recurring problems (such as low RO output, high TDS, membrane fouling, or microbial contamination), expand production capacity, or revive inactive plants under our direct operational management.",
      },
      {
        question: "Why is an in-house laboratory mandatory for a BIS IS 14543 license?",
        answer:
          "Under Indian Standard IS 14543:2018, every licensed packaged drinking water manufacturer must test every production batch daily for physical, chemical, and microbiological parameters (including coliforms, E. coli, and yeast & mould) before releasing bottles to the market. Essar sets up your complete in-house testing laboratory and trains your chemist to ensure total compliance.",
      },
    ],
  },
];

export function getLocation(slug: string): LocationPageContent | undefined {
  return locations.find((location) => location.slug === slug);
}
