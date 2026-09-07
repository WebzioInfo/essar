import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-background items-center justify-center p-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-2xl w-full flex flex-col items-center">
        <Image 
          src="/logos/logo-icon-light.png" 
          alt="Essar Enterprises Logo" 
          width={180} 
          height={60} 
          className="h-12 w-auto object-contain opacity-80 mb-12"
        />
        
        <h1 className="heading-hero text-white mb-6">404</h1>
        
        <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        
        <h2 className="heading-sm mb-4">Signal Lost.</h2>
        <p className="body-lg text-surface/70 mb-12">
          The operation you are looking for has been moved or does not exist in our current production framework.
        </p>
        
        <Link href="/" className="inline-flex px-10 py-5 bg-background text-primary font-medium rounded-sm hover:bg-surface transition-colors tracking-widest text-sm uppercase items-center gap-3">
          <span>←</span> Return to Base
        </Link>
      </div>
    </div>
  );
}
