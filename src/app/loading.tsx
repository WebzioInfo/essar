import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative flex flex-col items-center justify-center">
        {/* Subtle pulsing logo */}
        <div className="animate-pulse opacity-80 mb-8">
          <Image 
            src="/logos/logo-icon.png" 
            alt="Loading Essar Enterprises" 
            width={120} 
            height={40} 
            className="h-8 w-auto object-contain"
            priority
          />
        </div>
        
        {/* Apple-style minimalist loading bar */}
        <div className="w-48 h-px bg-border overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-primary w-full origin-left animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}} />
      </div>
    </div>
  );
}
