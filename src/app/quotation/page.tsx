"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuotationForm() {
  const router = useRouter();

  const [bpm, setBpm] = useState<40 | 60 | 90 | 120 | 180>(120);
  const [automationType, setAutomationType] = useState<
    "Semi Automatic" | "Fully Automatic"
  >("Semi Automatic");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/quotation/result?bpm=${bpm}&type=${automationType}`);
  };

  return (
    <main className="min-h-screen text-black flex justify-center items-center p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white shadow-lg p-8 rounded-xl space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">
          Get Your Project Quotation
        </h1>

        {/* BPM */}
        <div>
          <label className="font-bold block mb-2">Select BPM Capacity</label>
          <select
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value) as any)}
            className="w-full border p-3 rounded-lg"
          >
            <option value={40}>40 BPM</option>
            <option value={60}>60 BPM</option>
            <option value={90}>90 BPM</option>
            <option value={120}>120 BPM</option>
            <option value={180}>180 BPM</option>
          </select>
        </div>

        {/* Automation */}
        <div>
          <label className="font-bold block mb-2">Automation Type</label>
          <select
            value={automationType}
            onChange={(e) => setAutomationType(e.target.value as any)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="Semi Automatic">Semi Automatic</option>
            <option value="Fully Automatic">Fully Automatic</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700">
          Generate Quotation
        </button>
      </form>
    </main>
  );
}
