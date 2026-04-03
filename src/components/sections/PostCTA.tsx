"use client";

import { Button } from "@/components/ui/Button";
import { LeadModal } from "@/components/ui/lead-modal/LeadModal";
import * as React from "react";
import { ArrowRight } from "lucide-react";

export function PostCTA() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="bg-navy py-32 px-6 md:px-16 border-t border-white/7">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter text-white leading-tight mb-6 mt-4">
          Want results <span className="text-brand-orange">like these?</span>
        </h2>
        <p className="text-muted text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
          Your transformation starts with a single conversation. Let&apos;s build your next success story.
        </p>
        
        <div className="relative group">
          {/* Glowing background effect matching the design */}
          <div className="absolute inset-0 bg-brand-orange rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <Button 
            onClick={() => setIsModalOpen(true)}
            variant="primary" 
            size="lg"
            className="relative flex items-center gap-2 shadow-2xl px-8"
          >
            <span>Book Your Discovery Call</span> <ArrowRight size={18} className="translate-y-[1px] group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
