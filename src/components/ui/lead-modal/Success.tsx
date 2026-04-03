"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Success({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
        className="w-20 h-20 bg-brand-blue-light/20 rounded-full flex items-center justify-center mb-8"
      >
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Check size={40} className="text-brand-blue-light" />
        </motion.div>
      </motion.div>

      <h2 className="text-3xl font-display font-extrabold text-white mb-4">
        You&apos;re booked in! 🎉
      </h2>

      <p className="text-muted max-w-sm mb-10 leading-relaxed font-light">
        We&apos;ve received everything. Our team will review your details and 
        reach out within 24 hours to confirm your Discovery Call time.
        <br /><br />
        Check your inbox — we&apos;ve sent you a confirmation.
      </p>

      <Button onClick={onReset} variant="outline" className="w-full">
        Back to site →
      </Button>
    </div>
  );
}
