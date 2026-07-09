"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { WAITLIST_STATS } from "@/lib/data";

type Role = "founder" | "investor";

const REVENUE_RANGES = [
  "Pre-revenue",
  "₹0 – ₹50L",
  "₹50L – ₹2Cr",
  "₹2Cr – ₹10Cr",
  "₹10Cr – ₹50Cr",
  "₹50Cr+",
];

const STAGE_OPTIONS = [
  "Idea / MVP",
  "Early Revenue",
  "Growth",
  "Profitable",
  "Scaling",
];

const SECTORS = [
  "D2C",
  "SaaS",
  "Fintech",
  "Agritech",
  "Manufacturing",
  "Healthtech",
  "Consumer",
  "Other",
];

const inputClasses =
  "w-full border-4 border-on-background px-4 py-3 font-body text-on-surface focus:outline-none focus:border-primary bg-white";

export function WaitlistSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [role, setRole] = useState<Role>("founder");
  const [sectors, setSectors] = useState<string[]>([]);

  const toggleSector = (sector: string) => {
    setSectors((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-on-primary-fixed text-white pt-32 pb-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative blocks */}
      <div className="absolute top-40 left-8 w-16 h-16 bg-secondary-container opacity-20 rotate-12 hidden lg:block" />
      <div className="absolute bottom-24 left-24 w-24 h-24 border-4 border-primary opacity-20 -rotate-6 hidden lg:block" />

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* ── Left: Pitch + Stats ── */}
        <div>
          <div className="reveal mb-6">
            <Badge variant="gold">Early Access · Cohort 7 Onboarding</Badge>
          </div>

          <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 font-headline">
            WHERE BUILDERS MEET
            <br />
            THE RIGHT <span className="text-secondary-container">CAPITAL.</span>
          </h1>

          <p className="reveal reveal-delay-2 text-lg md:text-xl font-medium text-surface-variant mb-4 max-w-lg font-body">
            <span className="text-secondary-container font-black">₹18M+</span>{" "}
            raised on the platform ·{" "}
            <span className="text-secondary-container font-black">180+</span>{" "}
            vetted investors · Curated, revenue-first deal flow.
          </p>

          <p className="reveal reveal-delay-2 text-base md:text-lg text-surface-variant mb-12 max-w-lg font-body">
            Udyam Tatva is the deal infrastructure where revenue-first founders
            meet thesis-aligned investors — no pitch-deck dreamers, no cold
            outbound. Request early access below.
          </p>

          <div className="reveal reveal-delay-3 grid grid-cols-2 gap-6">
            {WAITLIST_STATS.map((stat) => (
              <div key={stat.label} className="border-l-4 border-primary pl-4">
                <div className="text-3xl md:text-4xl font-black text-white font-headline">
                  {stat.value}
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-secondary-container mt-1 font-body">
                  {stat.label}
                </div>
                <div className="text-xs text-surface-variant mt-1 font-body">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Form Card ── */}
        <div className="reveal reveal-delay-1 bg-white text-on-surface border-4 border-secondary-container shadow-brutal-gold p-8 md:p-10">
          <div className="mb-2">
            <Badge variant="dark">Platform Access</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-4 mb-3 leading-none font-headline">
            Request Your <span className="text-primary">Access.</span>
          </h2>
          <p className="text-on-surface-variant text-sm mb-8 font-body">
            Tell us who you are. Udyam Tatva opens to founders and investors in
            cohorts — the waitlist decides who gets onboarded first.
          </p>

          <form className="space-y-6">
            {/* Role Toggle */}
            <div className="grid grid-cols-2 gap-0">
              <button
                type="button"
                onClick={() => setRole("founder")}
                className={cn(
                  "border-4 border-on-background px-4 py-3 text-left transition-none",
                  role === "founder"
                    ? "bg-primary text-white"
                    : "bg-white text-on-surface"
                )}
              >
                <div className="font-black uppercase text-sm font-headline">
                  I&apos;m a Founder
                </div>
                <div
                  className={cn(
                    "text-[10px] uppercase tracking-widest font-bold font-body",
                    role === "founder" ? "text-blue-100" : "text-on-surface-variant"
                  )}
                >
                  Building &amp; Raising
                </div>
              </button>
              <button
                type="button"
                onClick={() => setRole("investor")}
                className={cn(
                  "border-4 border-l-0 border-on-background px-4 py-3 text-left transition-none",
                  role === "investor"
                    ? "bg-primary text-white"
                    : "bg-white text-on-surface"
                )}
              >
                <div className="font-black uppercase text-sm font-headline">
                  I&apos;m an Investor
                </div>
                <div
                  className={cn(
                    "text-[10px] uppercase tracking-widest font-bold font-body",
                    role === "investor" ? "text-blue-100" : "text-on-surface-variant"
                  )}
                >
                  Backing &amp; Deploying
                </div>
              </button>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className={inputClasses}
              />
            </div>

            {/* Email + Mobile */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@startup.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                  Mobile *
                </label>
                <div className="flex">
                  <span className="flex items-center px-4 border-4 border-r-0 border-on-background bg-surface-container-low font-black font-headline">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="00000 00000"
                    className="w-full border-4 border-on-background px-4 py-3 font-body focus:outline-none focus:border-primary bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Startup Name + Website */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                  {role === "founder" ? "Startup Name *" : "Firm Name *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                  Website
                </label>
                <input
                  type="text"
                  placeholder="yourstartup.com"
                  className={inputClasses}
                />
              </div>
            </div>

            {role === "founder" && (
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                    Annual Revenue *
                  </label>
                  <select required className={inputClasses}>
                    <option value="">Select range</option>
                    {REVENUE_RANGES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                    Stage *
                  </label>
                  <select required className={inputClasses}>
                    <option value="">Select stage</option>
                    {STAGE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Sector chips */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-3 font-headline">
                Sector
              </label>
              <div className="flex flex-wrap gap-2">
                {SECTORS.map((sector) => (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => toggleSector(sector)}
                    className={cn(
                      "border-4 px-4 py-2 text-xs font-black uppercase tracking-widest transition-none",
                      sectors.includes(sector)
                        ? "bg-secondary-container border-secondary-container text-on-secondary-container"
                        : "bg-white border-on-background text-on-surface"
                    )}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                {role === "founder" ? "What Are You Building?" : "What's Your Thesis?"}
              </label>
              <textarea
                rows={3}
                placeholder={
                  role === "founder"
                    ? "One or two lines on the business, traction, and what you're raising."
                    : "Stage, sector, ticket size — what you're looking to deploy into."
                }
                className={inputClasses}
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              shadow
              className="w-full justify-center"
            >
              Request Early Access →
            </Button>

            <p className="text-xs text-on-surface-variant font-body">
              No fee to join the waitlist. By requesting access you agree to
              Udyam Tatva&apos;s Terms &amp; Privacy Policy.
            </p>

            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant border-t-2 border-outline-variant pt-4 font-body">
              2,400+ founders &amp; investors already on the early-access list.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
