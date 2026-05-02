"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Laptop, Share2, Zap, Database, Target, Mail, FileText, ArrowRight } from "lucide-react";
import { ALL_SERVICES } from "@/lib/service-data";
import { usePathname } from "next/navigation";

const IconMap: Record<string, React.ElementType> = {
  Search,
  Laptop,
  Share2,
  Zap,
  Database,
  Target,
  Mail,
  FileText
};

export function ServiceCardsGrid() {
  const pathname = usePathname();
  
  return (
    <section className="py-24 px-6 md:px-16 bg-navy border-t border-white/7">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            Scale Every Part of Your Business
          </h2>
          <p className="text-lg text-muted font-light max-w-2xl mx-auto">
            Discover our full suite of digital transformation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((service) => {
            const Icon = IconMap[service.icon] || Target;
            const isActive = pathname === `/services/${service.slug}`;
            
            return (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] ${
                  isActive 
                    ? "bg-brand-blue-light/10 border-brand-blue-light/30 shadow-[0_0_30px_rgba(37,99,235,0.1)]" 
                    : "bg-navy-card border-white/7 hover:border-brand-blue-light/30"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center border border-white/10 mb-6 group-hover:border-brand-blue-light/30 transition-colors text-brand-blue-light">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-brand-blue-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed mb-6 h-10">
                  {service.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue-light">
                  View Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
