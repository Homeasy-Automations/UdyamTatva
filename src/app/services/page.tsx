import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoleHero } from "@/components/sections/RoleHero";
import { RoleStatsBand } from "@/components/sections/RoleStatsBand";
import { ServicesPillars } from "@/components/sections/ServicesPillars";
import { RoleClosingCta } from "@/components/sections/RoleClosingCta";
import { SERVICE_STATS, SERVICE_PILLARS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Udyam Tatva",
  description:
    "Seven pillars, one ecosystem — onboarding, mentorship, pitch support, product development, acceleration, market access, and funding, all mapped by the Startup GPS.",
};

export default function ServicesPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <RoleHero
        badgeLabel="Our Services"
        badgeVariant="gold"
        title={
          <>
            EVERYTHING YOU NEED
            <br />
            TO <span className="text-primary">SCALE.</span>
          </>
        }
        subtitle="From first application to term sheet — seven pillars, zero gaps. The Startup GPS maps you through every one of them."
        stats={SERVICE_STATS}
        primaryCtaLabel="Start Your Journey"
        secondaryCtaLabel="See the Blueprint"
      />

      <RoleStatsBand
        stats={SERVICE_STATS}
        note="Every pillar is included in the same cohort — no à la carte pricing, no upsells mid-program."
      />

      <ServicesPillars pillars={SERVICE_PILLARS} />

      <RoleClosingCta
        badgeLabel="Cohort 7 — Open"
        title={
          <>
            SEVEN PILLARS.
            <br />
            ONE <span className="text-secondary-container">APPLICATION.</span>
          </>
        }
        subtext="Apply once. Get matched to every pillar you need — mentorship, product, market access, and funding — on the same track."
        primaryCtaLabel="Apply for Cohort"
        secondaryCtaLabel="Talk to Us"
        footnote="No upfront costs. Application takes 5 minutes. Response within 48 hours."
      />

      <Footer />
    </main>
  );
}
