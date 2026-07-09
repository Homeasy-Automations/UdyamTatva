import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoleHero } from "@/components/sections/RoleHero";
import { RoleStatsBand } from "@/components/sections/RoleStatsBand";
import { RoleSteps } from "@/components/sections/RoleSteps";
import { RoleClosingCta } from "@/components/sections/RoleClosingCta";
import { FOUNDER_STATS, FOUNDER_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "For Founders | Udyam Tatva",
  description:
    "Get in front of the right investors. Apply to a cohort, get mapped by the Startup GPS, and pitch a room that's already warm.",
};

export default function FoundersPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <RoleHero
        badgeLabel="For Founders"
        badgeVariant="blue"
        title={
          <>
            GET IN FRONT OF
            <br />
            THE RIGHT <span className="text-primary">INVESTORS.</span>
          </>
        }
        subtitle="Express your interest. If you're a fit, the Startup GPS maps you straight to thesis-aligned investors — no cold emails, no wasted decks."
        stats={FOUNDER_STATS}
        primaryCtaLabel="Apply for Cohort"
        secondaryCtaLabel="See the Blueprint"
      />

      <RoleStatsBand
        stats={FOUNDER_STATS}
        note="94% of founders who complete a cohort are still building 12 months later. That's the Blueprint at work."
      />

      <RoleSteps
        eyebrow="How It Works"
        eyebrowVariant="gold"
        title={
          <>
            3 Steps.
            <br />
            Zero <span className="text-primary">Cold Emails.</span>
          </>
        }
        steps={FOUNDER_STEPS}
        panelIcon="rocket_launch"
        panelValue="0"
        panelLabel="Cold Outbound Required"
        panelVariant="blue"
        ctaLabel="Start Your Application"
      />

      <RoleClosingCta
        badgeLabel="Cohort 7 — Open"
        title={
          <>
            WE SELECT. WE MATCH.
            <br />
            YOU <span className="text-secondary-container">PITCH.</span>
          </>
        }
        subtext="Selected founders join a curated cohort. We write your deal note, map you to the right investors, and coordinate every conversation."
        primaryCtaLabel="Apply for Cohort"
        secondaryCtaLabel="Talk to Us"
        footnote="Every application is reviewed. Not all are accepted. That's by design."
      />

      <Footer />
    </main>
  );
}
