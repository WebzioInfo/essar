import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="premium-card p-8 h-full flex flex-col">
        <div className="w-14 h-14 rounded-lg bg-blue-50 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="heading-sm text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="body-md flex-grow mb-6">
          {description}
        </p>
        
        <div className="flex items-center text-secondary font-semibold mt-auto">
          Learn more
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </div>
    </Link>
  );
}
