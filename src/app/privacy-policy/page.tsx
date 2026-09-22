import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Essar Enterprises",
  description: "Privacy policy and client data handling practices of Essar Enterprises.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-primary">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <div className="mb-10 pb-6 border-b border-border">
          <Link href="/" className="text-xs uppercase tracking-widest text-text-secondary hover:text-primary transition-colors inline-block mb-4">
            ← Back to Home
          </Link>
          <h1 className="heading-xl text-primary mb-3">Privacy Policy</h1>
          <p className="text-sm text-text-secondary">Last updated: September 2026</p>
        </div>

        <div className="prose prose-sm max-w-none text-text-secondary space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-primary mb-3">1. Information We Collect</h2>
            <p>
              Essar Enterprises collects business contact details (such as name, phone number, email address, and project location) solely when you voluntarily submit a consultation request or quotation inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-3">2. How We Use Your Information</h2>
            <p>
              Your information is strictly used to evaluate water plant project requirements, prepare feasibility studies, contact you regarding your inquiry, and coordinate regulatory and operational consultations. We never sell, rent, or trade your contact information with unauthorized third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-3">3. Communication &amp; WhatsApp Direct</h2>
            <p>
              By submitting a consultation request, you may be redirected to our verified WhatsApp channel or contacted via phone by our consulting team to clarify technical specifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-3">4. Contact Us</h2>
            <p>
              For questions regarding our privacy practices or your data, reach us at:
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
