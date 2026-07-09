"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import type { HeroStat } from "@/types";

interface RoleStatsBandProps {
  stats: HeroStat[];
  note?: string;
}

export function RoleStatsBand({ stats, note }: RoleStatsBandProps) {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="bg-on-primary-fixed py-16 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "reveal text-center",
                i === 1 && "reveal-delay-1",
                i === 2 && "reveal-delay-2"
              )}
            >
              <div className="text-4xl md:text-5xl font-black text-secondary-container font-headline">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-surface-variant mt-2 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {note && (
          <p className="reveal reveal-delay-3 text-center text-white/70 text-sm md:text-base font-medium mt-10 pt-10 border-t-2 border-white/10 font-body">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
