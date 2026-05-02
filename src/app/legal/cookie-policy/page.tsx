import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Brands Digitals Agency",
  description: "Detailed information on how we utilize cookies and track interaction data.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "April 2026";
  
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
        LEGAL & COMPLIANCE
      </div>
      
      <h1>Cookie Policy</h1>
      <p>Last Updated: {lastUpdated}</p>

      <p>
        Brands Digitals Agency processes small data files called &quot;cookies&quot; directly on your device. We use this fundamental technology to analyze digital traffic, secure your active sessions within our platforms, and deliver hyper-contextualized product experiences.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are text fragments stored on your device/browser natively. They are standard infrastructure enabling web applications to remember your state (such as login sessions for FlowDesk Nexus or UI theme preferences).
      </p>

      <h2>2. Categories We Deploy</h2>
      <ul>
        <li><strong>Strictly Necessary:</strong> Essential cookies required for you to log into our dashboards securely. You cannot opt out of these without breaking site functionality.</li>
        <li><strong>Analytical & Performance:</strong> Metrics tracking (e.g., Google Analytics) to help us map how users transition through our site architecture and optimization tunnels.</li>
        <li><strong>Marketing & Targeting:</strong> Used strictly to map relevance of our digital ad campaigns or to trigger retargeting arrays for our proprietary SaaS tools.</li>
      </ul>

      <h2>3. Consent & Control</h2>
      <p>
        Upon first landing, you are prompted to accept non-essential cookies. You have fundamental control via your browser settings to strictly block or delete all stored cookie fragments at any given time. However, disabling all localized caching may degrade the performance of our deep SaaS applications.
      </p>
    </>
  );
}
