"use client";

import * as React from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { LeadModal } from "@/components/ui/lead-modal/LeadModal";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase, Camera, Send } from "lucide-react";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <main className="min-h-screen bg-navy text-foreground">
      <Nav />
      {/* Contact Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b border-white/7 bg-gradient-to-b from-navy to-navy-mid">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-brand-orange/13 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end"
          >
            <div>
              <div className="section-label">Connect</div>
              <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mt-6">
                Start Your <span className="text-brand-orange">Venture</span> <br /> 
                <span className="text-muted">Legacy</span>.
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="text-lg text-muted font-light leading-relaxed">
                Ready to transform your digital surface area? Whether you&apos;re a funded founder or a stealth-stage venture, we&apos;re ready to build.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-6 md:px-16 border-b border-white/7">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:hello@brandsdigitals.com.ng" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center text-muted group-hover:border-brand-orange group-hover:text-brand-orange transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-muted-lt font-bold uppercase tracking-widest mb-1">Email Us</span>
                    <span className="text-lg text-white font-medium group-hover:text-brand-orange transition-colors">hello@brandsdigitals.com.ng</span>
                  </div>
                </a>

                <a href="tel:+23400000000" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center text-muted group-hover:border-brand-orange group-hover:text-brand-orange transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-muted-lt font-bold uppercase tracking-widest mb-1">Call Us</span>
                    <span className="text-lg text-white font-medium group-hover:text-brand-orange transition-colors">+234 (0) xxx xxx xxxx</span>
                  </div>
                </a>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center text-muted">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-muted-lt font-bold uppercase tracking-widest mb-1">Our Base</span>
                    <span className="text-lg text-white font-medium">Lagos, Nigeria 🇳🇬</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
                Follow the Transformation
              </h3>
              <div className="flex gap-4">
                {[Briefcase, Camera, Send].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center text-muted hover:border-brand-orange hover:text-brand-orange transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-brand-orange/10 border border-brand-orange/20 p-8 rounded-2xl">
              <p className="text-sm text-brand-orange-light font-medium italic leading-relaxed">
                &quot;We don&apos;t do &apos;quick estimates&apos;. We do deep-dive discovery calls to ensure our builders are aligned with your vision.&quot;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-6 h-px bg-brand-orange/40" />
                <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
                  Mercien, Founder
                </span>
              </div>
            </div>
          </div>

          {/* FAQ (Right) */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-display font-extrabold text-white tracking-tight mb-10">
              Frequently Asked Questions
            </h3>
            <FaqAccordion />
          </div>

        </div>
      </section>

      {/* Full Width Intake CTA */}
      <section className="py-24 px-6 md:px-16 border-b border-white/7">
        <div className="max-w-4xl mx-auto p-12 lg:p-16 bg-navy-mid border border-white/7 rounded-[2rem] text-center shadow-[0_0_80px_-20px_rgba(242,138,2,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100px] bg-brand-orange/20 blur-[100px] pointer-events-none" />
          
          <h4 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
            Ready to start your Intake?
          </h4>
          <p className="text-muted text-lg font-light mb-12 max-w-lg mx-auto relative z-10 leading-relaxed">
            Our 4-step intake form ensures we have exactly what we need to make our discovery call productive.
          </p>
          
          <div className="relative z-10 max-w-md mx-auto">
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-full shadow-2xl">
              Begin Transformation Intake →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
