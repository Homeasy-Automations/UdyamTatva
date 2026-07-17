"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

const TEAM_AVATARS = [
  {
    src: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=80",
    alt: "Team member 1",
  },
  {
    src: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=80",
    alt: "Team member 2",
  },
  {
    src: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=80",
    alt: "Team member 3",
  },
];

const GPS_STATS = [
  { value: "Live", label: "Market Data" },
  { value: "AI", label: "Predictions" },
  { value: "0ms", label: "Delay" },
];

const MARKETPLACE_FEATURES = [
  "500+ Verified Experts",
  "Exclusive SaaS Bundles",
  "Instant Asset Deployment",
];

export function CoreFourSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-14 px-6 md:px-10 bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-5 mb-16">
          <h2 className="reveal text-6xl md:text-7xl font-black uppercase tracking-tighter text-on-primary-fixed font-headline leading-[0.9]">
            THE <span className="text-primary">CORE </span>4
          </h2>
         <p className="reveal reveal-delay-1 text-on-surface-variant font-medium 
          whitespace-nowrap text-left uppercase tracking-widest text-xs font-body -ml-6">
            Four weapons. One arsenal. Zero excuses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

          {/* ── Card 1: Startup GPS (large, dark, video bg) ── */}
          <div className="lg:col-span-7 bg-on-primary-fixed text-white flex flex-col min-h-[520px] relative overflow-hidden pop-card reveal">
            {/* Video background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              aria-hidden="true"
            >
              <source
                src="https://videos.pexels.com/video-files/7947463/7947463-hd_1920_1080_25fps.mp4"
                type="video/mp4"
              />
            </video>

            <div className="relative z-10 p-10  border-4 border-primary md:p-12 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <Badge variant="blue">Proprietary Tech</Badge>
                  <span className="material-symbols-outlined text-7xl text-secondary-container opacity-60">
                    explore
                  </span>
                </div>
                <h3 className="text-5xl md:text-6xl font-black uppercase mb-4 leading-none font-headline">
                  Startup GPS
                </h3>
                <p className="text-surface-variant text-lg max-w-md mb-8 font-body">
                  Real-time market navigation. Avoid the dead-ends that kill 90%
                  of early-stage companies.
                </p>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {GPS_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/10 p-4 text-center"
                    >
                      <div className="text-2xl font-black text-secondary-container font-headline">
                        {s.value}
                      </div>
                      <div className="text-xs text-surface-variant uppercase tracking-wider font-body">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="#">  
                <Button
                  variant="primary"
                  size="md"
                  shadow
                  className="self-start bg-white text-on-primary-fixed hover:bg-secondary-container"
                >
                  Initialize Scan →
                </Button>
              </Link>  
            </div>
          </div>

          {/* ── Card 2: Execution Pods (blue) ── */}
          <div className="lg:col-span-5 border-4 border-on-background bg-primary text-white p-10 md:p-12 flex flex-col justify-between min-h-[520px] relative overflow-hidden pop-card reveal reveal-delay-1">
            {/* Ghost icon bg */}
            <span className="material-symbols-outlined absolute bottom-0 right-0 opacity-10 text-[240px] leading-none pointer-events-none">
              groups
            </span>

            <div className="relative z-10">
              <span className="material-symbols-outlined text-6xl text-secondary-container mb-8 block">
                groups
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase mb-4 leading-none font-headline">
                Execution Pods
              </h3>
              <p className="text-blue-100 text-base mb-10 font-body">
                Modular workflows designed to automate the boring stuff. Focus
                only on high-leverage tasks.
              </p>

              {/* Avatar row */}
              <div className="flex -space-x-3 mb-4">
                {TEAM_AVATARS.map((av) => (
                  <Image
                    key={av.alt}
                    src={av.src}
                    alt={av.alt}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-cover border-2 border-primary"
                  />
                ))}
                <div className="w-12 h-12 bg-on-primary-fixed border-2 border-primary flex items-center justify-center text-xs font-black font-headline">
                  +2k
                </div>
              </div>
              <p className="text-blue-200 text-xs uppercase tracking-widest font-bold font-body">
                Active pod members this week
              </p>
            </div>
          </div>

          {/* ── Card 3: Smart Marketplace (light, with image header) ── */}
          <div className="lg:col-span-5 border-4 border-on-background bg-white flex flex-col pop-card reveal reveal-delay-2 overflow-hidden">
            <div className="img-zoom h-48 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Marketplace"
                width={800}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-10 flex flex-col flex-1">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 font-headline">
                Smart Marketplace
              </h3>
              <p className="text-on-surface-variant text-base mb-8 font-body">
                Access pre-vetted talent, discounted SaaS credits, and
                viral-ready creative assets in one click.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {MARKETPLACE_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 font-bold uppercase text-sm font-body"
                  >
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_box
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="text-primary font-black uppercase tracking-widest text-sm border-b-4 border-primary pb-1 self-start hover:text-on-primary-fixed transition-none font-headline"
              >
                Explore Services →
              </Link>
            </div>
          </div>

          {/* ── Card 4: Curated Incubation (gold, with image header) ── */}
          <div className="lg:col-span-7 bg-secondary-container text-on-primary-fixed border-4 border-on-background flex flex-col pop-card reveal reveal-delay-3 overflow-hidden">
            <div className="img-zoom h-56 overflow-hidden relative">
              <Image
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Incubation cohort"
                width={800}
                height={350}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary-container/50" />
              <div className="absolute top-6 left-6">
                <Badge variant="dark">Cohort 7 — Open</Badge>
              </div>
            </div>

            <div className="p-10 flex flex-col flex-1">
              <span className="material-symbols-outlined text-5xl mb-4">
                school
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase mb-4 leading-none font-headline">
                Curated Incubation
              </h3>
              <p className="font-medium text-base mb-8 max-w-lg font-body">
                Hand-picked mentorship from exit-proven founders and
                hyper-growth resources tailored for your specific scaling phase.
              </p>

              <Link
                href="/waitlist"
                className="mt-auto flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-on-primary-fixed text-white flex items-center justify-center group-hover:bg-primary transition-none">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>

                <span className="font-black uppercase tracking-tighter text-lg font-headline">
                  Join Waitlist →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
