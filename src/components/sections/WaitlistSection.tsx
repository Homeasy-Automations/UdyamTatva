"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { WAITLIST_STATS } from "@/lib/data";

type Role = "founder" | "investor";

interface FormData {
  role: Role;
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  revenue: string;
  stage: string;
  sectors: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  website?: string;
  revenue?: string;
  stage?: string;
}

const REVENUE_RANGES = [
  "Pre-revenue",
  "₹0 – ₹50L",
  "₹50L – ₹2Cr",
  "₹2Cr – ₹10Cr",
  "₹10Cr – ₹50Cr",
  "₹50Cr+",
];

const STAGE_OPTIONS = [
  "Idea / MVP",
  "Early Revenue",
  "Growth",
  "Profitable",
  "Scaling",
];

const SECTORS = [
  "D2C",
  "SaaS",
  "Fintech",
  "Agritech",
  "Manufacturing",
  "Healthtech",
  "Consumer",
  "Other",
];

const inputClasses =
  "w-full border-4 border-on-background px-4 py-3 font-body text-on-surface focus:outline-none focus:border-primary bg-white";

export function WaitlistSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  const [role, setRole] = useState<Role>("founder");
  
  const [formData, setFormData] = useState<FormData>({
    role: "founder",
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    revenue: "",
    stage: "",
    sectors: [],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [applicationId, setApplicationId] = useState("");

  const toggleSector = (sector: string) => {
    setFormData((prev) => {
      const updated = prev.sectors.includes(sector)
        ? prev.sectors.filter((s) => s !== sector)
        : [...prev.sectors, sector];

      return {
        ...prev,
        sectors: updated,
      };
    });
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Enter a valid name.";
        return "";

      case "email":
        if (!value.trim()) return "Email is required.";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Invalid email.";

        return "";

      case "phone":
        if (!value.trim()) return "Phone is required.";

        if (!/^[6-9]\d{9}$/.test(value))
          return "Enter a valid 10 digit number.";

        return "";

      case "company":
        if (!value.trim()) return "Company name is required.";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      newErrors.name = "Full Name is required.";
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

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required.";
    }

    if (role === "founder") {
      if (!formData.revenue) {
        newErrors.revenue = "Please select revenue.";
      }

      if (!formData.stage) {
        newErrors.stage = "Please select stage.";
      }
    }

    if (formData.website.trim()) {
      try {
        new URL(
          formData.website.startsWith("http")
            ? formData.website
            : `https://${formData.website}`
        );
      } catch {
        newErrors.website = "Enter a valid website.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/waitlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            role,
            website: formData.website
              ? formData.website.startsWith("http")
                ? formData.website
                : `https://${formData.website}`
              : ""
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setApplicationId(data.applicationId);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

      setRole("founder");

      setFormData({
        role: "founder",
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        revenue: "",
        stage: "",
        sectors: [],
        message: "",
      });

      setErrors({});
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } 
    catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-on-primary-fixed text-white pt-32 pb-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative blocks */}
      <div className="absolute top-40 left-8 w-16 h-16 bg-secondary-container opacity-20 rotate-12 hidden lg:block" />
      <div className="absolute bottom-24 left-24 w-24 h-24 border-4 border-primary opacity-20 -rotate-6 hidden lg:block" />

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* ── Left: Pitch + Stats ── */}
        <div>
          <div className="reveal mb-6">
            <Badge variant="gold">Early Access · Cohort 7 Onboarding</Badge>
          </div>

          <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 font-headline">
            WHERE BUILDERS MEET
            <br />
            THE RIGHT <span className="text-secondary-container">CAPITAL.</span>
          </h1>

          <p className="reveal reveal-delay-2 text-lg md:text-xl font-medium text-surface-variant mb-4 max-w-lg font-body">
            <span className="text-secondary-container font-black">50+</span>{" "}
            raised on the platform ·{" "}
            <span className="text-secondary-container font-black">50+</span>{" "}
            vetted investors · Curated, revenue-first deal flow.
          </p>

          <p className="reveal reveal-delay-2 text-base md:text-lg text-surface-variant mb-12 max-w-lg font-body">
            Udyam Tatva is the deal infrastructure where revenue-first founders
            meet thesis-aligned investors — no pitch-deck dreamers, no cold
            outbound. Request early access below.
          </p>

          <div className="reveal reveal-delay-3 grid grid-cols-2 gap-6">
            {WAITLIST_STATS.map((stat) => (
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
            <Badge variant="dark">Platform Access</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-4 mb-3 leading-none font-headline">
            Request Your <span className="text-primary">Access.</span>
          </h2>
          <p className="text-on-surface-variant text-sm mb-8 font-body">
            Tell us who you are. Udyam Tatva opens to founders and investors in
            cohorts — the waitlist decides who gets onboarded first.
          </p>

          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Role Toggle */}
            <div className="grid grid-cols-2 gap-0">
              <button
                type="button"
                onClick={() => {
                  setRole("founder");

                  setFormData((prev)=>({
                    ...prev,
                    role:"founder"
                  }));
                }}
                className={cn(
                  "border-4 border-on-background px-4 py-3 text-left transition-none",
                  role === "founder"
                    ? "bg-primary text-white"
                    : "bg-white text-on-surface"
                )}
              >
                <div className="font-black uppercase text-sm font-headline">
                  I&apos;m a Founder
                </div>
                <div
                  className={cn(
                    "text-[10px] uppercase tracking-widest font-bold font-body",
                    role === "founder" ? "text-blue-100" : "text-on-surface-variant"
                  )}
                >
                  Building &amp; Raising
                </div>
              </button>
              <button
                type="button"
                onClick={() => {
                  setRole("investor");

                  setFormData((prev)=>({
                    ...prev,
                    role:"investor"
                  }));
                }}
                className={cn(
                  "border-4 border-l-0 border-on-background px-4 py-3 text-left transition-none",
                  role === "investor"
                    ? "bg-primary text-white"
                    : "bg-white text-on-surface"
                )}
              >
                <div className="font-black uppercase text-sm font-headline">
                  I&apos;m an Investor
                </div>
                <div
                  className={cn(
                    "text-[10px] uppercase tracking-widest font-bold font-body",
                    role === "investor" ? "text-blue-100" : "text-on-surface-variant"
                  )}
                >
                  Backing &amp; Deploying
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
              <p className="text-red-600 text-xs font-bold mt-2">
                {errors.name}
              </p>
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
                <p className="text-red-600 text-xs font-bold mt-2">
                  {errors.email}
                </p>
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
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

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
                      !errors.phone &&
                      formData.phone &&
                      "border-green-500"
                    )}
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-600 text-xs font-bold mt-2">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Startup Name + Website */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Startup Name */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                  {role === "founder" ? "Startup Name *" : "Firm Name *"}
                </label>

                <input
                  required
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={cn(
                    inputClasses,
                    errors.company && "border-red-500",
                    !errors.company &&
                    formData.company &&
                    "border-green-500"
                  )}
                />

                {errors.company && (
                  <p className="text-red-600 text-xs font-bold mt-2">
                    {errors.company}
                  </p>
                )}
              </div>


              {/* Website */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                  Website
                </label>

                <input
                  required
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="yourstartup.com"
                  className={cn(
                    inputClasses,
                    errors.website && "border-red-500"
                  )}
                />

                {errors.website && (
                  <p className="text-red-600 text-xs font-bold mt-2">
                    {errors.website}
                  </p>
                )}
              </div>

            </div>

            {role === "founder" && (
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                    Annual Revenue *
                  </label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className={cn(
                      inputClasses,
                      errors.revenue && "border-red-500"
                    )}
                  >
                    <option value="">Select range</option>
                    {REVENUE_RANGES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.revenue && (
                    <p className="text-red-600 text-xs font-bold mt-2">
                    {errors.revenue}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                    Stage *
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className={cn(
                      inputClasses,
                      errors.stage && "border-red-500"
                    )}
                  >
                    <option value="">Select stage</option>
                    {STAGE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.stage && (
                    <p className="text-red-600 text-xs font-bold mt-2">
                    {errors.stage}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Sector chips */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-3 font-headline">
                Sector
              </label>
              <div className="flex flex-wrap gap-2">
                {SECTORS.map((sector) => (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => toggleSector(sector)}
                    className={cn(
                      "border-4 px-4 py-2 text-xs font-black uppercase tracking-widest transition-none",
                      formData.sectors.includes(sector)
                        ? "bg-secondary-container border-secondary-container text-on-secondary-container"
                        : "bg-white border-on-background text-on-surface"
                    )}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                {role === "founder" ? "What Are You Building?" : "What's Your Thesis?"}
              </label>
              <textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  role === "founder"
                  ? "One or two lines on the business, traction, and what you're raising."
                  : "Stage, sector, ticket size — what you're looking to deploy into."
                }
                className={inputClasses}
              />
            </div>
            <Button
              type="submit"
              variant="gold"
              size="lg"
              shadow
              disabled={loading}
              className={cn(
                "w-full justify-center",
                loading && "opacity-60 cursor-not-allowed"
              )}
            >
            {loading
              ? "Submitting..."
              : "Request Early Access →"
            }
            </Button>

            <p className="text-xs text-on-surface-variant font-body">
              No fee to join the waitlist. By requesting access you agree to
              Udyam Tatva&apos;s Terms &amp; Privacy Policy.
            </p>

            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant border-t-2 border-outline-variant pt-4 font-body">
              2,400+ founders &amp; investors already on the early-access list.
            </p>
          </form>
        </div>
      </div>
      {success && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
          <div className="bg-white border-4 border-secondary-container shadow-brutal-gold max-w-md w-full p-8 text-center">
            <h2 className="text-3xl font-black uppercase mb-4">
              🎉 Application Submitted
            </h2>
            <p className="text-on-surface mb-3">
              Welcome to the Udyam Tatva Early Access waitlist.
            </p>
            <p className="text-sm text-on-surface-variant">
              Application ID
            </p>
            <p className="font-black text-primary text-lg mt-2">
              {applicationId}
            </p>
            <Button
              variant="gold"
              className="mt-8 w-full"
              onClick={() => setSuccess(false)}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
