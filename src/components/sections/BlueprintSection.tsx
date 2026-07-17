"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BLUEPRINT_STATS = [
  { value: "48hrs", label: "To First Insight", color: "border-secondary-container", textColor: "text-secondary-container" },
  { value: "10x", label: "Execution Speed", color: "border-primary-container", textColor: "text-primary-container" },
];

const COLLAGE_IMAGES = [
  {
    src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Team strategy session",
    type: "image" as const,
  },
  { type: "stat" as const },
  { type: "icon" as const },
  {
    src: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Founder working",
    type: "image" as const,
  },
];

export function BlueprintSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-surface overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">

          {/* Left — Text Block */}
          <div className="bg-on-primary-fixed text-white p-12 md:p-16 flex flex-col justify-between relative">
            <span className="section-watermark">01</span>

            <div className="relative z-10">
              <div className="reveal mb-6">
                <Badge variant="blue">The Playbook</Badge>
              </div>

              <h2 className="reveal reveal-delay-1 text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none font-headline">
                THE
                <br />
                <span className="text-secondary-container">BLUEPRINT</span>
              </h2>

              <p className="reveal reveal-delay-2 text-surface-variant text-lg mb-10 max-w-md font-body">
                Follow the path of the top 1% performers. We&apos;ve decoded the
                startup genome — every decision tree, every pivot signal, every
                growth lever.
              </p>

              {/* Stats */}
              <div className="reveal reveal-delay-3 grid grid-cols-2 gap-6 mb-10">
                {BLUEPRINT_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className={`border-l-4 pl-4 ${stat.color}`}
                  >
                    <div
                      className={`text-3xl font-black font-headline ${stat.textColor}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-surface-variant font-bold mt-1 font-body">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/blueprint"
                className="reveal reveal-delay-4 inline-flex items-center gap-2 text-secondary-container font-black uppercase tracking-widest text-sm border-b-4 border-secondary-container pb-1 hover:text-white transition-none font-headline"
              >
                Explore the Blueprint
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Right — Image Collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-0 min-h-[500px]">
            {/* Cell 1: Image */}
            <div className="img-zoom overflow-hidden border-2 border-white">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team strategy session"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cell 2: Stat */}
            <div className="bg-secondary-container flex items-center justify-center p-8 border-2 border-white">
              <div className="text-center">
                <div className="text-6xl font-black text-on-primary-fixed font-headline">
                  90%
                </div>
                <div className="text-sm font-black uppercase tracking-widest text-on-primary-fixed mt-2 font-body">
                  Startups Fail
                  <br />
                  Without a Map
                </div>
              </div>
            </div>

            {/* Cell 3: Icon */}
            <div className="bg-primary flex items-center justify-center p-8 border-2 border-white">
              <div className="text-center text-white">
                <span className="material-symbols-outlined text-6xl text-secondary-container mb-4 block">
                  explore
                </span>
                <div className="text-sm font-black uppercase tracking-widest font-body">
                  GPS-Guided
                  <br />
                  Navigation
                </div>
              </div>
            </div>

            {/* Cell 4: Image */}
            <div className="img-zoom overflow-hidden border-2 border-white">
              <Image
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Founder working"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
