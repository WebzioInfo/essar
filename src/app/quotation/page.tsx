"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type BPM = 40 | 60 | 90 | 120 | 180;
type AutomationType = "Semi Automatic" | "Fully Automatic";

const BPM_OPTIONS: { value: BPM; label: string }[] = [
  { value: 40, label: "40 BPM (~2,400 bottles/hr)" },
  { value: 60, label: "60 BPM (~3,600 bottles/hr)" },
  { value: 90, label: "90 BPM (~5,400 bottles/hr)" },
  { value: 120, label: "120 BPM (~7,200 bottles/hr)" },
  { value: 180, label: "180 BPM (~10,800 bottles/hr)" },
];

const SERVICE_OPTIONS = [
  "Plant Design & Setup",
  "Licensing & Compliance",
  "Laboratory Setup & Testing",
  "Branding & Market Strategy",
  "Operations & Training",
  "Maintenance & AMC",
];

export default function QuotationWizard() {
  const [step, setStep] = useState<number>(1);
  const [bpm, setBpm] = useState<BPM>(120);
  const [automation, setAutomation] = useState<AutomationType>("Fully Automatic");
  const [plantType, setPlantType] = useState<string>("Packaged Bottled Water");
  const [services, setServices] = useState<string[]>(["Plant Design & Setup"]);
  const [projectTimeline, setProjectTimeline] = useState<string>("3-6 months");
  const [budget, setBudget] = useState<string>("100-150 Lakhs");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("Kerala");
  const [message, setMessage] = useState<string>("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const liveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // announce step for screen readers
    if (liveRef.current) {
      liveRef.current.textContent = `Step ${step} of 3`;
    }
  }, [step]);

  function toggleService(s: string) {
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  function validateStep(): boolean {
    if (step === 1) {
      return !!bpm && !!automation && !!plantType;
    }
    if (step === 2) {
      return services.length > 0;
    }
    if (step === 3) {
      // basic contact validation
      const phoneClean = phone.replace(/\s+/g, "");
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      return name.trim().length >= 2 && emailOk && phoneClean.length >= 8 && location.trim().length > 1;
    }
    return false;
  }

  const router = useRouter();

  async function handleSubmit() {
    if (!validateStep()) {
      alert("Please complete required fields before submitting.");
      return;
    }

    setSubmitting(true);

    const payload = {
      bpm,
      automation,
      plantType,
      services,
      projectTimeline,
      budget,
      name,
      email,
      phone,
      location,
      message,
      submittedAt: new Date().toISOString(),
    };

    try {
      // Save to backend
      await fetch("/api/quotation", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      // WhatsApp message
      const waMessage =
        ` *Quotation Request - Essar Enterprises*\n\n` +
        ` Name: ${name}\n` +
        ` Phone: ${phone}\n` +
        ` Email: ${email}\n` +
        ` Location: ${location}\n\n` +
        ` Plant Type: ${plantType}\n` +
        ` Automation: ${automation}\n` +
        ` BPM: ${bpm}\n` +
        ` Services: ${services.join(", ")}\n` +
        ` Timeline: ${projectTimeline}\n` +
        ` Budget: ${budget}\n\n` +
        ` Message: ${message || "—"}`;

        setTimeout(() => {
          router.push(`/quotation/result?bpm=${bpm}&type=${automation}`);
        }, 2000);

      window.open(
        `https://wa.me/918884677773?text=${encodeURIComponent(waMessage)}`,
        "_blank",
        "noopener,noreferrer"
      );

      setSuccess(true);

    } catch (err) {
      console.error(err);
      alert("Failed to submit. Try again later.");
    } finally {
      setSubmitting(false);
    }
  }


  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 md:py-28">
      {/* Card */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background:
            "linear-linear(180deg, rgba(6,11,23,0.75) 0%, rgba(6,11,23,0.6) 60%)",
          border: "1px solid rgba(59,130,246,0.12)",
        }}
      >
        {/* Top-linear accent */}
        <div className="absolute -top-28 -left-20 w-96 h-96 bg-linear-to-br from-blue-600/20 to-cyan-400/10 blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">


            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Quotation Wizard — Water Plant Configuration
              </h1>
              <p className="text-sm text-slate-300 mt-1">
                Corporate — Black & Blue theme. Complete project estimates & consultation.
              </p>
            </div>
            <div className="ml-auto text-sm text-slate-400" aria-hidden>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <CheckCircle className="w-4 h-4 text-green-400" /> Trusted — 20+ years
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6" aria-hidden>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all`}
                style={{
                  width: `${(step / 3) * 100}%`,
                  background: "linear-linear(90deg,#3b82f6,#06b6d4)",
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>Step {step} of 3</span>
              <span>{step === 1 ? "Capacity" : step === 2 ? "Services" : "Contact"}</span>
            </div>
          </div>

          {/* Step content */}
          <div aria-live="polite" ref={liveRef} className="sr-only" />

          <div className="space-y-6">
            {/* Step 1 */}
            {step === 1 && (
              <section aria-labelledby="step-1" className="grid grid-cols-1 gap-6">
                <h2 id="step-1" className="text-lg font-semibold text-white">
                  1. Capacity & Plant Type
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Select BPM</label>
                    <select
                      aria-label="Select bottles per minute"
                      value={bpm}
                      onChange={(e) => setBpm(Number(e.target.value) as BPM)}
                      className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white"
                    >
                      {BPM_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Automation</label>
                    <div className="flex gap-2">
                      {(["Semi Automatic", "Fully Automatic"] as AutomationType[]).map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setAutomation(opt)}
                          type="button"
                          className={`flex-1 py-3 rounded-xl text-sm font-medium transition ${automation === opt
                              ? "bg-linear-to-br from-blue-600 to-cyan-400 text-black shadow-lg"
                              : "bg-white/3 text-white hover:bg-white/6"
                            }`}
                          aria-pressed={automation === opt}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    {/* Info Section */}
                  </div>

                </div>
                {automation === "Fully Automatic" && (
                  <div className="mt-3 p-4 w-full rounded-xl bg-blue-600/10 border border-blue-500/20">
                    <p className="text-xs text-blue-300 leading-relaxed">
                      ✔ End-to-End Automated<br />
                      ✔ Reduced Labor Cost<br />
                      ✔ High Efficiency & Consistency<br />
                      ✔ Best for Large Production (60 BPM+)
                    </p>
                  </div>
                )}

                {automation === "Semi Automatic" && (
                  <div className="mt-3 p-4 rounded-xl bg-cyan-600/10 border border-cyan-500/20">
                    <p className="text-xs text-cyan-300 leading-relaxed">
                      ✔ Budget Friendly Setup<br />
                      ✔ Partial Manual Handling<br />
                      ✔ Flexible Operations<br />
                      ✔ Suitable for Medium Production (40 BPM+)
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Plant Type</label>
                  <input
                    value={plantType}
                    onChange={(e) => setPlantType(e.target.value)}
                    className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white"
                    aria-label="Plant type"
                  />
                </div>
              </section>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <section aria-labelledby="step-2" className="grid grid-cols-1 gap-6">
                <h2 id="step-2" className="text-lg font-semibold text-white">
                  2. Services & Timeline
                </h2>

                <div>
                  <p className="text-sm text-slate-300 mb-3">Choose the services you need</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {SERVICE_OPTIONS.map((s) => {
                      const active = services.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`flex items-center gap-3 p-4 rounded-xl text-left transition ${active ? "bg-linear-to-br from-blue-600 to-cyan-400 text-black shadow-lg" : "bg-white/3 text-white hover:bg-white/6"
                            }`}
                          aria-pressed={active}
                        >
                          <span className={`w-3 h-3 rounded-full ${active ? "bg-black" : "bg-white/50"}`} />
                          <div>
                            <div className="font-medium">{s}</div>
                            <div className="text-xs text-slate-300">Professional assistance & turnkey delivery</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Project Timeline</label>
                    <select
                      value={projectTimeline}
                      onChange={(e) => setProjectTimeline(e.target.value)}
                      className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white"
                    >
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>6-9 months</option>
                      <option>9+ months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Estimated Budget</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white"
                    >
                      <option>50–75 Lakhs</option>
                      <option>75–100 Lakhs</option>
                      <option>100–150 Lakhs</option>
                      <option>150–200 Lakhs</option>
                      <option>200+ Lakhs</option>
                    </select>
                  </div>
                </div>
              </section>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <section aria-labelledby="step-3" className="grid grid-cols-1 gap-6">
                <h2 id="step-3" className="text-lg font-semibold text-white">
                  3. Contact & Submission
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Phone</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">Location (City / State)</label>
                    <input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white"
                      placeholder="Kozhikode, Kerala"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Message / Additional Details (optional)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl p-3 bg-white/2 border border-white/10 focus:border-blue-500 outline-none text-white min-h-[100px] resize-vertical"
                    placeholder="Tell us more about your project needs..."
                  />
                </div>
              </section>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 pt-6 border-t border-white/6 flex items-center gap-3 justify-between">
            <div>
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-white hover:bg-white/6"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {step < 3 ? (
                <button
                  onClick={() => {
                    if (validateStep()) setStep((s) => s + 1);
                    else alert("Please complete required fields in this step.");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-br from-blue-600 to-cyan-400 text-black font-semibold shadow-lg hover:scale-[1.02] transition"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold shadow-lg transition ${submitting ? "opacity-60 cursor-not-allowed bg-slate-700 text-white" : "bg-linear-to-br from-blue-600 to-cyan-400 text-black"
                    }`}
                >
                  {submitting ? "Submitting..." : "Submit & Open WhatsApp"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* subtle footer note */}
        <div className="p-4 text-center text-xs text-slate-400">
          By submitting you agree to receive communications from Essar Enterprises. We respect your privacy.
        </div>
      </div>
    </div>
  );
}
