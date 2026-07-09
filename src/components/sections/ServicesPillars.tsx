"use client";

import { Badge } from "@/components/ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import type { ServicePillar, CardVariant } from "@/types";

const cardVariantClasses: Record<CardVariant, string> = {
  dark: "bg-on-primary-fixed text-white",
  blue: "bg-primary text-white",
  gold: "bg-secondary-container text-on-primary-fixed",
  light: "bg-white text-on-surface",
};

const iconVariantClasses: Record<CardVariant, string> = {
  dark: "text-secondary-container",
  blue: "text-secondary-container",
  gold: "text-on-primary-fixed",
  light: "text-primary",
};

const proofBadgeVariant: Record<CardVariant, "white" | "dark"> = {
  dark: "white",
  blue: "white",
  gold: "white",
  light: "dark",
};

interface ServicesPillarsProps {
  pillars: ServicePillar[];
}

export function ServicesPillars({ pillars }: ServicesPillarsProps) {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 px-6 md:px-10 bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-16">
          <h2 className="reveal text-6xl md:text-7xl font-black uppercase tracking-tighter text-on-primary-fixed font-headline leading-[0.9]">
            THE 7 <span className="text-primary">PILLARS</span>
          </h2>
          <p className="reveal reveal-delay-1 text-on-surface-variant font-medium uppercase tracking-widest text-xs font-body">
            One ecosystem. Zero gaps. Every stage covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className={cn(
                "reveal pop-card border-4 border-on-background p-8 flex flex-col min-h-[300px] relative overflow-hidden",
                cardVariantClasses[pillar.variant],
                i % 3 === 1 && "reveal-delay-1",
                i % 3 === 2 && "reveal-delay-2"
              )}
            >
              <span className="absolute -top-6 -right-2 text-8xl font-black font-headline opacity-10 leading-none pointer-events-none">
                {pillar.number}
              </span>

              <span
                className={cn(
                  "material-symbols-outlined text-5xl mb-6 relative z-10",
                  iconVariantClasses[pillar.variant]
                )}
              >
                {pillar.icon}
              </span>

              <h3 className="text-2xl font-black uppercase mb-3 leading-none font-headline relative z-10">
                {pillar.title}
              </h3>

              <p className="text-sm font-body mb-6 opacity-80 relative z-10 flex-1">
                {pillar.description}
              </p>

              <Badge
                variant={proofBadgeVariant[pillar.variant]}
                className="self-start relative z-10"
              >
                {pillar.proof}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
