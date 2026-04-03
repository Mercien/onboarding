"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function FounderSnippet() {
  return (
    <section className="bg-navy-mid py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="bg-navy-card border border-white/7 rounded-2xl overflow-hidden aspect-[4/5] flex items-end relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-mid to-transparent opacity-60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-navy-mid/80" />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-[120px] text-brand-orange/10 select-none tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
              ADO
            </div>
            
            <div className="absolute top-8 right-8 z-20 bg-navy/90 border border-white/7 p-4 rounded-xl text-center shadow-lg transform group-hover:scale-105 transition-transform">
              <strong className="block font-display font-bold text-xs uppercase tracking-widest text-white">
                BSc & MSc
              </strong>
              <small className="block text-[10px] text-brand-gold font-medium uppercase mt-1">
                Strategy & Tech
              </small>
            </div>
            
            <div className="relative z-20 p-8 w-full bg-gradient-to-t from-navy/95 to-transparent">
              <strong className="block font-display font-extrabold text-2xl text-white tracking-tight">
                Mercien (Aanu Damilare Oke)
              </strong>
              <span className="block text-sm text-brand-orange font-bold uppercase tracking-widest mt-1">
                Founder & Lead Strategist
              </span>
            </div>
            
            {/* TODO: Replace with <Image src="/mercien-photo.jpg"> when photo is ready */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
            <Quote size={24} fill="currentColor" />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tighter text-white leading-tight">
            Digital Transformation is about <span className="text-brand-orange">impact</span>, not just tools.
          </h2>

          <p className="text-lg text-muted font-light leading-relaxed">
            Brands Digitals was born from a simple realization: Most agencies sell services, but few understand the operational engine of a startup. We bridge that gap. 
            <br /><br />
            Our mission is to empower African founders with the same level of digital strategy and execution that powers the world&apos;s most successful tech companies.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4 text-sm font-medium text-white border-l-2 border-brand-orange pl-4">
              &quot;We don&apos;t build projects. We build assets that earn.&quot;
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-white border-l-2 border-brand-orange pl-4">
              &quot;Strategy is only as good as its slowest execution.&quot;
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
