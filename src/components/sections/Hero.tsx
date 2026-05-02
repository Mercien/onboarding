"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LeadModal } from "@/components/ui/lead-modal/LeadModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [industryIndex, setIndustryIndex] = React.useState(0);
  const INDUSTRIES = [
    "Hospitality",
    "Healthcare",
    "E-Commerce",
    "Pro. Services",
    "Education",
    "Logistics",
    "Real Estate",
    "Tech & SaaS",
    "Creative & Media",
    "Agro-Allied",
    "Automotive",
    "Personal Brand"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pb-24 md:pb-32 overflow-hidden pt-20 bg-navy">
      {/* Background Image & Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'url(/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy pointer-events-none" />

      {/* Background Orbs */}
      <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] bg-brand-blue-light/12 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] left-[10%] w-[600px] h-[600px] bg-brand-blue-light/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[-150px] w-[400px] h-[400px] bg-brand-blue-dark/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-light/10 border border-brand-blue-light/20 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-brand-blue-light rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue-light">
              Digital Transformation Agency
            </span>
          </div>

          <h1 className="text-[32px] sm:text-4xl md:text-6xl lg:text-[80px] font-display font-extrabold tracking-tighter leading-[1.05] md:leading-[0.9] mb-8 max-w-[1020px] break-words">
            We Build <span className="text-brand-blue-light">Digital Systems</span> That Scales Your{" "}
            <span className="inline-grid align-bottom max-w-full">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={industryIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="row-start-1 col-start-1 relative inline-block border-b-4 border-brand-gold/40 min-w-[max-content]"
                >
                  {INDUSTRIES[industryIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-[580px] leading-relaxed font-light mb-10">
            From brand identity to growth operations, we transform how African startups and scaleups interact with the digital world. Premium strategy, precise execution.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setIsModalOpen(true)} variant="primary" size="lg">
              Book a Discovery Call
            </Button>
            <Button variant="outline" size="lg">
              View Our Services
            </Button>
          </div>

          <div className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-white/7 w-full max-w-4xl">
            <div className="flex flex-col gap-1">
              <span className="font-display font-extrabold text-4xl text-white">12+</span>
              <span className="text-xs text-muted font-light uppercase tracking-widest">Projects Shipped</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display font-extrabold text-4xl text-white">₦500M+</span>
              <span className="text-xs text-muted font-light uppercase tracking-widest">Revenue Impacted</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display font-extrabold text-4xl text-white">98%</span>
              <span className="text-xs text-muted font-light uppercase tracking-widest">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
