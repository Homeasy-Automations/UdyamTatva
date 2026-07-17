"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HOW_IT_WORKS_STEPS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const stepVariantClasses: Record<string, string> = {
  blue: "bg-primary text-white",
  gold: "bg-secondary-container text-on-secondary-container",
  dark: "bg-on-primary-fixed text-white",
};

export function VideoFeatureSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-24 px-6 md:px-10 bg-surface overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">

          {/* Left — Video Block */}
          <div className="relative min-h-[500px] border-4 border-on-background overflow-hidden bg-on-primary-fixed">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              aria-hidden="true"
            >
              <source
                src="https://videos.pexels.com/video-files/3252982/3252982-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                className="w-20 h-20 bg-white/20 border-4 border-white flex items-center justify-center hover:bg-white/30 transition-none btn-press"
                aria-label="Play demo video"
              >
                <span
                  className="material-symbols-outlined text-white text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </button>
            </div>

            {/* Caption */}
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="text-white text-xs font-black uppercase tracking-widest mb-2 opacity-70 font-body">
                Live Platform Demo
              </div>
              <div className="text-white text-2xl font-black uppercase tracking-tighter font-headline">
                See It In Action →
              </div>
            </div>
          </div>

          {/* Right — Steps */}
          <div className="bg-surface-container-low p-12 md:p-16 flex flex-col justify-center border-4 border-on-background border-l-0">
            <div className="reveal mb-6">
              <Badge variant="gold">How It Works</Badge>
            </div>

            <h2 className="reveal reveal-delay-1 text-5xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-none font-headline">
              3 Steps.
              <br />
              Zero <span className="text-primary">Guesswork.</span>
            </h2>

            <div className="space-y-6">
              {HOW_IT_WORKS_STEPS.map((step, i) => (
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
              <Link href="/blueprint">
                <Button
                  variant="primary"
                  size="lg"
                  shadow
                  className="bg-on-primary-fixed hover:bg-primary"
                >
                  Watch Full Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
