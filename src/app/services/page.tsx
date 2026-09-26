import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/ui/TrustBar";
import { services } from "@/content/services";
import { getBreadcrumbSchema } from "@/config/seo";

export const metadata: Metadata = {
  title: "Complete Water Business Solutions & Services | Essar Enterprises",
  description:
    "From plant setup to production: Packaged drinking water plant setup, industrial RO solutions, bottling lines, hygienic plant layout, BIS & FSSAI licensing, laboratory setup, and RO servicing across South India.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesIndexPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Editorial Hero Header */}
      <div className="bg-primary pt-32 pb-24 border-b border-border text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
            <span>Essar Enterprises</span>
            <span className="opacity-40">•</span>
            <span>Complete Water Business Solutions</span>
          </div>

          <h1 className="heading-xl text-white mb-6">
            From Plant Setup to Production.
          </h1>

          <p className="heading-sm text-surface font-normal max-w-3xl mx-auto opacity-90 leading-relaxed mb-6">
            Design, Machinery, RO Systems, Government Approvals, Installation, Servicing &amp; Support.
          </p>

          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            &ldquo;Find the Problem. Fix the Plant. Improve the Production.&rdquo;
          </p>
        </div>
      </div>

      <TrustBar />

      {/* Services Grid (Structured by Division) */}
      <div className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-primary mb-4">Core Service Divisions</h2>
            <p className="body-lg text-text-secondary leading-relaxed">
              Every stage of your bottled water facility handled by experienced plant engineers and regulatory specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group"
              >
                <div className="premium-card p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded">
                        Division 0{service.divisionNumber}
                      </span>
                    </div>

                    <h3 className="heading-sm text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs font-medium text-text-secondary mb-4 italic">
                      {service.subtitle}
                    </p>

                    <p className="body-sm text-text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6 pt-4 border-t border-border/60">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="text-xs text-foreground/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-primary font-semibold text-xs tracking-wider uppercase pt-4 border-t border-border/40 group-hover:text-accent transition-colors">
                    Explore Division Scope &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Direct CTA */}
          <div className="mt-20 p-8 sm:p-12 bg-surface rounded-xl border border-border text-center max-w-3xl mx-auto">
            <h3 className="heading-md text-primary mb-3">Have a plant challenge or planning a new setup?</h3>
            <p className="body-md text-text-secondary mb-8">
              Discuss feasibility, machinery sizing, BIS licensing, or RO problem solving directly with our consultants.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-primary text-background text-sm font-semibold rounded-md hover:bg-secondary transition-colors"
            >
              Book Strategy Session
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
