"use client";

import * as React from "react";
import { ServiceData } from "@/lib/service-data";
import { ServiceCardsGrid } from "@/components/services/ServiceCardsGrid";
import { LeadModal } from "@/components/ui/lead-modal/LeadModal";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Plus, Minus, ArrowRight, Search, Laptop, Share2, Zap, Database, Target, Mail, FileText } from "lucide-react";

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

export function ServiceClientPage({ service }: { service: ServiceData }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const IconComponent = IconMap[service.icon] || Target;

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-16 overflow-hidden border-b border-white/7 bg-gradient-to-b from-navy to-navy-mid">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-brand-blue-light/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-50px] left-[-100px] w-[600px] h-[600px] bg-brand-blue-light/5 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Mobile Icon (Background) */}
        <div className="lg:hidden absolute top-20 right-[-20%] opacity-10 pointer-events-none overflow-hidden">
           <IconComponent className="w-80 h-80 text-brand-blue-light" strokeWidth={1} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-8 relative z-10">
              <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Transformation Service
              </div>
              <h1 className="text-[36px] sm:text-5xl md:text-6xl lg:text-[72px] font-display font-extrabold tracking-tighter leading-[1] md:leading-[0.9] mt-2 mb-6 w-full text-white">
                {service.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mb-10">
                {service.heroSubheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  variant="primary"
                >
                  Book a Strategy Call
                </Button>
                <a 
                  href="/case-studies"
                  className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
                >
                  View Case Studies
                </a>
              </div>
            </div>

            {/* Desktop Icon */}
            <div className="hidden lg:flex lg:col-span-4 justify-end items-center relative">
               <div className="relative">
                 <div className="absolute inset-0 bg-brand-blue-light/20 blur-[60px] rounded-full scale-150"></div>
                 <IconComponent className="w-48 h-48 xl:w-64 xl:h-64 text-brand-blue-light relative z-10 opacity-80 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]" strokeWidth={1.5} />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust / Social Proof */}
      <section className="py-12 border-b border-white/7 bg-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <p className="text-sm text-brand-gold uppercase tracking-[0.2em] font-bold mb-6">
            Trusted By Market Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for Client Logos. Reusing existing style */}
            <span className="text-xl font-display font-bold text-white tracking-widest">FUNDALL</span>
            <span className="text-xl font-display font-bold text-white tracking-widest">SENDMESS</span>
            <span className="text-xl font-display font-bold text-white tracking-widest">ORDA</span>
            <span className="text-xl font-display font-bold text-white tracking-widest">ALGROVE</span>
          </div>
        </div>
      </section>

      {/* 3. Service Explanation (Systems Angle) */}
      <section className="py-24 px-6 md:px-16 bg-navy-mid">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-8">
            {service.explanationHeadline}
          </h2>
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
            {service.explanationCopy}
          </p>
        </div>
      </section>

      {/* 5. How It Works (Process) */}
      <section className="py-24 px-6 md:px-16 bg-navy relative border-t border-white/7">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
              How We Execute
            </h2>
            <p className="text-lg text-muted font-light">
              Our systematic approach to predictable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-[64px] font-display font-extrabold text-white/5 absolute top-[-20px] left-0 pointer-events-none">
                  0{idx + 1}
                </div>
                <div className="relative z-10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-brand-blue-light/10 flex items-center justify-center border border-brand-blue-light/20 mb-6 text-brand-blue-light">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-muted font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 7. Case Studies / Results Snippet */}
      <section className="py-24 px-6 md:px-16 bg-brand-blue-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue-light/10 blur-[100px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-8">
            The Result
          </h2>
          <div className="text-xl md:text-3xl font-light text-brand-blue-light leading-relaxed italic mb-10">
            "{service.caseStudyMetric}"
          </div>
          <a 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-brand-blue-light transition-colors"
          >
            Read the full case study <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* 4. Service Cards Grid (Placed right before pricing) */}
      <ServiceCardsGrid />

      {/* 6. Service Packages Call to Action (Referring to main services) */}
      <section className="py-24 px-6 md:px-16 bg-navy-mid border-t border-white/7 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Ready to deploy this system?
          </h2>
          <p className="text-lg text-muted font-light mb-10">
            We offer structured retainers and specialized sprints tailored to your exact business size and revenue goals.
          </p>
          <a 
            href="/services"
            className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:scale-[0.98] px-8 py-3 text-base md:text-lg bg-brand-orange text-white hover:bg-brand-orange-light shadow-[0_6px_20px_rgba(242,138,2,0.3)] hover:shadow-[0_10px_30px_rgba(242,138,2,0.4)]"
          >
            View Our Standard Packages →
          </a>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 px-6 md:px-16 bg-navy border-t border-white/7">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-white/10 rounded-2xl bg-navy-card overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                    <span className="text-muted shrink-0">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-muted font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 px-6 text-center border-t border-brand-blue-light/20 bg-gradient-to-b from-navy to-[#050810]">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white mb-8">
          Let's build your <span className="text-brand-blue-light">growth system.</span>
        </h2>
        <Button
          onClick={() => setIsModalOpen(true)}
          size="lg"
          variant="primary"
          className="px-10 py-4"
        >
          Book Your Discovery Call
        </Button>
      </section>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselect={service.title}
      />
    </>
  );
}
