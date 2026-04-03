import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Spam Policy | Brands Digitals Agency",
  description: "Our strict guidelines regarding automated marketing and communications.",
};

export default function AntiSpamPolicyPage() {
  const lastUpdated = "April 2026";
  
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
        LEGAL & COMPLIANCE
      </div>
      
      <h1>Anti-Spam Policy</h1>
      <p>Last Updated: {lastUpdated}</p>

      <p>
        Brands Digitals Agency deploys high-velocity marketing automation and outbound pipelines (such as our proprietary DeepReach software). As a structural rule of our engineering ethos, we strictly prohibit the generation or deployment of "Spam".
      </p>

      <h2>1. Definition of Spam</h2>
      <p>
        We define Spam strictly as unsolicited, bulk commercial broadcast emails or WhatsApp messages dispatched to terminals or prospects who have identically expressed zero prior consent, nor hold any legitimate B2B operational relevance to our clients.
      </p>

      <h2>2. Operational Standards</h2>
      <ul>
        <li><strong>Clean Indexing:</strong> All lead sequences generated must utilize transparent sender identities.</li>
        <li><strong>Absolute Opt-Out:</strong> Every automated marketing cluster dispatched from FlowDesk Nexus or our agency pipelines must feature a single-click, infallible unsubscribe mechanism.</li>
        <li><strong>B2B Legitimate Interest:</strong> Cold engagement is strictly locked to B2B parameters where genuine synergic business value maps directly to the targeted entity.</li>
      </ul>

      <h2>3. Platform Enforcement</h2>
      <p>
        Any client discovered utilizing our proprietary SaaS platforms (FlowDesk, etc.) to inject unverified bulk spam into the network will trigger an immediate, absolute termination of their license keys without refund.
      </p>
    </>
  );
}
