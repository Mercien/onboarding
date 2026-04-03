import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Brands Digitals Agency",
  description: "How we securely handle, store, and process your data.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 2026";
  
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
        LEGAL & COMPLIANCE
      </div>
      
      <h1>Privacy Policy</h1>
      <p>Last Updated: {lastUpdated}</p>

      <p>
        At Brands Digitals Agency (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your privacy and are committed to deeply protecting it through our compliance with both local laws, notably the <strong>Nigeria Data Protection Act (NDPA)</strong>, and international best practices.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We only collect data that is strictly necessary to deliver our digital transformation services to you:</p>
      <ul>
        <li><strong>Identity & Contact Data:</strong> Names, email addresses, phone numbers, and professional roles (often gathered through our Discovery/Lead modals).</li>
        <li><strong>Business Data:</strong> Company names, operational stages, funding status, and marketing budgets.</li>
        <li><strong>Technical Data:</strong> IP addresses, browser types, and usage data via standard analytical cookies globally configured on our properties.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>Your information operates securely behind our infrastructure and is utilized solely to:</p>
      <ul>
        <li>Deliver high-fidelity software products (like FlowDesk Nexus and DeepReach) and marketing solutions to your business.</li>
        <li>Formulate precise, bespoke discovery proposals.</li>
        <li>Process operational support and administrative communications.</li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <p>We do not broker, sell, or rent your operational data. Information is only shared securely with trusted third-party infrastructure providers (such as hosting and CRM databases) fundamentally required to render our services, and only subjected to strict confidentiality NDAs.</p>

      <h2>4. Data Security</h2>
      <p>We process all data via encrypted HTTPS connections. Information routed through our Lead generation terminals or within FlowDesk Nexus pipelines is heavily authenticated, ensuring that prospect data never leaks or becomes vulnerable.</p>

      <h2>5. Your Rights</h2>
      <p>Under the NDPA, you have fundamental rights regarding your data:</p>
      <ul>
        <li>The right to request absolute access to your personal/company data.</li>
        <li>The right to demand correction or erasure of incomplete or inaccurate data.</li>
        <li>The right to object to processing operations or request structured portability.</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have immediate questions concerning this Privacy architecture, contact our compliance team securely at: <br/>
        <a href="mailto:privacy@brandsdigitals.com.ng">privacy@brandsdigitals.com.ng</a>.
      </p>
    </>
  );
}
