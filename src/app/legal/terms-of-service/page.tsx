import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Brands Digitals Agency",
  description: "Terms and conditions shaping our technical ecosystem and services.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "April 2026";
  
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
        LEGAL & COMPLIANCE
      </div>
      
      <h1>Terms of Service</h1>
      <p>Last Updated: {lastUpdated}</p>

      <p>
        These Terms of Service govern your access to and utilization of the Brands Digitals Agency network, platforms (including FlowDesk Nexus and DeepReach), and all associated digital transformation services across Nigeria and internationally.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing brandsdigitals.com.ng or utilizing our proprietary platform tooling, you structurally agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you inherently assume restriction from utilizing our software ecosystem.
      </p>

      <h2>2. Products & Platform Access</h2>
      <ul>
        <li><strong>Software Provisioning:</strong> Tools like AdForge, FlowDesk, and DeepReach are licensed, not sold. We grant you a strictly bounded, non-exclusive license to utilize these platforms on a SaaS (Software as a Service) architecture.</li>
        <li><strong>Account Integrity:</strong> You are fully responsible for safeguarding the credentials mapped to your CRM pipelines and lead-generation dashboards.</li>
        <li><strong>Acceptable Use:</strong> You agree not to attempt to reverse-engineer our platforms, inject malicious payloads, or automate undocumented API executions against our servers.</li>
      </ul>

      <h2>3. Agency Retainers & Services</h2>
      <p>
        Consultancy scopes, Market Launch Accelerators, and Deep Partnership Retainers operate alongside an implicit Client Service Agreement. The precise deliverables, SLA margins, and payment milestones are strictly defined in customized proposals dispatched prior to engagement kick-off.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All foundational codebases, architectural designs, AI algorithms structuring our tools, and site copyrights belong exclusively to Brands Digitals Agency. Brand marks, client logos, and distinct deliverables handed over during engagements belong exclusively to their respective owners upon final invoice clearance.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        To the maximal extent permitted by applicable Nigerian or international law, Brands Digitals Agency refuses liability for any indirect, incidental, or consequential damages resulting from platform downtime, lost business leads, or market positioning failure derived from external macro-economic forces.
      </p>

      <h2>Contact Operation</h2>
      <p>
        For inquiries regarding these structural parameters, please reach us: <br/>
        <a href="mailto:admin@brandsdigitals.com.ng">admin@brandsdigitals.com.ng</a>
      </p>
    </>
  );
}
