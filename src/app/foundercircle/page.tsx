"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  MapPin,
  Users,
  Handshake,
  Lightbulb,
  MessageCircle,
  Coffee,
  Rocket,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

/* =========================================================================
   THEME — edit these to match your exact Tailwind config / brand tokens
========================================================================= */

const theme = {
  bg: "#F7F8FB",              // page background — light off-white
  surface: "#FFFFFF",         // card background on light sections
  border: "#E5E7EB",          // default card border on light sections
  navy: "#0B1440",            // deep navy — headings, dark panels
  navyDeep: "#080D2E",        // darker navy — full-bleed dark sections
  blue: "#1E3AE8",            // royal blue accent
  blueSoft: "rgba(30,58,232,0.08)",
  orange: "#FF9800",          // amber orange accent
  orangeSoft: "rgba(255,152,0,0.12)",
  textMuted: "#6B7280",       // body text on light backgrounds
  textOnDark: "#E5E7EB",      // body text on navy backgrounds
  textOnDarkMuted: "#9CA3AF",
  fontFamily: "inherit",      // swap for your brand font, e.g. '"Poppins", sans-serif'
};

/* =========================================================================
   TYPES
========================================================================= */

export interface HeroStat {
  number: string;
  title: string;
}

export interface RecentEvent {
  date: string;
  theme: string;
  location: string;
  attendees: string;
  description: string;
}

export interface TimelineStep {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface StatBlock {
  number: string;
  title: string;
  icon: LucideIcon;
}

export interface UpcomingEventInfo {
  badge: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  agenda: string;
  ctaLabel: string;
}
/* =========================================================================
   DEFAULT CONTENT
========================================================================= */

const DEFAULT_HERO_STATS: HeroStat[] = [
  { number: "50+", title: "Founder Meetups" },
  { number: "500+", title: "Entrepreneurs" },
  { number: "20+", title: "Cities Connected" },
  { number: "100+", title: "Collaborations" },
];

const DEFAULT_RECENT_EVENTS: RecentEvent[] = [
  {
    date: "June 2026",
    theme: "Founder Networking",
    location: "Patna",
    attendees: "50+ Founders",
    description:
      "An engaging networking session where entrepreneurs shared business experiences, exchanged ideas, and explored collaboration opportunities.",
  },
  {
    date: "May 2026",
    theme: "Startup Growth",
    location: "Community Meetup",
    attendees: "45+ Participants",
    description:
      "Focused discussions on scaling startups, solving operational challenges, and building strong founder relationships.",
  },
  {
    date: "April 2026",
    theme: "Innovation & Collaboration",
    location: "Founder Circle",
    attendees: "40+ Entrepreneurs",
    description:
      "Interactive conversations around innovation, partnerships, mentorship, and startup ecosystem development.",
  },
];

const DEFAULT_TIMELINE: TimelineStep[] = [
  {
    icon: Users,
    title: "Welcome & Introductions",
    desc: "Participants introduced themselves, their startups, and their business journeys.",
  },
  {
    icon: Coffee,
    title: "Networking Session",
    desc: "Founders connected with entrepreneurs from different industries and expanded their professional network.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Sharing",
    desc: "Members exchanged ideas, discussed market trends, and shared practical business experiences.",
  },
  {
    icon: MessageCircle,
    title: "Problem Solving",
    desc: "Founders openly discussed startup challenges and received suggestions from the community.",
  },
  {
    icon: Handshake,
    title: "Collaboration Opportunities",
    desc: "Potential partnerships and future collaborations were explored among attendees.",
  },
  {
    icon: Rocket,
    title: "Closing & Community Building",
    desc: "The meetup concluded with future event announcements and continued networking.",
  },
];

const DEFAULT_STAT_BLOCKS: StatBlock[] = [
  { number: "50+", title: "Founder Meetups", icon: CalendarDays },
  { number: "500+", title: "Community Members", icon: Users },
  { number: "100+", title: "Collaborations", icon: Handshake },
  { number: "20+", title: "Cities Connected", icon: MapPin },
];

const DEFAULT_UPCOMING: UpcomingEventInfo = {
  badge: "Limited Seats",
  title: "Founder Circle Meetup",
  description:
    "Connect with fellow entrepreneurs, discuss startup ideas, solve business challenges, and build meaningful partnerships.",
  date: "Coming Soon",
  venue: "Patna",
  agenda: "Startup Networking • Founder Discussions • Business Collaboration • Community Building",
  ctaLabel: "Reserve Your Seat",
};

/* =========================================================================
   SHARED HELPERS (inline — no separate component files)
========================================================================= */

/** Small rectangular badge, matching "THE PLAYBOOK" style from the reference screenshot */
function Badge({
  children,
  variant = "blue",
}: {
  children: React.ReactNode;
  variant?: "blue" | "orange";
}) {
  const bg = variant === "blue" ? theme.blue : theme.orange;
  return (
    <span
      className="inline-block rounded px-4 py-2 text-xs font-bold uppercase tracking-[0.15em]"
      style={{ backgroundColor: bg, color: "#FFFFFF" }}
    >
      {children}
    </span>
  );
}

/** Thin vertical accent bar + number/label, matching the "48hrs / 10x" stat pattern */
function AccentStat({
  number,
  label,
  color,
  onDark = false,
}: {
  number: string;
  label: string;
  color: string;
  onDark?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-10 w-1 rounded-full" style={{ backgroundColor: color }} />
      <div>
        <p className="text-3xl font-black" style={{ color }}>
          {number}
        </p>
        <p
          className="mt-1 text-xs font-bold uppercase tracking-[0.1em]"
          style={{ color: onDark ? theme.textOnDark : theme.navy }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

/* =========================================================================
   HERO — two-column layout matching the reference: dark navy panel (left)
   + a 2x2 bento grid of solid-color / stat tiles (right)
========================================================================= */

function HeroSection({ programName, stats }: { programName: string; stats: HeroStat[] }) {
  const words = programName.split(" ");
  const first = words[0];
  const rest = words.slice(1).join(" ") || "Circle";

  // Cycle tile styles across 4 quadrants to echo the reference bento grid
  const tileStyles = [
    { bg: theme.navy, text: "#FFFFFF", numberColor: theme.orange },
    { bg: theme.orange, text: theme.navy, numberColor: theme.navy },
    { bg: theme.blue, text: "#FFFFFF", numberColor: "#FFFFFF" },
    { bg: theme.surface, text: theme.navy, numberColor: theme.blue },
  ];

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: theme.bg, fontFamily: theme.fontFamily }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-stretch">
        {/* LEFT — dark navy panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl p-10 md:p-14 flex flex-col justify-center"
          style={{ backgroundColor: theme.navy }}
        >
          <Badge variant="blue">The Circle</Badge>

          <h1 className="mt-8 text-5xl md:text-6xl font-black uppercase leading-[1.05]">
            <span style={{ color: "#FFFFFF" }}>{first}</span>
            <br />
            <span style={{ color: theme.orange }}>{rest}</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7" style={{ color: theme.textOnDark }}>
            A collaborative space where entrepreneurs connect, exchange ideas,
            discuss challenges, and discover new opportunities together.
          </p>

          <div className="mt-9 flex gap-10">
            <AccentStat number={stats[0]?.number ?? "50+"} label={stats[0]?.title ?? "Meetups"} color={theme.orange} onDark />
            <AccentStat number={stats[1]?.number ?? "500+"} label={stats[1]?.title ?? "Entrepreneurs"} color={theme.blue} onDark />
          </div>

          <a
            href="https://forms.gle/tVXyJxm47sHUEaiw5"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] w-fit"
            style={{ color: theme.orange, borderBottom: `2px solid ${theme.orange}`, paddingBottom: 4 }}
          >
            Connect To The Circle
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* RIGHT — bento grid of stat tiles */}
        <div className="grid grid-cols-2 gap-6">
          {stats.slice(0, 4).map((item, index) => {
            const style = tileStyles[index % tileStyles.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[180px]"
                style={{
                  backgroundColor: style.bg,
                  border: style.bg === theme.surface ? `1px solid ${theme.border}` : "none",
                }}
              >
                <p className="text-4xl md:text-5xl font-black" style={{ color: style.numberColor }}>
                  {item.number}
                </p>
                <p
                  className="mt-3 text-xs font-bold uppercase tracking-[0.1em]"
                  style={{ color: style.text }}
                >
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   RECENT EVENTS
========================================================================= */

function RecentEventsSection({ programName, events }: { programName: string; events: RecentEvent[] }) {
  return (
    <section id="recent" className="py-24" style={{ backgroundColor: theme.bg, fontFamily: theme.fontFamily }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="orange">Recent Events</Badge>
          <h2 className="mt-5 text-4xl md:text-5xl font-black uppercase" style={{ color: theme.navy }}>
            Recent {programName}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8" style={{ color: theme.textMuted }}>
            Highlights from recent {programName} meetups where entrepreneurs connected,
            exchanged knowledge, and discovered new business opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {events.map((event, index) => (
            <motion.div
              key={event.theme}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}`, boxShadow: "0 4px 20px rgba(11,20,64,0.05)" }}
            >
              <span
                className="inline-block rounded px-3 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: theme.orangeSoft, color: theme.orange }}
              >
                {event.date}
              </span>

              <h3 className="mt-6 text-2xl font-bold" style={{ color: theme.navy }}>
                {event.theme}
              </h3>

              <div className="mt-5 space-y-2.5 text-sm" style={{ color: theme.textMuted }}>
                <p className="flex items-center gap-2.5">
                  <MapPin size={16} style={{ color: theme.blue }} />
                  {event.location}
                </p>
                <p className="flex items-center gap-2.5">
                  <Users size={16} style={{ color: theme.blue }} />
                  {event.attendees}
                </p>
              </div>

              <p className="mt-5 leading-7 text-sm" style={{ color: theme.textMuted }}>
                {event.description}
              </p>

              {/* <button
                className="group/btn mt-7 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all duration-300"
                style={{ backgroundColor: theme.navy, color: "#FFFFFF" }}
              >
                View Details
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   TIMELINE
========================================================================= */

function TimelineSection({ steps }: { steps: TimelineStep[] }) {
  return (
    <section id="meetup" className="py-24" style={{ backgroundColor: "#FFFFFF", fontFamily: theme.fontFamily }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="blue">Meetup Journey</Badge>
          <h2 className="mt-5 text-4xl md:text-5xl font-black uppercase leading-tight" style={{ color: theme.navy }}>
            What Happened
            <br />
            <span style={{ color: theme.orange }}>During The Meetup?</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8" style={{ color: theme.textMuted }}>
            Every meetup follows a collaborative journey designed to encourage
            networking, startup learning, collaboration and meaningful founder relationships.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const iconBg = index % 2 === 0 ? theme.blue : theme.orange;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
              >
                <div
                  className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded font-black text-sm"
                  style={{ backgroundColor: theme.navy, color: "#FFFFFF" }}
                >
                  {index + 1}
                </div>

                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon size={28} color="#FFFFFF" />
                </div>

                <h3 className="text-xl font-bold" style={{ color: theme.navy }}>
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-sm" style={{ color: theme.textMuted }}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   STATS
========================================================================= */

function StatsSection({ blocks }: { blocks: StatBlock[] }) {
  return (
    <section id="stats" className="py-24" style={{ backgroundColor: theme.navy, fontFamily: theme.fontFamily }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Badge variant="orange">Community Impact</Badge>
          <h2 className="mt-5 text-4xl md:text-5xl font-black uppercase text-white">
            Circle In Numbers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {blocks.map((item, index) => {
            const Icon = item.icon;
            const accent = index % 2 === 0 ? theme.orange : theme.blue;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <Icon size={26} style={{ color: accent }} />
                </div>
                <h3 className="text-4xl font-black" style={{ color: accent }}>
                  {item.number}
                </h3>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: theme.textOnDarkMuted }}>
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   UPCOMING EVENT
========================================================================= */

function UpcomingSection({ info, registerUrl }: { info: UpcomingEventInfo; registerUrl: string }) {
  return (
    <section id="upcoming" className="py-24" style={{ backgroundColor: theme.bg, fontFamily: theme.fontFamily }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="blue">Upcoming Event</Badge>
          <h2 className="mt-5 text-4xl md:text-5xl font-black uppercase" style={{ color: theme.navy }}>
            Join The Next Meetup
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10"
            style={{ backgroundColor: theme.navy }}
          >
            <Badge variant="orange">{info.badge}</Badge>
            <h3 className="text-3xl font-black mt-7 text-white">{info.title}</h3>
            <p className="mt-5 leading-7" style={{ color: theme.textOnDark }}>
              {info.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-10"
            style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: theme.textMuted }}>
                  Date
                </h4>
                <p className="text-xl font-black mt-1.5" style={{ color: theme.navy }}>
                  {info.date}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: theme.textMuted }}>
                  Venue
                </h4>
                <p className="text-xl font-black mt-1.5" style={{ color: theme.navy }}>
                  {info.venue}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: theme.textMuted }}>
                  Agenda
                </h4>
                <p className="mt-1.5 leading-7 text-sm" style={{ color: theme.textMuted }}>
                  {info.agenda}
                </p>
              </div>

              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 rounded-full px-7 py-3.5 font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: theme.orange, color: theme.navy }}
              >
                {info.ctaLabel}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   CTA
========================================================================= */

function CTASection({ programName, registerUrl }: { programName: string; registerUrl: string }) {
  return (
    <section id="cta" className="py-24" style={{ backgroundColor: theme.bg, fontFamily: theme.fontFamily }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-10 md:p-20 text-center"
          style={{ backgroundColor: theme.navy }}
        >
          <Badge variant="blue">{programName} Community</Badge>

          <h2 className="mt-8 text-4xl md:text-6xl font-black uppercase leading-[1.05] text-white">
            Ready To Join
            <br />
            Our Next <span style={{ color: theme.orange }}>{programName}?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8" style={{ color: theme.textOnDark }}>
            Become part of a growing founder community where entrepreneurs connect,
            collaborate, share experiences, and build meaningful startup relationships.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full px-9 py-4 text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: theme.orange, color: theme.navy }}
            >
              Register Now
              <ArrowRight size={20} className="transition-all duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================================
   MAIN EXPORT — content only, no header/footer
========================================================================= */

export default function FounderCirclePage() {

  const programName = "Founder Circle";

  const registerUrl = "https://forms.gle/tVXyJxm47sHUEaiw5";

  const heroStats = DEFAULT_HERO_STATS;

  const recentEvents = DEFAULT_RECENT_EVENTS;

  const timelineSteps = DEFAULT_TIMELINE;

  const statBlocks = DEFAULT_STAT_BLOCKS;

  const upcoming = DEFAULT_UPCOMING;

  return (
    <>
    <Navbar/>

    <div
      style={{
        overflowX: "hidden",
        backgroundColor: theme.bg,
      }}
    >

      <HeroSection
        programName={programName}
        stats={heroStats}
      />

      <RecentEventsSection
        programName={programName}
        events={recentEvents}
      />

      <TimelineSection
        steps={timelineSteps}
      />

      <StatsSection
        blocks={statBlocks}
      />

      <UpcomingSection
        info={upcoming}
        registerUrl={registerUrl}
      />

      <CTASection
        programName={programName}
        registerUrl={registerUrl}
      />

    </div>

    <Footer/>

    </>

  );

}
