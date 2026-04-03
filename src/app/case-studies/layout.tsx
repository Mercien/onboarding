import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Deep-Dive Digital Case Studies & Client Wins | Brands Digitals",
  description: "Discover how we scale African brands and enterprises. Read our comprehensive transformations spanning EdTech, Logistics, and Restaurant tech.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
