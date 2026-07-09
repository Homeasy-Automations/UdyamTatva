import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WaitlistSection } from "@/components/sections/WaitlistSection";

export const metadata: Metadata = {
  title: "Waitlist | Udyam Tatva",
  description:
    "Request early access to Udyam Tatva. Founders and investors are onboarded in cohorts — the waitlist decides who gets in first.",
};

export default function WaitlistPage() {
  return (
    <main className="bg-on-primary-fixed text-white overflow-x-hidden">
      <Navbar />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
