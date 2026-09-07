"use client";

import React, { useState } from "react";
import { trackCalculatorStep } from "@/lib/analytics";

export default function CalculatorClient() {
  const [step, setStep] = useState(1);
  const [capacity, setCapacity] = useState("2000");
  const [bottleSize, setBottleSize] = useState("1L");
  const [hasLand, setHasLand] = useState("yes");

  const handleNext = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    trackCalculatorStep(nextStep);
  };

  const handlePrev = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    trackCalculatorStep(prevStep);
  };

  return (
    <div className="premium-card p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h2 className="heading-md mb-6">1. What capacity do you need?</h2>
          <p className="text-text-secondary mb-8">Capacity determines machinery size and licensing requirements.</p>

          <div className="space-y-4 mb-8">
            {["1000", "2000", "4000", "6000"].map((val) => (
              <label key={val} className={`block p-4 border rounded-lg cursor-pointer transition-all ${capacity === val ? "border-primary bg-surface ring-1 ring-primary" : "border-border hover:border-slate-300"}`}>
                <input type="radio" name="capacity" value={val} checked={capacity === val} onChange={() => setCapacity(val)} className="sr-only" />
                <div className="font-semibold text-lg text-primary">{val} BPH</div>
                <div className="text-sm text-text-secondary">Bottles Per Hour</div>
              </label>
            ))}
          </div>

          <div className="flex justify-end">
            <button onClick={handleNext} className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">Next Step &rarr;</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h2 className="heading-md mb-6">2. Primary Bottle Size?</h2>
          <div className="space-y-4 mb-8">
            {["500ml", "1L", "2L", "20L Jar"].map((val) => (
              <label key={val} className={`block p-4 border rounded-lg cursor-pointer transition-all ${bottleSize === val ? "border-primary bg-surface ring-1 ring-primary" : "border-border hover:border-slate-300"}`}>
                <input type="radio" name="bottleSize" value={val} checked={bottleSize === val} onChange={() => setBottleSize(val)} className="sr-only" />
                <div className="font-semibold text-lg text-primary">{val}</div>
              </label>
            ))}
          </div>
          <div className="flex justify-between">
            <button onClick={handlePrev} className="px-6 py-3 border border-border text-text-secondary rounded-lg hover:bg-slate-50 transition-colors font-medium">&larr; Back</button>
            <button onClick={handleNext} className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">Next Step &rarr;</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h2 className="heading-md mb-6">3. Do you have land/building ready?</h2>
          <div className="space-y-4 mb-8">
            <label className={`block p-4 border rounded-lg cursor-pointer transition-all ${hasLand === "yes" ? "border-primary bg-surface ring-1 ring-primary" : "border-border hover:border-slate-300"}`}>
              <input type="radio" name="hasLand" value="yes" checked={hasLand === "yes"} onChange={() => setHasLand("yes")} className="sr-only" />
              <div className="font-semibold text-lg text-primary">Yes, building is ready</div>
            </label>
            <label className={`block p-4 border rounded-lg cursor-pointer transition-all ${hasLand === "no" ? "border-primary bg-surface ring-1 ring-primary" : "border-border hover:border-slate-300"}`}>
              <input type="radio" name="hasLand" value="no" checked={hasLand === "no"} onChange={() => setHasLand("no")} className="sr-only" />
              <div className="font-semibold text-lg text-primary">No, looking for land</div>
            </label>
          </div>
          <div className="flex justify-between">
            <button onClick={handlePrev} className="px-6 py-3 border border-border text-text-secondary rounded-lg hover:bg-slate-50 transition-colors font-medium">&larr; Back</button>
            <button onClick={handleNext} className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">Calculate &rarr;</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-in fade-in zoom-in duration-500 text-center py-8">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="heading-md mb-2">Estimate Ready</h2>
          <p className="text-text-secondary mb-8">Your estimate for a {capacity} BPH plant producing {bottleSize} is ready.</p>

          <div className="bg-slate-50 p-6 rounded-lg mb-8 border border-border">
            <p className="font-medium text-foreground mb-4">To view the complete ROI breakdown and machine costing, please enter your details:</p>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
              <input type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
            </div>
          </div>

          <button className="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary-dark shadow-lg transition-all">View Full Report & Download PDF</button>
        </div>
      )}
    </div>
  );
}
