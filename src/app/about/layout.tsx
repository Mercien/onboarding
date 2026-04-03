import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | The Premier Growth Architecture Agency in Lagos",
  description: "We are a collective of elite developers, digital strategists, and performance marketers based in Lagos, Nigeria. We build digital ecosystems that scale.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
