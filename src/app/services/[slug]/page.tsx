import * as React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ALL_SERVICES } from "@/lib/service-data";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ServiceCardsGrid } from "@/components/services/ServiceCardsGrid";
import { CheckCircle2, ChevronRight, BarChart3, Workflow } from "lucide-react";
import { ServiceClientPage } from "./ServiceClientPage";

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found | Brands Digitals",
    };
  }
  
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy text-foreground">
      <Nav />
      <ServiceClientPage service={service} />
      <Footer />
    </main>
  );
}
