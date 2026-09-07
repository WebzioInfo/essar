import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/ui/TrustBar";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { getIndustry, industries } from "@/content/industries";
import { industryServiceSchema } from "@/seo/schema";

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return {};
  }

  return {
    title: `${industry.title} Consultants | Essar Enterprises`,
    description: industry.description,
    alternates: {
      canonical: `/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup type="Service" data={industryServiceSchema(industry)} />

      <div className="bg-primary pt-32 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-6">
            Industry Solutions
          </div>
          <h1 className="heading-xl text-white mb-6">{industry.title}</h1>
          <p className="heading-sm text-surface font-normal max-w-2xl mx-auto opacity-80">{industry.subtitle}</p>
        </div>
      </div>

      <TrustBar />

      <div className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-2/3">
            <h2 className="heading-md text-foreground mb-6">Industry Expertise</h2>
            <p className="body-lg mb-10 text-text-secondary leading-relaxed">{industry.description}</p>

            <h3 className="heading-sm text-foreground mb-6">Common Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {industry.applications.map((app) => (
                <div key={app} className="bg-white p-4 rounded-lg border border-border flex items-center shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface border border-border text-primary flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-foreground">{app}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="premium-card p-8 sticky top-24 bg-white border border-border">
              <h3 className="heading-sm text-foreground mb-3">Start your plant today</h3>
              <p className="body-md mb-6 text-text-secondary">Get a project report and capacity planning consultation for your industry.</p>

              <Link href="/contact" className="w-full block text-center px-6 py-4 bg-primary text-white rounded-md font-bold hover:bg-secondary transition-colors mb-4">
                Request Consultation
              </Link>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-text-secondary mb-2">Or speak to an engineer now:</p>
                <a href="tel:+918884677773" className="flex items-center text-primary font-bold text-lg hover:text-secondary transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +91 88846 77773
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
