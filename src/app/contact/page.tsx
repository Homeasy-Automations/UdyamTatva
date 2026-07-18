"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type Reason =
  | "General Inquiry"
  | "Partnership"
  | "Investor Relations"
  | "Media & Press"
  | "Technical Support"
  | "Speaking / Event"
  | "Other";

type PreferredContact = "email" | "phone";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  reason: Reason | "";
  preferredContact: PreferredContact;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
}

/* ------------------------------------------------------------------ */
/*  Static data — swap placeholders for your real details             */
/* ------------------------------------------------------------------ */
const REASONS: Reason[] = [
  "General Inquiry",
  "Partnership",
  "Investor Relations",
  "Media & Press",
  "Technical Support",
  "Speaking / Event",
  "Other",
];

const CONTACT_STATS = [
  { value: "< 24 hrs", label: "Avg. Response Time", subtext: "On business days" },
  { value: "500+", label: "Queries Resolved", subtext: "Across founders & investors" },
  { value: "6", label: "Cities Covered", subtext: "On-ground support network" },
  { value: "7 Days", label: "We're Reachable", subtext: "Via chat & email" },
];

const CHANNELS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@udyamtatva.com",
    href: "mailto:info@udyamtatva.com",
    note: "Best for detailed queries",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    note: "Mon–Sat, 10am–7pm IST",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 80029 00812",
    href: "https://wa.me/918002900812",
    note: "Fastest response",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "New Delhi, India",
    href: "https://maps.google.com/?q=New+Delhi",
    note: "By appointment only",
  },
];

const SOCIALS = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/company/udyamtatva" },
  { icon: FaTwitter, label: "X / Twitter", href: "https://twitter.com/udyamtatva" },
  { icon: RiInstagramFill, label: "Instagram", href: "https://instagram.com/udyamtatva" },
];

const FAQS = [
  {
    q: "How fast do you actually reply?",
    a: "Most messages get a first response within 24 hours on business days. WhatsApp is fastest for time-sensitive queries.",
  },
  {
    q: "Can I visit your office in person?",
    a: "Yes — by appointment. Mention it in your message and we'll help you set up a time that works.",
  },
  {
    q: "Do you take unsolicited pitch decks?",
    a: 'Founders should apply through the waitlist instead — it routes your application directly to the right reviewer.',
  },
  {
    q: "I'm press / media — who do I talk to?",
    a: 'Select "Media & Press" as your reason above and our comms team will pick it up directly.',
  },
];

const inputClasses =
  "w-full border-4 border-on-background px-4 py-3 font-body text-on-surface focus:outline-none focus:border-primary bg-white";

/* ------------------------------------------------------------------ */
/*  Small local sub-component for the FAQ accordion                   */
/* ------------------------------------------------------------------ */
function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      className="w-full text-left border-4 border-on-background bg-white px-6 py-5"
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="font-black uppercase text-sm tracking-tight font-headline text-on-surface">
          {q}
        </h4>
        <ChevronDown
          className={cn(
            "shrink-0 text-primary transition-transform duration-300",
            open && "rotate-180"
          )}
          size={20}
        />
      </div>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-on-surface-variant text-sm font-body">{a}</p>
        </div>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  const heroRef = useScrollReveal<HTMLElement>();
  const extrasRef = useScrollReveal<HTMLElement>();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    preferredContact: "email",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Enter a valid name.";
        return "";

      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email.";
        return "";

      case "phone":
        if (!value.trim()) return "Phone is required.";
        if (!/^[6-9]\d{9}$/.test(value)) return "Enter a valid 10 digit number.";
        return "";

      case "message":
        if (!value.trim()) return "Tell us a bit about your query.";
        if (value.trim().length < 10) return "Please add a little more detail.";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Enter a valid name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10 digit mobile number.";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason for reaching out.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Tell us a bit about your query.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please add a little more detail.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setTicketId(data.ticketId);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        reason: "",
        preferredContact: "email",
        message: "",
      });

      setErrors({});

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>

        <Navbar/>
      {/* ================= HERO + FORM ================= */}
      <section
        ref={heroRef}
        className="relative bg-on-primary-fixed text-white pt-32 pb-24 px-6 md:px-10 overflow-hidden"
      >
        {/* Decorative blocks */}
        <div className="absolute top-40 left-8 w-16 h-16 bg-secondary-container opacity-20 rotate-12 hidden lg:block" />
        <div className="absolute bottom-24 left-24 w-24 h-24 border-4 border-primary opacity-20 -rotate-6 hidden lg:block" />

        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* ── Left: Pitch + Stats ── */}
          <div>
            <div className="reveal mb-6">
              <Badge variant="gold">We Reply Fast · Real Humans</Badge>
            </div>

            <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 font-headline">
              LET&apos;S START
              <br />
              A <span className="text-secondary-container">CONVERSATION.</span>
            </h1>

            <p className="reveal reveal-delay-2 text-lg md:text-xl font-medium text-surface-variant mb-4 max-w-lg font-body">
              Whether you&apos;re a founder, an investor, press, or just curious —
              <span className="text-secondary-container font-black"> we read every message.</span>
            </p>

            <p className="reveal reveal-delay-2 text-base md:text-lg text-surface-variant mb-12 max-w-lg font-body">
              Drop your details below and the right person on our team will get
              back to you — no ticket queues, no auto-replies pretending to be
              human.
            </p>

            <div className="reveal reveal-delay-3 grid grid-cols-2 gap-6">
              {CONTACT_STATS.map((stat) => (
                <div key={stat.label} className="border-l-4 border-primary pl-4">
                  <div className="text-3xl md:text-4xl font-black text-white font-headline">
                    {stat.value}
                  </div>
                  <div className="text-xs font-black uppercase tracking-widest text-secondary-container mt-1 font-body">
                    {stat.label}
                  </div>
                  <div className="text-xs text-surface-variant mt-1 font-body">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form Card ── */}
          <div className="reveal reveal-delay-1 bg-white text-on-surface border-4 border-secondary-container shadow-brutal-gold p-8 md:p-10">
            <div className="mb-2">
              <Badge variant="dark">Get In Touch</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-4 mb-3 leading-none font-headline">
              Send Us A <span className="text-primary">Message.</span>
            </h2>
            <p className="text-on-surface-variant text-sm mb-8 font-body">
              Fields marked * are required. We typically reply within one
              business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Preferred contact toggle */}
              <div className="grid grid-cols-2 gap-0">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, preferredContact: "email" }))
                  }
                  className={cn(
                    "border-4 border-on-background px-4 py-3 text-left transition-none",
                    formData.preferredContact === "email"
                      ? "bg-primary text-white"
                      : "bg-white text-on-surface"
                  )}
                >
                  <div className="font-black uppercase text-sm font-headline">
                    Reach Me By Email
                  </div>
                  <div
                    className={cn(
                      "text-[10px] uppercase tracking-widest font-bold font-body",
                      formData.preferredContact === "email"
                        ? "text-blue-100"
                        : "text-on-surface-variant"
                    )}
                  >
                    Preferred Channel
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, preferredContact: "phone" }))
                  }
                  className={cn(
                    "border-4 border-l-0 border-on-background px-4 py-3 text-left transition-none",
                    formData.preferredContact === "phone"
                      ? "bg-primary text-white"
                      : "bg-white text-on-surface"
                  )}
                >
                  <div className="font-black uppercase text-sm font-headline">
                    Reach Me By Phone
                  </div>
                  <div
                    className={cn(
                      "text-[10px] uppercase tracking-widest font-bold font-body",
                      formData.preferredContact === "phone"
                        ? "text-blue-100"
                        : "text-on-surface-variant"
                    )}
                  >
                    Preferred Channel
                  </div>
                </button>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={cn(
                    inputClasses,
                    errors.name && "border-red-500",
                    !errors.name && formData.name && "border-green-500"
                  )}
                />
                {errors.name && (
                  <p className="text-red-600 text-xs font-bold mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email + Mobile */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@startup.com"
                    className={cn(
                      inputClasses,
                      errors.email && "border-red-500",
                      !errors.email && formData.email && "border-green-500"
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs font-bold mt-2">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                    Mobile *
                  </label>
                  <div className="flex">
                    <span className="flex items-center px-4 border-4 border-r-0 border-on-background bg-surface-container-low font-black font-headline">
                      +91
                    </span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "").slice(0, 10);

                        setFormData((prev) => ({
                          ...prev,
                          phone: value,
                        }));

                        setErrors((prev) => ({
                          ...prev,
                          phone:
                            value.length === 0
                              ? "Phone number is required."
                              : value.length !== 10
                              ? "Enter a valid 10 digit mobile number."
                              : "",
                        }));
                      }}
                      placeholder="98765 43210"
                      className={cn(
                        inputClasses,
                        errors.phone && "border-red-500",
                        !errors.phone && formData.phone && "border-green-500"
                      )}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-600 text-xs font-bold mt-2">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Company + Reason */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                    Company / Firm
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Optional"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                    Reason For Contact *
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className={cn(inputClasses, errors.reason && "border-red-500")}
                  >
                    <option value="">Select reason</option>
                    {REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.reason && (
                    <p className="text-red-600 text-xs font-bold mt-2">{errors.reason}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind — the more context, the faster we can help."
                  className={cn(inputClasses, errors.message && "border-red-500")}
                />
                {errors.message && (
                  <p className="text-red-600 text-xs font-bold mt-2">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                shadow
                disabled={loading}
                className={cn("w-full justify-center", loading && "opacity-60 cursor-not-allowed")}
              >
                {loading ? "Sending..." : "Send Message →"}
              </Button>

              <p className="text-xs text-on-surface-variant font-body">
                By sending this message you agree to Udyam Tatva&apos;s Terms
                &amp; Privacy Policy.
              </p>

              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant border-t-2 border-outline-variant pt-4 font-body">
                We typically respond within 24 hours on business days.
              </p>
            </form>
          </div>
        </div>

        {success && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
            <div className="bg-white border-4 border-secondary-container shadow-brutal-gold max-w-md w-full p-8 text-center">
              <h2 className="text-3xl font-black uppercase mb-4">✅ Message Sent</h2>
              <p className="text-on-surface mb-3">
                Thanks for reaching out — our team will get back to you shortly.
              </p>
              <p className="text-sm text-on-surface-variant">Reference ID</p>
              <p className="font-black text-primary text-lg mt-2">{ticketId}</p>
              <Button variant="gold" className="mt-8 w-full" onClick={() => setSuccess(false)}>
                Continue
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* ================= EXTRAS ================= */}
      <section
        ref={extrasRef}
        className="relative bg-surface-container-low text-on-surface py-24 px-6 md:px-10 overflow-hidden"
      >
        <div className="max-w-screen-xl mx-auto">
          {/* ── Direct Channels ── */}
          <div className="reveal mb-6">
            <Badge variant="dark">Other Ways To Reach Us</Badge>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12 font-headline">
            Pick Whatever&apos;s <span className="text-primary">Easiest.</span>
          </h2>

          <div className="reveal reveal-delay-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group border-4 border-on-background bg-white p-6 flex flex-col gap-4 hover:bg-primary hover:text-white transition-none"
              >
                <channel.icon
                  size={28}
                  className="text-primary group-hover:text-secondary-container transition-none"
                />
                <div>
                  <div className="text-xs font-black uppercase tracking-widest font-headline">
                    {channel.label}
                  </div>
                  <div className="font-bold text-sm mt-1 font-body break-words">
                    {channel.value}
                  </div>
                  <div className="text-xs mt-1 opacity-70 font-body">{channel.note}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* ── Office / Map card ── */}
            <div className="reveal reveal-delay-1">
              <Badge variant="gold">Our Base</Badge>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-4 mb-5 font-headline">
                Find Us <span className="text-primary">On The Map.</span>
              </h3>

              <div className="border-4 border-on-background bg-on-primary-fixed aspect-video w-full relative overflow-hidden mb-6">
                {/* Replace src with your real Google Maps embed URL */}
                <iframe
                  title="Udyam Tatva office location"
                  src="https://maps.google.com/maps?q=New+Delhi&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex items-start gap-3 border-l-4 border-primary pl-4">
                <Clock className="text-primary shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-on-surface-variant font-body">
                  Monday – Saturday, 10:00 AM – 7:00 PM IST. Closed on public
                  holidays.
                </p>
              </div>
            </div>

            {/* ── Socials + FAQ ── */}
            <div className="reveal reveal-delay-2 space-y-10">
              <div>
                <Badge variant="gold">Stay In The Loop</Badge>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-4 mb-5 font-headline">
                  Follow <span className="text-primary">Along.</span>
                </h3>
                <div className="flex gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="border-4 border-on-background bg-white p-3 hover:bg-primary hover:text-white transition-none"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-5 font-headline">
                  Quick <span className="text-primary">Answers.</span>
                </h3>
                <div className="space-y-4">
                  {FAQS.map((faq) => (
                    <FaqRow key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}