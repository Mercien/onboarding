"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Success } from "./Success";

const leadSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company / Startup is required"),
  role: z.string().min(2, "Your role is required"),
  industry: z.string().min(1, "Industry is required"),
  businessStage: z.string().min(1, "Business stage is required"),
  fundingStatus: z.string().min(1, "Funding status is required"),
  serviceInterest: z.string().min(1, "Service interest is required"),
  monthlyBudget: z.string().min(1, "Monthly budget is required"),
  primaryGoals: z.array(z.string()).min(1, "Select at least one goal"),
  message: z.string().min(10, "Please provide more context"),
  referralSource: z.string().min(1, "Referral source is required"),
  contactPreference: z.string().min(1, "Contact preference is required"),
  agreement: z.boolean().refine((val) => val === true, "You must agree to be contacted"),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselect?: string;
}

export function LeadModal({ isOpen, onClose, preselect }: LeadModalProps) {
  const [step, setStep] = React.useState(1);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const methods = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      primaryGoals: [],
      serviceInterest: preselect || "",
      agreement: false,
    },
    mode: "onBlur",
  });

  const nextStep = async () => {
    // Basic validation for each step before proceeding
    const fieldsByStep: Record<number, (keyof LeadFormData)[]> = {
      1: ["firstName", "lastName", "email", "company", "role"],
      2: ["industry", "businessStage", "fundingStatus"],
      3: ["serviceInterest", "monthlyBudget", "primaryGoals"],
      4: ["message", "referralSource", "contactPreference", "agreement"],
    };

    const isStepValid = await methods.trigger(fieldsByStep[step]);
    if (isStepValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to submit lead"}`);
      }
    } catch (error) {
      console.error("Lead submission error:", error);
      alert("Failed to submit lead. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setIsSuccess(false);
    setStep(1);
    methods.reset();
    onClose();
  };

  // Close on ESC
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-6 bg-navy/85 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="w-full max-w-2xl bg-navy-card rounded-2xl border border-white/10 shadow-2xl relative flex flex-col max-h-[95vh] md:max-h-[90vh] overflow-hidden"
      >
        {/* Progress Bar */}
        {!isSuccess && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-20">
            <motion.div
              initial={{ width: "25%" }}
              animate={{ width: `${(step / 4) * 100}%` }}
              className="h-full bg-brand-orange shadow-[0_0_10px_rgba(242,138,2,0.5)]"
            />
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted hover:text-white hover:bg-white/10 rounded-lg transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-12 overflow-y-auto">
          {!isSuccess && (
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-display font-extrabold text-white">
                Book Your Discovery Call
              </h3>
              <p className="text-sm text-muted mt-1 font-light">
                Step {step} of 4 — {step === 1 ? "Basic Info" : step === 2 ? "Business Profile" : step === 3 ? "Service Interest" : "Final Details"}
              </p>
            </div>
          )}

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Success onReset={resetModal} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step === 1 && <Step1 onNext={nextStep} />}
                    {step === 2 && <Step2 onNext={nextStep} onBack={prevStep} />}
                    {step === 3 && <Step3 onNext={nextStep} onBack={prevStep} />}
                    {step === 4 && <Step4 onSubmit={methods.handleSubmit(onSubmit)} onBack={prevStep} isSubmitting={isSubmitting} />}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FormProvider>
        </div>
      </motion.div>
    </div>
  );
}
