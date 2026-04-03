"use client";

import * as React from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CaseCard } from "@/components/case-studies/CaseCard";
import { CaseFilters } from "@/components/case-studies/CaseFilters";
import { motion } from "framer-motion";

const CASE_STUDIES = [
  {
    id: "AS",
    title: "Amala Sky",
    description: "Digital transformation of a modern African restaurant brand. From operational strategy to custom guest management systems.",
    industry: "Food & Beverage",
    metrics: [
      { label: "Online Growth", value: "340%" },
      { label: "Guest Retention", value: "2.5x" },
    ],
    tags: ["Brand Identity", "Custom Web Ops", "Growth Engine"],
    gradient: "bg-gradient-to-br from-[#2d1a0a] to-[#1a0f05]",
    slug: "amala-sky",
  },
  {
    id: "PW",
    title: "PetWorld",
    description: "Scaling a nationwide pet care brand through automated demand generation and advanced lead scoring systems.",
    industry: "E-Commerce",
    metrics: [
      { label: "CPA Reduction", value: "48%" },
      { label: "Lead Quality", value: "3x" },
    ],
    tags: ["Marketing Ops", "Paid Media", "SEO Ops"],
    gradient: "bg-gradient-to-br from-[#0a2010] to-[#051208]",
    slug: "petworld",
  },
  {
    id: "E3",
    title: "Ekoss360",
    description: "Launch of a flexible workspace management platform. Built from stealth to a market-leading digital experience.",
    industry: "SaaS / Tech",
    metrics: [
      { label: "Waitlist Size", value: "2,500+" },
      { label: "Launch Velocity", value: "6 Weeks" },
    ],
    tags: ["Identity System", "Platform Launch", "Booking Ops"],
    gradient: "bg-gradient-to-br from-[#0a1020] to-[#060d1a]",
    slug: "ekoss360",
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filteredCases = activeFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.industry === activeFilter);

  return (
    <main className="min-h-screen bg-navy text-foreground">
      <Nav />
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b border-white/7 bg-gradient-to-b from-navy to-navy-mid">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-brand-orange/13 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end"
          >
            <div>
              <div className="section-label">Case Studies</div>
              <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mt-6">
                Venture <span className="text-brand-orange">Impact</span> <br /> 
                in <span className="text-muted">Real-Time</span>.
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="text-lg text-muted font-light leading-relaxed">
                We measure our success by the growth of our partners. Here are the outcomes we&apos;ve built for African startups and scaleups.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filterable Grid */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <CaseFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((cs) => (
              <CaseCard key={cs.id} {...cs} />
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="py-40 text-center">
              <p className="text-muted text-xl font-light">
                More case studies in <span className="text-brand-orange font-bold">{activeFilter}</span> coming soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 text-center border-t border-white/7 bg-navy">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white mb-8">
          Want results <span className="text-brand-orange">like these?</span>
        </h2>
        <p className="text-muted text-lg mb-12 max-w-2xl mx-auto font-light">
          Your transformation starts with a single conversation. Let&apos;s build your next success story.
        </p>
        <button
          className="bg-brand-orange text-white px-10 py-4 rounded-xl font-bold hover:translate-y-[-2px] transition-all shadow-xl shadow-brand-orange/20"
        >
          Book Your Discovery Call →
        </button>
      </section>

      <Footer />
    </main>
  );
}
