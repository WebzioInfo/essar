import type { Metadata } from "next";
import "./globals.css";
import 'aos/dist/aos.css';



export const metadata: Metadata = {
  title: "Essar Enterprises - Packaged Drinking Water Plant Solutions",
  description: "Since 2004, Essar Enterprises has been designing complete packaged drinking water plants across Kerala and Karnataka. Expert plant design, licensing, training, and maintenance.",
   icons: {
    icon: "/favicon.ico", // points to public/favicon.ico or public path you prefer
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
