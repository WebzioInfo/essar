import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/ui/TrustBar";
import { companyData, trackRecordMetrics } from "@/content/company";

export const metadata: Metadata = {
  title: "About Essar Enterprises | Turnkey Water Plant Consultants",
  description:
    "With over 20 years of expertise since 2004, Essar Enterprises helps entrepreneurs and investors establish, revive, and operate packaged drinking water businesses across South India.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-primary pt-32 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">
            Established {companyData.foundedYear}
          </span>
          <h1 className="heading-xl text-white">Building Bottled Water Businesses</h1>
          <p className="heading-sm text-surface font-normal max-w-2xl mx-auto opacity-80">
            Technical advisory, regulatory clearance, and plant engineering since {companyData.foundedYear}.
          </p>
        </div>
      </div>

      <TrustBar />

      <div className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="heading-lg text-primary mb-8">From Idea to First Bottle</h2>
            <p className="body-lg text-text-secondary leading-relaxed mb-6">
              Essar Enterprises is not a machinery broker. We are an end-to-end technical partner. For more than two decades, we have provided the practical engineering, regulatory foresight, and operational discipline behind packaged drinking water plants across South India.
            </p>
            <p className="body-lg text-text-secondary leading-relaxed">
              From bare-land feasibility and hygienic civil layout design to reverse osmosis engineering, in-house laboratory setup, and BIS/FSSAI licensing audits, our team guides entrepreneurs until their first commercial bottle rolls off the line.
            </p>
          </div>

          {/* Centralized Track Record Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
            {trackRecordMetrics.map((metric) => (
              <div
                key={metric.id}
                className="premium-card p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-text-secondary/70 block mb-3">
                    {metric.scope}
                  </span>
                  <div className="text-4xl lg:text-5xl font-light text-primary mb-2 tracking-tight">
                    {metric.value}
                  </div>
                  <h3 className="text-base font-medium text-primary mb-2">
                    {metric.label}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed pt-3 border-t border-border/40">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>

          {/* Practical Engineering Narrative */}
          <div className="bg-surface rounded-sm p-8 sm:p-12 border border-border max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  Operating Model
                </h4>
                <p className="text-sm text-text-secondary">
                  Plan to Plant — direct technical oversight, from civil layout through to commercial commissioning.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  Regional Focus
                </h4>
                <p className="text-sm text-text-secondary">
                  {companyData.geographicCoverage}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  Launch Timeline
                </h4>
                <p className="text-sm text-text-secondary">
                  Target turnaround of first bottle in 6 months with systematic compliance execution.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-text-secondary">
                Looking to build or revive a packaged drinking water plant?
              </span>
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-background text-xs font-semibold uppercase tracking-wider hover:bg-secondary transition-colors"
              >
                Book Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
