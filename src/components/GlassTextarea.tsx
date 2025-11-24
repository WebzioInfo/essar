"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface GlassTextareaProps {
  label: string;
  placeholder?: string;
  rows?: number;
  register?: UseFormRegisterReturn;
}

export default function GlassTextarea({
  label,
  placeholder = "",
  rows = 4,
  register,
}: GlassTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-textSecondary">{label}</label>

      <textarea
        {...register}
        rows={rows}
        placeholder={placeholder}
        className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                   text-white outline-none resize-none focus:border-primary transition"
      />
    </div>
  );
}
