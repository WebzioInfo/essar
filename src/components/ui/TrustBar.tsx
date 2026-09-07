import React from 'react';

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">
          Compliance areas Essar plans around
        </p>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex justify-center">
            {/* BIS Logo Placeholder */}
            <div className="flex items-center text-xl font-bold text-primary">
              <span className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center mr-2">B</span>
              BIS Readiness
            </div>
          </div>
          
          <div className="flex justify-center">
            {/* FSSAI Logo Placeholder */}
            <div className="flex items-center text-xl font-bold text-primary">
              <span className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center mr-2">F</span>
              FSSAI Support
            </div>
          </div>
          
          <div className="flex justify-center">
            {/* ISO Logo Placeholder */}
            <div className="flex items-center text-xl font-bold text-primary">
              <span className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center mr-2">I</span>
              Lab Controls
            </div>
          </div>
          
          <div className="flex justify-center">
            {/* MSME Logo Placeholder */}
            <div className="flex items-center text-xl font-bold text-primary">
              <span className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center mr-2">M</span>
              Audit Prep
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
