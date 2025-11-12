'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();
  const { isSubmitting, errors } = formState;

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    alert('Thank you — Our team will contact you shortly.');
    reset();
  };

  return (
    <section id="contact" className="py-32 relative bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="heading-lg gradient-text">Let’s Discuss Your Project</h2>
          <p className="mt-3 text-textSecondary text-lg">
            Consultation • Cost Estimation • Feasibility • Plant Strategy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="premium-card rounded-3xl p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-textSecondary">Full Name *</label>
                <input
                  {...register('name', { required: true })}
                  placeholder="Your Name"
                  className="mt-2 w-full rounded-xl glass-effect px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">Name is required</p>}
              </div>

              <div>
                <label className="text-sm text-textSecondary">Email *</label>
                <input
                  {...register('email', { required: true })}
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl glass-effect px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">Valid email required</p>}
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm text-textSecondary">Phone *</label>
              <input
                {...register('phone', { required: true })}
                placeholder="+91 98765 43210"
                className="mt-2 w-full rounded-xl glass-effect px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && <p className="text-xs text-red-400 mt-1">Phone is required</p>}
            </div>

            <div className="mt-6">
              <label className="text-sm text-textSecondary">Message</label>
              <textarea
                {...register('message')}
                rows={5}
                placeholder="Tell us your requirements..."
                className="mt-2 w-full rounded-xl glass-effect px-4 py-3 text-foreground outline-none resize-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full py-3 rounded-xl font-medium bg-primary hover:bg-primary-dark transition-all"
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </motion.form>

          {/* Right Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Box */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="heading-sm mb-6">Contact Details</h3>
              <div className="space-y-5 text-textSecondary text-sm">
                <div className="flex items-center gap-4">
                  <FiMapPin size={20} className="text-primary" /> Kerala & Karnataka, India
                </div>
                <div className="flex items-center gap-4">
                  <FiMail size={20} className="text-primary" /> info@essarenterprises.com
                </div>
                <div className="flex items-center gap-4">
                  <FiPhone size={20} className="text-primary" /> +91 XXXXX XXXXX
                </div>
              </div>
            </div>

            {/* Why Us */}
            <div className="glass-card rounded-3xl p-8">
              <h4 className="heading-sm mb-4">Why Consult With Us?</h4>
              <ul className="space-y-2 text-textSecondary text-sm">
                <li>• Feasibility & Market Fit</li>
                <li>• Financial Planning & ROI Strategy</li>
                <li>• Technical Plant Architecture</li>
                <li>• Licensing, Compliance & Setup</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
