"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackLeadSubmitted } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  status: "New Investor (No Plant Yet)",
  projectDetails: "",
};

export default function ConsultationForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    // Phone validation (must have at least 10 digits)
    const cleanPhone = form.phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setState("error");
      setMessage("Please enter a valid phone number with at least 10 digits.");
      return;
    }

    setState("submitting");

    try {
      const response = await fetch("/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "contact-page-consultation",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const fullName = `${form.firstName} ${form.lastName}`.trim();
      const waMessage =
        `*Consultation Request - Essar Enterprises*\n\n` +
        `Name: ${fullName}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email || "—"}\n` +
        `Client Type: ${form.status}\n\n` +
        `Project Details:\n${form.projectDetails}`;

      // Try automatic WhatsApp popup (Safari iOS may block if async)
      try {
        window.open(
          `https://wa.me/918884677773?text=${encodeURIComponent(waMessage)}`,
          "_blank"
        );
      } catch {
        // Fallback provided on Thank You page
      }

      setState("success");
      setForm(initialForm);
      trackLeadSubmitted("contact-page-consultation");
      setMessage("Thank you. Essar will review your project details and contact you shortly.");

      // Rich redirect params so /thank-you has full fallback button with pre-filled message
      const params = new URLSearchParams({
        source: "contact-page-consultation",
        name: fullName,
        phone: form.phone,
        status: form.status,
        details: form.projectDetails,
      });

      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setState("error");
      setMessage("We could not submit the form. Please call or WhatsApp +91 88846 77773.");
    }
  }

  return (
    <form className="space-y-6" onSubmit={submitForm}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={form.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
          Phone Number / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          minLength={10}
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-primary mb-2">
          Your Current Status
        </label>
        <select
          id="status"
          name="status"
          value={form.status}
          onChange={(event) => updateField("status", event.target.value)}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
        >
          <option>New Investor (No Plant Yet)</option>
          <option>Existing Plant Owner (Needs Support/Upgrades)</option>
          <option>Commercial RO Operator</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="projectDetails" className="block text-sm font-medium text-primary mb-2">
          Project Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={4}
          required
          value={form.projectDetails}
          onChange={(event) => updateField("projectDetails", event.target.value)}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="Tell us about your location, capacity requirements, or challenges..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-colors text-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "submitting" ? "Submitting..." : "Submit Request"}
      </button>

      {message ? (
        <p className={state === "success" ? "text-sm font-medium text-primary" : "text-sm font-medium text-red-700"} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
