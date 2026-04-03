"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  name: string;
  tagline: string;
  price?: string;
  priceSub?: string;
  features: string[];
  isFeatured?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

export function PackageCard({
  name,
  tagline,
  price,
  priceSub,
  features,
  isFeatured,
  ctaText = "Get Started",
  onCtaClick,
}: PackageCardProps) {
  return (
    <div
      className={cn(
        "pkg-card flex flex-col p-8 rounded-2xl border transition-all duration-300 relative",
        isFeatured
          ? "bg-gradient-to-br from-navy-light to-navy-card border-brand-orange shadow-xl shadow-brand-orange/5"
          : "bg-navy-card border-white/7 hover:border-white/20"
      )}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h4 className="font-display font-bold text-xl text-white mb-2 tracking-tight">
          {name}
        </h4>
        <p className="text-xs text-muted font-light leading-relaxed">
          {tagline}
        </p>
      </div>

      {price && (
        <div className="mb-6">
          <span className="font-display font-extrabold text-3xl text-brand-orange tracking-tighter">
            {price}
          </span>
          {priceSub && (
            <span className="text-xs text-muted font-light ml-2 align-middle">
              {priceSub}
            </span>
          )}
        </div>
      )}

      <div className="h-px bg-white/7 w-full mb-6" />

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check size={14} className="text-brand-orange mt-1 shrink-0" />
            <span className="text-xs text-muted-lt font-light leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={isFeatured ? "primary" : "outline"}
        onClick={onCtaClick}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}
