"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TRUST_TAGS = [
  "Brand Transformation",
  "Demand Generation",
  "Marketing Infrastructure",
  "Market Launch",
  "Continuous Support",
  "AI Solutions",
  "Automated Systems",
  "Engagement & Community Systems",
  "Sales Systems",
  "Analytics & Intelligence",
];

export function TrustBar() {
  return (
    <section className="bg-navy-mid py-12 px-6 border-b border-white/7 overflow-hidden">
      <div className="flex items-center gap-10 max-w-7xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-muted whitespace-nowrap z-20">
          Our Solutions
        </span>

        <div className="flex-1 relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex gap-16 items-center w-max"
          >
            {[...TRUST_TAGS, ...TRUST_TAGS].map((tag, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Star size={12} className="text-brand-gold fill-brand-gold" />
                <span className="text-xs font-medium uppercase tracking-widest text-muted-lt whitespace-nowrap">
                  {tag}
                </span>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-navy-mid to-transparent z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-navy-mid to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
