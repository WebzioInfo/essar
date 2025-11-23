'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

type FormValues = {
  name: string;
  email: string;
  phone: string;

  bpm: string;
  automation: string;
  marketLocation: string;
  salesChannel: string;
  message?: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();
  const { isSubmitting } = formState;

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 500));

    const message = `
📩 *New Plant Inquiry*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}

🏭 *Planned BPM:* ${data.bpm}
⚙️ *Plant Automation:* ${data.automation}
📍 *Market Location:* ${data.marketLocation}
📊 *Existing Sales/Marketing Channels:* ${data.salesChannel}

📝 *Message:* ${data.message || "No additional message"}
    `.trim();

    const encoded = encodeURIComponent(message);
    const phoneNumber = "918553185300";

    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
    alert("Redirecting to WhatsApp…");
    reset();
  };

  return (
    <section id="contact" className="py-32 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">
            Start Your Water Plant Journey
          </h2>
          <p className="mt-4 text-textSecondary text-lg">
            Tell us your business plan — we’ll guide you from concept to commissioning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* FORM LEFT */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg 
                       rounded-3xl p-10 space-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            {/* PERSONAL SECTION */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-primary">1. Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-textSecondary">Full Name *</label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="input-style"
                  />
                </div>

                <div>
                  <label className="text-sm text-textSecondary">Email *</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="you@example.com"
                    className="input-style"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-textSecondary">Phone *</label>
                  <input
                    {...register("phone", { required: true })}
                    placeholder="+91 98765 43210"
                    className="input-style"
                  />
                </div>

              </div>
            </div>

            {/* PROJECT SECTION */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-primary">2. Project Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-textSecondary">Planned BPM Capacity *</label>
                  <select {...register("bpm", { required: true })} className="input-style ">
                    <option value="">Select BPM</option>
                    <option value="40">40 BPM</option>
                    <option value="60">60 BPM</option>
                    <option value="90">90 BPM</option>
                    <option value="120">120 BPM</option>
                    <option value="180">180 BPM</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-textSecondary">Plant Automation *</label>
                  <select {...register("automation", { required: true })} className="input-style">
                    <option value="">Select Type</option>
                    <option value="Fully Automatic">Fully Automatic</option>
                    <option value="Semi Automatic">Semi Automatic</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-textSecondary">Market Location *</label>
                  <input
                    {...register("marketLocation", { required: true })}
                    placeholder="City / Area / Region"
                    className="input-style"
                  />
                </div>
              </div>
            </div>

            {/* BUSINESS SECTION */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-primary">3. Business Details</h3>

              <label className="text-sm text-textSecondary">Existing Sales/Marketing Channels?</label>
              <input
                {...register("salesChannel")}
                placeholder="Yes / No — Explain if yes"
                className="input-style"
              />

              <label className="text-sm mt-5 text-textSecondary">Additional Message</label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us your requirements..."
                className="input-style resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-medium text-lg transition-all"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </motion.form>

          {/* RIGHT INFO BAR */}
          <motion.div
            className="space-y-10 lg:sticky lg:top-28 h-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
              <div className="space-y-5 text-textSecondary">

                <div className="flex items-center gap-4">
                  <FiMapPin className="text-primary" /> Kerala & Karnataka, India
                </div>

                <div className="flex items-center gap-4">
                  <FiMail className="text-primary" /> info@essarenterprises.com
                </div>

                <div className="flex items-center gap-4">
                  <FiPhone className="text-primary" /> +91 85531 85300
                </div>

              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-xl font-semibold mb-5">Why Clients Choose Us?</h4>
              <ul className="space-y-3 text-textSecondary">
                <li>• 20+ Years Industry Expertise</li>
                <li>• Full Turnkey Plant Setup</li>
                <li>• Licensing & Compliance Guidance</li>
                <li>• ROI-Focused Business Strategy</li>
                <li>• Technical Plant Engineering</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>

      {/* EXTRA INPUT STYLES */}
      <style>
        {`
          .input-style {
            margin-top: 8px;
            width: 100%;
            padding: 14px 18px;
            border-radius: 14px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.12);
            backdrop-filter: blur(12px);
            color: white;
            outline: none;
            transition: 0.2s;
          }
          .input-style:focus {
            border-color: #4dafff;
            box-shadow: 0 0 0 2px rgba(77,175,255,0.3);
          }
        `}
      </style>
    </section>
  );
}
