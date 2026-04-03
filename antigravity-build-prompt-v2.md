# Antigravity Build Prompt — Brands Digitals Agency
## Next.js 14 · Tailwind CSS · Framer Motion · Sanity CMS · GoHighLevel · Vercel

---

## ATTACHED FILES — READ THESE FIRST

| File | Purpose |
|---|---|
| `brands-digitals-full-website.html` | Complete design mockup — layout, copy, section structure, component patterns. This is ground truth. Do not deviate from the copy or structure without instruction. |
| `brands-digitals-logo` | Brand colour source. Extract all primary and accent colours directly from this file. Do not use default Tailwind colours for any branded element. |

---

## PROJECT OVERVIEW

Build the official website for **Brands Digitals Agency** — a digital transformation agency based in Lagos, Nigeria, serving funded startups and scaleups across Africa. 

**Tone:** Premium but approachable — Webflow meets Stripe, with an African edge.  
**Primary CTA across the entire site:** "Book a Discovery Call" — every instance of this (and all other conversion CTAs) must open the Lead Capture Modal described below.

---

## TECH STACK

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS variables for brand tokens |
| Animations | Framer Motion |
| CMS | Sanity v3 (for `/insights` blog) |
| Forms | React Hook Form + Zod validation |
| Lead routing | GoHighLevel CRM via webhook + automation trigger |
| Email | Resend (confirmation emails to prospects) |
| Deployment | Vercel |
| Domain | `brandsdigitals.com.ng` |

---

## DESIGN TOKENS

Extract the exact colour values from the attached logo file and define them in `tailwind.config.ts`. Structure them as:

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      navy: {
        DEFAULT: '<logo-extracted-darkest>',
        mid:     '<logo-extracted-mid>',
        light:   '<logo-extracted-light>',
        card:    '<logo-extracted-card>',
      },
      brand: {
        orange:  '<logo-extracted-primary-accent>',
        'orange-light': '<logo-extracted-light-accent>',
        gold:    '<logo-extracted-secondary-accent>',
      },
      muted: '<logo-extracted-muted>',
    },
    fontFamily: {
      display: ['Syne', 'sans-serif'],
      body:    ['DM Sans', 'sans-serif'],
    },
  },
}
```

Load both fonts via `next/font/google` — not CDN links. Apply `font-display` to all headings (h1–h5) and `font-body` to everything else.

---

## SITE STRUCTURE

| Route | Page | Status |
|---|---|---|
| `/` | Home | Live at launch |
| `/services` | Services — all 6 tiers + packages | Live at launch |
| `/about` | About — founder story, timeline, values, credentials | Live at launch |
| `/case-studies` | Case Studies | Live at launch |
| `/insights` | Insights index (Sanity-powered) | Live at launch |
| `/insights/[slug]` | Individual blog post | Live at launch |
| `/contact` | Contact | Live at launch |
| `/studio` | Sanity Studio (password-protected) | Live at launch |

---

## NAVIGATION

- Fixed top nav, backdrop blur (`backdrop-blur-xl`), `bg-navy/90`
- **Left:** Logo image from attached file — use `next/image`, not the text fallback in the HTML
- **Centre:** Home · Services · About · Case Studies · Insights
- **Right:** Primary CTA button — label: **"Book a Discovery Call"** — clicking opens the Lead Capture Modal
- Active route: highlight current page link
- Scroll behaviour: nav shrinks slightly (`py-3` → `py-2`) after scrolling 80px — use a `useScroll` listener
- **Mobile:** hamburger → full-screen slide-in drawer (Framer Motion `x: ['-100%', 0]`). Drawer includes all nav links + "Book a Discovery Call" CTA at the bottom.

---

## LEAD CAPTURE MODAL — PRIMARY FEATURE

This is the most important component on the site. Every conversion CTA triggers it.

### Trigger points (exhaustive list)
Every button with any of these labels — on any page — must open this modal:
- "Book a Discovery Call" (primary CTA, nav + hero + footer)
- "Start Your Transformation"
- "Get a Free Audit"
- "Apply Now"
- "Apply for Retainer"
- "Get Started" (on all service package cards)
- "Book a Call" (Enterprise package cards)
- "Let's Figure It Out Together"
- "Start a Conversation"
- "Let's Talk"
- "Let's Build Something Great"

### Modal UX
- Full-screen overlay: `bg-black/85 backdrop-blur-sm`
- Modal panel: centred card, max-width `640px`, `bg-navy-card`, rounded-xl, border `border-white/10`
- **Open animation:** panel slides up + fades in (`y: 40 → 0, opacity: 0 → 1`, spring easing)
- **Close:** ESC key, clicking outside the panel, or X button top-right
- **Progress bar:** thin orange bar at top of panel, width animates from 25% → 50% → 75% → 100% across steps
- **Step transitions:** horizontal slide — forward = slide left, back = slide right (Framer Motion `AnimatePresence`)
- Back button on steps 2, 3, 4

### Step 1 — Who are you?

```
Fields:
- First Name *          (text)
- Last Name *           (text)
- Email *               (email — validate format)
- Phone Number          (tel, optional — placeholder: "+234 xxx xxx xxxx")
- Company / Startup *   (text)
- Your Role *           (text — placeholder: "CEO, Head of Marketing, Founder...")

CTA: "Next — Tell Us About Your Business →"
```

### Step 2 — Your Business

```
- Industry / Sector * (searchable dropdown):
  Fintech | Food & Beverage / Restaurant | Agro / Pet Care | E-Commerce
  EdTech | HealthTech | Logistics & Supply Chain | Professional Services
  Co-working / Real Estate | Creative / Media / Agency | SaaS / Tech
  Other → reveal text input: "Tell us your industry"

- Business Stage * (radio button cards with emoji icons):
  🌱 Pre-revenue — just launched or pre-launch
  🚀 Early traction — under 12 months, first customers
  📈 Growing — 1–3 years, scaling revenue
  🏢 Established — 3+ years, looking to transform

- Funding Status * (radio button cards):
  💪 Bootstrapped
  🌱 Pre-seed
  🚀 Seed funded
  📈 Series A or beyond
  🏢 Corporate / Enterprise

CTA: "Next — What Do You Need? →"
```

### Step 3 — What Do You Need?

```
- Which service interests you most? * (single-select card grid, 2 cols):
  🔍 Digital Audit & Strategy
  🎨 Brand & Digital Presence
  📈 Growth & Demand Engine
  ⚙️  Marketing Operations
  🚀 Startup Launch Package
  🤝 Transformation Retainer
  🤔 Not sure — I need advice first

  Note: If the modal was opened from a specific service CTA (e.g. the 
  "Apply Now" button on the Startup Launch Package), pre-select that 
  service automatically via a `preselect` prop passed to the modal.

- Monthly budget for this engagement? * (radio):
  Under ₦150k | ₦150k–₦350k | ₦350k–₦600k | ₦600k–₦1.5M | ₦1.5M+ | Let's discuss

- Primary goals (multi-select checkboxes, pick all that apply):
  ☐ Build or rebuild our brand identity
  ☐ Get more website traffic & visibility
  ☐ Generate more leads and customers
  ☐ Set up marketing systems & automation
  ☐ Prepare for a product or market launch
  ☐ Scale an existing channel that's working
  ☐ Improve our digital presence overall

CTA: "Next — Final Details →"
```

### Step 4 — Final Details

```
- Describe your situation and what you want to achieve: *
  (large textarea, min-height 120px)
  Placeholder: "Tell us where you are and where you want to go. 
  The more context you give us, the better we can prepare for our call."

- How did you hear about Brands Digitals? (dropdown):
  Google Search | Instagram | LinkedIn | Twitter / X | Referral from someone
  Attended an event | YouTube | Other

- Preferred contact method (radio cards):
  📧 Email | 📱 WhatsApp | 📞 Phone Call

- [ ] I agree to be contacted by Brands Digitals Agency *
      (checkbox — required, blocks submission if unchecked)

CTA: "Submit & Book My Discovery Call →"
```

### Success Screen (Step 5)

After successful submission replace the form with:

```
[Animated checkmark — Framer Motion draw animation, orange stroke]

"You're booked in! 🎉"

"We've received everything. Our team will review your details and 
reach out within 24 hours to confirm your Discovery Call time.

Check your inbox — we've sent you a confirmation."

[Close button: "Back to site →"]
```

---

## FORM SUBMISSION PIPELINE

When Step 4 is submitted, the API route must do **all three** of the following in parallel:

### 1. GoHighLevel CRM + Automation Trigger

POST to the GHL webhook URL (stored in `GHL_WEBHOOK_URL` env var):

```json
{
  "firstName": "",
  "lastName": "",
  "email": "",
  "phone": "",
  "company": "",
  "source": "Website — Discovery Call Modal",
  "tags": ["website-lead", "discovery-call", "<industry>", "<service-interest>", "<stage>"],
  "customFields": {
    "role": "",
    "industry": "",
    "business_stage": "",
    "funding_status": "",
    "service_interest": "",
    "monthly_budget": "",
    "primary_goals": "",
    "message": "",
    "referral_source": "",
    "contact_preference": ""
  },
  "pipeline": "Website Leads",
  "pipelineStage": "New Discovery Call"
}
```

**GHL Automation note for developer:** The webhook triggers a GHL workflow. In GHL, configure that workflow to:
1. Create contact with the above fields
2. Add to pipeline: "Website Leads" → stage: "New Discovery Call"
3. Apply tags from the submission
4. Trigger the "New Website Lead" automation sequence (SMS + email follow-up)
5. Assign to the relevant team member / round-robin

The `GHL_WEBHOOK_URL` should be the inbound webhook URL from GHL's workflow trigger. The developer building this should leave a comment in the code explaining where to find and configure this in GHL.

### 2. Confirmation Email to Prospect (via Resend)

Send a branded HTML confirmation email to the prospect's email address.

**Subject:** `We've received your details, [First Name] 🎉`

**Body (HTML email — brand it with navy background, orange accents, Syne headings):**
```
Hi [First Name],

Thanks for reaching out to Brands Digitals Agency.

We've received your details for [Company Name] and our team will 
review your submission and get back to you within 24 hours to 
confirm your Discovery Call.

Here's what you told us:
─────────────────────────
Service interest: [service]
Industry: [industry]
Stage: [stage]
─────────────────────────

While you wait, here's something worth reading:
→ [Link to a relevant Insights post based on their industry/service]

Talk soon,
Mercien (Aanu Damilare Oke)
Founder, Brands Digitals Agency
hello@brandsdigitals.com.ng
brandsdigitals.com.ng
```

### 3. Internal Lead Notification (via Resend)

Send a plain-text lead brief to `hello@brandsdigitals.com.ng`:

```
Subject: 🔥 New Lead: [Company Name] — [Service Interest] — [Budget]

────────────────────────────────
CONTACT
────────────────────────────────
Name:     [First] [Last]
Email:    [email]
Phone:    [phone]
Company:  [company]
Role:     [role]

────────────────────────────────
BUSINESS PROFILE
────────────────────────────────
Industry:   [industry]
Stage:      [stage]
Funded:     [funded status]

────────────────────────────────
WHAT THEY NEED
────────────────────────────────
Service:    [service interest]
Budget:     [budget]
Goals:      [goals — comma separated]

────────────────────────────────
MESSAGE
────────────────────────────────
[textarea content]

────────────────────────────────
META
────────────────────────────────
Source:     [how they heard]
Contact:    [preference]
Submitted:  [ISO timestamp]
Page:       [which page/CTA triggered the modal]
────────────────────────────────
```

---

## API ROUTE

Create `/app/api/lead/route.ts`:

```ts
// POST /api/lead
// 1. Validate payload with Zod
// 2. POST to GHL webhook (GHL_WEBHOOK_URL)
// 3. Send confirmation email to prospect via Resend
// 4. Send lead brief to hello@brandsdigitals.com.ng via Resend
// Return { success: true } or { error: string }

// All three operations run with Promise.allSettled() so a failure 
// in one doesn't block the others. Log any failures to console.
```

---

## PAGE BUILD NOTES

Use the attached HTML file as the exact reference for all copy and layout. Notes below are structural/technical additions only — do not rewrite copy.

### Home (`/`)
- Noise overlay: CSS `::before` pseudo-element with SVG fractalNoise, `opacity: 0.022`
- Radial gradient orbs: pure CSS, no images
- Marquee: Framer Motion `animate={{ x: ["0%", "-50%"] }}` with `repeat: Infinity, ease: "linear"`. Pause on hover with `whileHover={{ animationPlayState: "paused" }}`
- Stats row: animate numbers counting up using `useInView` + a simple counter hook (0 → final value over 1.5s)
- Why Us cards: hover triggers bottom border reveal via `scaleX` transition
- Services preview cards: clicking any card navigates to `/services#[tier-id]`
- All CTAs → open modal

### Services (`/services`)
- 6 tiers rendered as `<section id="tier-[n]">` for anchor linking from home
- Alternating backgrounds: `bg-navy` / `bg-navy-mid`
- Package cards: `featured` variant gets `border-brand-orange` + a top badge chip
- Retainer tier: special 2-col layout — no package grid, just the feature card from the HTML
- **Pre-selection:** each "Get Started" / "Apply Now" button passes its service name to `<LeadModal preselect="[Service Name]" />` so Step 3 is pre-filled

### About (`/about`)
- Profile card: show monogram `ADO` as placeholder — add a comment: `// TODO: Replace with <Image src="/mercien-photo.jpg"> when photo is ready`
- Timeline: each item animates in with `useInView` + staggered `delay` (0.1s per item)
- Degree badge: always visible on the profile card, top-right corner

### Case Studies (`/case-studies`)
- Filter bar: React `useState` for active filter, filter applied client-side on the cards array
- Case cards: industry colour-coded top border (F&B = orange, Fintech = blue, AgriTech = green, etc.)
- Slug pages (`/case-studies/[slug]`): static for launch — hardcode Amala Sky, PetWorld, Ekoss360. Leave a `TODO` comment for Sanity integration in Phase 2.

### Insights (`/insights`) — Sanity CMS

**Sanity setup:**
```
Project: brands-digitals
Dataset: production
Studio route: /studio (only accessible when logged in to Sanity)
```

**Schema — `post`:**
```ts
{
  name: 'post',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', type: 'string', 
      options: { list: [
        'Digital Transformation', 'Growth Strategy', 'SEO & Content',
        'Paid Media', 'Brand Strategy', 'Marketing Operations'
      ]}
    },
    { name: 'excerpt', type: 'text', rows: 3 },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'author', type: 'string', initialValue: 'Mercien (Aanu Damilare Oke)' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'coverImage', type: 'image', options: { hotspot: true } },
    { name: 'readTime', type: 'number', description: 'Minutes to read' },
    { name: 'featured', type: 'boolean', description: 'Pin to top of insights page' },
  ]
}
```

**Seed with 3 posts** from the article titles in the HTML mockup:
1. "What Digital Transformation Actually Means for Nigerian Businesses in 2025"
2. "Why Most Nigerian Startups Waste Their Marketing Budget (And How to Fix It)"
3. "Local SEO in Nigeria: The Complete 2025 Playbook for Service Businesses"

**`/insights` page:**
- Fetch all posts from Sanity with `{ cache: 'no-store' }` for fresh data (or ISR with `revalidate: 3600`)
- Featured post (marked `featured: true`): rendered in wide 3/2 grid at top
- Remaining posts: 3-column responsive grid
- Category filter: client-side filter chips

**`/insights/[slug]` page:**
- Full Portable Text rendering with `@portabletext/react`
- Author block at bottom: Mercien name + title + orange accent
- "Related posts" sidebar: fetch 3 posts in same category
- Share buttons: Twitter/X, LinkedIn, copy link
- Newsletter signup strip at bottom of every post

### Contact (`/contact`)
- Left: contact channels + FAQ accordion
- Right: full intake form (same fields as modal Step 1–4 but laid out as a single long-form page)
- Submissions go to the same `/api/lead` endpoint as the modal
- FAQ accordion: Framer Motion `AnimatePresence` for smooth height animation

---

## COMPONENT TREE

```
/components
  /ui
    Button.tsx            — variants: primary | outline | white | ghost
    Modal.tsx             — base overlay wrapper with Framer Motion
    LeadModal.tsx         — 4-step lead capture modal (MAIN FEATURE)
      ModalStep1.tsx
      ModalStep2.tsx
      ModalStep3.tsx
      ModalStep4.tsx
      ModalSuccess.tsx
    ProgressBar.tsx       — animated step progress
    Card.tsx
    Tag.tsx
    Eyebrow.tsx           — orange pill label
    SectionLabel.tsx      — small caps section label
    Marquee.tsx           — infinite scroll ticker
    CountUp.tsx           — animated number counter
  /layout
    Nav.tsx
    Footer.tsx
    MobileDrawer.tsx
  /sections               — reusable page sections
    Hero.tsx
    TrustBar.tsx
    WhyUs.tsx
    ServicesPreview.tsx
    FounderSnippet.tsx
    CaseTeasers.tsx
    CtaBand.tsx
    Newsletter.tsx
  /services
    ServiceTier.tsx
    PackageCard.tsx
    RetainerCard.tsx
  /case-studies
    CaseCard.tsx
    CaseFilters.tsx
  /insights
    PostCard.tsx
    FeaturedPost.tsx
    PostBody.tsx          — Portable Text renderer
  /about
    Timeline.tsx
    TimelineItem.tsx
    ValueCard.tsx
    CredentialCard.tsx
  /contact
    ContactForm.tsx
    FaqItem.tsx
```

---

## ENVIRONMENT VARIABLES

```env
# GoHighLevel
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/[your-webhook-id]

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxx

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=

# Site
NEXT_PUBLIC_SITE_URL=https://brandsdigitals.com.ng
NOTIFICATION_EMAIL=hello@brandsdigitals.com.ng
```

---

## SEO — METADATA API

Define in each `page.tsx` using Next.js `generateMetadata`:

```
/                → "Brands Digitals Agency | Digital Transformation for African Startups"
/services        → "Digital Transformation Services & Packages | Brands Digitals Agency"
/about           → "About Brands Digitals | Meet Mercien — Digital Transformation Strategist, Lagos"
/case-studies    → "Case Studies | Real Results from Digital Transformation | Brands Digitals"
/insights        → "Insights | Digital Marketing & Transformation for African Founders"
/insights/[slug] → [post.title] + " | Brands Digitals Insights"
/contact         → "Book a Discovery Call | Brands Digitals Agency"
```

- Open Graph image: static branded OG image for all pages at launch (`/public/og-default.png`)
- `next/image` for all images, with meaningful `alt` text
- Canonical URLs on all pages
- JSON-LD structured data on homepage: `Organization` schema with name, logo, url, sameAs (LinkedIn, Instagram)

---

## PERFORMANCE TARGETS

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID / INP | < 200ms |
| Lighthouse score | 90+ all categories |

- Lazy load all below-fold sections with `loading="lazy"` on images
- ISR on Sanity-powered pages (`revalidate: 3600`)
- No layout shift from fonts — use `font-display: swap` via `next/font`

---

## GHL SETUP NOTES FOR MERCIEN

After the developer delivers the build, do the following in GoHighLevel:

1. **Create inbound webhook** in GHL → Automation → New Workflow → Trigger: "Inbound Webhook". Copy the webhook URL → give it to your developer as `GHL_WEBHOOK_URL`.

2. **Create pipeline:** "Website Leads" with stages:
   - New Discovery Call → Contacted → Call Booked → Proposal Sent → Won → Lost

3. **Build the automation workflow** to fire on webhook trigger:
   - Create/update contact with all custom fields
   - Add to "Website Leads" pipeline at stage "New Discovery Call"
   - Apply tags from submission
   - Send internal Slack/SMS notification: "New lead: [Name] from [Company]"
   - Wait 15 minutes → send prospect a WhatsApp or SMS (if phone provided): "Hi [First Name], it's Mercien from Brands Digitals. Got your details — looking forward to our discovery call. I'll reach out shortly to confirm a time. 🙌"
   - Wait 1 hour → add to email nurture sequence: "Welcome to Brands Digitals" → 3-email sequence over 5 days

4. **Custom fields to create in GHL** (Settings → Custom Fields → Contact):
   - Role (text)
   - Industry (text)
   - Business Stage (dropdown)
   - Funding Status (dropdown)
   - Service Interest (text)
   - Monthly Budget (text)
   - Primary Goals (text)
   - Contact Preference (dropdown: Email / WhatsApp / Phone)
   - Referral Source (text)
   - Page Triggered From (text)

---

## LAUNCH CHECKLIST

- [ ] Extract brand colours from logo → configure Tailwind tokens
- [ ] Build all 6 pages matching HTML mockup (layout + copy — do not rewrite)
- [ ] Replace logo text in mockup with actual logo image via `next/image`
- [ ] Build LeadModal (4 steps + success screen) with full validation
- [ ] Wire every CTA across all pages to open LeadModal
- [ ] Implement service pre-selection on Services page CTAs
- [ ] Build `/api/lead` → GHL webhook + Resend emails
- [ ] Set up Sanity v3 project → configure schema → seed 3 blog posts
- [ ] Build `/insights` index and `/insights/[slug]` post pages
- [ ] Sanity Studio accessible at `/studio`
- [ ] Confirmation HTML email template — branded (navy + orange)
- [ ] Internal lead notification email — plain text summary
- [ ] Deploy to Vercel → connect `brandsdigitals.com.ng`
- [ ] Test full form submission → verify GHL contact created + automation fires
- [ ] Verify confirmation email lands in prospect inbox (check spam)
- [ ] Verify internal notification lands in `hello@brandsdigitals.com.ng`
- [ ] Mobile QA — all pages, all breakpoints
- [ ] Lighthouse audit — 90+ all categories
- [ ] Handover: provide Mercien with Sanity Studio login + GHL webhook URL config instructions

---

*Attached: `brands-digitals-full-website.html` (design & copy reference) · Brands Digitals logo (colour extraction)*
