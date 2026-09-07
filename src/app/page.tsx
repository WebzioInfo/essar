import type { Metadata } from "next";
import HomePageClient from "./components/HomePageClient";

export const metadata: Metadata = {
  title: "Essar Enterprises | Elite Packaged Drinking Water Consultants",
  description:
    "Essar Enterprises helps investors move from plan to plant with packaged drinking water plant planning, BIS and FSSAI licensing, laboratory setup, training, and market launch.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomePageClient />;
}
