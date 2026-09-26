import type { Metadata } from "next";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { companyData } from "@/content/company";

import { SEO_CONFIG, getBreadcrumbSchema, getOrganizationSchema } from "@/config/seo";

export const metadata: Metadata = {
  title: "Contact Essar Enterprises | Book Water Plant Consultation | Kerala, Karnataka, Tamil Nadu",
  description:
    "Schedule a technical consultation with Essar Enterprises. Connect with our engineering teams in Kerala (Kondotty), Bangalore (KR Puram), and Chennai (Anna Salai) for packaged drinking water plant planning and BIS licensing.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Essar Enterprises",
    description: "Contact Essar Enterprises for packaged drinking water plant advisory, turnkey setup, and BIS licensing across South India.",
    url: `${SEO_CONFIG.canonicalUrl}/contact`,
    mainEntity: getOrganizationSchema(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="bg-primary pt-32 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="heading-xl text-white mb-6">Start Your Business</h1>
          <p className="heading-sm text-surface font-normal max-w-2xl mx-auto opacity-80">Book a strategy session with our technical team.</p>
        </div>
      </div>

      <div className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
            
            {/* Contact Form */}
            <div className="premium-card p-8 sm:p-10 bg-white">
              <h2 className="heading-sm mb-8 text-primary">Consultation Request</h2>
              <ConsultationForm />
            </div>

            {/* Direct Contact Info */}
            <div className="flex flex-col justify-center lg:pt-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary border-b border-border pb-1 w-fit mb-4">
                Direct Engineering Access
              </span>
              <h2 className="heading-md text-primary mb-4">Speak With a Plant Consultant</h2>
              <p className="body-lg mb-10 text-text-secondary leading-relaxed">
                Prefer to discuss your project immediately? Reach out directly via phone or WhatsApp to connect with a senior technical consultant.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start p-5 bg-surface border border-border/80 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0 mr-5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-primary mb-1">Central Helpline & WhatsApp</h3>
                    <a href="tel:+918884677773" className="text-lg font-medium text-primary hover:text-accent transition-colors block">
                      +91 88846 77773
                    </a>
                    <p className="text-xs text-text-secondary mt-1">Available Mon – Sat, 9:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start p-5 bg-surface border border-border/80 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0 mr-5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-primary mb-1">Official Email</h3>
                    <a href="mailto:info@essarenterprises.co.in" className="text-base text-text-secondary hover:text-primary transition-colors block">
                      info@essarenterprises.co.in
                    </a>
                    <p className="text-xs text-text-secondary mt-1">Send blueprints & laboratory water test reports</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Regional Offices Section */}
          <div className="pt-12 border-t border-border">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary border-b border-border pb-1 inline-block mb-3">
                Regional Presence
              </span>
              <h2 className="heading-lg text-primary mb-3">Our Offices Across South India</h2>
              <p className="body-lg text-text-secondary">
                With regional operational hubs in Kerala, Karnataka, and Tamil Nadu, Essar Enterprises provides direct on-site technical inspection and plant engineering support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyData.offices.map((office) => (
                <div
                  key={office.id}
                  className="p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-3 py-1 bg-white border border-border text-xs font-semibold uppercase tracking-wider text-primary rounded-full">
                        {office.state}
                      </span>
                      <span className="text-xs text-text-secondary font-medium">{office.city}</span>
                    </div>

                    <h3 className="font-semibold text-lg text-primary mb-2">{companyData.name}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {office.address} <br />
                      {office.city} – {office.pincode}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/80 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-text-secondary block">Direct Line</span>
                      <a
                        href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <a
                      href={`https://wa.me/${office.phoneRaw}?text=${encodeURIComponent(`Hi Essar Enterprises, I would like to connect with your ${office.city} office regarding a water plant project.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary text-background text-xs font-medium hover:bg-secondary transition-colors shadow-xs group"
                      aria-label={`Chat with ${office.city} office on WhatsApp`}
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current text-background"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
