"use client";

import { motion } from "framer-motion";
import { Hammer, Target, Layers, Zap, Eye, Globe } from "lucide-react";

const WHY_US_CARDS = [
  {
    icon: Hammer,
    title: "Strategic Execution",
    description: "We don't just plan — we build. From brand architecture to automated marketing engines, every strategy we create is designed to be executed, measured, and scaled.",
  },
  {
    icon: Target,
    title: "Precision Outcomes",
    description: "Every decision is tied to a number that matters to your business. Revenue, leads, CAC, retention — not vanity metrics. We define what winning looks like before we start, and we don't stop until we get there.",
  },
  {
    icon: Layers,
    title: "Sustainable Systems",
    description: "We don't build campaigns. We build infrastructure. CRM pipelines, automation workflows, content engines, and growth systems that keep working long after our engagement ends.",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    description: "We engineer your marketing to run itself. Automated sequences, smart workflows, and connected tools — so your team spends less time on repetitive tasks and more time on what actually moves the business.",
  },
  {
    icon: Eye,
    title: "Digital Transparency",
    description: "No black boxes, no guesswork. You get full visibility into our process, your data, and your results — with dashboards and reporting that tell you exactly what's working and why.",
  },
  {
    icon: Globe,
    title: "Global Standard",
    description: "The strategic rigour of a world-class consultancy, built for the African market. We bring academic-grade thinking, international best practices, and deep Nigerian market knowledge into every engagement.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-navy py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h5 className="section-label text-brand-blue-light font-bold uppercase tracking-widest text-xs mb-4">
              Why Brands Digitals
            </h5>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white leading-tight">
              We dont just <span className="text-muted">Strategise</span>, <br />
              We <span className="text-brand-blue-light">Transform</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm font-light leading-relaxed">
            Unlike traditional agencies, we operate at the intersection of creative strategy and operational engineering. 
            We build the systems that power your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {WHY_US_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-navy-light hover:bg-navy-card transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-12 h-12 bg-white/4 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue-light/10 group-hover:text-brand-blue-light transition-colors">
                  <Icon size={24} className="text-muted group-hover:text-brand-blue-light" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {card.title}
                </h4>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
