"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SERVICES = [
  { id: "audit", label: "Digital Audit & Strategy", icon: "🔍" },
  { id: "brand", label: "Brand & Digital Presence", icon: "🎨" },
  { id: "growth", label: "Visibility & Demand Engine", icon: "📈" },
  { id: "mkt-ops", label: "Conversion & Growth Systems", icon: "⚙️" },
  { id: "startup", label: "Market Launch Accelerator", icon: "🚀" },
  { id: "retainer", label: "Deep Partnership & Support", icon: "🤝" },
  { id: "not-sure", label: "Not sure — I need advice first", icon: "🤔" },
];

const BUDGETS = [
  "Under ₦150k",
  "₦150k–₦350k",
  "₦350k–₦600k",
  "₦600k–₦1.5M",
  "₦1.5M+",
  "Let's discuss"
];

const GOALS = [
  { id: "build-brand", label: "Build or rebuild our brand identity" },
  { id: "traffic", label: "Get more website traffic & visibility" },
  { id: "leads", label: "Generate more leads and customers" },
  { id: "mkt-systems", label: "Set up marketing systems & automation" },
  { id: "launch", label: "Prepare for a product or market launch" },
  { id: "scaling", label: "Scale an existing channel that's working" },
  { id: "digital-presence", label: "Improve our digital presence overall" },
];

export function Step3({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { register, setValue, watch, formState: { errors } } = useFormContext();
  const currentService = watch("serviceInterest");
  const currentBudget = watch("monthlyBudget");
  const selectedGoals = watch("primaryGoals") || [];

  const toggleGoal = (goalId: string) => {
    const nextGoals = selectedGoals.includes(goalId)
      ? selectedGoals.filter((id: string) => id !== goalId)
      : [...selectedGoals, goalId];
    setValue("primaryGoals", nextGoals);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Which service interests you most? *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SERVICES.map((svc) => (
            <button
              key={svc.id}
              type="button"
              onClick={() => setValue("serviceInterest", svc.id)}
              className={cn(
                "p-4 border rounded-xl text-left transition-all duration-200 flex items-center gap-3",
                currentService === svc.id
                  ? "bg-brand-blue-light/10 border-brand-blue-light shadow-[0_4px_12px_rgba(242,138,2,0.1)]"
                  : "bg-navy-light border-white/7 hover:border-white/20"
              )}
            >
              <span className="text-xl">{svc.icon}</span>
              <span className={cn(
                "font-bold text-sm",
                currentService === svc.id ? "text-white" : "text-muted"
              )}>
                {svc.label}
              </span>
            </button>
          ))}
        </div>
        {errors.serviceInterest && <span className="text-xs text-red-500">{errors.serviceInterest.message as string}</span>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Monthly budget for this engagement? *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {BUDGETS.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => setValue("monthlyBudget", budget)}
              className={cn(
                "p-3 border rounded-lg text-center transition-all text-xs font-medium",
                currentBudget === budget
                  ? "bg-brand-orange text-white border-brand-blue-light"
                  : "bg-navy-light border-white/7 text-muted hover:border-white/20"
              )}
            >
              {budget}
            </button>
          ))}
        </div>
        {errors.monthlyBudget && <span className="text-xs text-red-500">{errors.monthlyBudget.message as string}</span>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Primary goals (pick all that apply) *</label>
        <div className="flex flex-wrap gap-2">
          {GOALS.map((goal) => (
            <button
              key={goal.id}
              type="button"
              onClick={() => toggleGoal(goal.id)}
              className={cn(
                "px-4 py-2 border rounded-full transition-all text-xs font-medium",
                selectedGoals.includes(goal.id)
                  ? "bg-brand-blue-light/10 border-brand-blue-light text-brand-blue-light"
                  : "bg-navy-light border-white/7 text-muted hover:border-white/20"
              )}
            >
              {goal.label}
            </button>
          ))}
        </div>
        {errors.primaryGoals && <span className="text-xs text-red-500">{errors.primaryGoals.message as string}</span>}
      </div>

      <div className="flex gap-3 pt-6">
        <Button onClick={onBack} variant="outline" className="flex-1">
          ← Back
        </Button>
        <Button onClick={onNext} variant="primary" className="flex-[2]">
          Next — Final Details →
        </Button>
      </div>
    </div>
  );
}
