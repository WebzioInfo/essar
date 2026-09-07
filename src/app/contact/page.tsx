import type { Metadata } from "next";
import ConsultationForm from "@/components/forms/ConsultationForm";

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

      <div className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="premium-card p-10 bg-white">
              <h2 className="heading-sm mb-8 text-primary">Consultation Request</h2>
              <ConsultationForm />
            </div>

            {/* Direct Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="heading-md text-primary mb-6">Direct Access</h2>
              <p className="body-lg mb-12">Prefer to speak with an engineer immediately? Reach out directly via phone or WhatsApp for immediate assistance.</p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-primary shrink-0 mr-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Phone & WhatsApp</h3>
                    <a href="tel:+918884677773" className="body-lg text-text-secondary hover:text-primary transition-colors block mb-1">+91 88846 77773</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-primary shrink-0 mr-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Email</h3>
                    <a href="mailto:info@essarenterprises.in" className="body-lg text-text-secondary hover:text-primary transition-colors block">info@essarenterprises.in</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-primary shrink-0 mr-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Head Office</h3>
                    <p className="body-lg text-text-secondary">Seegahalli, KR Puram<br/>Bangalore, India 560049</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
