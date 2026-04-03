import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Strategy & Development Services | Brands Digitals",
  description: "Comprehensive digital transformation services for startups and scaleups. From deep technical audits to bespoke software architectures and automated marketing.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
