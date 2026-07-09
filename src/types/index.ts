// ── Navigation ──────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ── Hero ─────────────────────────────────────────────
export interface HeroStat {
  value: string;
  label: string;
}

// ── Features ─────────────────────────────────────────
export type FeatureSize = "large" | "medium" | "small";
export type CardVariant = "dark" | "blue" | "gold" | "light";

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  badge?: string;
  icon: string;
  size: FeatureSize;
  variant: CardVariant;
  cta?: {
    label: string;
    href: string;
  };
  stats?: Array<{ value: string; label: string }>;
  hasVideo?: boolean;
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
}

// ── Testimonials ─────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarSrc: string;
  variant: "white" | "blue" | "gold";
  rotation: "cw" | "ccw" | "neutral";
}

// ── How it Works ─────────────────────────────────────
export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  variant: "blue" | "gold" | "dark";
}

// ── Gallery ──────────────────────────────────────────
export interface GalleryImage {
  src: string;
  alt: string;
}

// ── Stats ────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}

// ── Services ─────────────────────────────────────────
export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  proof: string;
  description: string;
  icon: string;
  variant: CardVariant;
}
