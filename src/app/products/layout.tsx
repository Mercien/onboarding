import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SaaS Tools & Agency Platforms | Brands Digitals Lifecycle",
  description: "Access our proprietary software ecosystem. Automate your sales pipeline with FlowDesk Nexus CRM and dominate paid media with AdForge AI.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
