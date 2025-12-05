'use client';
import Link from "next/link";
import { Mail, MapPin, Phone, Globe, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-16">

          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="heading-md font-bold mb-5">Essar Enterprises</h3>
            <p className="body-md text-gray-300 leading-relaxed mb-8 max-w-lg">
              Experts in fully automated packaged drinking water plants since 2004.
              We design, install, license, and support successful water bottling businesses across Kerala & Karnataka.
            </p>

            {/* Contact Icons */}
            <div className="flex flex-wrap gap-4">
              <a href="mailto:info@essarenterprises.co.in"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Email Essar Enterprises">
                <Mail size={22} />
              </a>

              <a href="https://wa.me/918884677773"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="WhatsApp Essar Enterprises">
                <Phone size={22} />
              </a>

              <a href="https://www.google.com/maps?q=Calicut+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Location Map">
                <MapPin size={22} />
              </a>

              <a href="https://instagram.com/essar.enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Instagram">
                <Instagram size={22} />
              </a>

              <a href="https://essarenterprises.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Website">
                <Globe size={22} />
              </a>
            </div>

            <p className="body-sm text-gray-400 mt-4">
              Phone: +91 88846 77773 <br />
              Email: info@essarenterprises.co.in <br />
              Location: Calicut, Kerala
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-sm font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Mission", id: "mission" },
                { name: "Why Essar", id: "why-essar" },
                { name: "Founder", id: "founder" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <a href={`/#${item.id}`} className="body-md text-gray-300 hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-sm font-bold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                "RO Plant Installation & Design",
                "Packaged Drinking Water Plant Consultancy",
                "Licensing & Regulatory Support",
                "Laboratory Setup & Water Analysis",
                "Branding & Business Strategy",
                "Training & Operational Support",
                "AMC & Spare Parts Supply",
              ].map((service) => (
                <li key={service}>
                  <span className="body-md text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-md text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Essar Enterprises. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="body-md text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="body-md text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
