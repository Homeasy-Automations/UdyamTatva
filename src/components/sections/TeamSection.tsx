"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FOUNDER_DATA, TEAM_MEMBERS } from "@/lib/data";
import { cn } from "@/lib/utils";

function SocialIcon({
  type,
  href,
  label,
}: {
  type: "linkedin" | "twitter" | "email";
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 border-2 border-on-background bg-white text-on-surface hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
    >
      {type === "linkedin" && (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.62 1.62 0 0 0-1.62 1.62c0 .89.73 1.62 1.62 1.62a1.62 1.62 0 0 0 1.62-1.62c0-.89-.73-1.62-1.62-1.62Z" />
        </svg>
      )}
      {type === "twitter" && (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )}
      {type === "email" && (
        <span className="material-symbols-outlined text-[18px]">mail</span>
      )}
    </a>
  );
}

export function TeamSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-surface border-t-4 border-on-background overflow-hidden relative"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-12 right-10 w-28 h-28 bg-primary opacity-5 rotate-45 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-secondary-container opacity-10 -rotate-12 pointer-events-none hidden lg:block" />

      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="reveal mb-4">
            <Badge variant="gold">The Core Team</Badge>
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.92] mb-6 text-on-primary-fixed font-headline">
            OPERATORS,
            <br />
            <span className="text-primary">NOT THEORISTS.</span>
          </h2>
          <p className="reveal reveal-delay-2 text-lg md:text-xl text-on-surface-variant font-body">
            We didn&apos;t build Udyam Tatva from an ivory tower. We built it in
            the trenches after navigating every dead-end, broken intro, and
            unnecessary barrier in the Indian startup landscape. Meet the people
            committed to leveling the playing field.
          </p>
        </div>

        {/* ── 1. FOUNDER SPOTLIGHT ── */}
        <div className="reveal mb-16 border-4 border-on-background bg-white shadow-brutal-blue">
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Founder Image Column */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full border-b-4 lg:border-b-0 lg:border-r-4 border-on-background bg-on-primary-fixed overflow-hidden">
              <Image
                src={FOUNDER_DATA.imageSrc}
                alt={FOUNDER_DATA.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="gold">{FOUNDER_DATA.badge}</Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-on-primary-fixed/90 backdrop-blur-sm p-3 border-2 border-white/20 text-white flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider">
                  Origin: Patna / Bharat
                </span>
                <span className="text-xs text-secondary-container font-mono font-bold">
                  ★ High Conviction
                </span>
              </div>
            </div>

            {/* Founder Details Column */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-on-primary-fixed font-headline">
                      {FOUNDER_DATA.name}
                    </h3>
                    <p className="text-primary font-bold text-base md:text-lg font-headline">
                      {FOUNDER_DATA.role}
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-2">
                    {FOUNDER_DATA.socials.linkedin && (
                      <SocialIcon
                        type="linkedin"
                        href={FOUNDER_DATA.socials.linkedin}
                        label={`${FOUNDER_DATA.name}'s LinkedIn`}
                      />
                    )}
                    {FOUNDER_DATA.socials.twitter && (
                      <SocialIcon
                        type="twitter"
                        href={FOUNDER_DATA.socials.twitter}
                        label={`${FOUNDER_DATA.name}'s Twitter`}
                      />
                    )}
                    {FOUNDER_DATA.socials.email && (
                      <SocialIcon
                        type="email"
                        href={FOUNDER_DATA.socials.email}
                        label={`Email ${FOUNDER_DATA.name}`}
                      />
                    )}
                  </div>
                </div>

                {/* Tagline / Mission quote */}
                <div className="border-l-4 border-primary pl-4 py-1.5 my-6 bg-surface-container-low/70">
                  <p className="text-lg font-headline font-bold text-on-primary-fixed italic">
                    &ldquo;{FOUNDER_DATA.tagline}&rdquo;
                  </p>
                </div>

                {/* Bio */}
                <p className="text-on-surface-variant font-body text-base leading-relaxed mb-6">
                  {FOUNDER_DATA.bio}
                </p>

                {/* Core Focus Tags */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-3 font-headline">
                    Focus Areas &amp; Direct Involvements:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {FOUNDER_DATA.focusAreas.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container border border-on-background text-xs font-bold text-on-surface uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Founder Note CTA */}
              <div className="mt-8 pt-6 border-t-2 border-surface-container-highest flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  Reviewing Founder Deals Weekly
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-black uppercase tracking-wider text-primary hover:underline flex items-center gap-1 font-headline"
                >
                  Write to Ayush Direct →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. TWO KEY TEAM MEMBERS GRID ── */}
        <div className="grid md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className={cn(
                "reveal border-4 border-on-background bg-white flex flex-col justify-between",
                index === 0
                  ? "shadow-brutal-blue reveal-delay-1"
                  : "shadow-brutal-gold reveal-delay-2"
              )}
            >
              {/* Member Card Header & Image */}
              <div>
                <div className="relative h-72 w-full border-b-4 border-on-background bg-on-primary-fixed overflow-hidden">
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge
                      variant={member.variant === "blue" ? "blue" : "gold"}
                    >
                      {member.badge}
                    </Badge>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-on-primary-fixed font-headline">
                        {member.name}
                      </h3>
                      <p className="text-primary font-bold text-sm md:text-base font-headline">
                        {member.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {member.socials.linkedin && (
                        <SocialIcon
                          type="linkedin"
                          href={member.socials.linkedin}
                          label={`${member.name}'s LinkedIn`}
                        />
                      )}
                      {member.socials.twitter && (
                        <SocialIcon
                          type="twitter"
                          href={member.socials.twitter}
                          label={`${member.name}'s Twitter`}
                        />
                      )}
                      {member.socials.email && (
                        <SocialIcon
                          type="email"
                          href={member.socials.email}
                          label={`Email ${member.name}`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm font-bold text-on-primary-fixed mb-4 italic">
                    &ldquo;{member.tagline}&rdquo;
                  </p>

                  {/* Bio */}
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Focus Tags */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-2.5 font-headline">
                      Core Scope:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.focusAreas.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-surface-container border border-on-background text-xs font-bold text-on-surface uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-8 py-4 bg-surface-container-low border-t-2 border-surface-container-highest flex items-center justify-between text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                <span>{member.variant === "blue" ? "⚡ Tech & Infra" : "🤝 20+ City Network"}</span>
                <span className="text-on-surface font-mono">Udyam Tatva Team</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. OPERATOR COMMITMENT STRIP ── */}
        <div className="reveal reveal-delay-3 mt-16 p-8 md:p-10 border-4 border-on-background bg-on-primary-fixed text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-brutal">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-secondary-container rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary-container">
                The Operator Standard
              </span>
            </div>
            <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight font-headline">
              NO CORPORATE LAYERS. DIRECT FOUNDER ACCESS.
            </h4>
            <p className="text-surface-variant text-sm font-body mt-2 max-w-2xl">
              When you submit your Startup Blueprint, join the Founder Circle, or apply for cohort incubation, you interact directly with the people building this platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/waitlist"
              className="px-6 py-3 bg-secondary-container text-on-secondary-container font-black uppercase tracking-wider text-sm border-2 border-white hover:bg-yellow-400 transition-colors shadow-brutal-sm"
            >
              Apply to Cohort
            </Link>
            <Link
              href="/foundercircle"
              className="px-6 py-3 bg-primary text-white font-black uppercase tracking-wider text-sm border-2 border-white hover:bg-blue-600 transition-colors shadow-brutal-sm"
            >
              Founder Circle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
