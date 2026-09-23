import type { Metadata } from "next";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { companyData } from "@/content/company";

export const metadata: Metadata = {
  title: "Book a Consultation | Essar Enterprises",
  description:
    "Schedule a strategy session with Essar Enterprises for packaged drinking water plant planning, licensing, setup, laboratory, and launch support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
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
                      className="px-3.5 py-2 bg-[#25D366] text-white text-xs font-medium rounded-md hover:opacity-95 transition-opacity"
                    >
                      WhatsApp
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
