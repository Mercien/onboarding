"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LeadModal } from "@/components/ui/lead-modal/LeadModal";
import * as React from "react";

export function CtaBand() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="bg-brand-orange py-20 px-6 md:px-16 overflow-hidden relative">
      <div className="absolute right-[-80px] top-[-80px] w-[300px] h-[300px] border-radius-[50%] bg-white/8 pointer-events-none rounded-full" />
      <div className="absolute left-[-40px] bottom-[-40px] w-[200px] h-[200px] border-radius-[50%] bg-white/5 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white leading-tight">
            Ready to <span className="opacity-50">transform</span> your <br className="hidden md:block" />
            <span className="text-white">digital advantage?</span>
          </h2>
          <p className="mt-4 text-white/80 text-lg font-light leading-relaxed">
            Stop losing leads to a dated presence. Build a high-converting digital engine today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="white"
            size="lg"
            className="w-full sm:w-auto"
          >
            Book a Discovery Call
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white"
          >
            Start Your Transformation
          </Button>
        </div>
      </div>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
