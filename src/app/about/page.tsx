import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { MissionSection } from "@/components/sections/MissionSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About & Contact | Udyam Tatva",
  description:
    "Udyam Tatva is the closed, curated infrastructure connecting founders, investors, and enablers. Get in touch.",
};

export default function AboutPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <MissionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
