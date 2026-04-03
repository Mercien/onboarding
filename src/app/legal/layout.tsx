import * as React from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-navy text-foreground font-body">
      <Nav />
      
      {/* Global styling wrapper for legal Markdown/HTML using CSS selectors to enforce brand typography and readability natively without @tailwindcss/typography. */}
      <div className="pt-32 pb-24 px-6 md:px-16 max-w-[800px] mx-auto">
        <div className="
          [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:font-display [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:mb-6
          [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:font-display [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:text-muted [&_p]:font-light [&_p]:leading-relaxed [&_p]:mb-6
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6 [&_ul]:text-muted [&_ul]:font-light [&_ul]:space-y-2
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-6 [&_ol]:text-muted [&_ol]:font-light [&_ol]:space-y-2
          [&_a]:text-brand-blue-light [&_a]:underline-offset-4 hover:[&_a]:underline
          [&_strong]:text-white [&_strong]:font-semibold
        ">
          {children}
        </div>
      </div>

      <Footer />
    </main>
  );
}
