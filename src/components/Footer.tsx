'use client';

import { EnvelopeSimple } from "@phosphor-icons/react";
import { MapPin, Phone } from "lucide-react";



export default function Footer() {
  return (
    <footer className="bg-(--foreground) text-white pt-24 pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-16">

          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="heading-md font-bold mb-5">Essar Enterprises</h3>
            <p className="body-md text-gray-300 leading-relaxed mb-8 max-w-lg">
              Trusted partner in establishing successful packaged drinking water plants since 2004.
              We deliver not just machinery — but knowledge, strategy, and long-term success.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:info@essarenterprises.in" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center
  hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <EnvelopeSimple size={22} weight="duotone" />
              </a>
              <a href="tel:+91XXXXXXXXXX" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center
  hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Phone size={22} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center
  hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <MapPin size={22}  />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-sm font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Mission', 'Why Essar', 'Founder', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="body-md text-gray-300 hover:text-(--primary) transition-colors duration-200"
                  >
                    {link}
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
                'Plant Design & Setup',
                'Licensing & Compliance',
                'Operations & Training',
                'Marketing & Branding',
                'Maintenance & Supply',
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
          <p className="body-md text-gray-400">
            © {new Date().getFullYear()} Essar Enterprises. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className=" body-md text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className=" body-md text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
