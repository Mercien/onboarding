import Link from "next/link";
import Image from "next/image";
import { Globe, Send, Briefcase, Camera } from "lucide-react";
import { cn } from "@/lib/utils";


const FOOTER_LINKS = {
  Services: [
    { label: "Digital Audit & Strategy", href: "/services#tier-1" },
    { label: "Brand & Digital Presence", href: "/services#tier-2" },
    { label: "Visibility & Demand Engine", href: "/services#tier-3" },
    { label: "Conversion & Growth Systems", href: "/services#tier-4" },
    { label: "Market Launch Accelerator", href: "/services#tier-5" },
    { label: "Deep Partnership & Support", href: "/services#tier-6" },
  ],
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
    { label: "Client Agreement", href: "/legal/client-service-agreement" },
    { label: "NDPA Compliance", href: "/legal/ndpa-compliance" },
    { label: "Anti-Spam Policy", href: "/legal/anti-spam-policy" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-white/7 pt-20 pb-10 px-6 md:px-16 overflow-hidden relative z-[1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/7">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Brands Digitals Logo"
                width={200}
                height={50}
                className="w-auto h-auto max-h-10 md:max-h-12 object-contain object-left transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="mt-4 text-muted max-w-sm text-sm leading-relaxed font-light">
              Brands Digitals Agency is the digital transformation partner for African startups and scaleups that want more than marketing — we combine senior strategy, proprietary technology, and full-service execution to build businesses that grow by design, not by chance.
              <br className="my-2 block" />
              Strategy-first. Systems-obsessed. Results-driven.
              <br className="my-2 block" />
              Lagos, Nigeria · Serving Africa & Beyond
            </p>
            <div className="flex gap-3 mt-8">
              {[Briefcase, Camera, Send, Globe].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 border border-white/7 rounded-lg flex items-center justify-center text-muted hover:border-brand-blue-light hover:text-white transition-all duration-200"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>

          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h5 className="font-display font-bold text-xs uppercase tracking-widest text-muted">
                {title}
              </h5>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          <p className="text-xs text-muted font-light">
            © {new Date().getFullYear()} Brands Digitals Agency. All rights reserved. 
            <span className="hidden md:inline mx-2 text-white/10">|</span>
            Built by <span className="text-brand-blue-light hover:underline cursor-pointer">Mercien</span>.
          </p>
          <div className="bg-white/4 border border-white/7 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-muted font-medium">
            Lagos, Nigeria 🇳🇬
          </div>
        </div>
      </div>
    </footer>
  );
}
