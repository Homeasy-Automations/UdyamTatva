import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoleHero } from "@/components/sections/RoleHero";
import { RoleStatsBand } from "@/components/sections/RoleStatsBand";
import { RoleSteps } from "@/components/sections/RoleSteps";
import { RoleClosingCta } from "@/components/sections/RoleClosingCta";
import { INVESTOR_STATS, INVESTOR_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "For Investors | Udyam Tatva",
  description:
    "Curated deal flow, zero noise. Every founder is GPS-scored and thesis-matched before you see them.",
};

export default function InvestorsPage() {
  return (
    <main className="bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <RoleHero
        badgeLabel="For Investors"
        badgeVariant="dark"
        title={
          <>
            CURATED DEAL FLOW.
            <br />
            ZERO <span className="text-primary">NOISE.</span>
          </>
        }
        subtitle="Set your thesis once. Every founder in the pipeline is scored by the Startup GPS and reviewed against it before a single intro is made."
        stats={INVESTOR_STATS}
        primaryCtaLabel="Request Investor Access"
        secondaryCtaLabel="View a Sample Deal Note"
      />

      <RoleStatsBand
        stats={INVESTOR_STATS}
        note="72% meeting conversion across the network — built on thesis-matching, not spray-and-pray outbound."
      />

      <RoleSteps
        eyebrow="How It Works"
        eyebrowVariant="blue"
        title={
          <>
            3 Steps.
            <br />
            Zero <span className="text-primary">Guesswork.</span>
          </>
        }
        steps={INVESTOR_STEPS}
        panelIcon="query_stats"
        panelValue="Live"
        panelLabel="GPS-Scored Deal Flow"
        panelVariant="dark"
        ctaLabel="Set Your Thesis"
      />

      <RoleClosingCta
        badgeLabel="Access Is Selective"
        title={
          <>
            DEPLOY WITH <span className="text-secondary-container">CONFIDENCE.</span>
          </>
        }
        subtext="No raw decks, no cold outbound. Every deal note is Blueprint-mapped, GPS-scored, and matched to your thesis before it reaches your inbox."
        primaryCtaLabel="Request Investor Access"
        secondaryCtaLabel="Talk to Us"
        footnote="Every founder is reviewed. Not all make the cut. That's the point."
      />

      <Footer />
    </main>
  );
}
