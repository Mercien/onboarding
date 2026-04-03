"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ProductsPreview() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.7, ease: "easeOut" as const }
    })
  };

  return (
    <section ref={ref} className="bg-navy py-24 px-6 md:px-16 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          custom={0} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
              Our Products
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white leading-tight">
              We don&apos;t just build<br/>strategies. We build <span className="text-brand-blue-light">tools.</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm font-light leading-relaxed">
            Beyond agency services, Brands Digitals is building a suite of proprietary technology products — each solving a specific problem we couldn&apos;t find a good answer to.
          </p>
        </motion.div>

        {/* Featured: FlowDesk */}
        <motion.div 
          custom={1} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-1 mb-1"
        >
          {/* Main Card */}
          <div className="bg-navy-card border border-white/7 rounded-2xl lg:rounded-tl-2xl lg:rounded-bl-none lg:rounded-r-none p-10 md:p-12 relative overflow-hidden group hover:border-brand-blue-light/30 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-brand-gold" />
            <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-[radial-gradient(circle,rgba(242,138,2,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Live Product
            </div>
            
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-navy border border-white/10 flex items-center justify-center text-2xl mb-8">
              📊
            </div>
            
            <h3 className="text-3xl font-display font-bold tracking-tight mb-2">FlowDesk Nexus</h3>
            <div className="font-mono text-sm text-brand-blue-light mb-6">// CRM & Business Operations Platform</div>
            
            <p className="text-muted text-sm leading-relaxed font-light max-w-lg mb-8">
              The CRM built specifically for Nigerian businesses. Manage your customers, track your pipeline, automate your follow-ups, and measure your growth — all in one place, without the complexity of HubSpot or the cost of Salesforce.
            </p>
            
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-3 text-xs text-muted-lt font-light"><span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0"/> Full CRM & contact management</div>
              <div className="flex items-center gap-3 text-xs text-muted-lt font-light"><span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0"/> WhatsApp & email automation workflows</div>
              <div className="flex items-center gap-3 text-xs text-muted-lt font-light"><span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0"/> Sales pipeline & performance dashboards</div>
            </div>
            
            <div className="flex gap-4">
              <Link href="https://crm.brandsdigitals.com.ng" target="_blank">
                <Button variant="primary">Book a Demo →</Button>
              </Link>
            </div>
          </div>
          
          {/* Stats Panel */}
          <div className="bg-navy-light border border-white/7 rounded-2xl lg:rounded-tr-2xl lg:rounded-br-none lg:rounded-l-none p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-[-10px] right-[-5px] font-display text-[120px] font-black text-brand-blue-light/5 leading-none select-none tracking-tighter">
              FD
            </div>
            
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-muted mb-8">Platform Overview</div>
              
              <div className="mb-8">
                <div className="font-display font-extrabold text-5xl tracking-tighter">1<span className="text-brand-blue-light text-2xl">st</span></div>
                <div className="text-xs text-muted font-light mt-2">CRM built natively for Nigerian SMEs</div>
              </div>
              <div className="mb-8">
                <div className="font-display font-extrabold text-5xl tracking-tighter">₦15k<span className="text-brand-blue-light text-3xl">+</span></div>
                <div className="text-xs text-muted font-light mt-2">Starting price — massive fractional savings</div>
              </div>
            </div>
            
            <Link href="https://crm.brandsdigitals.com.ng" target="_blank" className="mt-8 relative z-10 flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-lg hover:border-brand-blue-light/30 group transition-colors">
              <span className="font-mono text-[10px] text-brand-blue-light tracking-wide">crm.brandsdigitals.com.ng</span>
              <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>

        {/* Coming Soon Row */}
        <motion.div 
          custom={2} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-1"
        >
          {/* AdForge */}
          <div className="bg-navy-light border border-white/7 rounded-2xl md:rounded-bl-2xl md:rounded-r-none md:rounded-t-none p-10 relative overflow-hidden hover:bg-navy-card transition-colors group px-10 border-t-0">
            <div className="absolute top-5 right-5 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
              Coming Soon
            </div>
            <div className="absolute bottom-[-100px] right-[-80px] w-64 h-64 bg-[radial-gradient(circle,rgba(242,138,2,0.07)_0%,transparent_70%)] rounded-full pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              ● In Development
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2d1505] to-[#1a0c03] border border-white/10 flex items-center justify-center text-xl mb-6">
              ⚡
            </div>
            
            <h4 className="text-2xl font-display font-bold tracking-tight mb-1">AdForge</h4>
            <div className="font-mono text-[11px] text-brand-blue-light mb-4">// AI Ad Creative Platform</div>
            
            <p className="text-muted text-sm font-light leading-relaxed mb-8 max-w-sm">
              Brief in. Multiple high-converting ad creatives out — in seconds. Uses AI to generate on-brand ad variations for Meta, Google, and TikTok.
            </p>
            
            <Button variant="outline" className="text-xs">Join the Waitlist →</Button>
          </div>
          
          {/* DeepReach */}
          <div className="bg-navy-light border border-white/7 rounded-2xl md:rounded-br-2xl md:rounded-l-none md:rounded-t-none p-10 relative overflow-hidden hover:bg-navy-card transition-colors group px-10 border-t-0 border-l-0">
            <div className="absolute top-5 right-5 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
              Coming Soon
            </div>
            <div className="absolute bottom-[-100px] left-[-80px] w-64 h-64 bg-[radial-gradient(circle,rgba(59,130,246,0.07)_0%,transparent_70%)] rounded-full pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              ● In Development
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a1520] to-[#050d14] border border-white/10 flex items-center justify-center text-xl mb-6">
              🎯
            </div>
            
            <h4 className="text-2xl font-display font-bold tracking-tight mb-1">DeepReach</h4>
            <div className="font-mono text-[11px] text-brand-blue-light mb-4">// AI Lead Generation & Outreach</div>
            
            <p className="text-muted text-sm font-light leading-relaxed mb-8 max-w-sm">
              Find, qualify, and reach your ideal prospects at scale. Uses AI to build targeted lead lists and automate personalised outreach sequences.
            </p>
            
            <Button variant="outline" className="text-xs border-blue-500/30 hover:border-blue-500 hover:text-white">Join the Waitlist →</Button>
          </div>
        </motion.div>
        
        {/* View All CTA */}
        <motion.div 
          custom={3} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp}
          className="text-center mt-16"
        >
          <div className="text-sm font-light text-muted mb-6">Three products. One mission — give Nigerian businesses the tools to compete.</div>
          <Link href="/products">
            <Button variant="primary">Explore All Products →</Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
