"use client";

import { Check, ArrowRight, ShieldCheck, Zap, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PERKS = [
  { icon: ShieldCheck, title: "Strategic Oversight", sub: "Monthly roadmap & strategy sessions" },
  { icon: Zap, title: "Rapid Execution", sub: "Priority access to our build team" },
  { icon: BarChart3, title: "Data Attribution", sub: "Custom analytics & reporting dashboard" },
  { icon: Users, title: "Dedicated Support", sub: "Direct Slack channel & weekly syncs" },
];

export function RetainerCard({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <div className="bg-gradient-to-br from-navy-mid to-navy-card border border-white/7 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
        <div>
          <h3 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
            Comprehensive <span className="text-brand-orange">Transformation</span> Partnership
          </h3>
          <p className="text-muted text-lg mb-10 font-light leading-relaxed">
            Your fractional digital transformation team. Perfect for scaling startups that need expert-level strategy and execution across their entire digital surface area without the overhead of a full-time department.
          </p>
          <Button onClick={onCtaClick} size="lg" className="px-10">
            Apply for Retainer <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PERKS.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-navy/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-brand-orange/30 hover:bg-navy/60"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4 shadow-[0_4px_12px_rgba(242,138,2,0.1)]">
                  <Icon size={20} />
                </div>
                <h5 className="font-bold text-white text-sm mb-1 tracking-tight">
                  {perk.title}
                </h5>
                <p className="text-[10px] text-muted-lt uppercase tracking-widest leading-none font-medium">
                  {perk.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
