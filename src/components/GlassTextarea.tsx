"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import GlassSurface from "./GlassSurface";

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
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      <label className="text-sm text-textSecondary">{label}</label>

      {/* Glass Surface Wrapper */}
      <GlassSurface
      width={300}
      height={100}
      >
        <textarea
          {...register}
          rows={rows}
          placeholder={placeholder}
          
          className="w-full p-4 bg-transparent text-white outline-none 
                     resize-none placeholder:text-gray-400"
        />
      </GlassSurface>
    </div>
  );
}
