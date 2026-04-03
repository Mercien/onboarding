"use client";

import { LucideIcon } from "lucide-react";

interface CredentialCardProps {
  icon: LucideIcon;
  title: string;
  sub: string;
  description: string;
}

export function CredentialCard({ icon: Icon, title, sub, description }: CredentialCardProps) {
  return (
    <div className="p-8 rounded-2xl bg-navy-card border border-white/7 transition-all duration-300 hover:border-brand-blue-light/30 group">
      <div className="w-12 h-12 bg-white/4 rounded-xl flex items-center justify-center text-muted group-hover:bg-brand-blue-light/10 group-hover:text-brand-blue-light transition-colors mb-6">
        <Icon size={24} />
      </div>
      <h4 className="text-lg font-bold text-white mb-1 tracking-tight">
        {title}
      </h4>
      <p className="text-xs text-brand-blue-light font-bold uppercase tracking-widest mb-4">
        {sub}
      </p>
      <p className="text-sm text-muted font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
