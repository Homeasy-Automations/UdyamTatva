"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatBlock } from "@/components/ui/StatBlock";
import type { HeroStat } from "@/types";
import Link from "next/link";

interface RoleHeroProps {
  badgeLabel: string;
  badgeVariant?: "dark" | "blue" | "gold" | "white";
  title: ReactNode;
  subtitle: string;
  stats: HeroStat[];
  primaryCtaLabel: string;
  primaryCtahref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref?: string;
}

export function RoleHero({
  badgeLabel,
  badgeVariant = "dark",
  title,
  subtitle,
  stats,
  primaryCtaLabel,
  primaryCtahref,
  secondaryCtaLabel,
  secondaryCtaHref = "#",
}: RoleHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const reveals =
        sectionRef.current?.querySelectorAll<HTMLElement>(".reveal");
      reveals?.forEach((el) => el.classList.add("active"));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface pt-24"
    >
      {/* Decorative floating blocks */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-secondary-container opacity-80 rotate-12 hidden md:block" />
      <div className="absolute bottom-24 right-32 w-16 h-16 border-4 border-primary opacity-40 -rotate-6 hidden md:block" />
      <div className="absolute top-56 right-48 w-8 h-8 bg-primary opacity-25 rotate-45 hidden md:block" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 py-16 w-full">
        <div className="reveal mb-6">
          <Badge variant={badgeVariant}>{badgeLabel}</Badge>
        </div>

        <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-on-primary-fixed font-headline max-w-4xl">
          {title}
        </h1>

        <p className="reveal reveal-delay-2 text-xl md:text-2xl font-medium text-on-surface-variant mb-10 max-w-xl font-body">
          {subtitle}
        </p>

        <div className="reveal reveal-delay-3 flex flex-wrap gap-10 mb-12">
          {stats.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="reveal reveal-delay-4 flex flex-wrap gap-4">
          <Link href={primaryCtahref}>
            <Button variant="primary" size="lg" shadow>
              {primaryCtaLabel}
            </Button>
          </Link>
          <Link href={secondaryCtaHref}>
            <Button variant="outline" size="lg">
              {secondaryCtaLabel}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
