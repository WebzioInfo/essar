import type { Metadata } from "next";
import "./globals.css";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import AosInitializer from "./components/AosInitializer";

export const metadata: Metadata = {
  title: "Essar Enterprises - Packaged Drinking Water Plant Solutions",
  description:
    "Since 2004, Essar Enterprises has been designing complete packaged drinking water plants across Kerala and Karnataka. Expert plant design, licensing, training, and maintenance.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black  scroll-smooth">

        {/* AOS Animations */}
        <AosInitializer />

        {/* Global Navigation */}
        <header className="text-white">
          <Navigation />
        </header>

        {/* Page Content */}
        <main className="min-h-screen w-full">{children}</main>

        {/* Footer */}
        <footer className="">
          <Footer />
        </footer>

      </body>
    </html>
  );
}
