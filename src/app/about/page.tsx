"use client";

import * as React from "react";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Timeline } from "@/components/about/Timeline";
import { ValueCard } from "@/components/about/ValueCard";
import { CredentialCard } from "@/components/about/CredentialCard";
import { 
  Rocket, 
  Target, 
  ShieldCheck, 
  Eye, 
  Award, 
  GraduationCap, 
  Briefcase,
  Monitor
} from "lucide-react";
import { motion } from "framer-motion";

const VALUES = [
  { icon: Rocket, title: "Speed to Impact", description: "In the startup world, speed is the only advantage. We build for velocity without sacrificing precision." },
  { icon: Target, title: "Outcomes over Output", description: "We don&apos;t care about how many tasks we finish. We care about the revenue and traffic impact we create." },
  { icon: ShieldCheck, title: "Operational Integrity", description: "We build systems that are honest, transparent, and durable. No shortcuts, just solid engineering." },
  { icon: Eye, title: "Radical Visibility", description: "You always know where your budget is going and what results it&apos;s yielding. Data is the source of truth." },
];

const CREDENTIALS = [
  { icon: Award, title: "Digital Strategy", sub: "Google Certified", description: "Advanced certification in search, display, and measurement operations." },
  { icon: GraduationCap, title: "Academic Edge", sub: "BSc & MSc Architecture", description: "Applying architectural systems thinking to digital environments and growth engines." },
  { icon: Monitor, title: "Tech Ecosystems", sub: "RevOps Specialist", description: "Deep expertise in GHL, HubSpot, and automated lead management systems." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy text-foreground">
      <Nav />
      {/* About Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b border-white/7 bg-gradient-to-b from-navy to-navy-mid">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-brand-blue-light/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-80px] w-[500px] h-[500px] bg-brand-blue-light/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end"
          >
            <div>
              <div className="section-label">Founders&apos; Story</div>
              <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mt-6">
                Built for <span className="text-brand-blue-light">Impact</span>. Driven by <span className="text-brand-blue-light">Scale</span>.
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="text-lg text-muted font-light leading-relaxed">
                Founded by Mercien, a strategist obsessed with the intersection of architecture, technology, and startup growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story & Profile Section */}
      <section id="story" className="py-24 px-6 md:px-16 border-b border-white/7">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <div className="space-y-6 text-muted text-lg font-light leading-relaxed">
              <p>
                The problem with most digital agencies is they treat the startup journey as a series of design tasks. They build websites that look good but fail to capture the operational complexity of a scaling venture.
              </p>
              <p>
                At <span className="text-white font-medium underline decoration-brand-orange decoration-2 underline-offset-4">Brands Digitals Agency</span>, we see things differently. We apply architectural systems thinking to the digital world.
              </p>
              <p>
                Every project is a structure that must hold weight, every marketing engine a circuit that must deliver power. We&apos;ve spent years helping African founders turn their stealth ideas into venture-ready scaleups by building the right foundations.
              </p>
            </div>
            
            <div className="flex gap-4 items-center pt-4">
              <div className="h-1 w-12 bg-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">The Build Continues</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="about-profile-card relative group"
          >
            <div className="bg-navy-card border border-white/7 rounded-2xl overflow-hidden aspect-[3/4] flex items-end relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-mid to-transparent opacity-60 z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-light/5 to-navy-mid/80" />
              <Image 
                src="/aanu.jpeg" 
                alt="Aanu Damilare Oke" 
                fill 
                className="object-cover object-center absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
              />
              <div className="about-degree-chip absolute top-8 right-8 z-20 bg-navy/90 border border-white/7 p-4 rounded-xl text-center shadow-lg transform group-hover:scale-105 transition-transform">
                <strong className="block font-display font-bold text-xs uppercase tracking-widest text-white">
                  Strategy & Tech
                </strong>
                <em className="block text-[10px] text-brand-gold font-medium uppercase mt-1 not-italic">
                  Founding Strategist
                </em>
              </div>
              
              <div className="about-profile-info relative z-20 p-8 w-full bg-gradient-to-t from-navy/95 to-transparent flex justify-between items-end">
                <div>
                  <strong className="block font-display font-extrabold text-2xl text-white tracking-tight">
                    Mercien (Aanu Damilare Oke)
                  </strong>
                  <em className="block text-sm text-brand-blue-light font-bold uppercase tracking-widest mt-1 not-italic">
                    Lead Transformation Strategist
                  </em>
                </div>
                <Briefcase size={24} className="text-muted hover:text-white cursor-pointer transition-colors" />
              </div>
              
              {/* Image added above */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 md:px-16 bg-navy-mid border-b border-white/7">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <h5 className="section-label">Our Journey</h5>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white leading-tight">
              Years of <span className="text-brand-blue-light">Building</span> <br />
              Venture <span className="text-muted">Legacy</span>.
            </h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-16 border-b border-white/7">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h5 className="section-label mx-auto">Core Principles</h5>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white leading-tight mt-4">
              Our <span className="text-brand-blue-light">Guiding</span> Truths.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((val) => (
              <ValueCard key={val.title} {...val} />
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 px-6 md:px-16 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div className="max-w-2xl">
              <h5 className="section-label">Expertise</h5>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white leading-tight mt-4">
                Architecture Meets <br /> <span className="text-brand-blue-light">Digital Engineering</span>.
              </h2>
            </div>
            <p className="text-lg text-muted font-light leading-relaxed pt-12">
              Our unique edge comes from applying structural engineering principles to digital growth engines. We&apos;re certified where it counts and experienced where it matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred) => (
              <CredentialCard key={cred.title} {...cred} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
