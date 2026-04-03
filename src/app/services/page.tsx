"use client";

import * as React from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ServiceTier } from "@/components/services/ServiceTier";
import { PackageCard } from "@/components/services/PackageCard";
import { RetainerCard } from "@/components/services/RetainerCard";
import { LeadModal } from "@/components/ui/lead-modal/LeadModal";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const TIERS = [
  {
    id: "tier-1",
    num: "01",
    tag: "Strategy First",
    title: "Digital Audit & Strategy",
    description: "We dissect your entire digital ecosystem — analytics, tech stack, competitor positioning, and customer behaviour — and deliver a transformation blueprint that tells you exactly where to focus, what to fix, and what to build next.",
    packages: [
      {
        name: "Discovery Audit",
        tagline: "Uncover immediate leaks and opportunities.",
        price: "₦150k",
        features: ["Tech stack review", "UX/UI friction audit", "Quick-win roadmap", "Competitive gap analysis"]
      },
      {
        name: "Transformation Blueprint",
        tagline: "Complete 12-month growth roadmap.",
        price: "₦350k",
        isFeatured: true,
        features: ["Full data attribution setup", "Channel strategy (Search/Social)", "Revenue projections", "Operational hire list"]
      }
    ]
  },
  {
    id: "tier-2",
    num: "02",
    tag: "Brand Authority",
    title: "Brand & Digital Presence",
    description: "We rebuild how your business shows up — positioning, messaging, visual identity, and web presence — so that the first impression your brand makes is the last one a prospect needs before they reach out.",
    packages: [
      {
        name: "Identity Refresh",
        tagline: "Modernize your visual language.",
        price: "₦450k",
        features: ["New logo & brand guidelines", "Typography & color system", "Social media templates", "Pitch deck design"]
      },
      {
        name: "Premium Presence",
        tagline: "High-performance brand & website.",
        price: "₦1.2M",
        isFeatured: true,
        features: ["Custom Next.js website", "Copywriting for conversion", "Identity system extension", "SEO foundation launch"]
      }
    ]
  },
  {
    id: "tier-3",
    num: "03",
    tag: "Demand Generation",
    title: "Visibility & Demand Engine",
    description: "We build the multi-channel system that puts your business in front of the right people, consistently. Paid media, SEO, and content working together — not in silos — to generate demand that compounds over time.",
    packages: [
      {
        name: "Base Growth",
        tagline: "Start your acquisition engine.",
        price: "₦250k",
        priceSub: "/mo",
        features: ["1 Primary ad channel", "Basic conversion tracking", "Weekly performance sync", "Creative ad testing"]
      },
      {
        name: "Scale Engine",
        tagline: "Aggressive multi-channel growth.",
        price: "₦600k+",
        priceSub: "/mo",
        isFeatured: true,
        features: ["Multi-channel (AdWords/Meta/LinkedIn)", "Content & SEO ops", "Funnel optimization", "Monthly board-ready report"]
      }
    ]
  },
  {
    id: "tier-4",
    num: "04",
    tag: "Operational Excellence",
    title: "Conversion & Growth Systems",
    description: "We engineer the infrastructure behind your growth. CRM configuration, lead scoring, automation workflows, and full-funnel attribution — so every lead is tracked, every follow-up is triggered, and nothing falls through the cracks.",
    packages: [
      {
        name: "Stack Alignment",
        tagline: "Fix your broken systems.",
        price: "₦300k",
        features: ["CRM cleanup & migration", "Auto-attribution setup", "Sales/Marketing handoff", "Basic nurture flows"]
      },
      {
        name: "RevOps Engine",
        tagline: "Automate your revenue growth.",
        price: "₦750k",
        isFeatured: true,
        features: ["Full GHL/HubSpot automation", "Custom lead scoring", "Predictive reporting", "Lifetime value (LTV) models"]
      }
    ]
  },
  {
    id: "tier-5",
    num: "05",
    tag: "Stealth to Scale",
    title: "Market Launch Accelerator",
    description: "Everything a funded startup or new market entrant needs to go from zero to visible in 4–6 weeks. Brand foundation, launch-ready website, first demand channels activated, and a 90-day growth roadmap — built to move fast without cutting corners.",
    packages: [
      {
        name: "The Launchpad",
        tagline: "Get to market, fast.",
        price: "₦2M",
        isFeatured: true,
        features: ["Core brand identity", "High-converting LP", "Lead capture setup", "30-Day launch ad campaign"]
      },
      {
        name: "Launchpad Plus",
        tagline: "The venture-ready setup.",
        price: "₦3.5M",
        features: ["Identity + Content Library", "Full Next.js ecosystem", "GHL Automation stack", "90-Day scale strategy"]
      }
    ]
  }
];

export default function ServicesPage() {
  const [modalState, setModalState] = React.useState<{ isOpen: boolean; preselect?: string }>({
    isOpen: false,
  });

  const openModal = (service?: string) => setModalState({ isOpen: true, preselect: service });
  const closeModal = () => setModalState({ isOpen: false });

  return (
    <main className="min-h-screen bg-navy text-foreground">
      <Nav />
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 px-6 md:px-16 overflow-hidden border-b border-white/7 bg-gradient-to-b from-navy to-navy-mid">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-brand-orange/13 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
          >
            <div className="lg:col-span-7">
              <div className="section-label">All Services</div>
              <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[80px] font-display font-extrabold tracking-tighter leading-[1] md:leading-[0.9] mt-6 break-words max-w-full">
                Premium <span className="text-brand-orange">Digital</span> <br /> Capabilities.
              </h1>
            </div>
            <div className="lg:col-span-5 pb-2 lg:pb-4">
              <p className="text-lg text-muted font-light leading-relaxed max-w-md">
                We&apos;ve spent years refining our transformation engine. From early-stage audits to full-scale operational retainers, we provide the leverage you need to win.
              </p>
              <div className="flex gap-4 mt-8">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-navy bg-brand-orange/20 flex items-center justify-center text-[10px] font-bold text-brand-orange">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-muted-lt uppercase tracking-widest font-bold pt-2">
                  Serving 12+ Tech Startups
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tiers Layer */}
      {TIERS.map((tier, idx) => (
        <ServiceTier
          key={tier.id}
          id={tier.id}
          num={tier.num}
          tag={tier.tag}
          title={tier.title}
          description={tier.description}
          className={idx % 2 === 0 ? "bg-navy" : "bg-navy-mid"}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tier.packages.map((pkg, pIdx) => (
              <PackageCard
                key={pkg.name}
                {...pkg}
                onCtaClick={() => openModal(tier.title)}
              />
            ))}
            
            {/* Standard Deliverables for every tier */}
            <div className="p-8 border border-white/5 bg-navy/20 rounded-2xl flex flex-col justify-between">
              <div>
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-muted mb-6">
                  Core Deliverables
                </h5>
                <ul className="space-y-4">
                  {[
                    "Strategic Roadmap",
                    "Implementation Syncs",
                    "Asset Protection",
                    "Performance Dashboards"
                  ].map((d, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-3 text-xs text-muted font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange/50" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[10px] text-muted italic mt-8">
                * All packages include initial onboarding and strategic alignment.
              </p>
            </div>
          </div>
        </ServiceTier>
      ))}

      {/* Retainer Tier */}
      <ServiceTier
        id="tier-6"
        num="06"
        tag="Venture Level"
        title="Deep Partnership & Support"
        description="Your embedded digital transformation team. We sit inside your growth, not outside it — owning strategy, driving execution, and evolving your entire digital operation as your business scales."
        className="bg-navy"
      >
        <RetainerCard onCtaClick={() => openModal("Transformation Retainer")} />
      </ServiceTier>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center border-t border-white/7 bg-navy">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white mb-8">
          Not sure <span className="text-muted">which tier</span> fits?
        </h2>
        <p className="text-muted text-lg mb-12 max-w-2xl mx-auto font-light">
          Let&apos;s hop on a 20-minute discovery call and figure it out together. No pressure, just strategy.
        </p>
        <button
          onClick={() => openModal("Not sure")}
          className="bg-white text-navy px-10 py-4 rounded-xl font-bold hover:translate-y-[-2px] transition-all shadow-xl hover:shadow-white/10"
        >
          Let&apos;s Talk →
        </button>
      </section>

      <Footer />
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        preselect={modalState.preselect}
      />
    </main>
  );
}
