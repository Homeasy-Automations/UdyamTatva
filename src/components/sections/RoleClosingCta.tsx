"use client";

import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

interface RoleClosingCtaProps {
  badgeLabel: string;
  title: ReactNode;
  subtext: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  secondaryCtahref?: string;
  footnote?: string;
}

export function RoleClosingCta({
  badgeLabel,
  title,
  subtext,
  primaryCtaLabel,
  secondaryCtaLabel,
  footnote,
  secondaryCtahref,
}: RoleClosingCtaProps) {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 md:px-10 bg-on-primary-fixed relative overflow-hidden"
    >
      <div className="absolute top-16 left-8 w-20 h-20 bg-secondary-container rotate-12 opacity-20 hidden md:block" />
      <div className="absolute bottom-16 right-12 w-32 h-32 border-8 border-primary -rotate-6 opacity-20 hidden md:block" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="reveal mb-8">
          <Badge variant="gold">{badgeLabel}</Badge>
        </div>

        <h2 className="reveal reveal-delay-1 text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-white font-headline">
          {title}
        </h2>

        <p className="reveal reveal-delay-2 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto text-surface-variant font-body">
          {subtext}
        </p>

        <div className="reveal reveal-delay-3 flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" shadow>
            {primaryCtaLabel}
          </Button>
          {secondaryCtaLabel && (
            <Link href="#">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </Button>
            </Link>
          )}
        </div>

        {footnote && (
          <p className="reveal reveal-delay-4 mt-10 text-xs uppercase tracking-widest text-surface-variant opacity-60 font-bold font-body">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
