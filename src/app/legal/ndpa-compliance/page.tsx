import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDPA Compliance | Brands Digitals Agency",
  description: "Our structural alignment with the Nigeria Data Protection Act.",
};

export default function NdpaCompliancePage() {
  const lastUpdated = "April 2026";
  
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
        LEGAL & COMPLIANCE
      </div>
      
      <h1>NDPA Compliance Statement</h1>
      <p>Last Updated: {lastUpdated}</p>

      <p>
        Brands Digitals Agency operates its software infrastructure and client data processing pipelines in strict alignment with the <strong>Nigeria Data Protection Act (NDPA) of 2023</strong>.
      </p>

      <h2>1. Data Processing Principles</h2>
      <p>
        Our technical foundations reflect the core tenets of the NDPA:
      </p>
      <ul>
        <li><strong>Lawfulness & Transparency:</strong> We collect data explicitly through opt-in modalities like our Lead Qualification terminals.</li>
        <li><strong>Purpose Limitation:</strong> B2B data indexed within our systems (including DeepReach target databases) is leveraged strictly for defined digital marketing and CRM engagements.</li>
        <li><strong>Data Minimization:</strong> We engineer our intake funnels to exclusively request data critical to performing technical audits or issuing software licenses.</li>
      </ul>

      <h2>2. Data Security & Storage Architecture</h2>
      <p>
        To comply with NDPA security mandates, we secure all localized data routing through our cloud infrastructures. Databases attached to products like FlowDesk Nexus are encrypted in-transit securely utilizing HTTPS methodologies.
      </p>

      <h2>3. Data Subject Rights in Nigeria</h2>
      <p>
        Any Nigerian citizen or corporate entity interacting with our digital properties holds the right to immediately request a full JSON export of their stored profile, or trigger an absolute erasure cascade across our active databases, barring information we are legally bound to retain for tax/invoicing purposes.
      </p>

      <h2>Action Requests</h2>
      <p>
        To execute an NDPA-related data request, issue your structural demand to our compliance terminal at: <a href="mailto:privacy@brandsdigitals.com.ng">privacy@brandsdigitals.com.ng</a>
      </p>
    </>
  );
}
