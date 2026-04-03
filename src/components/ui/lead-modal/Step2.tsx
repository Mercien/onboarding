"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const BUSINESS_STAGES = [
  { id: "pre-revenue", label: "Pre-revenue", icon: "🌱", sub: "Just launched or pre-launch" },
  { id: "early-traction", label: "Early traction", icon: "🚀", sub: "Under 12 months, first customers" },
  { id: "growing", label: "Growing", icon: "📈", sub: "1–3 years, scaling revenue" },
  { id: "established", label: "Established", icon: "🏢", sub: "3+ years, looking to transform" },
];

const FUNDING_STATUS = [
  { id: "bootstrapped", label: "Bootstrapped", icon: "💪" },
  { id: "pre-seed", label: "Pre-seed", icon: "🌱" },
  { id: "seed", label: "Seed funded", icon: "🚀" },
  { id: "series-a", label: "Series A or beyond", icon: "📈" },
  { id: "corporate", label: "Corporate / Enterprise", icon: "🏢" },
];

const INDUSTRIES = [
  "Fintech", "Food & Beverage", "Agro / Pet Care", "E-Commerce",
  "EdTech", "HealthTech", "Logistics & Supply Chain", "Professional Services",
  "Co-working / Real Estate", "Creative / Media / Agency", "SaaS / Tech", "Other"
];

export function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { register, setValue, watch, formState: { errors } } = useFormContext();
  const currentStage = watch("businessStage");
  const currentFunding = watch("fundingStatus");

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Industry / Sector *</label>
        <select
          {...register("industry")}
          className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white appearance-none outline-none focus:border-brand-blue-light transition-all"
        >
          <option value="">Select industry</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
        {errors.industry && <span className="text-xs text-red-500">{errors.industry.message as string}</span>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Business Stage *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {BUSINESS_STAGES.map((stage) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setValue("businessStage", stage.id)}
              className={cn(
                "p-4 border rounded-xl text-left transition-all duration-200 group",
                currentStage === stage.id
                  ? "bg-brand-blue-light/10 border-brand-blue-light shadow-[0_4px_12px_rgba(242,138,2,0.1)]"
                  : "bg-navy-light border-white/7 hover:border-white/20"
              )}
            >
              <span className="text-2xl mb-2 block">{stage.icon}</span>
              <span className={cn(
                "font-bold block text-sm",
                currentStage === stage.id ? "text-white" : "text-muted group-hover:text-white"
              )}>
                {stage.label}
              </span>
              <span className="text-[10px] text-muted-lt font-light">{stage.sub}</span>
            </button>
          ))}
        </div>
        {errors.businessStage && <span className="text-xs text-red-500">{errors.businessStage.message as string}</span>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Funding Status *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {FUNDING_STATUS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setValue("fundingStatus", f.id)}
              className={cn(
                "p-3 border rounded-lg text-center transition-all text-xs font-medium",
                currentFunding === f.id
                  ? "bg-brand-orange text-white border-brand-blue-light"
                  : "bg-navy-light border-white/7 text-muted hover:border-white/20"
              )}
            >
              <span className="mr-2">{f.icon}</span> {f.label}
            </button>
          ))}
        </div>
        {errors.fundingStatus && <span className="text-xs text-red-500">{errors.fundingStatus.message as string}</span>}
      </div>

      <div className="flex gap-3 pt-6">
        <Button onClick={onBack} variant="outline" className="flex-1">
          ← Back
        </Button>
        <Button onClick={onNext} variant="primary" className="flex-[2]">
          Next — What Do You Need? →
        </Button>
      </div>
    </div>
  );
}
