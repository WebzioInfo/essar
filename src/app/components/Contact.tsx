'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { toast } from 'sonner';
import axios from 'axios';
import Head from 'next/head';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  bpm: string;
  automation: string;
  marketLocation: string;
  salesChannel: string;
  budget?: string;
  message?: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();
  const { isSubmitting } = formState;

  const onSubmit = async (data: FormValues) => {
    const toastId = toast.loading("Sending your inquiry...");

    try {
      await axios.post("/api/save-to-sheet", data);

      toast.success("Inquiry submitted!", {
        description: "Redirecting you to WhatsApp...",
      });

      const message = `
📩 *New Plant Inquiry*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}

🏭 *Planned BPM:* ${data.bpm}
⚙️ *Plant Automation:* ${data.automation}
📍 *Market Location:* ${data.marketLocation}
📊 *Sales Channels:* ${data.salesChannel}

💰 *Budget:* ${data.budget || "Not Provided"}

📝 *Message:* ${data.message || "No additional message"}
      `.trim();

      // ⭐ Popup-block safe WhatsApp open
      const url = `https://wa.me/918884677773?text=${encodeURIComponent(message)}`;

      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();

      reset();

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong", {
        id: toastId,
        description: "Please try again.",
      });
    }
  };

  return (
    <>
    {/* Meta tags, OG, Twitter & Keywords */}
      <Head>
        <title>Contact Essar Enterprises – RO Plant Setup & Consultancy</title>
        <meta name="description" content="Contact Essar Enterprises for turnkey RO plant installation, water plant consultancy, licensing, branding, and operational support in Kerala & Karnataka." />
        <meta name="keywords" content="RO Plant Installation Kerala, Packaged Drinking Water Plant, Water Plant Consultancy, Licensing, Water Testing, Essar Enterprises" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Essar Enterprises – Water Plant Consultancy" />
        <meta property="og:description" content="Reach Essar Enterprises for turnkey RO plant setup, licensing, and operational guidance in Kerala & Karnataka." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://essarenterprises.co.in/contact" />
        <meta property="og:image" content="https://essarenterprises.co.in/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Essar Enterprises – Water Plant Consultancy" />
        <meta name="twitter:description" content="Reach Essar Enterprises for turnkey RO plant setup, licensing, and operational guidance." />
        <meta name="twitter:image" content="https://essarenterprises.co.in/logo.png" />

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Essar Enterprises",
              "image": "https://essarenterprises.co.in/logo.png",
              "@id": "https://essarenterprises.co.in",
              "url": "https://essarenterprises.co.in",
              "telephone": "+918884677773",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kerala & Karnataka Offices",
                "addressLocality": "Kerala",
                "addressRegion": "KL",
                "postalCode": "000000",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.8505,
                "longitude": 76.2711
              },
              "sameAs": [
                "https://www.instagram.com/essar.enterprises"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />

        {/* Breadcrumb JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://essarenterprises.co.in" },
                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://essarenterprises.co.in/contact" }
              ]
            })
          }}
        />
      </Head>
    
    <section id="contact" className="py-32 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Start Your Water Plant Journey
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Tell us your business plan — we’ll guide you from concept to commissioning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* FORM LEFT */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-3xl p-10 space-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            {/* PERSONAL SECTION */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-blue-400">1. Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-400">Full Name *</label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Email *</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-400">Phone *</label>
                  <input
                    {...register("phone", { required: true })}
                    placeholder="+91 98765 43210"
                    className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>

              </div>
            </div>

            {/* PROJECT SECTION */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-blue-400">2. Project Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-400">Planned BPM *</label>
                  <select
                    {...register("bpm", { required: true })}
                    className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select BPM</option>
                    <option value="40">40 BPM</option>
                    <option value="60">60 BPM</option>
                    <option value="90">90 BPM</option>
                    <option value="120">120 BPM</option>
                    <option value="180">180 BPM</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-400">Automation *</label>
                  <select
                    {...register("automation", { required: true })}
                    className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Type</option>
                    <option value="Fully Automatic">Fully Automatic</option>
                    <option value="Semi Automatic">Semi Automatic</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-400">Market Location *</label>
                  <input
                    {...register("marketLocation", { required: true })}
                    placeholder="City / Area / Region"
                    className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* BUSINESS SECTION */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-blue-400">3. Business Details</h3>

              <label className="text-sm text-gray-400">Existing Marketing Channels?</label>
              <input
                {...register("salesChannel")}
                placeholder="Yes / No — Explain if yes"
                className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              />

              <label className="text-sm text-gray-400 mt-5 block">Estimated Budget (Optional)</label>
              <select
                {...register("budget")}
                className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 "
              >
                <option value="">Select Budget (Optional)</option>
                <option value="50-75 Lakhs">₹50–75 Lakhs</option>
                <option value="75-100 Lakhs">₹75–100 Lakhs</option>
                <option value="100-150 Lakhs">₹100–150 Lakhs</option>
                <option value="150-200 Lakhs">₹150–200 Lakhs</option>
                <option value="200+ Lakhs">₹200+ Lakhs</option>
              </select>

              <label className="text-sm text-gray-400 mt-5 block">Additional Message</label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us your requirements..."
                className="mt-2 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg transition"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </motion.form>

          {/* RIGHT INFORMATION PANEL */}
          <motion.div
            className="space-y-10 lg:sticky lg:top-28 h-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
              <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
              <div className="space-y-5 text-gray-400">
                <div className="flex items-center gap-4">
                  <FiMapPin className="text-blue-400" /> Kerala & Karnataka, India
                </div>
                <div className="flex items-center gap-4">
                  <FiMail className="text-blue-400" /> info@essarenterprises.com
                </div>
                <div className="flex items-center gap-4">
                  <FiPhone className="text-blue-400" /> +91 88846 77773
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
              <h4 className="text-xl font-semibold mb-5">Why Clients Choose Us?</h4>
              <ul className="space-y-3 text-gray-400">
                <li>• 20+ Years Industry Expertise</li>
                <li>• Full Turnkey Plant Setup</li>
                <li>• Licensing & Compliance Guidance</li>
                <li>• ROI-Focused Strategy</li>
                <li>• Technical Engineering Support</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
}
