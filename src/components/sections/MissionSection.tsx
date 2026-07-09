"use client";

import { Badge } from "@/components/ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const VALUES = [
  {
    icon: "bolt",
    title: "Speed",
    description:
      "48 hours from application to your first Blueprint. No six-week onboarding calls.",
  },
  {
    icon: "verified",
    title: "Access",
    description:
      "Every founder, investor, and enabler in the network is reviewed — access is earned, not bought.",
  },
  {
    icon: "trending_up",
    title: "Proof",
    description:
      "94% survival rate, ₹18M+ raised. We publish the numbers because we stand behind them.",
  },
];

export function MissionSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-surface overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-0 items-stretch">
        {/* Mission panel */}
        <div className="bg-on-primary-fixed text-white p-12 md:p-16 flex flex-col justify-center relative">
          <div className="reveal mb-6">
            <Badge variant="blue">Our Mission</Badge>
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none font-headline">
            ZERO GUESSWORK.
            <br />
            <span className="text-secondary-container">ALL LEVERAGE.</span>
          </h2>
          <p className="reveal reveal-delay-2 text-surface-variant text-lg font-body">
            We run a closed network — every founder mapped by the Startup GPS,
            every investor thesis-matched, every enabler tracked on one
            dashboard. No noise. No cold outbound. Just the right room, at the
            right time.
          </p>
        </div>

        {/* Values */}
        <div className="border-4 border-on-background border-l-0 md:border-l-0 flex flex-col">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className={cn(
                "reveal flex-1 p-8 md:p-10 flex gap-6 items-start bg-white",
                i === 1 && "reveal-delay-1",
                i === 2 && "reveal-delay-2",
                i !== VALUES.length - 1 && "border-b-4 border-on-background"
              )}
            >
              <span className="material-symbols-outlined text-4xl text-primary shrink-0">
                {v.icon}
              </span>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight font-headline mb-2">
                  {v.title}
                </h3>
                <p className="text-on-surface-variant text-sm font-body">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
