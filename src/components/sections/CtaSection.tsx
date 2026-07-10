"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CtaSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-10 bg-surface relative overflow-hidden"
    >
      {/* Background image (blurred, very faint) */}
      <div
        className="absolute inset-0 z-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200')",
        }}
        aria-hidden="true"
      />

      {/* Decorative blocks */}
      <div className="absolute top-16 left-8 w-20 h-20 bg-secondary-container rotate-12 opacity-60 hidden md:block" />
      <div className="absolute bottom-16 right-12 w-32 h-32 border-8 border-primary -rotate-6 opacity-30 hidden md:block" />
      <div className="absolute top-1/2 left-4 w-4 h-32 bg-primary opacity-20 hidden md:block" />
      <div className="absolute top-1/3 right-6 w-4 h-20 bg-secondary-container opacity-30 hidden md:block" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="reveal mb-8">
          <Badge variant="blue">Limited Cohort Spots Available</Badge>
        </div>

        {/* Headline */}
        <h2 className="reveal reveal-delay-1 text-7xl md:text-9xl font-black uppercase tracking-tighter mb-10 leading-[0.85] text-on-primary-fixed font-headline">
          JOIN THE
          <br />
          <span className="text-primary">MOVEMENT.</span>
        </h2>

        {/* Subtext */}
        <p className="reveal reveal-delay-2 text-xl md:text-2xl font-medium mb-16 max-w-2xl mx-auto text-on-surface-variant font-body">
          Stop playing small. The tools are here. The roadmap is ready. The only
          thing missing is you.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 flex flex-col md:flex-row gap-6 justify-center">
          <Button variant="primary" size="xl" shadow>
            Join Waitlist
          </Button>
        </div>

        {/* Reassurance text */}
        <p className="reveal reveal-delay-4 mt-8 text-xs uppercase tracking-widest text-on-surface-variant opacity-60 font-bold font-body">
          No credit card required &nbsp;•&nbsp; Cancel anytime &nbsp;•&nbsp;
          Backed by 94% founder NPS
        </p>
      </div>
    </section>
  );
}
