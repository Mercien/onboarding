export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  icon: any; // Lucide icon
  title: string;
  shortDescription: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  
  // Hero
  heroHeadline: string;
  heroSubheadline: string;
  
  // Service Explanation
  explanationHeadline: string;
  explanationCopy: string;
  
  // Process
  processSteps: ServiceStep[];
  
  // Result
  caseStudyMetric: string;
  
  // FAQ
  faqs: ServiceFAQ[];
}

export const ALL_SERVICES: ServiceData[] = [
  {
    slug: "seo",
    icon: "Search",
    title: "SEO Systems",
    shortDescription: "Dominate search rankings with scalable, content-led organic growth.",
    
    seoTitle: "SEO Services in Nigeria | Brands Digitals Agency",
    seoDescription: "Rank higher on Google and generate consistent leads with SEO systems designed for long-term growth and predictable traffic.",
    
    heroHeadline: "SEO Services in Nigeria That Drive Predictable Revenue",
    heroSubheadline: "Rank higher on Google and generate consistent leads with SEO systems designed for long-term growth and predictable traffic.",
    
    explanationHeadline: "The Anatomy of a Search Dominance System",
    explanationCopy: "Traditional SEO relies on guesswork. We approach SEO as structural engineering. By aligning technical site architecture, semantic content clusters, and high-authority backlinks, we build an organic acquisition system that compounds in value month after month.",
    
    processSteps: [
      { title: "Technical Audit & Foundation", description: "We fix site architecture, indexability issues, and speed bottlenecks so Google can properly crawl your assets." },
      { title: "Semantic Keyword Architecture", description: "We map high-intent commercial keywords directly to your revenue goals, ensuring we attract buyers, not just browsers." },
      { title: "Content Ecosystem Build-Out", description: "We deploy high-value, ranking assets designed to intercept your prospects exactly when they are searching for a solution." },
      { title: "Authority Amplification", description: "We build structural domain trust through high-quality, relevant backlinks from authoritative digital publications." }
    ],
    
    caseStudyMetric: "Grew organic traffic by 340% and inbound leads by 45% in 6 months for a B2B SaaS client.",
    
    faqs: [
      { question: "How much do SEO services cost in Nigeria?", answer: "Our SEO retainers are custom-scoped based on the size of your website and the competitiveness of your industry, typically starting from mid-tier investments designed to generate a strong ROI." },
      { question: "How long does it take to see results?", answer: "SEO is a structural investment. While technical fixes provide quick wins in weeks 1-4, compounding organic traffic and lead generation typically mature between months 3 and 6." },
      { question: "Do you guarantee page 1 rankings?", answer: "No professional agency guarantees #1 rankings because Google's algorithm is proprietary. However, we guarantee our systems-driven approach, which has consistently dominated competitive niches." },
      { question: "How do you track SEO ROI?", answer: "We implement full-funnel tracking to measure exactly how many leads, calls, and closed deals originated from organic search, so you see revenue, not just clicks." }
    ]
  },
  {
    slug: "website-design",
    icon: "Laptop",
    title: "Website Engineering",
    shortDescription: "High-performance, conversion-driven websites built for scale.",
    
    seoTitle: "Website Design in Lagos | Brands Digitals Agency",
    seoDescription: "Get a high-converting website built to attract, engage, and turn visitors into customers with performance-driven design systems.",
    
    heroHeadline: "Website Design in Nigeria Built for Scale and Conversion",
    heroSubheadline: "Get a high-converting website built to attract, engage, and turn visitors into customers with performance-driven design systems.",
    
    explanationHeadline: "Websites as Revenue Infrastructure",
    explanationCopy: "A beautiful website without a conversion strategy is a leaky bucket. We fuse modern architectural design with deep conversion rate optimization (CRO) to build digital assets that seamlessly guide prospects from discovery to transaction.",
    
    processSteps: [
      { title: "UX Strategy & Wireframing", description: "We map the complete user journey, reducing friction and designing clear pathways to conversion." },
      { title: "UI Design & Prototyping", description: "We establish a premium visual identity that builds immense trust and authority at first glance." },
      { title: "Technical Engineering", description: "We build on modern stacks (like Next.js/React) for unmatched speed, security, and scalability." },
      { title: "CRO & Launch", description: "We optimize all forms, CTAs, and analytics tags to ensure maximum lead capture upon launch." }
    ],
    
    caseStudyMetric: "Decreased bounce rate by 40% and increased lead conversion by 2.5x for a leading Nigerian logistics firm.",
    
    faqs: [
      { question: "What platform do you use to build websites?", answer: "We primarily build custom, high-performance web applications using React/Next.js for scalability, though we also utilize Webflow and Shopify depending on your exact business needs." },
      { question: "How much does a custom website cost in Nigeria?", answer: "Costs vary based on complexity, integrations, and scale. We scope each project individually to ensure you're investing in an asset that drives revenue, not just a digital brochure." },
      { question: "Do you provide website maintenance after launch?", answer: "Yes, we offer ongoing technical support, performance monitoring, and iteration retainers to ensure your site continues to convert at a high level." },
      { question: "Will my website be optimized for SEO?", answer: "Absolutely. Technical SEO—including fast load times, semantic HTML, and proper mobile responsiveness—is baked into our engineering process from day one." }
    ]
  },
  {
    slug: "social-media-management",
    icon: "Share2",
    title: "Social Media Management",
    shortDescription: "Brand authority and community building across major networks.",
    
    seoTitle: "Social Media Management in Nigeria | Brands Digitals",
    seoDescription: "Turn your social media into a lead generation system with strategic content, automation, and growth-focused management.",
    
    heroHeadline: "Social Media Management in Nigeria That Builds Real Authority",
    heroSubheadline: "Turn your social media into a lead generation system with strategic content, automation, and growth-focused management.",
    
    explanationHeadline: "Social Media as a Demand Engine",
    explanationCopy: "Posting isn't a strategy. We treat social media as an interconnected content distribution system. By combining striking visual identity with deeply researched psychological hooks, we turn passive scrolling into active brand engagement.",
    
    processSteps: [
      { title: "Audience & Competitor Analysis", description: "We audit your competitive landscape to find market gaps and identify exactly what your audience is currently engaging with." },
      { title: "Content Pillar Development", description: "We structure your brand narrative into 3-4 core educational and authoritative content pillars." },
      { title: "Creative Production", description: "We design premium, scroll-stopping visual assets and write conversion-focused copywriting." },
      { title: "Distribution & Community Management", description: "We publish strategically and actively foster real engagement to build a loyal community around your brand." }
    ],
    
    caseStudyMetric: "Generated 5M+ organic impressions and 300+ direct DMs inquiring about services for a B2B tech startup.",
    
    faqs: [
      { question: "Which social platforms should my business be on?", answer: "It entirely depends on your audience. B2B companies often thrive on LinkedIn and Twitter/X, while consumer brands require a strong presence on Instagram and TikTok. We identify where your buyers actually spend time." },
      { question: "How much does social media management cost in Nigeria?", answer: "We offer structured monthly retainers based on posting frequency, platform coverage, and the level of custom creative production required." },
      { question: "How do you measure social media ROI?", answer: "We measure success through engagement rates, audience growth, and ultimately, traffic and inbound leads generated from our social funnels." },
      { question: "Do you handle content creation and video editing?", answer: "Yes, our retainers include full-stack creative production—from static graphics to short-form video editing and copywriting." }
    ]
  },
  {
    slug: "marketing-automation",
    icon: "Zap",
    title: "Marketing Automation",
    shortDescription: "Workflows that nurture leads and close deals while you sleep.",
    
    seoTitle: "Marketing Automation in Nigeria | Brands Digitals",
    seoDescription: "Automate your marketing and scale faster with systems that nurture leads, increase conversions, and drive predictable revenue.",
    
    heroHeadline: "Marketing Automation in Nigeria to Scale Without Scaling Headcount",
    heroSubheadline: "Automate your marketing and scale faster with systems that nurture leads, increase conversions, and drive predictable revenue.",
    
    explanationHeadline: "Infrastructure for Predictable Growth",
    explanationCopy: "Manual follow-ups don't scale. We architect intelligent automation systems that trigger the exact right message to the right prospect at the exact right time. It's not just software—it's an operational upgrade to your entire revenue pipeline.",
    
    processSteps: [
      { title: "Workflow Auditing", description: "We map your current customer journey from initial touchpoint to closed deal, identifying operational bottlenecks." },
      { title: "Logic & Trigger Design", description: "We architect the automated pathways, deciding exactly what happens when a prospect takes a specific action." },
      { title: "Tech Stack Integration", description: "We seamlessly connect your CRM, email software, website forms, and social tools." },
      { title: "Optimization & Scaling", description: "We monitor open rates, click-throughs, and conversions, refining the sequences based on hard data." }
    ],
    
    caseStudyMetric: "Saved a real estate firm 40 hours a week in manual admin while increasing their lead-to-close rate by 22%.",
    
    faqs: [
      { question: "What is marketing automation and why do I need it?", answer: "Marketing automation uses software to execute repetitive marketing tasks—like sending emails, scoring leads, or updating CRMs—automatically. You need it to scale your revenue without endlessly hiring more admin staff." },
      { question: "What tools do you use for automation?", answer: "We are platform-agnostic but frequently build systems on HighLevel (GHL), HubSpot, ActiveCampaign, and customized Zapier/Make webhooks." },
      { question: "Can you integrate with my existing CRM?", answer: "Yes. As long as your CRM has an open API or native integration capabilities, we can build custom automation flows around your existing infrastructure." },
      { question: "How long does it take to deploy an automation system?", answer: "A foundational nurture and follow-up system can be deployed in 2-3 weeks, while complex full-lifecycle marketing ecosystems take 4-6 weeks to build and test." }
    ]
  },
  {
    slug: "crm-setup",
    icon: "Database",
    title: "CRM Setup & RevOps",
    shortDescription: "Infrastructure to track every lead, pipeline, and customer.",
    
    seoTitle: "CRM Setup Services in Nigeria | Brands Digitals",
    seoDescription: "Organize your leads, track customer journeys, and close more deals with a powerful CRM system tailored to your business.",
    
    heroHeadline: "CRM Setup in Nigeria That Turns Chaos Into Predictable Pipeline",
    heroSubheadline: "Organize your leads, track customer journeys, and close more deals with a powerful CRM system tailored to your business.",
    
    explanationHeadline: "The Central Nervous System of Your Business",
    explanationCopy: "A CRM isn't just a digital rolodex; it's the operational heart of your company. We custom-configure CRM platforms to match your specific sales motion, ensuring total visibility into your revenue pipeline and zero dropped leads.",
    
    processSteps: [
      { title: "Pipeline Architecture", description: "We design custom sales stages that reflect your actual buying cycle." },
      { title: "Data Migration & Cleansing", description: "We safely move your historical data from messy spreadsheets into the cloud, ensuring data integrity." },
      { title: "Custom Field & Automation Setup", description: "We configure the system properties, lead scoring, and automated task assignments tailored to your team." },
      { title: "Team Training & Handoff", description: "We train your sales and marketing teams on standard operating procedures (SOPs) to ensure high adoption rates." }
    ],
    
    caseStudyMetric: "Centralized 10,000+ contacts and reduced the average sales cycle length by 14 days for an enterprise service provider.",
    
    faqs: [
      { question: "Which CRM platform is best for Nigerian businesses?", answer: "It depends on your scale. We often recommend FlowDesk Nexus or HighLevel for agencies and SMBs, and HubSpot or Salesforce for scaling enterprise operations." },
      { question: "Can you migrate my data from Excel or another CRM?", answer: "Absolutely. Data migration, cleansing, and deduplication are core parts of our CRM setup process." },
      { question: "How much does CRM implementation cost?", answer: "Implementation costs vary based on the number of users, the complexity of your pipelines, and the required third-party integrations." },
      { question: "Will you train my team on how to use it?", answer: "Yes. A CRM is useless if your team won't use it. We provide comprehensive training sessions and documentation to guarantee adoption." }
    ]
  },
  {
    slug: "paid-media",
    icon: "Target",
    title: "Paid Media (Ads)",
    shortDescription: "Predictable revenue acquisition through Meta, Google, and LinkedIn.",
    
    seoTitle: "Paid Media Agency in Nigeria | Brands Digitals",
    seoDescription: "Scale your business with high-performing ad campaigns built as acquisition systems, not just ads. Maximize ROI and conversions.",
    
    heroHeadline: "Paid Media Management in Nigeria That Acquires Customers at Scale",
    heroSubheadline: "Scale your business with high-performing ad campaigns built as acquisition systems, not just ads. Maximize ROI and conversions.",
    
    explanationHeadline: "Paid Acquisition as a Predictable System",
    explanationCopy: "Profitable advertising is a math equation. We combine striking creative assets with deep technical tracking and algorithmic optimization. We test ruthlessly, kill losers quickly, and scale winners aggressively to build a predictable revenue machine.",
    
    processSteps: [
      { title: "Offer & Funnel Architecture", description: "Before spending a dime, we craft an irresistible offer and map out the exact landing page funnel required to convert traffic." },
      { title: "Pixel & Tracking Implementation", description: "We install server-side tracking and conversion APIs to ensure 100% data accuracy and algorithmic learning." },
      { title: "Creative & Copy Engineering", description: "We produce multiple variations of ad copy and visual creatives to find the winning psychological hooks." },
      { title: "Launch, Scale, & Optimize", description: "We launch the campaigns, aggressively monitor bid costs, and scale the budgets on the most profitable ad sets." }
    ],
    
    caseStudyMetric: "Generated a 4.5x ROAS and scaled monthly lead volume by 600% for an e-commerce brand.",
    
    faqs: [
      { question: "What is a good advertising budget to start with?", answer: "We recommend a minimum ad spend budget that allows the algorithms enough data to learn—usually starting at $1,000 to $2,000 per month, depending on the platform." },
      { question: "Which ad platforms are best for B2B vs B2C?", answer: "LinkedIn and Google Search are exceptionally powerful for B2B intent, while Meta (Facebook/Instagram) and TikTok excel at B2C volume and visual product discovery." },
      { question: "How quickly will I see a return on ad spend (ROAS)?", answer: "While you will see traffic immediately, it typically takes 2-4 weeks of algorithmic learning and creative testing to stabilize costs and hit target ROAS KPIs." },
      { question: "Do you create the ad graphics and videos?", answer: "Yes, our paid media retainers include the production of high-converting static creatives, motion graphics, and ad copy." }
    ]
  },
  {
    slug: "email-marketing",
    icon: "Mail",
    title: "Email Marketing",
    shortDescription: "Hyper-personalized outbound sequences that convert.",
    
    seoTitle: "Email Marketing Services in Nigeria | Brands Digitals",
    seoDescription: "Convert leads into loyal customers with automated email systems that nurture, engage, and drive repeat revenue.",
    
    heroHeadline: "Email Marketing Services in Nigeria That Actually Convert",
    heroSubheadline: "Convert leads into loyal customers with automated email systems that nurture, engage, and drive repeat revenue.",
    
    explanationHeadline: "Email as a Capital Asset",
    explanationCopy: "Social media algorithms change, but you own your email list forever. We engineer full-lifecycle email systems—from welcome sequences to re-engagement campaigns—using behavioral data to deliver the perfect message precisely when a prospect is ready to buy.",
    
    processSteps: [
      { title: "List Auditing & Segmentation", description: "We clean your existing data and segment your audience based on behavior, purchase history, and engagement levels." },
      { title: "Automation Sequence Build", description: "We engineer your core money-making flows: Welcome Series, Abandoned Cart, and Post-Purchase Nurture." },
      { title: "Copywriting & Design", description: "We write highly persuasive, story-driven emails and design responsive templates that bypass spam filters." },
      { title: "Deliverability & Analytics", description: "We continuously monitor open rates, click-throughs, and domain health to ensure maximum inbox placement." }
    ],
    
    caseStudyMetric: "Achieved a 45% average open rate and generated ₦2.5M from a single Black Friday broadcast.",
    
    faqs: [
      { question: "How often should I send emails to my list?", answer: "It varies by industry, but consistency is key. For e-commerce, 2-3 times a week is standard. For B2B services, a high-value weekly or bi-weekly newsletter is highly effective." },
      { question: "What platform do you use for email marketing?", answer: "We frequently build on Klaviyo for e-commerce, and ActiveCampaign or HubSpot for B2B service companies." },
      { question: "How do you prevent emails from going to spam?", answer: "We authenticate your domain (DMARC, DKIM, SPF), scrub inactive subscribers regularly, and avoid spam-trigger words to maintain pristine sender reputation." },
      { question: "Can you help us build our email list from scratch?", answer: "Yes, we design lead magnets, pop-ups, and landing pages to aggressively capture opt-ins and grow your owned audience." }
    ]
  },
  {
    slug: "content-marketing",
    icon: "FileText",
    title: "Content Marketing",
    shortDescription: "Authority-building content ecosystems that drive demand.",
    
    seoTitle: "Content Marketing Agency in Nigeria | Brands Digitals",
    seoDescription: "Build authority and attract customers with content systems designed to educate, engage, and convert your audience at scale.",
    
    heroHeadline: "Content Marketing Services in Nigeria That Capture Demand",
    heroSubheadline: "Build authority and attract customers with content systems designed to educate, engage, and convert your audience at scale.",
    
    explanationHeadline: "Content as Scalable Leverage",
    explanationCopy: "Great content is an asset that works for you 24/7. We map our content strategy directly to your buyers' pain points, building a structured ecosystem of articles, whitepapers, and guides that intercept prospects exactly when they are searching for a solution.",
    
    processSteps: [
      { title: "Customer Journey Mapping", description: "We interview stakeholders and analyze search data to uncover the exact questions your buyers are asking." },
      { title: "Content Strategy & Pillar Design", description: "We structure your core topics to establish topical authority in Google's eyes." },
      { title: "Asset Creation", description: "Our expert writers produce premium, technically accurate, and highly engaging long-form content." },
      { title: "Distribution & Repurposing", description: "We turn one whitepaper into 10 social posts, an email newsletter, and an infographic to maximize ROI." }
    ],
    
    caseStudyMetric: "Produced a cornerstone content piece that generated 120+ highly qualified enterprise leads over 12 months.",
    
    faqs: [
      { question: "How does content marketing directly generate sales?", answer: "Content builds trust before the sales call. By answering your buyers' objections and educating them on your unique methodology, content dramatically shortens the sales cycle." },
      { question: "What types of content do you produce?", answer: "We produce SEO-driven blog posts, deeply researched whitepapers, case studies, email newsletters, and thought leadership articles." },
      { question: "How do you ensure technical accuracy in niche industries?", answer: "We conduct subject matter expert (SME) interviews with your team to extract proprietary knowledge before our copywriters structure it into compelling content." },
      { question: "How long does it take for content to drive traffic?", answer: "Content is a long-term asset. While it can be distributed immediately via email and social media for quick wins, organic search traffic typically begins scaling after 3-6 months." }
    ]
  }
];
