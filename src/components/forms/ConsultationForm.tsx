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
    setState("submitting");
    setMessage("");

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

      setState("success");
      setForm(initialForm);
      trackLeadSubmitted("contact-page-consultation");
      setMessage("Thank you. Essar will review your project details and contact you shortly.");
      router.push("/thank-you?source=contact-page-consultation");
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
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="+91"
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
