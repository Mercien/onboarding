"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { LeadModal } from "@/components/ui/lead-modal/LeadModal";
import { ALL_SERVICES } from "@/lib/service-data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const navPadding = useTransform(scrollY, [0, 80], ["18px 64px", "12px 64px"]);
  const navBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(8, 12, 22, 0)", "rgba(8, 12, 22, 0.9)"]
  );

  return (
    <>
      <motion.nav
        style={{ padding: navPadding, background: navBackground }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[200] flex items-center justify-between backdrop-blur-xl border-b border-white/7 transition-colors duration-300",
          isOpen ? "bg-navy" : ""
        )}
      >
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Brands Digitals Logo"
            width={200}
            height={50}
            priority
            className="w-auto h-auto max-h-8 md:max-h-12 object-contain object-left transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.label === "Services" && pathname.startsWith("/services/"));
            
            if (link.label === "Services") {
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-blue-light py-6",
                      isActive ? "text-brand-blue-light" : "text-muted"
                    )}
                  >
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-64 bg-navy-mid border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                    <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-navy-mid border-t border-l border-white/10 rotate-45"></div>
                    <div className="relative z-10 flex flex-col py-2">
                      {ALL_SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="px-5 py-3 text-sm text-muted hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-brand-blue-light"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-blue-light py-6",
                  isActive ? "text-brand-blue-light" : "text-muted"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" className="hidden md:flex" onClick={() => setIsModalOpen(true)}>
            Book a Discovery Call
          </Button>

          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[190] bg-navy pt-[80px] px-6 flex flex-col lg:hidden"
          >
            <div className="flex flex-col gap-1 mt-4 overflow-y-auto pb-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.label === "Services" && pathname.startsWith("/services/"));
                
                if (link.label === "Services") {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-xl md:text-2xl font-display font-bold py-3 border-b border-white/7 transition-colors flex items-center justify-between",
                          isActive ? "text-white" : "text-muted"
                        )}
                      >
                        {link.label}
                      </Link>
                      <div className="flex flex-col pl-4 border-b border-white/7 pb-2 mt-2">
                        {ALL_SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="py-2.5 text-base text-muted hover:text-white transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl md:text-2xl font-display font-bold py-3 border-b border-white/7 transition-colors",
                      isActive ? "text-white" : "text-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-auto mb-8 pt-4">
              <Button variant="primary" size="lg" className="w-full" onClick={() => setIsModalOpen(true)}>
                Book a Discovery Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
