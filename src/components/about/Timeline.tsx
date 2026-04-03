"use client";

import { motion } from "framer-motion";

const TIMELINE_ITEMS = [
  {
    year: "2019",
    title: "The Foundation",
    description: "Mercien starts consulting for Lagos-based tech ventures, focusing on digital presence and early growth metrics.",
  },
  {
    year: "2021",
    title: "Brands Digitals Born",
    description: "Official launch of the agency with a mission to bridge the gap between creative strategy and operational engineering.",
  },
  {
    year: "2022",
    title: "Venture Impact",
    description: "Successfully scaled 3 Fintech startups to their Seed and Series A rounds through integrated growth operations.",
  },
  {
    year: "2024",
    title: "Operational Expansion",
    description: "Expanded our internal capabilities to include full RevOps automation and transformation retainers for scaleups.",
  },
  {
    year: "2025",
    title: "Digital Transformation Leader",
    description: "Now serving as the leading strategic partner for funded founders across Africa, from stealth to scale.",
  },
];

export function Timeline() {
  return (
    <div className="relative mt-20">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
      
      <div className="space-y-12">
        {TIMELINE_ITEMS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-8 md:gap-12 relative"
          >
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_0_4px_rgba(242,138,2,0.2)]" />
            
            <div className="text-right pt-0.5">
              <span className="font-display font-bold text-sm text-brand-orange leading-none uppercase tracking-widest">
                {item.year}
              </span>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                {item.title}
              </h4>
              <p className="text-sm text-muted font-light leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
