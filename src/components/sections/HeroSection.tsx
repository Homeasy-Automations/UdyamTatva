"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatBlock } from "@/components/ui/StatBlock";
import { HERO_STATS } from "@/lib/data";

export function HeroSection() {
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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface/95 via-surface/75 to-primary/10" />
      </div>

      {/* Decorative floating blocks */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-secondary-container opacity-80 rotate-12 z-10 hidden md:block" />
      <div className="absolute bottom-24 right-32 w-16 h-16 border-4 border-primary opacity-40 -rotate-6 z-10 hidden md:block" />
      <div className="absolute top-56 right-48 w-8 h-8 bg-primary opacity-25 rotate-45 z-10 hidden md:block" />
      <div className="absolute bottom-40 left-8 w-12 h-12 bg-on-primary-fixed opacity-10 rotate-12 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 pt-28 pb-20 w-full">
        {/* Badge */}
        <div className="reveal mb-6">
          <Badge variant="dark">⚡ Version 1.0 Live</Badge>
        </div>

        {/* Headline */}
        <h1 className="reveal reveal-delay-1 text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.88] mb-8 text-on-primary-fixed font-headline max-w-5xl">
          From Idea
          <br />
          To{" "}
          <span className="text-primary">Exit.</span>
        </h1>

        {/* Sub-headline */}
        <p className="reveal reveal-delay-2 text-xl md:text-2xl font-medium text-on-surface-variant mb-10 max-w-xl font-body">
          From idea to execution with the ultimate founder roadmap. No fluff,
          just leverage.
        </p>

        {/* Stats Row */}
        <div className="reveal reveal-delay-3 flex flex-wrap gap-10 mb-12">
          {HERO_STATS.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-4 flex flex-wrap gap-4">
          <Button variant="primary" size="lg" shadow>
            Claim Your Roadmap
          </Button>
        </div>
      </div>
    </header>
  );
}
