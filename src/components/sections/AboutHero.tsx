"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";
import { ABOUT_STATS } from "@/lib/data";

export function AboutHero() {
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
      className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden bg-surface"
    >
      <div className="absolute top-24 right-16 w-20 h-20 bg-secondary-container opacity-70 rotate-12 hidden md:block" />
      <div className="absolute bottom-10 left-8 w-14 h-14 border-4 border-primary opacity-30 -rotate-6 hidden md:block" />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="reveal mb-6">
          <Badge variant="dark">Who We Are</Badge>
        </div>

        <h1 className="reveal reveal-delay-1 text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.88] mb-8 text-on-primary-fixed font-headline max-w-4xl">
          BUILT FOR
          <br />
          THE <span className="text-primary">BOLD.</span>
        </h1>

        <p className="reveal reveal-delay-2 text-xl md:text-2xl font-medium text-on-surface-variant max-w-2xl mb-12 font-body">
          Udyam Tatva exists because most founders don&apos;t fail from a bad idea
          — they fail from a bad map. We built the infrastructure that connects
          founders, mentors, and capital through one closed, curated system.
        </p>

        <div className="reveal reveal-delay-3 flex flex-wrap gap-10">
          {ABOUT_STATS.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </header>
  );
}
