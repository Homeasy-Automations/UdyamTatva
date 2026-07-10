"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const CONTACT_DETAILS = [
  { icon: "mail", label: "info@udyamtatva.com" },
  { icon: "call", label: "+91 80029 00812" },
];

const inputClasses =
  "w-full border-4 border-on-background px-4 py-3 font-body text-on-surface bg-white focus:outline-none focus:border-primary transition-all duration-300";

interface ContactFormData {
  name: string;
  email: string;
  role: string;
  message: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  role?: string;
  message?: string;
}

export function ContactSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    role: "Founder",
    message: "",
  });

  const [errors, setErrors] = useState<ContactErrors>({});

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [contactId, setContactId] = useState("");

  // -------------------------
  // Live Validation
  // -------------------------

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.trim().length < 2)
          return "Enter a valid name.";
        return "";

      case "email":
        if (!value.trim()) return "Email is required.";

        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        )
          return "Invalid email address.";

        return "";

      case "role":
        if (!value.trim())
          return "Please select a role.";
        return "";

      case "message":
        if (!value.trim())
          return "Message is required.";

        if (value.trim().length < 10)
          return "Message is too short.";

        return "";

      default:
        return "";
    }
  };

  // -------------------------
  // Handle Input
  // -------------------------

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
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

  // -------------------------
  // Final Validation
  // -------------------------

  const validateForm = () => {

    const newErrors: ContactErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    else if (formData.name.trim().length < 2) {
      newErrors.name = "Enter a valid name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Invalid email address.";
    }

    if (!formData.role) {
      newErrors.role =
        "Please select a role.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Message is required.";
    }
    else if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Message should contain at least 10 characters.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  // -------------------------
  // Submit
  // -------------------------

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!validateForm()) return;

    try {

      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Something went wrong"
        );
      }

      setContactId(
        data.contactId ||
          data.applicationId ||
          ""
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        role: "Founder",
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
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="py-24 px-6 md:px-10 bg-surface-container-low overflow-hidden"
      >
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="reveal">
            <Badge variant="gold">Get In Touch</Badge>

            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mt-6 mb-6 leading-none font-headline">
              LET&apos;S <span className="text-primary">TALK.</span>
            </h2>

            <p className="text-on-surface-variant text-lg mb-10 max-w-md font-body">
              Founder, investor, or enabler — express your interest and
              we&apos;ll route you to the right entry point.
            </p>

            <div className="space-y-6">
              {CONTACT_DETAILS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4"
                >
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {c.icon}
                  </span>

                  <span className="font-bold font-body">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              shadow
              className="mt-10"
            >
              Schedule a 20-min Call
            </Button>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-1 bg-white border-4 border-on-background p-8 md:p-10 space-y-6"
          >

            {/* Name */}
            <div>

              <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                Name
              </label>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={cn(
                  inputClasses,
                  errors.name && "border-red-500",
                  !errors.name &&
                    formData.name &&
                    "border-green-500"
                )}
              />

              {errors.name && (
                <p className="text-red-600 text-xs font-bold mt-2">
                  {errors.name}
                </p>
              )}

            </div>

            {/* Email */}

            <div>

              <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                Email
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
                  !errors.email &&
                    formData.email &&
                    "border-green-500"
                )}
              />

              {errors.email && (
                <p className="text-red-600 text-xs font-bold mt-2">
                  {errors.email}
                </p>
              )}

            </div>
            {/* I am a... */}

            <div>

              <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                I am a...
              </label>

              <select
                required
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={cn(
                  inputClasses,
                  errors.role && "border-red-500",
                  !errors.role &&
                    formData.role &&
                    "border-green-500"
                )}
              >
                <option value="Founder">Founder</option>
                <option value="Investor">Investor</option>
                <option value="Enabler">Enabler</option>
              </select>

              {errors.role && (
                <p className="text-red-600 text-xs font-bold mt-2">
                  {errors.role}
                </p>
              )}

            </div>

            {/* Message */}

            <div>

              <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
                Message
              </label>

              <textarea
                required
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us where you're at."
                className={cn(
                  inputClasses,
                  errors.message && "border-red-500",
                  !errors.message &&
                    formData.message &&
                    "border-green-500"
                )}
              />

              {errors.message && (
                <p className="text-red-600 text-xs font-bold mt-2">
                  {errors.message}
                </p>
              )}

            </div>

            {/* Submit */}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              shadow
              disabled={loading}
              className={cn(
                "w-full justify-center transition-all duration-300",
                loading &&
                  "opacity-60 cursor-not-allowed"
              )}
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </Button>

          </form>

        </div>

      </section>
      {/* Success Popup */}

      {success && (
        <div
          className="
            fixed 
            inset-0 
            z-[9999] 
            flex 
            items-center 
            justify-center 
            bg-black/70
            animate-in
            fade-in
            duration-300
          "
        >

          <div
            className="
              bg-white 
              border-4 
              border-primary
              shadow-brutal-gold
              max-w-md 
              w-full 
              p-8 
              text-center
              scale-in
            "
          >

            <div
              className="
                mx-auto
                mb-5
                w-20
                h-20
                rounded-full
                border-4
                border-primary
                flex
                items-center
                justify-center
                text-4xl
                animate-bounce
              "
            >
              ✓
            </div>


            <h2
              className="
                text-3xl
                font-black
                uppercase
                mb-4
                font-headline
              "
            >
              Message Sent 🎉
            </h2>


            <p
              className="
                text-on-surface
                mb-4
                font-body
              "
            >
              Thank you for reaching out to Udyam Tatva.
              Our team will contact you soon.
            </p>


            {contactId && (
              <>
                <p
                  className="
                    text-sm
                    text-on-surface-variant
                    font-body
                  "
                >
                  Reference ID
                </p>

                <p
                  className="
                    mt-2
                    text-xl
                    font-black
                    text-primary
                  "
                >
                  {contactId}
                </p>
              </>
            )}


            <Button
              variant="primary"
              size="lg"
              shadow
              className="mt-8 w-full justify-center"
              onClick={() => setSuccess(false)}
            >
              Continue
            </Button>

          </div>

        </div>
      )}

    </>
  );
}
