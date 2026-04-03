"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    num: "01",
    id: "tier-1",
    title: "Digital Audit & Strategy",
    description: "We dissect your entire digital ecosystem — analytics, tech stack, competitor positioning, and customer behaviour — and deliver a transformation blueprint that tells you exactly where to focus, what to fix, and what to build next.",
  },
  {
    num: "02",
    id: "tier-2",
    title: "Brand & Digital Presence",
    description: "We rebuild how your business shows up — positioning, messaging, visual identity, and web presence — so that the first impression your brand makes is the last one a prospect needs before they reach out.",
  },
  {
    num: "03",
    id: "tier-3",
    title: "Visibility & Demand Engine",
    description: "We build the multi-channel system that puts your business in front of the right people, consistently. Paid media, SEO, and content working together — not in silos — to generate demand that compounds over time.",
  },
  {
    num: "04",
    id: "tier-4",
    title: "Conversion & Growth Systems",
    description: "We engineer the infrastructure behind your growth. CRM configuration, lead scoring, automation workflows, and full-funnel attribution — so every lead is tracked, every follow-up is triggered, and nothing falls through the cracks.",
  },
  {
    num: "05",
    id: "tier-5",
    title: "Market Launch Accelerator",
    description: "Everything a funded startup or new market entrant needs to go from zero to visible in 4–6 weeks. Brand foundation, launch-ready website, first demand channels activated, and a 90-day growth roadmap — built to move fast without cutting corners.",
  },
  {
    num: "06",
    id: "tier-6",
    title: "Deep Partnership & Support",
    description: "Your embedded digital transformation team. We sit inside your growth, not outside it — owning strategy, driving execution, and evolving your entire digital operation as your business scales.",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-navy py-24 px-6 md:px-16 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <h5 className="section-label text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">
              Our Expertise
            </h5>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white leading-tight">
              Diverse Layers of <span className="text-brand-orange">Digital</span> <br />
              <span className="text-muted">Transformation</span>.
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm font-light leading-relaxed pt-8">
            Each tier is a specialized engine designed to solve a specific scale challenge. Choose your stage, claim your impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc, idx) => (
            <Link
              key={svc.id}
              href={`/services#${svc.id}`}
              className="group p-10 bg-navy-card hover:bg-navy-light border border-white/7 hover:border-brand-orange/30 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full hover:translate-y-[-4px] shadow-lg hover:shadow-black/40"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              
              <div>
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em] mb-4 block opacity-70 group-hover:opacity-100">
                  {svc.num}
                </span>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {svc.title}
                </h4>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 group-hover:gap-4 transition-all duration-300 text-xs font-bold text-brand-orange uppercase tracking-widest">
                Learn More <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
