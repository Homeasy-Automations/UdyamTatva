"use client";

import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import type { HowItWorksStep } from "@/types";

const stepVariantClasses: Record<HowItWorksStep["variant"], string> = {
  blue: "bg-primary text-white",
  gold: "bg-secondary-container text-on-secondary-container",
  dark: "bg-on-primary-fixed text-white",
};

const panelVariantClasses: Record<"blue" | "gold" | "dark", string> = {
  blue: "bg-primary text-white",
  gold: "bg-secondary-container text-on-primary-fixed",
  dark: "bg-on-primary-fixed text-white",
};

interface RoleStepsProps {
  eyebrow: string;
  eyebrowVariant?: "dark" | "blue" | "gold" | "white";
  title: ReactNode;
  steps: HowItWorksStep[];
  panelIcon: string;
  panelValue: string;
  panelLabel: string;
  panelVariant?: "blue" | "gold" | "dark";
  ctaLabel: string;
}

export function RoleSteps({
  eyebrow,
  eyebrowVariant = "gold",
  title,
  steps,
  panelIcon,
  panelValue,
  panelLabel,
  panelVariant = "blue",
  ctaLabel,
}: RoleStepsProps) {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-surface overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left — Panel */}
          <div
            className={cn(
              "relative min-h-[420px] border-4 border-on-background overflow-hidden flex items-center justify-center p-12",
              panelVariantClasses[panelVariant]
            )}
          >
            <div className="text-center relative z-10">
              <span className="material-symbols-outlined text-7xl mb-6 block opacity-90">
                {panelIcon}
              </span>
              <div className="text-6xl md:text-7xl font-black font-headline mb-3">
                {panelValue}
              </div>
              <div className="text-sm font-black uppercase tracking-widest font-body opacity-80">
                {panelLabel}
              </div>
            </div>
          </div>

          {/* Right — Steps */}
          <div className="bg-surface-container-low p-12 md:p-16 flex flex-col justify-center border-4 border-on-background border-l-0">
            <div className="reveal mb-6">
              <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
            </div>

            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-none font-headline">
              {title}
            </h2>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div
                  key={step.step}
                  className={cn(
                    "reveal flex gap-5 items-start",
                    i === 1 && "reveal-delay-1",
                    i === 2 && "reveal-delay-2"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 flex items-center justify-center font-black text-lg shrink-0 font-headline",
                      stepVariantClasses[step.variant]
                    )}
                  >
                    {step.step}
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight text-lg font-headline">
                      {step.title}
                    </div>
                    <div className="text-on-surface-variant text-sm mt-1 font-body">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-3 mt-10">
              <Button
                variant="primary"
                size="lg"
                shadow
                className="bg-on-primary-fixed hover:bg-primary"
              >
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
