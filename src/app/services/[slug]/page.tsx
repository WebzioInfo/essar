import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/ui/TrustBar";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { getService, services } from "@/content/services";
import { serviceSchema } from "@/seo/schema";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} Consultants in South India | Essar Enterprises`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup type="Service" data={serviceSchema(service)} />

      <div className="bg-primary pt-32 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <Link href="/services" className="text-surface hover:text-white font-medium text-sm mb-6 inline-flex items-center transition-colors opacity-80">
            &larr; Back to Services
          </Link>
          <h1 className="heading-xl text-white mb-6">{service.title}</h1>
          <p className="heading-sm text-surface font-normal max-w-2xl mx-auto opacity-80">{service.subtitle}</p>
        </div>
      </div>

      <TrustBar />

      <div className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-2/3">
            <h2 className="heading-md text-foreground mb-6">Expertise You Can Trust</h2>
            <p className="body-lg mb-10 text-text-secondary leading-relaxed">{service.description}</p>

            <h3 className="heading-sm text-foreground mb-6">Key Benefits</h3>
            <ul className="space-y-4 mb-10">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-surface border border-border text-primary flex items-center justify-center mt-1 mr-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="body-md text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <div className="premium-card p-8 sticky top-24 bg-white">
              <div className="w-16 h-16 bg-surface border border-border rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="heading-sm text-foreground mb-3">Ready to start?</h3>
              <p className="body-md mb-6 text-text-secondary">Book a consultation with Essar&apos;s water plant team.</p>

              <Link href="/contact" className="w-full block text-center px-6 py-4 bg-primary text-white rounded-md font-bold hover:bg-secondary transition-colors mb-4">
                Book Consultation
              </Link>

              <Link href="/tools/calculator" className="w-full block text-center px-6 py-4 bg-white text-primary border border-primary rounded-md font-bold hover:bg-surface transition-colors">
                Estimate Project Cost
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
