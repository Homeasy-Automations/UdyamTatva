import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { MissionSection } from "@/components/sections/MissionSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/AboutContactSection";

export const metadata: Metadata = {
  title: "About & Team | Udyam Tatva",
  description:
    "Meet the founder and core team behind Udyam Tatva — building closed, curated startup infrastructure for India's high-conviction founders.",
};

export default function AboutPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

