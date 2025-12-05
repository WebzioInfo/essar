"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  onClose: () => void;
  bpm: string;
  automation: string;
};

export default function QuotationPopup({ onClose, bpm, automation }: Props) {
  const router = useRouter();
  const [budget, setBudget] = useState("");

  const handleProceed = () => {
    if (!budget) return alert("Please enter your budget");

    router.push(
      `/quotation/result?bpm=${bpm}&type=${automation}`
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-2xl w-[90%] max-w-md text-black"
      >
        <h2 className="text-2xl font-bold mb-4">
          Quick Question Before You Proceed
        </h2>

        <p className="text-gray-600 mb-4">
          What is your approximate project budget?
        </p>

        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Example: 150 Lakhs"
          className="w-full p-3 border rounded-xl mb-6"
        />

        <button
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold"
          onClick={handleProceed}
        >
          Get Basic Quotation
        </button>

        <button
          className="mt-4 w-full py-2 text-gray-600 underline"
          onClick={onClose}
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
}
