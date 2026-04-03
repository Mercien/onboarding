import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Book a Discovery Architecture Call",
  description: "Ready to overhaul your digital presence? Book a technical discovery call with our primary strategists to map out your structural roadmap.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
