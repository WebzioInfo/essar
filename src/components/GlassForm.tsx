"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import GlassSurface from "./GlassSurface";

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

      <GlassSurface height={60} width={350} borderRadius={16} backgroundOpacity={0.08}>
        {type === "select" ? (
          <select
            {...register}
            className="w-full p-4 rounded-xl bg-transparent text-white outline-none"
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
            className="w-full p-4 rounded-xl bg-transparent text-white outline-none"
          />
        )}

      </GlassSurface>
    </div>
  );
}
