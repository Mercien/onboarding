"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ValueCard({ icon: Icon, title, description, className }: ValueCardProps) {
  return (
    <div className={cn(
      "p-8 rounded-2xl bg-navy-card border border-white/7 transition-all duration-300 hover:border-brand-orange/30 group text-center",
      className
    )}>
      <div className="w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-6 mx-auto group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h4 className="text-lg font-bold text-white mb-3 tracking-tight">
        {title}
      </h4>
      <p className="text-sm text-muted font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
