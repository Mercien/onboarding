"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Mail, Phone, MessageSquare } from "lucide-react";

const REFERRALS = [
  "Google Search", "Instagram", "LinkedIn", "Twitter / X",
  "Referral from someone", "Attended an event", "YouTube", "Other"
];

const CONTACT_PREFERENCES = [
  { id: "email", label: "Email", icon: Mail },
  { id: "whatsapp", label: "WhatsApp", icon: MessageSquare },
  { id: "phone", label: "Phone Call", icon: Phone },
];

export function Step4({ onSubmit, onBack, isSubmitting }: { onSubmit: () => void; onBack: () => void; isSubmitting: boolean }) {
  const { register, watch, setValue, formState: { errors } } = useFormContext();
  const currentPref = watch("contactPreference");

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Describe your situation and what you want to achieve *</label>
        <textarea
          {...register("message")}
          placeholder="Tell us where you are and where you want to go..."
          className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-muted min-h-[120px] focus:border-brand-orange outline-none transition-all resize-none"
        />
        {errors.message && <span className="text-xs text-red-500 font-light">{errors.message.message as string}</span>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">How did you hear about Brands Digitals?</label>
        <select
          {...register("referralSource")}
          className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white appearance-none outline-none focus:border-brand-orange transition-all"
        >
          <option value="">Select source</option>
          {REFERRALS.map((source) => (
            <option key={source} value={source}>{source}</option>
          ))}
        </select>
        {errors.referralSource && <span className="text-xs text-red-500 font-light">{errors.referralSource.message as string}</span>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Preferred contact method *</label>
        <div className="grid grid-cols-3 gap-3">
          {CONTACT_PREFERENCES.map((pref) => {
            const Icon = pref.icon;
            return (
              <button
                key={pref.id}
                type="button"
                onClick={() => setValue("contactPreference", pref.id)}
                className={cn(
                  "p-3 border rounded-xl flex flex-col items-center gap-2 transition-all duration-200",
                  currentPref === pref.id
                    ? "bg-brand-orange/10 border-brand-orange text-white"
                    : "bg-navy-light border-white/7 text-muted hover:border-white/20"
                )}
              >
                <Icon size={20} className={currentPref === pref.id ? "text-brand-orange" : "text-muted"} />
                <span className="text-[10px] font-bold uppercase tracking-wider">{pref.label}</span>
              </button>
            );
          })}
        </div>
        {errors.contactPreference && <span className="text-xs text-red-500 font-light">{errors.contactPreference.message as string}</span>}
      </div>

      <div className="flex items-start gap-3 py-2">
        <input
          {...register("agreement")}
          type="checkbox"
          id="agreement"
          className="mt-1 w-4 h-4 rounded border-white/12 bg-navy-light text-brand-orange focus:ring-brand-orange transition-all"
        />
        <label htmlFor="agreement" className="text-xs text-muted-lt leading-relaxed cursor-pointer select-none">
          I agree to be contacted by Brands Digitals Agency regarding my inquiry. We respect your privacy and will never spam you.
        </label>
      </div>
      {errors.agreement && <span className="text-xs text-red-500 font-light">{errors.agreement.message as string}</span>}

      <div className="flex gap-3 pt-4">
        <Button onClick={onBack} variant="outline" className="flex-1" disabled={isSubmitting}>
          ← Back
        </Button>
        <Button onClick={onSubmit} variant="primary" className="flex-[2]" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit & Book My Discovery Call →"}
        </Button>
      </div>
    </div>
  );
}
