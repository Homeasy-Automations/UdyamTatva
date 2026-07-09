import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoleHero } from "@/components/sections/RoleHero";
import { RoleStatsBand } from "@/components/sections/RoleStatsBand";
import { RoleSteps } from "@/components/sections/RoleSteps";
import { RoleClosingCta } from "@/components/sections/RoleClosingCta";
import { ENABLER_STATS, ENABLER_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "For Enablers | Udyam Tatva",
  description:
    "Your cohort's fundraising infrastructure. Track, prepare, and raise — Udyam Tatva runs the pipeline so you stay focused on program delivery.",
};

export default function EnablersPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <RoleHero
        badgeLabel="For Enablers"
        badgeVariant="gold"
        title={
          <>
            YOUR COHORT&apos;S
            <br />
            <span className="text-primary">FUNDRAISING</span> INFRASTRUCTURE.
          </>
        }
        subtitle="Onboard your portfolio founders, track every metric on one dashboard, and let the Startup GPS handle the matching. You stay focused on program delivery."
        stats={ENABLER_STATS}
        primaryCtaLabel="Partner With Us"
        secondaryCtaLabel="Download Partner Kit"
      />

      <RoleStatsBand
        stats={ENABLER_STATS}
        note="50+ accelerators and incubators already run their fundraising pipeline through Udyam Tatva."
      />

      <RoleSteps
        eyebrow="How It Works"
        eyebrowVariant="blue"
        title={
          <>
            3 Steps.
            <br />
            One <span className="text-primary">Dashboard.</span>
          </>
        }
        steps={ENABLER_STEPS}
        panelIcon="dashboard"
        panelValue="1"
        panelLabel="Dashboard For The Whole Cohort"
        panelVariant="gold"
        ctaLabel="Partner With Us"
      />

      <RoleClosingCta
        badgeLabel="Now Onboarding Partners"
        title={
          <>
            BUILD THE <span className="text-secondary-container">PIPELINE.</span>
          </>
        }
        subtext="Nominate your cohort, get outcome reports on who raised and who met investors, and let Udyam Tatva run the infrastructure end to end."
        primaryCtaLabel="Partner With Us"
        secondaryCtaLabel="Talk to Us"
        footnote="Every program is onboarded individually. Fit matters more than size."
      />

      <Footer />
    </main>
  );
}
