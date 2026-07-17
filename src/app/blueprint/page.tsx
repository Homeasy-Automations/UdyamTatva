"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Space_Grotesk, Be_Vietnam_Pro } from "next/font/google";
import {
  ChevronLeft,
  ChevronDown,
  Compass,
  LineChart,
  Building2,
  Paintbrush,
  TerminalSquare,
  Megaphone,
  Zap,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Target,
  Rocket,
  Activity,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fonts — self-contained, no layout.tsx edits required              */
/* ------------------------------------------------------------------ */
const headlineFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Brand tokens — arbitrary Tailwind values, no tailwind.config edits */
/* ------------------------------------------------------------------ */
const c = {
  paper: "#F7F8FA",
  paperDim: "#ECEFF5",
  ink: "#0A0F2C",
  inkSoft: "#4B5170",
  navy: "#0A1440",
  royal: "#1449FF",
  amber: "#FF9F1C",
  amberDeep: "#E8850A",
};

const HARD_SHADOW = "6px 6px 0px 0px rgb(73, 56, 180)";
const glow_shadow = "6px 6px 0px 0px rgb(253, 168, 22)";
const HARD_SHADOW_SM = "4px 4px 0px 0px rgba(10,15,44,0.9)";

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll wrapper                                          */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(true);
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayMs = delay * 80;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(.34,1.56,.64,1)] ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const steps = [
  { n: "01", title: "Discover", desc: "Deep dive into market voids and product-market fit verification.", badge: "PMF Verified", bg: c.navy, text: c.paper, icon: Compass, iconColor: c.amber },
  { n: "02", title: "Research", desc: "Competitive intelligence and data-driven landscape analysis.", badge: "Competitive Intel", bg: c.royal, text: c.paper, icon: LineChart, iconColor: c.amber },
  { n: "03", title: "Strategy", desc: "The master roadmap defining every KPI and conversion touchpoint.", badge: "KPI Mapped", bg: c.amber, text: c.ink, icon: Building2, iconColor: c.navy },
  { n: "04", title: "Brand", desc: "Visual identity and narrative design for premium market positioning.", badge: "Identity Locked", bg: c.paper, text: c.ink, icon: Paintbrush, iconColor: c.royal },
  { n: "05", title: "Website", desc: "High-performance digital flagship optimized for elite UX.", badge: "Elite UX", bg: c.navy, text: c.paper, icon: TerminalSquare, iconColor: c.amber },
  { n: "06", title: "Marketing", desc: "Precision targeting and high-intent funnel architecture.", badge: "High-Intent Funnel", bg: c.royal, text: c.paper, icon: Megaphone, iconColor: c.amber },
  { n: "07", title: "Automation", desc: "Removing human friction through intelligent workflow systems.", badge: "Zero Friction", bg: c.amber, text: c.ink, icon: Zap, iconColor: c.navy },
  { n: "08", title: "Growth", desc: "Continuous iteration cycles based on real-time telemetry.", badge: "Real-Time Telemetry", bg: c.paper, text: c.ink, icon: TrendingUp, iconColor: c.royal },
];

const tickerItems = [
  "Onboarding",
  "Community & Mentorship",
  "Pitch Deck & Business Plan",
  "Product Development",
  "Acceleration Support",
  "Market Access",
];

const faqs = [
  { q: "How long does the Blueprint take to implement?", a: "Our core implementation cycle typically spans 8 to 12 weeks, depending on the complexity of your product and current market standing." },
  { q: "Is this suitable for non-technical founders?", a: "Absolutely. You bring the vision — mentors and the dev network handle the engineering while you focus on decisions only you can make." },
  { q: "What happens after all 8 stages are complete?", a: "You move into Market Access and ongoing acceleration support — continuous check-ins, GTM strategy, and telemetry to keep growth compounding." },
];

function FaqItem({ q, a, delay }: { q: string; a: string; delay: 0 | 1 | 2 }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ border: `3px solid ${c.ink}`, boxShadow: glow_shadow, backgroundColor: c.paper }}
        className="w-full text-left p-5"
      >
        <div className="flex justify-between items-center">
          <h4 className="font-bold pr-4" style={{ color: c.ink }}>{q}</h4>
          <ChevronDown
            style={{ color: c.royal }}
            className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
        <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <p className="text-sm" style={{ color: c.inkSoft }}>{a}</p>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function BlueprintPage() {
  return (
    <main
      className="antialiased"
      style={{ backgroundColor: c.paper, color: c.amberDeep, fontFamily: bodyFont.style.fontFamily }}
    >
        <Navbar/>

      {/* ============ HERO ============ */}
      <section
        className="relative pt-40 pb-16 px-5 md:px-8 overflow-hidden"
 
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Reveal>
            <Link
              href="#"
              style={{ border: `2px solid ${c.ink}`, color: c.amber, backgroundColor: c.paper }}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <ChevronLeft className="w-4 h-4" style={{ color: c.royal }} /> The Blueprint
            </Link>
          </Reveal>
          <Reveal>
            <h1
              className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: headlineFont.style.fontFamily, color: c.ink }}
            >
              Your business.
              <br />
              Built with a <span style={{ color: c.royal }}>proven blueprint.</span>
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-lg max-w-2xl mx-auto mb-9" style={{ color: c.inkSoft }}>
              From idea to launch, every step is mapped, mentored and measured
              — the same 8-stage system UdyamTatva runs for every founder in
              the program.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#steps"
                style={{ backgroundColor: c.royal, color: c.paper, border: `2px solid ${c.ink}`, boxShadow: glow_shadow }}
                className="w-full sm:w-auto text-center font-bold uppercase tracking-widest text-sm px-8 py-4 active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform"
              >
                See the 8 Steps
              </a>
              <a
                href="/waitlist"
                style={{ backgroundColor: c.paper, color: c.ink, border: `2px solid ${c.ink}`, boxShadow: HARD_SHADOW }}
                className="w-full sm:w-auto text-center font-bold uppercase tracking-widest text-sm px-8 py-4 active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform"
              >
                Join the Waitlist
              </a>
            </div>
          </Reveal>
        </div>

        {/* Ticker */}
        <Reveal delay={3}>
          <div className="mt-14 py-3 overflow-hidden -mx-5 md:-mx-8" style={{ backgroundColor: c.amber, borderTop: `2px solid ${c.ink}`, borderBottom: `2px solid ${c.ink}` }}>
            <div className="flex whitespace-nowrap animate-[udyam-marquee_22s_linear_infinite]">
              {[0, 1].map((dup) => (
                <span
                  key={dup}
                  className="flex items-center gap-10 px-5 font-bold uppercase tracking-widest text-sm"
                  style={{ fontFamily: headlineFont.style.fontFamily, color: c.paper }}
                  aria-hidden={dup === 1}
                >
                  {tickerItems.map((item) => (
                    <span key={item} className="flex items-center gap-10">
                      <span>{item}</span>
                      <span style={{ color: c.royal }}>◆</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ FAILURE QUOTIENT ============ */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <Reveal className="space-y-6">
          <h2 className="font-extrabold text-3xl md:text-4xl" style={{ fontFamily: headlineFont.style.fontFamily, color: c.ink }}>
            The failure quotient.
          </h2>
          <p className="text-lg" style={{ color: c.inkSoft }}>
            92% of businesses fail — not from lack of effort, but from lack of
            a foundation built with precision from day one.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div style={{ border: `3px solid ${c.ink}`, boxShadow: glow_shadow, backgroundColor: c.navy }} className="p-6 text-center">
              <div className="text-4xl font-black mb-1" style={{ fontFamily: headlineFont.style.fontFamily, color: c.amber }}>92%</div>
              <div className="text-[11px] uppercase tracking-widest font-semibold" style={{ color: "rgba(247,248,250,0.7)" }}>Market failure</div>
            </div>
            <div style={{ border: `3px solid ${c.ink}`, boxShadow: HARD_SHADOW, backgroundColor: c.royal }} className="p-6 text-center">
              <div className="text-4xl font-black mb-1" style={{ fontFamily: headlineFont.style.fontFamily, color: c.paper }}>8</div>
              <div className="text-[11px] uppercase tracking-widest font-semibold" style={{ color: "rgba(247,248,250,0.7)" }}>Stages, one system</div>
            </div>
          </div>
        </Reveal>
        <div className="space-y-4">
          {[
            { icon: Target, title: "No strategy", body: "Building without a map is walking in circles — the blueprint defines the destination before step one.", color: c.royal },
            { icon: Rocket, title: "No execution", body: "Ideas are cheap. Precision execution at scale is what separates founders who ship from founders who stall.", color: c.amberDeep },
            { icon: Activity, title: "No optimization", body: "Static systems die. UdyamTatva builds workflows that learn, adapt, and grow with the market.", color: c.royal },
          ].map((item, i) => (
            <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
              <div style={{ border: `3px solid ${c.ink}`, boxShadow: HARD_SHADOW, backgroundColor: c.paper }} className="p-5 flex items-start gap-4">
                <item.icon className="shrink-0" style={{ color: item.color }} size={28} />
                <div>
                  <h4 className="font-bold mb-1" style={{ color: c.ink }}>{item.title}</h4>
                  <p className="text-sm" style={{ color: c.inkSoft }}>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 8-STEP BLUEPRINT ============ */}
      <section id="steps" className="py-20 md:py-28" style={{ backgroundColor: c.paperDim }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="text-center mb-14">
            <h2 className="font-extrabold text-3xl md:text-4xl mb-3" style={{ fontFamily: headlineFont.style.fontFamily, color: c.ink }}>
              The 8-step core blueprint.
            </h2>
            <p style={{ color: c.inkSoft }}>The exact sequence every founder in the program runs through.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div
                    style={{ border: `3px solid ${c.ink}`, boxShadow: HARD_SHADOW, backgroundColor: step.bg }}
                    className="relative overflow-hidden p-6 h-full"
                  >
                    <span
                      style={{ fontFamily: headlineFont.style.fontFamily, color: step.text, opacity: 0.16 }}
                      className="absolute top-2 right-3 font-black text-7xl leading-none select-none pointer-events-none"
                    >
                      {step.n}
                    </span>
                    <Icon className="relative z-10 mb-6" style={{ color: step.iconColor }} size={36} />
                    <h3 className="relative z-10 font-bold text-xl mb-2" style={{ fontFamily: headlineFont.style.fontFamily, color: step.text }}>
                      {step.title}
                    </h3>
                    <p className="relative z-10 text-sm mb-5" style={{ color: step.text === c.paper ? "rgba(247,248,250,0.7)" : `${c.ink}B3` }}>
                      {step.desc}
                    </p>
                    <span
                      style={{ backgroundColor: c.paper, color: c.ink, border: `2px solid ${c.ink}` }}
                      className="relative z-10 inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5"
                    >
                      {step.badge}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LAYERS ============ */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Reveal className="relative h-[380px]">
            <div style={{ border: `3px solid ${c.ink}`, boxShadow: HARD_SHADOW, backgroundColor: c.paper }} className="absolute top-0 left-0 w-full max-w-sm p-6 z-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: c.royal }}>Layer 01 · Business</span>
                <Building2 style={{ color: c.royal }} size={22} />
              </div>
              <h3 className="font-bold text-xl" style={{ fontFamily: headlineFont.style.fontFamily, color: c.ink }}>Foundational strategy</h3>
            </div>
            <div style={{ border: `3px solid ${c.ink}`, boxShadow: HARD_SHADOW, backgroundColor: c.amber }} className="absolute top-16 left-8 w-full max-w-sm p-6 z-20">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "rgba(10,15,44,0.7)" }}>Layer 02 · Brand</span>
                <Paintbrush style={{ color: c.ink }} size={22} />
              </div>
              <h3 className="font-bold text-xl" style={{ fontFamily: headlineFont.style.fontFamily, color: c.ink }}>Visual identity</h3>
            </div>
            <div style={{ border: `3px solid ${c.ink}`, boxShadow: HARD_SHADOW, backgroundColor: c.navy }} className="absolute top-32 left-16 w-full max-w-sm p-6 z-30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: c.amber }}>Layer 03 · Digital</span>
                <TerminalSquare style={{ color: c.amber }} size={22} />
              </div>
              <h3 className="font-bold text-xl" style={{ fontFamily: headlineFont.style.fontFamily, color: c.paper }}>Web ecosystem</h3>
            </div>
          </Reveal>
          <Reveal delay={1} className="space-y-6">
            <h2 className="font-extrabold text-3xl md:text-4xl" style={{ fontFamily: headlineFont.style.fontFamily, color: c.ink }}>
              Multilayered resilience.
            </h2>
            <p className="text-lg" style={{ color: c.inkSoft }}>
              This isn&apos;t a linear checklist — it&apos;s a structural
              stack. Each layer reinforces the one beneath it, creating a
              business architecture that doesn&apos;t crack under pressure.
            </p>
            <ul className="space-y-3">
              {["Zero-latency communication with mentors", "Modular brand assets for any platform", "Fully automated lead-gen pipelines"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold" style={{ color: c.ink }}>
                  <CheckCircle2 style={{ color: c.royal }} size={22} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ WORKFLOW ============ */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: c.ink, color: c.paper }}>
        <Reveal className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-16">
          <h2 className="font-extrabold text-3xl md:text-4xl mb-3" style={{ fontFamily: headlineFont.style.fontFamily }}>Precision workflow.</h2>
          <p style={{ color: "rgba(247,248,250,0.6)" }}>The path from idea to global scale, visualised.</p>
        </Reveal>
        <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-10">
          {[
            { n: "01", title: "Ideation spark", body: "Your core concept run through our 24-point feasibility matrix.", color: c.amber, reverse: false },
            { n: "02", title: "Architectural build", body: "Core assets developed, from prototypes to brand systems.", color: c.royal, reverse: true },
            { n: "03", title: "Market launch", body: "Deployment across primary channels with active telemetry.", color: c.amber, reverse: false },
            { n: "04", title: "Global scaling", body: "Systematizing growth beyond the founder's own time constraints.", color: c.royal, reverse: true },
          ].map((step, i) => (
            <Reveal key={step.n} delay={i as 0 | 1 | 2 | 3}>
              <div className={`flex flex-col md:items-center gap-6 ${step.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <div
                  style={{ borderColor: step.color, color: step.color, backgroundColor: step.color === c.royal ? c.paper : "transparent" }}
                  className="w-14 h-14 shrink-0 rounded-full border-2 flex items-center justify-center font-black"
                  suppressHydrationWarning
                >
                  <span style={{ fontFamily: headlineFont.style.fontFamily }}>{step.n}</span>
                </div>
                <div
                  style={{ border: "3px solid rgba(247,248,250,0.2)", boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.4)", backgroundColor: c.navy }}
                  className={`p-6 flex-1 ${step.reverse ? "text-left md:text-right" : ""}`}
                >
                  <h4 className="font-bold mb-1" style={{ color: c.paper }}>{step.title}</h4>
                  <p className="text-sm" style={{ color: "rgba(247,248,250,0.6)" }}>{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ BEFORE / AFTER ============ */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="text-center mb-14">
          <h2 className="font-extrabold text-3xl md:text-4xl" style={{ fontFamily: headlineFont.style.fontFamily, color: c.ink }}>
            The blueprint transformation.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div style={{ border: `3px solid ${c.ink}`, boxShadow: HARD_SHADOW, backgroundColor: c.paper }} className="p-7 h-full">
              <div className="flex items-center gap-2 mb-4" style={{ color: "#DC2626" }}>
                <XCircle size={22} />
                <span className="text-xs font-bold uppercase tracking-widest">Without a blueprint</span>
              </div>
              <div style={{ backgroundColor: c.paperDim, border: `1px solid ${c.ink}33` }} className="h-2.5 w-full overflow-hidden mb-5">
                <div style={{ backgroundColor: "#EF4444" }} className="w-1/3 h-full" />
              </div>
              <p className="text-sm italic" style={{ color: c.inkSoft }}>
                &quot;We spent six months building a product nobody wanted,
                burned through our budget, and had no clear read on why we
                were failing.&quot;
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ border: `3px solid ${c.ink}`, boxShadow: HARD_SHADOW, backgroundColor: c.navy }} className="p-7 h-full">
              <div className="flex items-center gap-2 mb-4" style={{ color: c.amber }}>
                <CheckCircle2 size={22} />
                <span className="text-xs font-bold uppercase tracking-widest">With the Udyam Blueprint</span>
              </div>
              <div style={{ backgroundColor: "rgba(247,248,250,0.1)" }} className="h-2.5 w-full overflow-hidden mb-5">
                <div style={{ backgroundColor: c.amber }} className="w-full h-full" />
              </div>
              <p className="text-sm italic" style={{ color: c.paper }}>
                &quot;Inside 90 days we had a fully mentored, systemized
                process — freeing us to focus on the product instead of
                guessing at the next step.&quot;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: c.paperDim }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-12">
          <Reveal className="md:col-span-1 space-y-4">
            <h2 className="font-extrabold text-3xl" style={{ fontFamily: headlineFont.style.fontFamily, color: c.ink }}>Specs &amp; FAQ.</h2>
            <p style={{ color: c.inkSoft }}>Every detail addressed, every stage accounted for.</p>
            <div className="flex flex-wrap gap-2">
              {["MENTOR_MATCHED", "AI_ASSISTED", "SCALE_READY"].map((tag) => (
                <span key={tag} style={{ backgroundColor: c.paper, border: `2px solid ${c.ink}`, color: c.ink }} className="px-3 py-1 text-[11px] font-mono font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="md:col-span-2 space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} delay={i as 0 | 1 | 2} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}

      <Footer/>

      {/* Marquee keyframes — scoped, no globals.css edit required */}
      <style jsx global>{`
        @keyframes udyam-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}