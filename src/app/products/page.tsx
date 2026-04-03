"use client";

import * as React from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase, Globe, Settings, Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Framer Motion Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.7, ease: "easeOut" as any }
  })
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-navy text-foreground overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-16 border-b border-white/7 relative">
        <div className="absolute top-[-150px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(242,138,2,0.12)_0%,transparent_65%)] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
            Brands Digitals Products
          </motion.div>
          
          <motion.h1 
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-[80px] font-display font-extrabold tracking-tighter leading-[1] max-w-4xl mt-8"
          >
            We build the tools <span className="text-brand-blue-light">we couldn&apos;t find.</span>
          </motion.h1>
          
          <motion.p 
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="text-lg md:text-xl text-muted max-w-2xl mt-6 leading-relaxed font-light"
          >
            Every product in our portfolio was born from a real problem we saw Nigerian businesses struggling with — and couldn&apos;t find a product built specifically for the African context. So we built them ourselves.
          </motion.p>
          
          <motion.div 
            custom={3} initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-wrap gap-3 mt-10"
          >
            <div className="flex items-center gap-2 bg-white/4 border border-white/7 px-4 py-2 rounded-full text-sm text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              FlowDesk Nexus — Live
            </div>
            <div className="flex items-center gap-2 bg-white/4 border border-white/7 px-4 py-2 rounded-full text-sm text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              AdForge — In Development
            </div>
            <div className="flex items-center gap-2 bg-white/4 border border-white/7 px-4 py-2 rounded-full text-sm text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              DeepReach — In Development
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Bar */}
      <section className="bg-navy-mid border-b border-white/7 py-6 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12 items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-muted shrink-0" size={24} />
            <div>
              <strong className="block text-sm font-semibold">MSc-Backed Product Vision</strong>
              <span className="text-xs text-muted font-light">Digital Marketing & Business Transformation</span>
            </div>
          </div>
          <div className="hidden lg:block w-px h-10 bg-white/7" />
          <div className="flex items-center gap-3">
            <Briefcase className="text-muted shrink-0" size={24} />
            <div>
              <strong className="block text-sm font-semibold">Built from Agency Experience</strong>
              <span className="text-xs text-muted font-light">7+ years solving problems for 100+ clients</span>
            </div>
          </div>
          <div className="hidden lg:block w-px h-10 bg-white/7" />
          <div className="flex items-center gap-3">
            <Globe className="text-muted shrink-0" size={24} />
            <div>
              <strong className="block text-sm font-semibold">Made for African Markets</strong>
              <span className="text-xs text-muted font-light">Natively built for Nigeria</span>
            </div>
          </div>
          <div className="hidden lg:block w-px h-10 bg-white/7" />
          <div className="flex items-center gap-3">
            <Settings className="text-muted shrink-0" size={24} />
            <div>
              <strong className="block text-sm font-semibold">Agency-Tested First</strong>
              <span className="text-xs text-muted font-light">Runs internally prior to launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT 1 — FlowDesk */}
      <section className="py-24 px-6 md:px-16 border-b border-white/7 relative overflow-hidden bg-navy">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Mockup Left */}
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 bg-navy-light shadow-2xl aspect-[4/3] group hover:border-brand-blue-light/30 transition-colors duration-500">
            <div className="bg-navy-card px-4 py-3 flex items-center gap-3 border-b border-white/7">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white/5 border border-white/7 rounded text-[11px] font-mono text-muted px-3 py-1.5 ml-2">
                crm.brandsdigitals.com.ng/dashboard
              </div>
            </div>
            
            <div className="p-5">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-navy-card border border-white/7 rounded-lg p-4">
                  <div className="font-display font-extrabold text-2xl tracking-tighter">147<span className="text-brand-blue-light text-sm ml-1">↑</span></div>
                  <div className="text-[10px] text-muted mt-1 uppercase tracking-wider">Active Contacts</div>
                </div>
                <div className="bg-navy-card border border-white/7 rounded-lg p-4">
                  <div className="font-display font-extrabold text-2xl tracking-tighter">₦4.2M</div>
                  <div className="text-[10px] text-muted mt-1 uppercase tracking-wider">Pipeline Value</div>
                </div>
                <div className="bg-navy-card border border-white/7 rounded-lg p-4">
                  <div className="font-display font-extrabold text-2xl tracking-tighter">68<span className="text-muted text-sm ml-1">%</span></div>
                  <div className="text-[10px] text-muted mt-1 uppercase tracking-wider">Conversion Rate</div>
                </div>
              </div>
              
              <div className="bg-navy-card border border-white/7 rounded-lg p-4">
                <div className="text-[10px] text-muted tracking-widest uppercase mb-3 font-semibold">Sales Pipeline</div>
                <div className="flex gap-2 text-xs">
                  <div className="flex-1 border-t-2 border-brand-blue-light/50 pt-2">
                    <div className="text-[9px] text-muted mb-2 text-center">NEW LEAD</div>
                    <div className="bg-navy-light text-[10px] border border-white/7 rounded p-2 mb-1.5 font-medium">Amaka Foods <span className="block text-[9px] text-brand-blue-light mt-0.5">₦350k</span></div>
                    <div className="bg-navy-light text-[10px] border border-white/7 rounded p-2 font-medium">TechVault Ltd <span className="block text-[9px] text-brand-blue-light mt-0.5">₦180k</span></div>
                  </div>
                  <div className="flex-1 border-t-2 border-brand-blue-light/50 pt-2">
                    <div className="text-[9px] text-muted mb-2 text-center">DISCOVERY</div>
                    <div className="bg-navy-light text-[10px] border border-white/7 rounded p-2 font-medium">Regal Clinics <span className="block text-[9px] text-brand-blue-light mt-0.5">₦600k</span></div>
                  </div>
                  <div className="flex-1 border-t-2 border-brand-blue-light/50 pt-2">
                    <div className="text-[9px] text-muted mb-2 text-center">PROPOSAL</div>
                    <div className="bg-navy-light text-[10px] border border-white/7 rounded p-2 mb-1.5 font-medium">SwiftLog NG <span className="block text-[9px] text-brand-blue-light mt-0.5">₦1.2M</span></div>
                  </div>
                  <div className="flex-1 border-t-2 border-green-500/50 pt-2">
                    <div className="text-[9px] text-muted mb-2 text-center">WON ✓</div>
                    <div className="bg-navy-light text-[10px] border border-green-500/30 rounded p-2 font-medium">GreenFarm <span className="block text-[9px] text-green-400 mt-0.5">₦920k</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Right */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-500 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Live Product
            </div>
            <div className="mb-6">
              <span className="font-mono text-xs text-muted border border-white/10 px-2 py-1 rounded bg-white/5">01</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-2">FlowDesk Nexus</h2>
            <div className="font-mono text-sm text-brand-blue-light mb-6 tracking-wide">// CRM & Business Operations Platform</div>
            
            <p className="text-muted text-lg font-light leading-relaxed mb-10">
              The CRM that Nigerian businesses actually use. FlowDesk Nexus was built because every CRM tool on the market was designed for Silicon Valley startups — not for a Lagos restaurant owner tracking reservations or an Ibadan law firm managing client cases.
            </p>
            
            <div className="space-y-6 mb-10">
              <h5 className="text-[11px] font-bold tracking-widest uppercase text-muted">Core Capabilities</h5>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">📋</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">Full contact & customer management with custom fields adapted specifically for Nigerian operations.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">📊</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">Visual sales pipeline with deal tracking, stage automation, and revenue forecasting.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">⚡</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">WhatsApp & email automation for rapid follow-ups, onboarding, and local re-engagement.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="https://crm.brandsdigitals.com.ng" target="_blank">
                <Button size="lg" variant="primary">Book a Demo →</Button>
              </Link>
              <Link href="https://crm.brandsdigitals.com.ng" target="_blank">
                <Button size="lg" variant="outline" className="border-white/10">Explore FlowDesk ↗</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCT 2 — AdForge */}
      <section className="py-24 px-6 md:px-16 border-b border-white/7 relative overflow-hidden bg-navy-mid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              In Development
            </div>
            <div className="mb-6">
              <span className="font-mono text-xs text-muted border border-white/10 px-2 py-1 rounded bg-white/5">02</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-2">AdForge</h2>
            <div className="font-mono text-sm text-brand-blue-light mb-6 tracking-wide">// AI Ad Creative Platform</div>
            
            <p className="text-muted text-lg font-light leading-relaxed mb-10">
              Creating ads that convert is the hardest part of digital marketing. AdForge eliminates that bottleneck. Feed it a creative brief and it outputs multiple on-brand ad variations ready for Meta, Google, and TikTok in seconds, not days.
            </p>
            
            <div className="space-y-6 mb-10">
              <h5 className="text-[11px] font-bold tracking-widest uppercase text-muted">Core Capabilities</h5>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">🤖</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">AI-generated ad copy and visual direction tailored seamlessly from your strategic brief.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">🎨</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">Multi-format exports instantly mapping statics, carousels, and scripts cross-platform.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">🔒</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">Brand voice lock to guarantee AdForge stays completely on-brand with your tone.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" variant="primary" className="opacity-80 cursor-not-allowed hidden md:flex">Join the Waitlist →</Button>
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" />
                Currently in development
              </div>
            </div>
          </div>

          {/* Mockup Right */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-light shadow-2xl aspect-[4/3] group hover:border-brand-blue-light/30 transition-colors duration-500">
            <div className="bg-navy-card px-4 py-3 flex items-center gap-3 border-b border-white/7">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white/5 border border-white/7 rounded text-[11px] font-mono text-muted px-3 py-1.5 ml-2">
                adforge.brandsdigitals.com.ng/generate
              </div>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="bg-navy-card border border-white/7 rounded-lg p-4">
                <div className="text-[10px] text-brand-blue-light font-mono uppercase tracking-widest mb-2">Creative Brief →</div>
                <div className="text-xs text-muted-lt font-light italic leading-relaxed">&quot;Promote our new Amala Sky Lekki branch opening. Target: Lagos food lovers aged 25–45. Tone: Premium but warm. Goal: Drive reservations.&quot;</div>
              </div>
              
              <div className="flex items-center gap-3 opacity-60">
                <div className="flex-1 h-px bg-white/10" />
                <div className="text-[9px] font-mono text-brand-blue-light">GENERATING 4 VARIATIONS...</div>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-indigo-900 to-navy rounded-lg p-3 relative h-28 border border-white/10 flex items-center justify-center">
                  <span className="absolute top-2 left-2 bg-brand-blue-light/20 border border-brand-blue-light/30 text-[8px] font-bold text-brand-blue-light px-1.5 py-0.5 rounded">V1 - AWARENESS</span>
                  <span className="font-display font-extrabold opacity-20 text-2xl tracking-tight absolute bottom-2 right-2">AMALA</span>
                </div>
                <div className="bg-gradient-to-br from-orange-950 to-navy rounded-lg p-3 relative h-28 border border-white/10 flex items-center justify-center">
                  <span className="absolute top-2 left-2 bg-brand-blue-light/20 border border-brand-blue-light/30 text-[8px] font-bold text-brand-blue-light px-1.5 py-0.5 rounded">V2 - CONVERT</span>
                  <span className="font-display font-extrabold opacity-20 text-2xl tracking-tight absolute bottom-2 right-2">RESERVE</span>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-navy-mid rounded-lg p-3 relative h-28 border border-white/10 flex items-center justify-center">
                  <span className="absolute top-2 left-2 bg-brand-blue-light/20 border border-brand-blue-light/30 text-[8px] font-bold text-brand-blue-light px-1.5 py-0.5 rounded">V3 - STORY</span>
                  <span className="font-display font-extrabold opacity-20 text-2xl tracking-tight absolute bottom-2 right-2">LEKKI</span>
                </div>
                <div className="bg-gradient-to-br from-purple-950 to-navy rounded-lg p-3 relative h-28 border border-white/10 flex items-center justify-center">
                  <span className="absolute top-2 left-2 bg-brand-blue-light/20 border border-brand-blue-light/30 text-[8px] font-bold text-brand-blue-light px-1.5 py-0.5 rounded">V4 - RETARGET</span>
                  <span className="font-display font-extrabold opacity-20 text-2xl tracking-tight absolute bottom-2 right-2">OPEN NOW</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCT 3 — DeepReach */}
      <section className="py-24 px-6 md:px-16 border-b border-white/7 relative overflow-hidden bg-navy">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Mockup Left */}
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 bg-navy-light shadow-2xl aspect-[4/3] group hover:border-brand-blue-light/30 transition-colors duration-500">
            <div className="bg-navy-card px-4 py-3 flex items-center gap-3 border-b border-white/7">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white/5 border border-white/7 rounded text-[11px] font-mono text-muted px-3 py-1.5 ml-2">
                deepreach.brandsdigitals.com.ng/prospects
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div className="bg-navy-card border border-white/7 rounded-md p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="opacity-50">🔍</span>
                  <span className="text-[10px] font-mono text-muted">CEO OR Founder, Lagos, F&B...</span>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-bold px-2 py-0.5 rounded">247 FOUND</div>
              </div>

              <div className="space-y-2">
                <div className="bg-navy-card border border-white/5 rounded-md p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-900 to-navy border border-green-500/20 flex items-center justify-center text-[10px] font-bold text-green-400 shrink-0">AO</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate">Adaeze Okonkwo</div>
                    <div className="text-[9px] text-muted truncate">CEO — Amala Sky Restaurant Group</div>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-brand-blue-light">98 🔥</div>
                </div>
                <div className="bg-navy-card border border-white/5 rounded-md p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-navy border border-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0">TI</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate">Tunde Idowu</div>
                    <div className="text-[9px] text-muted truncate">Founder — The Kitchen Lagos</div>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-brand-blue-light">94 🔥</div>
                </div>
                <div className="bg-navy-card border border-white/5 rounded-md p-3 flex items-center gap-3 opacity-70">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-900 to-navy border border-orange-500/20 flex items-center justify-center text-[10px] font-bold text-orange-400 shrink-0">CB</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate">Chidinma Bright</div>
                    <div className="text-[9px] text-muted truncate">MD — Buka Street Foods</div>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-yellow-500">81 ✦</div>
                </div>
                <div className="bg-navy-card border border-white/5 rounded-md p-3 flex items-center gap-3 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-900 to-navy border border-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-400 shrink-0">KA</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate">Kayode Adeyemi</div>
                    <div className="text-[9px] text-muted truncate">Owner — Eko Kitchen & Bar</div>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-yellow-500">76 ✦</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Right */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              In Development
            </div>
            <div className="mb-6">
              <span className="font-mono text-xs text-muted border border-white/10 px-2 py-1 rounded bg-white/5">03</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-2">DeepReach</h2>
            <div className="font-mono text-sm text-brand-blue-light mb-6 tracking-wide">// AI Lead Generation & Outreach</div>
            
            <p className="text-muted text-lg font-light leading-relaxed mb-10">
              Finding the right prospect in Nigeria is harder than it should be. There&apos;s no clean B2B database. DeepReach fixes that — using AI to build, score, and reach laser-targeted prospect lists.
            </p>
            
            <div className="space-y-6 mb-10">
              <h5 className="text-[11px] font-bold tracking-widest uppercase text-muted">Core Capabilities</h5>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">🎯</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">AI-powered prospect discovery filtering by local parameters and digital maturity metrics.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">🇳🇬</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">Nigerian & West African B2B database curated locally for high fidelity outreach.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">🔗</div>
                  <p className="text-sm font-light text-muted-lt leading-relaxed">Direct FlowDesk Nexus integration to instantly push qualified leads directly into CRM.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 opacity-80 cursor-not-allowed hidden md:flex">Join the Waitlist →</Button>
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                Currently in development
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why We Build Section */}
      <section className="py-24 px-6 md:px-16 border-b border-white/7 bg-navy-mid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-6">
              Why we <span className="text-brand-blue-light">build</span><br />what we build.
            </h2>
            <p className="text-muted text-lg font-light leading-relaxed">
              Every product in our portfolio started as a problem we couldn&apos;t solve for a client with existing tools. We built the solution internally, tested it, and brought it to market.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-navy-card border border-white/7 rounded-2xl p-8 hover:border-brand-blue-light/30 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">🔍</div>
              <h4 className="text-lg font-bold mb-3">Problem-First</h4>
              <p className="text-sm text-muted font-light leading-relaxed">Every product starts with a specific, documented problem we encountered across multiple real client engagements.</p>
            </div>
            <div className="bg-navy-card border border-white/7 rounded-2xl p-8 hover:border-brand-blue-light/30 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">🧪</div>
              <h4 className="text-lg font-bold mb-3">Agency-Tested</h4>
              <p className="text-sm text-muted font-light leading-relaxed">Before any product reaches market, it runs inside our own agency operations and across active client accounts.</p>
            </div>
            <div className="bg-navy-card border border-white/7 rounded-2xl p-8 hover:border-brand-blue-light/30 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">🌍</div>
              <h4 className="text-lg font-bold mb-3">African-Native</h4>
              <p className="text-sm text-muted font-light leading-relaxed">We don&apos;t simply localise Western tools. We build from the ground up tailored for Nigerian market dynamics.</p>
            </div>
            <div className="bg-navy-card border border-white/7 rounded-2xl p-8 hover:border-brand-blue-light/30 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">🔗</div>
              <h4 className="text-lg font-bold mb-3">Ecosystem-Connected</h4>
              <p className="text-sm text-muted font-light leading-relaxed">All products are designed to interoperate smoothly, forming an integrated growth stack for businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footprint */}
      <section className="bg-brand-orange py-24 px-6 md:px-16 overflow-hidden relative">
        <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-navy tracking-tight max-w-2xl leading-tight">
            Want to see <span className="text-white/70">FlowDesk Nexus</span><br/> in action for your business?
          </h2>
          <Link href="https://crm.brandsdigitals.com.ng" target="_blank">
            <Button size="lg" className="bg-white text-navy hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all">
              Book a Demo →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
