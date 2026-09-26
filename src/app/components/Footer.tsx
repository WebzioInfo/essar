import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Globe, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Company Info (Col 1 & 2) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="Essar Enterprises Home">
              <Image 
                src="/logos/logo-icon-light.png" 
                alt="Essar Enterprises Logo" 
                width={180} 
                height={60} 
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="body-lg text-gray-400 leading-relaxed mb-8 max-w-md font-light tracking-wide">
              Complete solutions for drinking water businesses. From plant setup to production — design, machinery, RO, approvals, installation, service &amp; support across South India.
            </p>

            {/* Contact Icons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:info@essarenterprises.co.in"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Email Essar Enterprises"
              >
                <Mail size={20} />
              </a>

              <a 
                href="https://wa.me/918884677773"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="WhatsApp Essar Enterprises"
              >
                <Phone size={20} />
              </a>

              <a 
                href="https://maps.google.com/?q=Kondotty+Malappuram+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Kerala Office Map"
              >
                <MapPin size={20} />
              </a>

              <a 
                href="https://instagram.com/essar.enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a 
                href="https://www.essarenterprises.co.in"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
            </div>

            <p className="body-sm text-gray-400 mt-6 leading-relaxed">
              Helpline: +91 88846 77773 / +91 85531 85300 <br />
              Email: info@essarenterprises.co.in <br />
              Offices: Kondotty (Kerala) • Bangalore • Chennai
            </p>
          </div>

          {/* Service Divisions (Col 3) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">Services</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/planning" className="text-gray-300 hover:text-white transition-colors">
                  Water Plant Setup
                </Link>
              </li>
              <li>
                <Link href="/services/water-treatment-ro" className="text-gray-300 hover:text-white transition-colors">
                  RO &amp; Water Treatment
                </Link>
              </li>
              <li>
                <Link href="/services/bottling-packaging" className="text-gray-300 hover:text-white transition-colors">
                  Bottling &amp; Packaging Lines
                </Link>
              </li>
              <li>
                <Link href="/services/architecture" className="text-gray-300 hover:text-white transition-colors">
                  Plant Design &amp; Layout
                </Link>
              </li>
              <li>
                <Link href="/services/licensing" className="text-gray-300 hover:text-white transition-colors">
                  BIS &amp; FSSAI Licensing
                </Link>
              </li>
              <li>
                <Link href="/services/laboratory" className="text-gray-300 hover:text-white transition-colors">
                  QC Laboratory Setup
                </Link>
              </li>
              <li>
                <Link href="/services/ro-service-maintenance" className="text-gray-300 hover:text-white transition-colors">
                  RO Service &amp; AMC
                </Link>
              </li>
              <li>
                <Link href="/services/modernization" className="text-gray-300 hover:text-white transition-colors">
                  Plant Problem Solving
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Hubs (Col 4) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">Regional Hubs</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/locations/kerala" className="text-gray-300 hover:text-white transition-colors">
                  Kerala (Kondotty)
                </Link>
              </li>
              <li>
                <Link href="/locations/bangalore" className="text-gray-300 hover:text-white transition-colors">
                  Bangalore (KR Puram)
                </Link>
              </li>
              <li>
                <Link href="/locations/chennai" className="text-gray-300 hover:text-white transition-colors">
                  Chennai (Anna Salai)
                </Link>
              </li>
              <li>
                <Link href="/locations/south-india" className="text-gray-300 hover:text-white transition-colors">
                  South India Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Tools (Col 5) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">Company &amp; Tools</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Essar (20+ Yrs)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/tools/calculator" className="text-gray-300 hover:text-white transition-colors">
                  Plant Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/quotation" className="text-gray-300 hover:text-white transition-colors">
                  Request Quotation
                </Link>
              </li>
              <li>
                <Link href="/about-ai" className="text-gray-300 hover:text-white transition-colors">
                  AI Entity Reference
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact &amp; Offices
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-md text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Essar Enterprises. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="body-md text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="body-md text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="body-md text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
