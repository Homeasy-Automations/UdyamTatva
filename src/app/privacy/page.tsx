"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const sections = [
  "Introduction",
  "Information We Collect",
  "How We Use Information",
  "Cookies",
  "Data Security",
  "Sharing Information",
  "Your Rights",
  "Retention",
  "Third Party Services",
  "Children",
  "Policy Updates",
  "Contact",
];

export default function PrivacyPage() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-surface text-on-surface">

      {/* ========================= */}
      {/* Hero */}
      {/* ========================= */}

      <section className="relative overflow-hidden">

        {/* Background */}

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
              scale: [1.1, 0.95, 1.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />

        </div>

        {/* Floating Squares */}

        <div className="absolute top-36 right-20 w-24 h-24 border-4 border-primary rotate-12 opacity-20" />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary opacity-20 rotate-45" />
        <div className="absolute top-52 left-1/2 w-8 h-8 bg-secondary-container opacity-40 rotate-12" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 pt-40 pb-28">

          <motion.div

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.7
            }}

          >

            <Badge variant="gold">

              Legal

            </Badge>

            <h1 className="mt-8 text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight font-headline">

              Privacy

              <span className="text-primary block">

                Policy

              </span>

            </h1>

            <p className="mt-8 text-xl max-w-3xl text-on-surface-variant leading-9 font-body">

              Your privacy matters to us. This Privacy Policy explains how
              Udyam Tatva collects, uses, stores and protects your personal
              information while you use our platform, attend events,
              participate in programs or interact with our ecosystem.

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

              <Link href="/terms">

                <Button
                  variant="gold"
                  size="lg"
                >

                  Terms & Conditions

                </Button>

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ========================= */}
      {/* Content Layout */}
      {/* ========================= */}

      <section className="py-24">

        <div className="max-w-screen-xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16">

            {/* Sidebar Starts Here */}

            <aside>

              <motion.div

                initial={{
                  opacity:0,
                  y:20
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
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

            {/* Main Content Starts Here */}

            <div className="space-y-12">

              {/* Privacy Sections Start Here */}

                          {/* ========================= */}
            {/* Section 1 */}
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

        {/* ========================= */}
        {/* Main Content */}
        {/* ========================= */}

        <div className="space-y-10">

          {/* ========================= */}
          {/* 01 Introduction */}
          {/* ========================= */}

          <motion.section

            id="section-1"

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.5
            }}

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

              Introduction

            </h2>

            <div className="space-y-6 text-on-surface-variant leading-8 text-lg font-body">

              <p>

                Udyam Tatva, an initiative of
                <strong> Collabuilder Private Limited</strong>,
                values the trust of founders, entrepreneurs,
                investors, mentors, professionals,
                students and ecosystem partners.

              </p>

              <p>

                This Privacy Policy explains how we collect,
                use, process, store and safeguard your personal
                information whenever you interact with our
                website, events, retreats, networking programs,
                workshops, community initiatives and digital
                platforms.

              </p>

              <p>

                By accessing our website, registering for an
                event, purchasing tickets or participating in
                our ecosystem, you acknowledge that you have
                read and accepted this Privacy Policy.

              </p>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 02 Information We Collect */}
          {/* ========================= */}

          <motion.section

            id="section-2"

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.5
            }}

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

              Information We Collect

            </h2>

            <p className="text-lg text-on-surface-variant leading-8 mb-8">

              Depending on how you interact with Udyam Tatva,
              we may collect different categories of
              information including but not limited to:

            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Full Name",
                "Email Address",
                "Mobile Number",
                "Company / Startup Name",
                "Professional Role",
                "Payment Information",
                "Event Registrations",
                "Workshop Participation",
                "Networking Preferences",
                "Mentor / Investor Interests",
                "Feedback & Surveys",
                "Website Usage Analytics",
              ].map((item) => (

                <div

                  key={item}

                  className="
                    border-2
                    border-primary/20
                    bg-primary/5
                    p-5
                    rounded-xl
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

                  <span className="font-semibold text-lg">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            <div
              className="
                mt-8
                p-6
                rounded-xl
                bg-secondary-container/30
                border-l-4
                border-primary
              "
            >

              <p className="leading-8 text-on-surface-variant">

                Information is collected only where necessary
                for event management, community participation,
                networking, mentorship programs, startup
                collaborations, payments, platform improvement
                and legal compliance.

              </p>

            </div>

          </motion.section>

                    {/* ========================= */}
          {/* 03 How We Use Information */}
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
              How We Use Your Information
            </h2>

            <p className="text-lg text-on-surface-variant leading-8 mb-8">
              Udyam Tatva uses the collected information to provide a better
              experience, manage our programs and strengthen the startup
              ecosystem.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Manage event registrations and ticketing",
                "Verify participant identity",
                "Process secure payments",
                "Send confirmations and reminders",
                "Share important event updates",
                "Provide networking opportunities",
                "Match founders with mentors and investors",
                "Improve products and services",
                "Conduct surveys and collect feedback",
                "Ensure platform security",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    gap-4
                    items-start
                    border-l-4
                    border-primary
                    bg-primary/5
                    p-5
                  "
                >

                  <span className="text-primary text-xl font-black">
                    ✓
                  </span>

                  <p className="leading-7 font-medium">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 04 Cookies */}
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
              Cookies & Tracking Technologies
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                Our website may use cookies and similar technologies to
                enhance user experience, remember preferences and understand
                visitor behaviour.

              </p>

              <p>

                Cookies help us improve website performance, analyse traffic
                patterns and personalise content for visitors.

              </p>

              <p>

                You may disable cookies through your browser settings.
                However, some features of the website may not function
                correctly after disabling them.

              </p>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 05 Data Security */}
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
              Data Security
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                We implement reasonable technical, organisational and
                administrative safeguards to protect personal information
                against unauthorised access, disclosure, alteration or loss.

              </p>

              <p>

                Although we follow industry best practices, no internet
                transmission or electronic storage system can be guaranteed
                to be completely secure.

              </p>

            </div>

            <div
              className="
                mt-8
                rounded-xl
                border-2
                border-primary
                bg-primary/5
                p-6
              "
            >

              <h3 className="font-black text-xl mb-3">
                Security Measures
              </h3>

              <ul className="space-y-3 text-on-surface-variant">

                <li>• Encrypted data transmission</li>

                <li>• Secure payment processing</li>

                <li>• Restricted internal access</li>

                <li>• Continuous monitoring and updates</li>

              </ul>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 06 Sharing Information */}
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
              Sharing of Information
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-8">

              Udyam Tatva does not sell personal information.
              Information may be shared only where necessary for operating
              our platform, complying with legal obligations or delivering
              requested services.

            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Payment Gateway Partners",
                "Technology Service Providers",
                "Cloud Infrastructure",
                "Government Authorities (where legally required)",
                "Professional Advisors",
                "Event & Program Partners",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    bg-primary/5
                    border
                    border-primary/20
                    rounded-xl
                    p-5
                  "
                >

                  <p className="font-semibold">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </motion.section>

                    {/* ========================= */}
          {/* 07 Your Rights */}
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
              Your Rights
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-8">
              Depending on applicable laws, you may exercise several rights
              regarding your personal information. Udyam Tatva respects these
              rights and provides reasonable assistance whenever possible.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Access your personal information",
                "Correct inaccurate information",
                "Request deletion of personal data",
                "Withdraw consent for marketing communication",
                "Request a copy of your data",
                "Raise concerns regarding data processing",
                "Restrict processing where applicable",
                "Object to certain processing activities",
              ].map((item) => (

                <motion.div
                  key={item}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="
                    bg-primary/5
                    border
                    border-primary/20
                    rounded-xl
                    p-6
                  "
                >

                  <div className="flex gap-4 items-center">

                    <div
                      className="
                        w-12
                        h-12
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

                </motion.div>

              ))}

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 08 Data Retention */}
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
              Data Retention
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                We retain personal information only for as long as necessary
                to fulfil the purposes described in this Privacy Policy,
                including legal, operational and business requirements.

              </p>

              <p>

                Retention periods depend upon the type of information,
                applicable regulations, contractual obligations and
                legitimate business needs.

              </p>

              <p>

                Once information is no longer required, it is securely
                deleted, anonymised or archived according to our internal
                policies.

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
                Typical Retention Includes
              </h3>

              <ul className="space-y-3 text-on-surface-variant">

                <li>• Event registration records</li>

                <li>• Payment transaction history</li>

                <li>• Community participation records</li>

                <li>• Legal compliance documents</li>

                <li>• Feedback and communication history</li>

              </ul>

            </div>

          </motion.section>

          {/* ========================= 
              09 Third Party Services 
              ========================= */}

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
              Third-Party Services
            </h2>

            <p className="text-lg leading-8 text-on-surface-variant mb-8">

              Our platform may contain links to third-party websites,
              applications, payment gateways or external services.
              These services operate independently and maintain their
              own privacy practices.

            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Payment Gateway Providers",
                "Analytics Services",
                "Cloud Hosting",
                "Communication Platforms",
                "Social Media Platforms",
                "Startup Ecosystem Partners",
                "Event Management Tools",
                "Email Delivery Services",
              ].map((service) => (

                <div
                  key={service}
                  className="
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/5
                    p-6
                  "
                >

                  <h4 className="font-black mb-2">

                    {service}

                  </h4>

                  <p className="text-sm text-on-surface-variant leading-6">

                    These services may collect information according to
                    their own privacy policies and applicable laws.

                  </p>

                </div>

              ))}

            </div>

            <div className="mt-8 rounded-xl bg-secondary-container/30 p-6">

              <p className="leading-8 text-on-surface-variant">

                We encourage users to review the privacy policies of
                third-party platforms before sharing personal information
                through those services.

              </p>

            </div>

          </motion.section>

                    {/* ========================= */}
          {/* 10 Children's Privacy */}
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
              {`Children's Privacy`}
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                Udyam Tatva does not knowingly collect personal
                information from children below the age permitted under
                applicable law without appropriate parental or guardian
                consent.

              </p>

              <p>

                Our services, startup programs, founder communities,
                networking initiatives and business events are intended
                primarily for entrepreneurs, professionals, investors,
                mentors and adult participants.

              </p>

              <p>

                If we become aware that personal information has been
                collected from a child without the required consent,
                we will take reasonable steps to remove such
                information from our records.

              </p>

            </div>

            <div
              className="
                mt-8
                bg-primary/5
                border-l-4
                border-primary
                p-6
              "
            >

              <h3 className="font-black text-xl mb-3">

                Parent / Guardian Request

              </h3>

              <p className="leading-8 text-on-surface-variant">

                Parents or legal guardians who believe that a child has
                shared personal information with us may contact our team
                to request review, correction or deletion of such
                information.

              </p>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* 11 Policy Updates */}
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
              Updates To This Privacy Policy
            </h2>

            <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

              <p>

                Udyam Tatva may update this Privacy Policy from time to
                time to reflect changes in our services, operational
                practices, legal obligations or technological
                developments.

              </p>

              <p>

                Whenever significant changes are made, the revised
                version will be published on this page together with the
                updated effective date.

              </p>

              <p>

                We encourage users to review this Privacy Policy
                periodically to stay informed about how their
                information is collected, used and protected.

              </p>

            </div>

            <div
              className="
                mt-10
                grid
                md:grid-cols-3
                gap-6
              "
            >

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
                  Review Regularly
                </h4>

                <p className="text-sm text-on-surface-variant">
                  Visit this page periodically for updates.
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
                  🔒
                </div>

                <h4 className="font-black mb-2">
                  Better Protection
                </h4>

                <p className="text-sm text-on-surface-variant">
                  Policies evolve to improve transparency and security.
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
                  Updates ensure compliance with applicable laws.
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

              If you have any questions regarding this Privacy Policy,
              your personal information or your privacy rights, you may
              contact Udyam Tatva using the details below.

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

                  Need Assistance?

                </h3>

                <p className="leading-8 text-on-surface-variant">

                  Our team aims to respond to all privacy-related
                  requests within a reasonable period. Depending on the
                  nature of your request, we may require identity
                  verification before processing it.

                </p>

              </div>

            </div>

          </motion.section>

          {/* ========================= */}
          {/* Closing CTA */}
          {/* ========================= */}

          <motion.section

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

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

                Your Privacy Matters

              </p>

              <h2 className="text-5xl font-black mt-6 leading-tight">

                Thank You For
                <br />
                Trusting Udyam Tatva

              </h2>

              <p className="mt-8 text-lg text-white/90 max-w-3xl leading-8">

                {`We remain committed to protecting your privacy while
                building India's most trusted founder ecosystem.`}

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link href="/about">

                  <Button
                    variant="gold"
                    size="lg"
                  >

                    Know About Us

                  </Button>

                </Link>

                <Link href="/terms">

                  <Button
                    variant="ghost"
                    size="lg"
                  >

                    View Terms →

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