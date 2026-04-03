"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

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
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white",
                  isActive ? "text-white" : "text-muted"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" className="hidden md:flex">
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
            <div className="flex flex-col gap-2 mt-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-display font-bold py-4 border-b border-white/7 transition-colors",
                      isActive ? "text-white" : "text-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-auto mb-10">
              <Button variant="primary" size="lg" className="w-full">
                Book a Discovery Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
