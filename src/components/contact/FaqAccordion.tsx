"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How long does a typical transformation take?",
    a: "It varies by tier. A Digital Audit (Tier 1) takes 7–10 days, while a Startup Launch (Tier 5) typically spans 4–6 weeks from concept to market entry.",
  },
  {
    q: "Do you only work with tech startups?",
    a: "While our core expertise is in tech scaleups, we also work with modern African restaurant brands, real estate firms, and service businesses looking for digital edge.",
  },
  {
    q: "How much budget do I need to start?",
    a: "Our specialized services start from ₦150k for audits. For full-scale growth engines, most partners budget between ₦350k and ₦1.5M+ per month.",
  },
  {
    q: "What is your pricing model?",
    a: "We use fixed-project pricing for audits and launches, and value-based monthly retainers for growth and transformation partnerships.",
  },
  {
    q: "Will we have a dedicated account manager?",
    a: "You work directly with our lead strategists and build team. For Tier 6 partners, we provide a dedicated Slack channel and weekly strategic syncs.",
  },
];

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, idx) => (
        <div key={idx} className="border-b border-white/7">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full py-6 flex justify-between items-center text-left group hover:text-brand-orange transition-colors"
          >
            <span className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
              {faq.q}
            </span>
            <Plus
              size={20}
              className={cn(
                "text-muted transition-transform duration-300",
                openIdx === idx && "rotate-45 text-brand-orange"
              )}
            />
          </button>
          
          <AnimatePresence>
            {openIdx === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-muted font-light leading-relaxed max-w-2xl text-sm">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
