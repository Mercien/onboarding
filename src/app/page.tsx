import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { FounderSnippet } from "@/components/sections/FounderSnippet";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <TrustBar />
      <WhyUs />
      <ServicesPreview />
      <ProductsPreview />
      <FounderSnippet />
      <CtaBand />
      <Footer />
    </main>
  );
}

