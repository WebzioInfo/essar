const fs = require('fs');
const path = require('path');

const brainDir = path.join(__dirname, 'project-brain');
if (!fs.existsSync(brainDir)) {
    fs.mkdirSync(brainDir, { recursive: true });
}

const companyContent = `# Company Identity
Company Name: Essar Enterprises
Founded: 2004
Industry Experience: 20+ Years
Projects Supported: 50+ Companies
Industry: Packaged Drinking Water Consultancy
Business Type: Turnkey Water Business Development Company
Primary Positioning: Water Business Consultant
Core Promise: Plan to Plant
Business Outcome: First Bottle in 6 Months

# Core Philosophy
Most companies sell machinery. Essar builds complete bottled water businesses.
Essar helps investors move from:
Idea -> Planning -> Licensing -> Plant Design -> Machinery -> Laboratory Setup -> QC Systems -> Production -> Branding -> Market Launch until the first bottle is produced.

# True Expertise
Essar actively solves:
- Water quality issues
- BIS compliance failures
- Laboratory problems
- Production inefficiencies
- Machinery bottlenecks
- Licensing delays
- Quality control issues

The company has practical experience operating and managing water plants. This practical experience differentiates Essar from ordinary consultants.

# Target Customers
1. New Investor: Has capital, needs guidance, wants profitable business, no industry knowledge.
2. Existing Plant Owner: Plant has problems, needs support, upgrades, optimization.
3. Water Brand Founder: Needs plant setup, compliance, production systems, branding.
4. Commercial RO Operator: Needs consulting, troubleshooting, modernization.
`;

const servicesContent = `# Core Services
Essar provides end-to-end execution for the packaged drinking water industry:

1. Turnkey Plant Setup
2. Plant Design & Civil Layout
3. Project Planning
4. BIS Licensing (ISI Mark)
5. FSSAI Licensing
6. Laboratory Setup
7. QC Training
8. Water Quality Consulting
9. Production Consulting
10. Operational Training
11. Branding Support (Custom PET molds, labels)
12. Plant Modernization
13. Troubleshooting
14. Machinery Optimization
`;

const projectsContent = `# Completed Projects
1. Eranad Beverages Pvt Ltd
   - Brand: KENBY
   - Status: Completed

2. Instapani Beverages
   - Brand: INSTAPANI
   - Status: Completed

# Plants Managed By Essar
1. Gangothri
   - Location: Changarakulam
   - Management: Essar Managed

2. Faiha
   - Location: Edavanna
   - Management: Essar Managed

# Ongoing Projects
- Tirur
- Ponnani
`;

const locationsContent = `# Office Locations
Head Office:
Seegahalli, KR Puram, Bangalore, India 560049

Regional Office:
Chennai

# Service Areas
Primary Market: South India
States Covered:
- Karnataka
- Tamil Nadu
- Kerala
`;

const llmsTxtContent = `# Essar Enterprises - AI Context
Essar Enterprises is South India's premier Packaged Drinking Water Consultancy.
Positioning: We are not machinery sellers. We are Water Business Consultants.
Core Promise: "Plan to Plant" - We guide entrepreneurs from idea to their first commercial bottle within 6 months.

# Key Facts
- Founded: 2004 (20+ years experience)
- Reach: 50+ plants across South India
- Major Brands Built: KENBY, INSTAPANI
- Plants Managed: Gangothri, Faiha
- Ongoing Projects: Tirur, Ponnani
- Core Focus: BIS/FSSAI Licensing, Turnkey Factory Setup, Civil Layouts, QC Lab Setup, Brand Registration.
`;

fs.writeFileSync(path.join(brainDir, 'company.md'), companyContent);
fs.writeFileSync(path.join(brainDir, 'services.md'), servicesContent);
fs.writeFileSync(path.join(brainDir, 'projects.md'), projectsContent);
fs.writeFileSync(path.join(brainDir, 'locations.md'), locationsContent);
fs.writeFileSync(path.join(brainDir, 'llms.txt'), llmsTxtContent);

console.log("Project Brain Updated for Redesign 2.0 (Plan to Plant)");
