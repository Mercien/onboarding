import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Service Agreement | Brands Digitals Agency",
  description: "Standard definitions structuring our active agency partnerships.",
};

export default function ClientServiceAgreementPage() {
  const lastUpdated = "April 2026";
  
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
        LEGAL & COMPLIANCE
      </div>
      
      <h1>Client Service Agreement</h1>
      <p>Last Updated: {lastUpdated}</p>

      <p>
        This Master Systems & Service architecture outlines the operational relationship between Brands Digitals Agency and any entity securing our retainer pipelines, strategy audits, or growth campaigns. 
      </p>

      <h2>1. Scope of Work (SOW)</h2>
      <p>
        The precise deliverables, platform boundaries (AdForge vs FlowDesk integrations), timeline milestones, and strategic targets will always be formally documented in a bespoke Proposal or SOW prior to onboarding. This page serves solely as the foundational baseline governing those SOWs.
      </p>

      <h2>2. Financial Structures</h2>
      <ul>
        <li><strong>Invoicing:</strong> Projects generally require a 60% activation milestone payment, followed by the definitive 40% cleared immediately prior to project handover or physical deployment.</li>
        <li><strong>Retainers & Deep Partnerships:</strong> Invoiced strictly at the start of each month (billing cycle). Prolonged delays in retainer payments will automatically trip an operational pause on all live digital campaigns.</li>
      </ul>

      <h2>3. Client Responsibilities</h2>
      <p>
        Digital transformation requires high-velocity collaboration. The client must supply structural access (domain DNS, ad account permissions, historical CRM data exports) efficiently to prevent deployment bottlenecks. Brands Digitals holds zero liability for stalled timelines resulting directly from client lag in supplying critical assets.
      </p>

      <h2>4. Termination Clause</h2>
      <p>
        Retainer partnerships require a strict 30-day structural notice prior to termination. This ensures we can cleanly gracefully pause automated ad-spend, export CRM pipelines to you, and deactivate your custom environments securely.
      </p>
    </>
  );
}
