"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/Button";

export function Step1({ onNext }: { onNext: () => void }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted">First Name *</label>
          <input
            {...register("firstName")}
            placeholder="John"
            className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:border-brand-blue-light outline-none transition-all"
          />
          {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message as string}</span>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted">Last Name *</label>
          <input
            {...register("lastName")}
            placeholder="Doe"
            className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:border-brand-blue-light outline-none transition-all"
          />
          {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message as string}</span>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Email *</label>
        <input
          {...register("email")}
          type="email"
          placeholder="john@company.com"
          className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:border-brand-blue-light outline-none transition-all"
        />
        {errors.email && <span className="text-xs text-red-500">{errors.email.message as string}</span>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Phone Number (Optional)</label>
        <input
          {...register("phone")}
          placeholder="+234 xxx xxx xxxx"
          className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:border-brand-blue-light outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted">Company / Startup *</label>
          <input
            {...register("company")}
            placeholder="TechFlow Ltd"
            className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:border-brand-blue-light outline-none transition-all"
          />
          {errors.company && <span className="text-xs text-red-500">{errors.company.message as string}</span>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted">Your Role *</label>
          <input
            {...register("role")}
            placeholder="CEO, Founder, etc."
            className="w-full bg-navy-light border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:border-brand-blue-light outline-none transition-all"
          />
          {errors.role && <span className="text-xs text-red-500">{errors.role.message as string}</span>}
        </div>
      </div>

      <Button onClick={onNext} className="w-full py-4 mt-4" variant="primary">
        Next — Tell Us About Your Business →
      </Button>
    </div>
  );
}
