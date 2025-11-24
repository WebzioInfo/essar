'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import axios from "axios";
import GlassForm from '@/components/GlassForm';
import GlassTextarea from '@/components/GlassTextarea';
import { toast } from 'sonner';

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
  toast.loading("Sending your inquiry...");

  try {
    await axios.post("/api/save-to-sheet", data);

    toast.success("Inquiry submitted!", {
      description: "Redirecting you to WhatsApp...",
    });

    // WhatsApp Redirect
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

    window.open(
      `https://wa.me/918553185300?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    reset();
  } catch (err:unknown) {
    console.error(err);
    toast.error("Something went wrong", {
      description: "Please try again.",
    });
  }
};


  return (
    <section id="contact" className="py-32 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">
            Start Your Water Plant Journey
          </h2>
          <p className="mt-4 text-textSecondary text-lg">
            Tell us your business plan — we’ll guide you from concept to commissioning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* RIGHT INFO SIDEBAR */}
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

          {/* FORM SECTION */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border 
                       border-white/10 shadow-lg rounded-3xl p-10 space-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            {/* PERSONAL INFO */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-primary">
                1. Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassForm
                  label="Full Name *"
                  type="text"
                  placeholder="Your Name"
                  register={register("name", { required: true })}
                />

                <GlassForm
                  label="Email *"
                  type="email"
                  placeholder="your@email.com"
                  register={register("email", { required: true })}
                />

                <GlassForm
                  label="Phone *"
                  type="text"
                  placeholder="+91 9876543210"
                  register={register("phone", { required: true })}
                />
              </div>
            </div>

            {/* PROJECT REQUIREMENTS */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-primary">
                2. Project Requirements
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <GlassForm
                  label="Planned BPM Capacity *"
                  type="select"
                  register={register("bpm", { required: true })}
                  options={[
                    { value: "40", label: "40 BPM" },
                    { value: "60", label: "60 BPM" },
                    { value: "90", label: "90 BPM" },
                    { value: "120", label: "120 BPM" },
                    { value: "180", label: "180 BPM" },
                  ]}
                />

                <GlassForm
                  label="Plant Automation *"
                  type="select"
                  register={register("automation", { required: true })}
                  options={[
                    { value: "Fully Automatic", label: "Fully Automatic" },
                    { value: "Semi Automatic", label: "Semi Automatic" },
                  ]}
                />

                <GlassForm
                  label="Market Location *"
                  type="text"
                  placeholder="City / Area / Region"
                  register={register("marketLocation", { required: true })}
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* BUSINESS DETAILS */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-primary">
                3. Business Details
              </h3>

              <GlassForm
                label="Existing Sales/Marketing Channels?"
                type="text"
                placeholder="Yes / No — Explain if yes"
                register={register("salesChannel")}
              />

              <GlassTextarea
                label="Additional Message"
                placeholder="Tell us your requirements..."
                rows={5}
                register={register("message")}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark 
                         text-white font-medium text-lg transition-all"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
