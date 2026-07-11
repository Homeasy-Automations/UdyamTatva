"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const sections = [
  "Acceptance of Terms",
  "Eligibility",
  "Registration & Accounts",
  "Events & Programs",
  "Payments & Refunds",
  "Intellectual Property",
  "Code of Conduct",
  "Limitation of Liability",
  "Termination",
  "Governing Law",
  "Changes to Terms",
  "Contact Information",
];

export default function TermsPage() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-surface text-on-surface">

      {/* ================================= */}
      {/* Hero Section */}
      {/* ================================= */}

      <section className="relative overflow-hidden">

        {/* Animated Background */}

        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-primary/10" />

          <motion.div
            className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full bg-primary/10 blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary-container/30 blur-[120px]"
            animate={{
              scale: [1.05, 0.95, 1.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />

        </div>

        {/* Decorative Blocks */}

        <div className="absolute top-36 right-20 w-24 h-24 border-4 border-primary rotate-12 opacity-20" />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary opacity-20 rotate-45" />
        <div className="absolute top-52 left-1/2 w-8 h-8 bg-secondary-container opacity-40 rotate-12" />

        {/* Hero Content */}

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 pt-40 pb-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <Badge variant="gold">

              Legal

            </Badge>

            <h1 className="mt-8 text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] font-headline">

              Terms &

              <span className="block text-primary">

                Conditions

              </span>

            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-on-surface-variant font-body">

              These Terms & Conditions govern your use of the Udyam Tatva
              platform, events, founder programs, networking initiatives,
              mentorship opportunities and all related services. By using
              our platform, you agree to comply with these terms.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Badge variant="dark">

                Effective: July 09, 2026

              </Badge>

              <Badge variant="gold">

                Last Updated: July 09, 2026

              </Badge>

            </div>

            <div className="flex flex-wrap gap-4 mt-12">

              <Link href="/">

                <Button
                  variant="primary"
                  size="lg"
                  shadow
                >

                  ← Back Home

                </Button>

              </Link>

              <Link href="/privacy">

                <Button
                  variant="ghost"
                  size="lg"
                >

                  Privacy Policy

                </Button>

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================================= */}
      {/* Main Layout */}
      {/* ================================= */}

      <section className="py-24">

        <div className="max-w-screen-xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16">

            {/* Sidebar */}

            <aside>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  sticky
                  top-32
                  bg-surface-container
                  border-4
                  border-on-background
                  p-8
                "
              >

                <p className="font-black uppercase tracking-widest text-sm mb-6">

                  Contents

                </p>

                {/* Navigation starts in Part 2 */}

              </motion.div>

            </aside>

            {/* Main Content */}

            <div className="space-y-12">

              {/* Terms Sections Start Here */}
                          {/* ========================= */}
            {/* Sidebar Navigation */}
            {/* ========================= */}

            {sections.map((item, index) => (
              <a
                key={item}
                href={`#section-${index + 1}`}
                className="
                  block
                  py-3
                  text-sm
                  font-bold
                  uppercase
                  tracking-widest
                  text-on-surface-variant
                  hover:text-primary
                  transition-all
                "
              >
                {(index + 1).toString().padStart(2, "0")} · {item}
              </a>
            ))}

          </div>

        </div>

        {/* ================================= */}
        {/* Main Content */}
        {/* ================================= */}

        <div className="space-y-10">

          {/* ========================= */}
          {/* 01 Acceptance of Terms */}
          {/* ========================= */}

          <motion.section
            id="section-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              01
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Acceptance of Terms
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                By accessing, browsing, registering for, or participating
                in any service, event, networking session, founder
                program or initiative offered by Udyam Tatva, you agree
                to be legally bound by these Terms & Conditions.

              </p>

              <p>

                If you do not agree with any provision of these Terms,
                you should discontinue use of the platform and refrain
                from participating in our services.

              </p>

              <p>

                Continued use of our website or participation in any
                activity constitutes your acceptance of these Terms.

              </p>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 02 Eligibility */}
          {/* ========================= */}

          <motion.section
            id="section-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              02
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Eligibility
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-8">

              To participate in Udyam Tatva programs and services,
              users must satisfy the following eligibility criteria.

            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Be legally capable of entering into contracts.",
                "Provide accurate registration information.",
                "Use the platform for lawful purposes.",
                "Maintain respectful conduct during events.",
                "Comply with applicable laws and regulations.",
                "Accept these Terms & Conditions.",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    border-2
                    border-primary/20
                    bg-primary/5
                    rounded-xl
                    p-6
                    flex
                    items-center
                    gap-4
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-primary
                      text-white
                      flex
                      items-center
                      justify-center
                      font-black
                    "
                  >
                    ✓
                  </div>

                  <p className="font-semibold leading-7">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 03 Registration & Accounts */}
          {/* ========================= */}

          <motion.section
            id="section-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              03
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Registration & Accounts
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                Certain services, workshops, founder programs and events
                require users to register by providing accurate and
                complete information.

              </p>

              <p>

                You are responsible for maintaining the confidentiality
                of your account details and for all activities carried
                out using your registration.

              </p>

              <p>

                Udyam Tatva reserves the right to suspend or terminate
                registrations found to contain inaccurate, misleading,
                fraudulent or incomplete information.

              </p>

            </div>

            <div
              className="
                mt-8
                bg-secondary-container/30
                border-l-4
                border-primary
                p-6
              "
            >

              <h3 className="font-black text-xl mb-3">

                Your Responsibility

              </h3>

              <p className="leading-8 text-on-surface-variant">

                Keep your contact information updated, protect your
                account credentials and notify us immediately if you
                suspect any unauthorized use of your account.

              </p>

            </div>

          </motion.section>

                    {/* ========================= */}
          {/* 04 Events & Programs */}
          {/* ========================= */}

          <motion.section
            id="section-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              04
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Events & Programs
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-8">

              Udyam Tatva organizes startup events, networking sessions,
              workshops, retreats, founder circles, mentorship programs
              and other initiatives designed to strengthen the
              entrepreneurial ecosystem.

            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Registration may be mandatory for selected events.",
                "Event schedules may change due to operational reasons.",
                "Entry may require identity verification.",
                "Participants must follow event guidelines.",
                "Photography and videography may take place.",
                "Violation of rules may result in removal.",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/5
                    p-6
                    flex
                    gap-4
                    items-start
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-primary
                      text-white
                      flex
                      items-center
                      justify-center
                      font-black
                      shrink-0
                    "
                  >
                    ✓
                  </div>

                  <p className="leading-7 font-medium">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 05 Payments & Refunds */}
          {/* ========================= */}

          <motion.section
            id="section-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              05
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Payments & Refunds
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                Certain programs, events or premium services offered by
                Udyam Tatva may require payment of applicable fees.

              </p>

              <p>

                Payments are processed through secure third-party payment
                providers. Udyam Tatva does not store complete payment
                card information.

              </p>

              <p>

                Refund eligibility, cancellation timelines and transfer
                policies will be communicated individually for each
                event or service.

              </p>

            </div>

            <div
              className="
                mt-8
                border-l-4
                border-primary
                bg-primary/5
                p-6
              "
            >

              <h3 className="font-black text-xl mb-4">

                Important Notice

              </h3>

              <p className="leading-8 text-on-surface-variant">

                Unless otherwise stated for a specific event, completed
                registrations may be non-refundable after confirmation.
                Users should carefully review payment terms before
                making a purchase.

              </p>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 06 Intellectual Property */}
          {/* ========================= */}

          <motion.section
            id="section-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              06
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Intellectual Property
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-8">

              All content available through Udyam Tatva—including text,
              branding, graphics, event materials, designs, videos,
              presentations, trademarks and digital assets—is owned by
              or licensed to Udyam Tatva unless otherwise stated.

            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Logos & Branding",
                "Website Design",
                "Articles & Publications",
                "Workshop Materials",
                "Presentations",
                "Videos & Media",
                "Community Resources",
                "Digital Downloads",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    bg-primary/5
                    border
                    border-primary/20
                    rounded-xl
                    p-6
                  "
                >

                  <h4 className="font-black mb-2">

                    {item}

                  </h4>

                  <p className="text-sm text-on-surface-variant leading-6">

                    Unauthorized reproduction, distribution,
                    modification or commercial use is prohibited without
                    prior written permission.

                  </p>

                </div>

              ))}

            </div>

          </motion.section>

                    {/* ========================= */}
          {/* 07 Code of Conduct */}
          {/* ========================= */}

          <motion.section
            id="section-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              07
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Code of Conduct
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-8">

              Udyam Tatva is committed to creating a professional,
              inclusive and respectful environment for founders,
              investors, mentors, speakers, partners and every member of
              our community.

            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Treat every participant with respect and professionalism.",
                "Avoid harassment, discrimination or abusive behaviour.",
                "Respect everyone's opinions and viewpoints.",
                "Do not misuse networking opportunities for spam.",
                "Comply with instructions issued by organizers.",
                "Protect confidential information shared during programs.",
                "Follow venue safety and security guidelines.",
                "Maintain ethical business practices.",
              ].map((rule) => (

                <motion.div
                  key={rule}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="
                    rounded-xl
                    bg-primary/5
                    border
                    border-primary/20
                    p-6
                    flex
                    gap-4
                    items-start
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-primary
                      text-white
                      flex
                      items-center
                      justify-center
                      font-black
                      shrink-0
                    "
                  >
                    ✓
                  </div>

                  <p className="leading-7 font-medium">

                    {rule}

                  </p>

                </motion.div>

              ))}

            </div>

            <div
              className="
                mt-10
                bg-secondary-container/30
                border-l-4
                border-primary
                p-6
              "
            >

              <h3 className="font-black text-xl mb-4">

                Violation of Conduct

              </h3>

              <p className="leading-8 text-on-surface-variant">

                Udyam Tatva reserves the right to remove any participant
                from an event, program or community if their behaviour
                negatively affects other members or violates these
                standards.

              </p>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 08 Limitation of Liability */}
          {/* ========================= */}

          <motion.section
            id="section-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              08
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Limitation of Liability
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                Udyam Tatva makes reasonable efforts to provide accurate
                information, quality programs and reliable services.
                However, we do not guarantee uninterrupted availability
                or error-free operation.

              </p>

              <p>

                Participation in events, networking sessions,
                mentorships, startup collaborations or investment
                discussions is voluntary and undertaken at your own
                discretion.

              </p>

              <p>

                To the maximum extent permitted by law, Udyam Tatva
                shall not be liable for indirect, incidental, special,
                consequential or punitive damages arising from the use
                of our services.

              </p>

            </div>

            <div
              className="
                mt-10
                rounded-xl
                border-2
                border-primary
                bg-primary/5
                p-6
              "
            >

              <h3 className="font-black text-xl mb-3">

                Disclaimer

              </h3>

              <p className="leading-8 text-on-surface-variant">

                Startup success, investment outcomes, partnerships,
                business growth and commercial results depend upon many
                external factors and cannot be guaranteed by Udyam
                Tatva.

              </p>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 09 Termination */}
          {/* ========================= */}

          <motion.section
            id="section-9"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              09
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Termination of Access
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-8">

              Udyam Tatva reserves the right to suspend, restrict or
              permanently terminate access to its website, services,
              events or community platforms where a user violates these
              Terms & Conditions or applicable laws.

            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Submission of false information",
                "Fraudulent activity",
                "Violation of community standards",
                "Harassment of participants",
                "Misuse of intellectual property",
                "Security threats or unauthorized access",
              ].map((reason) => (

                <div
                  key={reason}
                  className="
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/5
                    p-6
                  "
                >

                  <h4 className="font-black mb-2">

                    {reason}

                  </h4>

                  <p className="text-sm text-on-surface-variant leading-6">

                    Such actions may result in immediate suspension or
                    permanent removal from Udyam Tatva services without
                    prior notice where permitted by law.

                  </p>

                </div>

              ))}

            </div>

          </motion.section>

                    {/* ========================= */}
          {/* 10 Governing Law */}
          {/* ========================= */}

          <motion.section
            id="section-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              10
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Governing Law
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                These Terms & Conditions shall be governed by and
                interpreted in accordance with the laws of India,
                without regard to its conflict of law principles.

              </p>

              <p>

                Any disputes arising out of or relating to these Terms,
                the use of our platform or participation in Udyam Tatva
                programs shall be subject to the exclusive jurisdiction
                of the competent courts located in Bihar, India.

              </p>

              <p>

                Before initiating formal legal proceedings, both parties
                agree to make reasonable efforts to resolve disputes
                through good-faith discussions wherever possible.

              </p>

            </div>

            <div
              className="
                mt-8
                border-l-4
                border-primary
                bg-primary/5
                p-6
              "
            >

              <h3 className="font-black text-xl mb-3">

                Jurisdiction

              </h3>

              <p className="leading-8 text-on-surface-variant">

                All legal proceedings, claims and disputes shall be
                governed under the applicable laws of the Republic of
                India.

              </p>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 11 Changes to Terms */}
          {/* ========================= */}

          <motion.section
            id="section-11"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              11
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Changes to These Terms
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                Udyam Tatva reserves the right to revise, modify or
                update these Terms & Conditions whenever necessary to
                reflect operational improvements, legal requirements,
                technological developments or new services.

              </p>

              <p>

                Updated versions will become effective immediately after
                publication on this website unless otherwise specified.

              </p>

              <p>

                Continued use of our website, founder programs, events,
                community platforms or related services after updates
                constitutes acceptance of the revised Terms.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <div
                className="
                  rounded-xl
                  border
                  border-primary/20
                  bg-primary/5
                  p-6
                  text-center
                "
              >

                <div className="text-4xl mb-4">
                  📅
                </div>

                <h4 className="font-black mb-2">

                  Stay Updated

                </h4>

                <p className="text-sm text-on-surface-variant">

                  Review this page periodically for any updates.

                </p>

              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-primary/20
                  bg-primary/5
                  p-6
                  text-center
                "
              >

                <div className="text-4xl mb-4">
                  ⚖️
                </div>

                <h4 className="font-black mb-2">

                  Legal Compliance

                </h4>

                <p className="text-sm text-on-surface-variant">

                  Updates help ensure compliance with applicable laws.

                </p>

              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-primary/20
                  bg-primary/5
                  p-6
                  text-center
                "
              >

                <div className="text-4xl mb-4">
                  🚀
                </div>

                <h4 className="font-black mb-2">

                  Better Experience

                </h4>

                <p className="text-sm text-on-surface-variant">

                  Improvements reflect the growth of the Udyam Tatva
                  ecosystem.

                </p>

              </div>

            </div>

          </motion.section>

                    {/* ========================= */}
          {/* 12 Contact Information */}
          {/* ========================= */}

          <motion.section
            id="section-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-surface-container
              border-4
              border-on-background
              p-10
            "
          >

            <p className="text-primary font-black text-sm tracking-[0.35em] uppercase">
              12
            </p>

            <h2 className="text-4xl font-black mt-4 mb-8 font-headline">
              Contact Information
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-10">
              If you have any questions regarding these Terms &
              Conditions or any of our services, please contact us using
              the information below.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

              <div
                className="
                  bg-primary/5
                  border
                  border-primary/20
                  rounded-xl
                  p-8
                "
              >

                <h3 className="font-black text-2xl mb-6">
                  Contact Details
                </h3>

                <div className="space-y-5 text-on-surface-variant">

                  <p>
                    <strong>Organization</strong>
                    <br />
                    Udyam Tatva
                  </p>

                  <p>
                    <strong>Email</strong>
                    <br />
                    info@udyamtatva.com
                  </p>

                  <p>
                    <strong>Phone</strong>
                    <br />
                    +91 80029 00812
                  </p>

                  <p>
                    <strong>Website</strong>
                    <br />
                    https://udyamtatva.com
                  </p>

                </div>

              </div>

              <div
                className="
                  bg-secondary-container/30
                  rounded-xl
                  p-8
                  border-l-4
                  border-primary
                "
              >

                <h3 className="font-black text-2xl mb-6">
                  Need Help?
                </h3>

                <p className="leading-8 text-on-surface-variant">

                  We aim to respond to all legal, compliance and policy
                  related enquiries as quickly as possible. Please
                  include sufficient details in your message so our team
                  can assist you effectively.

                </p>

              </div>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* Closing CTA */}
          {/* ========================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-20
              rounded-[32px]
              bg-gradient-to-r
              from-primary
              to-green-700
              text-white
              p-12
              overflow-hidden
              relative
            "
          >

            <div className="relative z-10">

              <p className="uppercase tracking-[0.35em] text-sm font-bold">
                Udyam Tatva
              </p>

              <h2 className="text-5xl font-black mt-6 leading-tight">
                {`Building India's`}
                <br />
                Founder Ecosystem
              </h2>

              <p className="mt-8 text-lg text-white/90 max-w-3xl leading-8">

                {`Thank you for being part of the Udyam Tatva community.
                Together we're empowering entrepreneurs, startups,
                investors and innovators to build the future.`}

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    shadow
                  >
                    Contact Us
                  </Button>
                </Link>

                <Link href="/privacy">
                  <Button
                    variant="ghost"
                    size="lg"
                  >
                    Privacy Policy →
                  </Button>
                </Link>

              </div>

            </div>

          </motion.section>

        </div>

      </div>
      </section>
   
</main>
<Footer/>
   </>
);
}