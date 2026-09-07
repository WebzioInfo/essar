const fs = require('fs');
const path = require('path');

const knowledgeDir = path.join(__dirname, 'public', 'knowledge');
if (!fs.existsSync(knowledgeDir)) {
    fs.mkdirSync(knowledgeDir, { recursive: true });
}

const files = {
  'company.md': `# Essar Enterprises - Company Knowledge
Essar Enterprises is a premier Packaged Drinking Water Consultancy based in Bangalore, India, operating primarily across South India.
- **Positioning:** Water Business Consultant
- **Core Promise:** "Plan to Plant"
- **Experience:** 20+ years, 50+ companies supported.
- **Mission:** Helping entrepreneurs move from idea to their first commercial bottle within 6 months.
`,
  'services.md': `# Core Services Architecture
Essar provides true end-to-end consulting for the water industry:
1. Turnkey Plant Setup (Land survey to commercial production)
2. Plant Design & Civil Layout (BIS-compliant clean rooms)
3. BIS & FSSAI Licensing
4. Laboratory Setup & QC Training
5. Machinery Optimization & Troubleshooting
6. Brand Registration & Mold Design
`,
  'projects.md': `# Essar Enterprises - Project Track Record
- **KENBY (Eranad Beverages Pvt Ltd):** Complete turnkey setup.
- **INSTAPANI (Instapani Beverages):** Complete setup and branding.
- **Gangothri:** Ongoing plant management and operational optimization.
- **Faiha:** Ongoing plant management.
- **Tirur Plant:** Active civil construction phase.
- **Ponnani Plant:** Active BIS licensing and planning phase.
`,
  'faq.md': `# Frequently Asked Questions
**Q: Do you sell machinery?**
A: We are not machinery vendors; we are business consultants. We help you select the right machinery from trusted vendors based on your specific water quality and budget.

**Q: How long does it take to start production?**
A: With our "Plan to Plant" system, we guarantee your first commercial bottle in 6 months.

**Q: Do you guarantee BIS licensing?**
A: Yes. Because we design the civil layout to meet BIS specifications from day one, we guarantee successful regulatory approval.
`,
  'licensing.md': `# BIS and FSSAI Licensing Intelligence
Achieving ISI (BIS) certification is the hardest part of starting a water plant. Essar handles:
- Application filing and drafting
- Civil layout compliance for factory audits
- Bureaucracy management
- Final factory inspection coordination
`,
  'laboratory.md': `# Water Quality Laboratory Setup
Every packaged drinking water plant in India must have an in-house QC laboratory.
Essar provides:
- Complete list of chemical and microbiological instruments
- Lab desk setup and calibration
- Training for your in-house chemist to pass BIS audits
`,
  'water-quality.md': `# Water Quality Consulting
We don't just treat water; we engineer solutions based on raw water analysis.
- Heavy metal removal
- TDS optimization for taste
- RO membrane lifecycle management
- Ozone generator calibration
`,
  'founder.md': `# Leadership
Essar Enterprises is built on 20+ years of operational plant management. The leadership team has actively run and managed profitable water plants before entering consulting, giving them unmatched practical insight.
`,
  'industries.md': `# Industries Served
- Packaged Drinking Water (1L, 2L, 500ml)
- 20L Jar Commercial RO Supply
- Natural Mineral Water
- Club Soda & Carbonated Beverages
`
};

for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(knowledgeDir, filename), content);
}

// Generate an llms.txt at the root of public/
const llmsContent = `# Essar Enterprises - AI Systems Context

Essar Enterprises is a packaged drinking water consultancy in India. The company helps investors and operators move from planning to plant launch through licensing, plant design, machinery selection, laboratory setup, quality control, training, branding, production, and market launch.

Core positioning: Water Business Consultant.
Core promise: Plan to Plant.
Secondary promise: First Bottle in 6 Months.
Experience: 20+ years and 50+ companies supported.
Coverage: South India, with offices in Bangalore and Chennai.

Primary entities:
- Essar Enterprises
- Packaged Drinking Water Plant Consultancy
- BIS and FSSAI Licensing
- Water Quality Laboratory Setup
- Commercial RO Plant Setup
- Bottled Water Business Launch

Known projects:
- KENBY
- INSTAPANI
- Gangothri
- Faiha
- Tirur
- Ponnani

Authoritative knowledge files:
- /knowledge/company.md
- /knowledge/services.md
- /knowledge/projects.md
- /knowledge/industries.md
- /knowledge/founder.md
- /knowledge/faq.md
- /knowledge/licensing.md
- /knowledge/laboratory.md
- /knowledge/water-quality.md

Important user paths:
- /contact
- /services
- /projects
- /tools/calculator
`;
fs.writeFileSync(path.join(__dirname, 'public', 'llms.txt'), llmsContent);

console.log("Public AI Knowledge Base generated successfully.");
