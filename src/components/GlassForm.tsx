"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface GlassFormProps {
  label: string;
  type?: "text" | "email" | "tel" | "select";
  placeholder?: string;
  register?: UseFormRegisterReturn;
  options?: { value: string; label: string }[];
  className?: string;
}

export default function GlassForm({
  label,
  type = "text",
  placeholder,
  register,
  options = [],
  className = "",
}: GlassFormProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm text-textSecondary">{label}</label>

      {type === "select" ? (
        <select
          {...register}
          className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                     text-white outline-none focus:border-primary transition"
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-black">
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                     text-white outline-none focus:border-primary transition"
        />
      )}
    </div>
  );
}
