import type {
  NavLink,
  HeroStat,
  FeatureCard,
  Testimonial,
  HowItWorksStep,
  GalleryImage,
  ServicePillar,
} from "@/types";

export const NAV_LINKS: NavLink[] = [

  { label: "About", href: "/about" }, 
  { label: "Founders", href: "/founders" },
  { label: "Investors", href: "/investors" },
  { label: "Enablers", href: "/enablers" },
  { label: "Services", href: "/services" },
  { label: "Waitlist", href: "/waitlist" },
];

export const HERO_STATS: HeroStat[] = [
  { value: "400+", label: "Founders" },
  { value: "50+", label: "Mentors/Advisors" },
  { value: "50+", label: "Investors" },
];

export const CORE_FEATURES: FeatureCard[] = [
  {
    id: "startup-gps",
    title: "Startup GPS",
    description:
      "Real-time market navigation. Avoid the dead-ends that kill 90% of early-stage companies.",
    badge: "Proprietary Tech",
    icon: "explore",
    size: "large",
    variant: "dark",
    cta: { label: "Initialize Scan", href: "#gps" },
    stats: [
      { value: "Live", label: "Market Data" },
      { value: "AI", label: "Predictions" },
      { value: "0ms", label: "Delay" },
    ],
    hasVideo: true,
    videoSrc:
      "https://videos.pexels.com/video-files/7947463/7947463-hd_1920_1080_25fps.mp4",
  },
  {
    id: "execution-pods",
    title: "Execution Pods",
    description:
      "Modular workflows designed to automate the boring stuff. Focus only on high-leverage tasks.",
    icon: "groups",
    size: "medium",
    variant: "blue",
    imageSrc:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=80",
    imageAlt: "Team member",
  },
  {
    id: "smart-marketplace",
    title: "Smart Marketplace",
    description:
      "Access pre-vetted talent, discounted SaaS credits, and viral-ready creative assets in one click.",
    icon: "storefront",
    size: "medium",
    variant: "light",
    cta: { label: "Explore Catalog", href: "#marketplace" },
    imageSrc:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Marketplace",
  },
  {
    id: "curated-incubation",
    title: "Curated Incubation",
    description:
      "Hand-picked mentorship from exit-proven founders and hyper-growth resources tailored for your specific scaling phase.",
    badge: "Cohort 7 — Open",
    icon: "school",
    size: "large",
    variant: "gold",
    cta: { label: "Apply for Cohort", href: "#incubation" },
    imageSrc:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Incubation cohort",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "alex",
    quote:
      "Udyam Tatva didn't just give us a roadmap; they gave us a cheat code for the entire ecosystem.",
    name: "Alex Rivera",
    role: "Founder",
    company: "FluxAI",
    avatarSrc:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=80",
    variant: "white",
    rotation: "cw",
  },
  {
    id: "sarah",
    quote:
      "The GPS feature literally saved us ₹50k in botched marketing spend. Unbelievable tool.",
    name: "Sarah Chen",
    role: "CEO",
    company: "NomadStacks",
    avatarSrc:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=80",
    variant: "blue",
    rotation: "ccw",
  },
  {
    id: "jordan",
    quote:
      "Finally, a SaaS that speaks Gen Z. Raw, powerful, and ridiculously effective.",
    name: "Jordan Blake",
    role: "Founder",
    company: "ZeroG",
    avatarSrc:
      "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=80",
    variant: "white",
    rotation: "cw",
  },
  {
    id: "priya",
    quote:
      "We went from 0 to seed in 90 days. The Blueprint is genuinely that powerful.",
    name: "Priya Menon",
    role: "CTO",
    company: "BuildStack",
    avatarSrc:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80",
    variant: "gold",
    rotation: "ccw",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Input Your Stage",
    description:
      "Tell us where you are — idea, MVP, scaling, or exit-ready.",
    variant: "blue",
  },
  {
    step: 2,
    title: "Get Your Blueprint",
    description:
      "AI + expert data generates your personalized execution map in 48 hours.",
    variant: "gold",
  },
  {
    step: 3,
    title: "Execute & Scale",
    description:
      "Follow the GPS, activate your pods, and watch the metrics move.",
    variant: "dark",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Startup team collaborating",
  },
  {
    src: "https://images.pexels.com/photos/7688160/pexels-photo-7688160.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Founder working on product",
  },
  {
    src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Team strategy session",
  },
  {
    src: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Brainstorming session",
  },
  {
    src: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Product launch meeting",
  },
  {
    src: "https://images.pexels.com/photos/1181571/pexels-photo-1181571.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Investor pitch preparation",
  },
];

export const TICKER_TEXT =
  "BUILD NOW • BUILD DIFFERENT • THINK BIGGER • MOVE FASTER • ";

// ── Founders Page ────────────────────────────────────
export const FOUNDER_STATS: HeroStat[] = [
  { value: "400+", label: "Founders" },
  { value: "50+", label: "Mentors/Advisors" },
  { value: "50+", label: "Investors" },
];

export const FOUNDER_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Apply to a Cohort",
    description:
      "Show us your stage, traction, and ambition. Every founder is reviewed — no cold pitches.",
    variant: "blue",
  },
  {
    step: 2,
    title: "Get Matched & Mapped",
    description:
      "Your Blueprint and Startup GPS pair you with the right mentors and thesis-aligned investors.",
    variant: "gold",
  },
  {
    step: 3,
    title: "Pitch the Right Room",
    description:
      "Walk into curated intros already warm. No wasted meetings, no cold outbound.",
    variant: "dark",
  },
];

// ── Investors Page ───────────────────────────────────
export const INVESTOR_STATS: HeroStat[] = [
  { value: "400+", label: "Founders" },
  { value: "50+", label: "Mentors/Advisors" },
  { value: "50+", label: "Investors" },
];

export const INVESTOR_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Set Your Thesis",
    description:
      "Stage, sector, ticket size, geography. Applied to every cohort we run.",
    variant: "blue",
  },
  {
    step: 2,
    title: "Receive Vetted Deal Notes",
    description:
      "One page per founder. GPS-scored, Blueprint-mapped. Enough to decide.",
    variant: "gold",
  },
  {
    step: 3,
    title: "Signal, We Schedule",
    description:
      "Mark interest — we handle every founder conversation from there.",
    variant: "dark",
  },
];

// ── Enablers Page ────────────────────────────────────
export const ENABLER_STATS: HeroStat[] = [
  { value: "50+", label: "Partner Programs" },
  { value: "400+", label: "Founders Tracked" },
  { value: "94%", label: "Cohort Survival Rate" },
];

export const ENABLER_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Onboard Your Cohort",
    description:
      "Nominate portfolio founders who are ready to build and raise.",
    variant: "blue",
  },
  {
    step: 2,
    title: "Track Every Metric",
    description:
      "Revenue, runway, team, milestones — one dashboard for the whole program.",
    variant: "gold",
  },
  {
    step: 3,
    title: "Report the Outcomes",
    description:
      "Know exactly who raised, who got mentored, what moved the needle.",
    variant: "dark",
  },
];

// ── About Page ───────────────────────────────────────
export const ABOUT_STATS: HeroStat[] = [
  { value: "2,400+", label: "Founders Onboarded" },
  { value: "50+", label: "Ecosystem Partners" },
  { value: "94%", label: "Survival Rate" },
];

// ── Services Page ────────────────────────────────────
export const SERVICE_STATS: HeroStat[] = [
  { value: "7", label: "Growth Pillars" },
  { value: "400+", label: "Founders Onboarded" },
  { value: "94%", label: "Survival Rate" },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "onboarding",
    number: "01",
    title: "Onboarding",
    proof: "48-Hour Verification",
    description:
      "Structured application, background checks, and orientation — plugged into the ecosystem before you know it.",
    icon: "verified",
    variant: "dark",
  },
  {
    id: "mentorship",
    number: "02",
    title: "Community & Mentorship",
    proof: "20+ Operator Mentors",
    description:
      "AI-matched 1:1 sessions and peer founder circles with people who've actually built and exited.",
    icon: "groups",
    variant: "blue",
  },
  {
    id: "pitch-deck",
    number: "03",
    title: "Pitch Deck & Business Plan",
    proof: "40%+ Sharper Pitch Score",
    description:
      "AI-assisted deck builder, financial models, and expert reviews that tighten your story before it reaches a room.",
    icon: "slideshow",
    variant: "gold",
  },
  {
    id: "product",
    number: "04",
    title: "Product Development",
    proof: "MVP In 8 Weeks",
    description:
      "Technical mentorship, no-code training, and a vetted dev network to turn the idea into something buyable.",
    icon: "construction",
    variant: "light",
  },
  {
    id: "acceleration",
    number: "05",
    title: "Acceleration Support",
    proof: "12-Week Cohorts",
    description:
      "Milestone-based curriculum, weekly check-ins, and a demo day engineered to convert.",
    icon: "rocket_launch",
    variant: "dark",
  },
  {
    id: "market-access",
    number: "06",
    title: "Market Access",
    proof: "100+ Enterprise Intros",
    description:
      "B2B introductions, GTM strategy, and sales enablement — so revenue isn't a guessing game.",
    icon: "storefront",
    variant: "blue",
  },
  {
    id: "funding",
    number: "07",
    title: "Grant, Equity & Debt Funding",
    proof: "300+ Capital Partners",
    description:
      "Government grants, angel checks, VC intros, and venture debt — mapped to your stage by the Startup GPS.",
    icon: "payments",
    variant: "gold",
  },
];

// ── Waitlist Page ────────────────────────────────────
export interface WaitlistStat {
  value: string;
  label: string;
  subtext: string;
}

export const WAITLIST_STATS: WaitlistStat[] = [
  {
    value: "₹18M+",
    label: "Capital Raised",
    subtext: "Equity · Grants · Angel",
  },
  {
    value: "2,400+",
    label: "Founders Onboarded",
    subtext: "Revenue-screened cohorts",
  },
  {
    value: "180+",
    label: "Active Investors",
    subtext: "Angels · VCs · Family Offices",
  },
  {
    value: "48hrs",
    label: "Median Intro Time",
    subtext: "Founder ↔ Investor Match",
  },
];
