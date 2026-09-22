import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Essar Enterprises",
  description: "Terms and conditions for consulting services provided by Essar Enterprises.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-primary">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <div className="mb-10 pb-6 border-b border-border">
          <Link href="/" className="text-xs uppercase tracking-widest text-text-secondary hover:text-primary transition-colors inline-block mb-4">
            ← Back to Home
          </Link>
          <h1 className="heading-xl text-primary mb-3">Terms of Service</h1>
          <p className="text-sm text-text-secondary">Last updated: September 2026</p>
        </div>

        <div className="prose prose-sm max-w-none text-text-secondary space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-primary mb-3">1. Scope of Consultancy Services</h2>
            <p>
              Essar Enterprises provides technical advisory, project planning, civil and cleanroom layout guidance, machinery selection, BIS &amp; FSSAI regulatory consulting, and plant revival management for packaged drinking water facilities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-3">2. Quotation Estimates &amp; Feasibility</h2>
            <p>
              Any estimates generated through our online quotation engine or preliminary consultations are indicative and subject to site inspections, water test reports, state regulatory conditions, and final formal agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-3">3. Intellectual Property</h2>
            <p>
              All case studies, plant layout documentation, and proprietary methodologies published on this website are the intellectual property of Essar Enterprises.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-3">4. Inquiries &amp; Legal Notices</h2>
            <p>
              For legal inquiries or service agreements:
            </p>
            <div className="mt-3 p-4 bg-surface rounded-sm border border-border text-sm">
              <p className="font-medium text-primary">Essar Enterprises</p>
              <p>Email: webzio.info@gmail.com</p>
              <p>Phone: +91 88846 77773</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
