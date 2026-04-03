"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceTierProps {
  id: string;
  num: string;
  title: string;
  description: string;
  tag: string;
  children: React.ReactNode;
  className?: string;
}

export function ServiceTier({
  id,
  num,
  title,
  description,
  tag,
  children,
  className,
}: ServiceTierProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 px-6 md:px-16 border-b border-white/7 relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-start">
          <div className="relative">
            <span className="font-display font-extrabold text-[120px] text-brand-blue-light/10 absolute -top-20 -left-10 select-none">
              {num}
            </span>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-brand-blue-light/10 border border-brand-blue-light/20 rounded text-[10px] font-bold uppercase tracking-widest text-brand-blue-light mb-6">
                {tag}
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white mb-6">
                {title}
              </h2>
              <p className="text-muted max-w-lg leading-relaxed font-light text-lg">
                {description}
              </p>
            </div>
          </div>
          
          <div className="lg:pt-20">
            <div className="w-full h-px bg-white/7 mb-8 lg:hidden" />
          </div>
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </div>
    </section>
  );
}
