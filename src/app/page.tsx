"use client"
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Mission from '@/app/components/Mission';
import WhyEssar from '@/app/components/WhyEssar';
import Founder from '@/app/components/Founder';
import Contact from '@/app/components/Contact';
import RightMaintenanceNotice from '@/components/RightMaintenanceNotice';
import ModelScene from './components/Scene/Index';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Mission />
      <section id="three-model" className="py-20 min-h-screen bg-black -z-10">
        <ModelScene />
      </section>
      <RightMaintenanceNotice
        title="Scheduled maintenance"
        message="Our website is currently under maintenance. Some pages or details may be incorrect. We apologise for the inconvenience — for urgent help, contact us on WhatsApp."
        whatsappNumber="8884677773"
        whatsappPrefill="Hello, I saw the maintenance notice and need help."
        persistKey="maintenance:2025-11-13-v1"
      />
      <WhyEssar />
      <Founder />
      <Contact />
    </main>
  );
}