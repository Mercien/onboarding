"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CaseCardProps {
  id: string;
  title: string;
  description: string;
  industry: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  slug: string;
}

export function CaseCard({
  id,
  title,
  description,
  industry,
  metrics,
  tags,
  gradient,
  slug,
}: CaseCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group bg-navy-card border border-white/7 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-orange/30 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-black/40 flex flex-col h-full"
    >
      <div className={cn("aspect-video relative overflow-hidden flex items-center justify-center text-4xl", gradient)}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-white/5 tracking-tighter text-6xl select-none group-hover:scale-110 transition-transform">
          {id}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em] mb-3">
          {industry}
        </div>
        <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-brand-orange transition-colors">
          {title}
        </h4>
        <p className="text-sm text-muted font-light leading-relaxed mb-8 flex-1">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display font-extrabold text-2xl text-brand-orange tracking-tight">
                {metric.value}
              </span>
              <span className="text-[10px] text-muted-lt uppercase tracking-widest font-light mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-white/4 border border-white/7 px-3 py-1 rounded-full text-muted group-hover:border-white/12 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
