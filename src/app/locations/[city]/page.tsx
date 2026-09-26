import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { getLocation, locations } from "@/content/locations";
import { localBusinessSchema, getBreadcrumbSchema, getFAQSchema, SEO_CONFIG } from "@/seo/schema";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Building2,
  FileCheck2,
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

export async function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    return {};
  }

  const canonicalPath = `/locations/${city}`;
  const fullCanonicalUrl = `${SEO_CONFIG.canonicalUrl}${canonicalPath}`;

  return {
    title: location.metaTitle,
    description: location.description,
    alternates: {
      canonical: fullCanonicalUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.description,
      url: fullCanonicalUrl,
      type: "website",
      siteName: SEO_CONFIG.brandName,
      locale: "en_IN",
      images: [
        {
          url: `${SEO_CONFIG.canonicalUrl}/logos/logo-dark.png`,
          width: 800,
          height: 600,
          alt: `Essar Enterprises - ${location.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.description,
      images: [`${SEO_CONFIG.canonicalUrl}/logos/logo-dark.png`],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations/south-india" },
    { name: location.name, url: `/locations/${city}` },
  ]);

  const faqSchema = getFAQSchema(location.faqs);
  const businessSchema = localBusinessSchema(location);

  const phoneToCall = location.office?.phone || SEO_CONFIG.contactPhone;
  const phoneRaw = location.office?.phoneRaw || SEO_CONFIG.contactPhoneRaw;
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    `Hello Essar Enterprises, I want to discuss packaged drinking water plant setup in ${location.name}.`
  )}`;

  return (
    <>
      {/* Schema.org Structured Data */}
      <SchemaMarkup type="LocalBusiness" data={businessSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-surface/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/locations/south-india" className="hover:text-white transition-colors">
              Locations
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{location.name}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-white/15">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{location.heroBadge}</span>
            </div>

            <h1 className="heading-xl text-white mb-6 leading-tight font-extrabold">
              {location.h1}
            </h1>

            <p className="heading-sm text-surface font-normal leading-relaxed opacity-90 mb-10 max-w-3xl">
              {location.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/quotation"
                className="px-7 py-3.5 bg-accent text-white rounded-md font-semibold text-sm hover:opacity-95 transition-all shadow-md flex items-center gap-2"
              >
                <span>Get Plant Feasibility &amp; Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-md font-semibold text-sm transition-all border border-white/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Regional Office</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Metric Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-14 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">20+ Years</div>
              <div className="text-xs text-surface/75 uppercase tracking-wide">Industry Footprint Since 2004</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">6 Months</div>
              <div className="text-xs text-surface/75 uppercase tracking-wide">Plan to First Bottle</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100% Pass</div>
              <div className="text-xs text-surface/75 uppercase tracking-wide">BIS IS 14543 First Audit</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Turnkey</div>
              <div className="text-xs text-surface/75 uppercase tracking-wide">Plant, Lab, Licenses &amp; AMC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20">

          {/* Section 1: Regional Market Overview & Verified Office NAP */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Market Context • {location.name}
              </div>
              <h2 className="heading-md text-foreground mb-6">
                Packaged Drinking Water Opportunities in {location.name}
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed body-lg font-light">
                {location.marketOverview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Verified Office NAP Card */}
            {location.office && (
              <div className="bg-white p-7 rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span>Verified Regional Office</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{location.office.name}</h3>

                <div className="space-y-3.5 text-sm text-text-secondary mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      {location.office.address}, {location.office.city}, {location.office.state} – {location.office.pincode}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${phoneRaw}`} className="hover:text-primary transition-colors font-medium">
                      {phoneToCall}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href={`mailto:${location.office.email}`} className="hover:text-primary transition-colors">
                      {location.office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>{location.office.workingHours}</span>
                  </div>
                </div>

                <div className="pt-5 border-t border-border flex flex-col gap-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-primary text-white text-center rounded font-semibold text-xs hover:bg-secondary transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                  {location.office.googleMapsUrl && (
                    <a
                      href={location.office.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-4 bg-surface text-foreground text-center rounded font-medium text-xs hover:bg-border transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </section>

          {/* Section 2: Regional Water Profile & Treatment Engineering */}
          <section className="bg-white p-8 sm:p-12 rounded-xl border border-border shadow-sm">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                <Droplets className="w-4 h-4 text-primary" />
                <span>Regional Water Chemistry</span>
              </div>
              <h2 className="heading-md text-foreground mb-4">
                Local Water Challenges &amp; Treatment Engineering in {location.name}
              </h2>
              <p className="body-md text-text-secondary leading-relaxed">
                Raw water quality in {location.name} varies significantly by hydrogeology. We analyze your specific water source and engineer a custom purification sequence to satisfy every parameter of Indian Standard IS 14543.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {location.waterProfile.challenges.map((challenge, index) => (
                <div key={index} className="p-5 rounded-lg bg-surface border border-border/80">
                  <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-primary font-bold text-xs mb-3 shadow-xs">
                    0{index + 1}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">{challenge.description}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Essar&apos;s Engineering Treatment Sequence</span>
              </h3>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed font-normal">
                {location.waterProfile.treatmentEngineering}
              </p>
              <div className="mt-3 text-xs text-text-secondary">
                <strong>Primary Source Types:</strong> {location.waterProfile.sources}
              </div>
            </div>
          </section>

          {/* Section 3: State Regulatory Framework & Clearances */}
          <section>
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                <FileCheck2 className="w-4 h-4 text-primary" />
                <span>Statutory Clearances</span>
              </div>
              <h2 className="heading-md text-foreground mb-4">
                Government Approvals &amp; Licensing Roadmap in {location.name}
              </h2>
              <p className="body-md text-text-secondary leading-relaxed">
                Every packaged drinking water manufacturing unit must strictly satisfy state environmental laws, groundwater extraction quotas, and central BIS quality standards before commercial dispatch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl border border-border shadow-xs">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Single Window System</div>
                <h3 className="text-base font-bold text-foreground mb-2">{location.regulations.singleWindowPortal}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{location.regulations.singleWindowDesc}</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-border shadow-xs">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Pollution Control</div>
                <h3 className="text-base font-bold text-foreground mb-2">{location.regulations.pollutionControlBoard}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{location.regulations.pollutionControlDesc}</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-border shadow-xs">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">BIS Certification</div>
                <h3 className="text-base font-bold text-foreground mb-2">IS 14543:2018 Standard</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{location.regulations.bisBranchOffice}</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-border shadow-xs">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Groundwater NOC</div>
                <h3 className="text-base font-bold text-foreground mb-2">Groundwater Clearance</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{location.regulations.groundwaterAuthority}</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-border shadow-xs">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Food Safety</div>
                <h3 className="text-base font-bold text-foreground mb-2">FSSAI Category 14.1.4</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{location.regulations.fssaiLicense}</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-border shadow-xs">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Local Administration</div>
                <h3 className="text-base font-bold text-foreground mb-2">Panchayat &amp; Factory Permits</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{location.regulations.localBodyPermits}</p>
              </div>
            </div>
          </section>

          {/* Section 4: The 6-Stage "Plan to Plant" Turnkey Methodology */}
          <section className="bg-surface p-8 sm:p-12 rounded-xl border border-border">
            <div className="max-w-3xl mb-10">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Proven Methodology
              </div>
              <h2 className="heading-md text-foreground mb-4">
                The 6-Month &quot;Plan to Plant&quot; Execution Roadmap
              </h2>
              <p className="body-md text-text-secondary leading-relaxed">
                Essar Enterprises takes complete turnkey accountability, guiding your business through six structured phases from bare plot to the first commercial bottle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.turnkeyStages.map((stage) => (
                <div key={stage.step} className="p-6 bg-white rounded-lg border border-border/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-primary mb-2">STAGE {stage.step}</div>
                    <h3 className="text-sm font-bold text-foreground mb-2">{stage.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Real Regional Projects & Track Record */}
          {location.caseStudies && location.caseStudies.length > 0 && (
            <section>
              <div className="max-w-3xl mb-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  Proof of Work
                </div>
                <h2 className="heading-md text-foreground mb-4">
                  Water Plants Engineered &amp; Managed in {location.name}
                </h2>
                <p className="body-md text-text-secondary leading-relaxed">
                  Real projects established by Essar Enterprises, delivering turnkey factory design, machinery installation, and continuous operational supervision.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {location.caseStudies.map((project) => (
                  <div key={project.slug} className="p-7 bg-white rounded-xl border border-border shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.projectType}</span>
                        <span className="text-xs text-text-secondary bg-surface px-2.5 py-1 rounded border border-border">{project.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{project.name}</h3>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-light">{project.summary}</p>

                      <div className="space-y-2 mb-6">
                        {project.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-foreground font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Link
                        href={`/projects#${project.slug}`}
                        className="text-xs font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>View Project Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: Frequently Asked Questions (FAQ Accordion with FAQPage Schema) */}
          <section className="bg-white p-8 sm:p-12 rounded-xl border border-border shadow-sm">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="heading-md text-foreground mb-4">
                Common Questions About Water Plant Setup in {location.name}
              </h2>
              <p className="body-md text-text-secondary leading-relaxed">
                Clear, straightforward answers to the most common questions entrepreneurs ask when planning a packaged drinking water or commercial RO plant.
              </p>
            </div>

            <div className="space-y-4">
              {location.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-border rounded-lg bg-surface transition-all duration-200 open:bg-white open:shadow-xs"
                >
                  <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-semibold text-foreground cursor-pointer list-none select-none">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-4 h-4 text-text-secondary group-open:rotate-180 transition-transform shrink-0 ml-4" />
                  </summary>
                  <div className="px-5 pb-5 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border/50 pt-3 font-light">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 7: Final Conversion CTA */}
          <section className="bg-primary text-white p-8 sm:p-12 rounded-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                Start With Confidence
              </span>
              <h2 className="heading-md text-white mb-4">
                Ready to Launch Your Water Plant in {location.name}?
              </h2>
              <p className="text-sm text-surface/85 leading-relaxed font-light">
                Consult with Essar Enterprises&apos; regional engineers. We will analyze your raw water report, calculate initial capital expenditure, and draft your complete statutory roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <Link
                href="/tools/calculator"
                className="px-6 py-3 bg-white text-primary text-center rounded-md font-semibold text-xs hover:bg-surface transition-colors"
              >
                Estimate Plant Cost
              </Link>
              <Link
                href="/quotation"
                className="px-6 py-3 bg-accent text-white text-center rounded-md font-semibold text-xs hover:opacity-95 transition-opacity"
              >
                Request Quotation
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
