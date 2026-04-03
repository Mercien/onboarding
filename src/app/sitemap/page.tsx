import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap | Brands Digitals Agency',
  description: 'A complete map of all pages on the Brands Digitals Agency website.',
  robots: { index: false },
}

async function getPosts() {
  return client.fetch<{ title: string; slug: { current: string }; publishedAt: string; category: string }[]>(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      publishedAt,
      category
    }
  `)
}

export default async function SitemapPage() {
  const posts = await getPosts()

  const formatDate = (dateValue: string) => {
    return new Date(dateValue).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  }

  return (
    <main className="min-h-screen bg-navy text-foreground font-body">
      <Nav />
      
      <div className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 text-brand-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
            SITE NAVIGATION
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white mb-4">
            Everything on our site, in one place.
          </h1>
          <p className="text-muted leading-relaxed font-light max-w-2xl">
            A complete map of every page on brandsdigitals.com.ng — for users and search engines alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Section 1 — Main Pages */}
          <section className="bg-navy-card border border-white/7 rounded-2xl p-7">
            <div className="text-[10px] font-bold text-brand-blue-light tracking-widest uppercase mb-1">MAIN</div>
            <h2 className="text-xl font-display font-bold text-white mb-6">Core Pages</h2>
            <ul className="space-y-4">
              <li><Link href="/" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Home <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/services" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Services <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/products" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Products <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/about" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">About <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/case-studies" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Case Studies <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/insights" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Insights <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/contact" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Contact <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
            </ul>
          </section>

          {/* Section 2 — Services */}
          <section className="bg-navy-card border border-white/7 rounded-2xl p-7">
            <div className="text-[10px] font-bold text-brand-blue-light tracking-widest uppercase mb-1">SERVICES</div>
            <h2 className="text-xl font-display font-bold text-white mb-6">What We Do</h2>
            <ul className="space-y-4">
              <li><Link href="/services#tier-1" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Digital Audit & Strategy <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/services#tier-2" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Brand & Digital Presence <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/services#tier-3" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Visibility & Demand Engine <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/services#tier-4" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Conversion & Growth Systems <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/services#tier-5" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Market Launch Accelerator <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/services#tier-6" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Deep Partnership & Support <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
            </ul>
          </section>

          {/* Section 3 — Products */}
          <section className="bg-navy-card border border-white/7 rounded-2xl p-7">
            <div className="text-[10px] font-bold text-brand-blue-light tracking-widest uppercase mb-1">PRODUCTS</div>
            <h2 className="text-xl font-display font-bold text-white mb-6">Our Tools</h2>
            <ul className="space-y-4">
              <li><Link href="https://crm.brandsdigitals.com.ng" target="_blank" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">FlowDesk Nexus CRM <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/products#adforge" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">AdForge — AI Ad Creative <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/products#deepreach" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">DeepReach — Lead Generation <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
            </ul>
          </section>

          {/* Section 4 — Case Studies */}
          <section className="bg-navy-card border border-white/7 rounded-2xl p-7">
            <div className="text-[10px] font-bold text-brand-blue-light tracking-widest uppercase mb-1">CASE STUDIES</div>
            <h2 className="text-xl font-display font-bold text-white mb-6">Client Work</h2>
            <ul className="space-y-4">
              <li><Link href="/case-studies/amala-sky" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Amala Sky — Digital Transformation <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/case-studies/petworld-agrofarm" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">PetWorld Agrofarm — Digital Strategy <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/case-studies/ekoss360" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Ekoss360 Innovation Hub — Go-to-Market <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
            </ul>
          </section>

          {/* Section 5 — Insights (Dynamic) */}
          <section className="bg-navy-card border border-white/7 rounded-2xl p-7 md:col-span-2 lg:col-span-1">
            <div className="text-[10px] font-bold text-brand-blue-light tracking-widest uppercase mb-1">INSIGHTS</div>
            <h2 className="text-xl font-display font-bold text-white mb-6">Latest Articles</h2>
            <ul className="space-y-5">
              {posts.slice(0, 5).map((post) => (
                <li key={post.slug.current}>
                  <Link href={`/insights/${post.slug.current}`} className="group block">
                    <span className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-blue-light/20 text-brand-blue-light">{post.category || 'Strategic Guide'}</span>
                      <span className="text-[10px] text-muted-lt">{formatDate(post.publishedAt)}</span>
                    </span>
                    <span className="text-sm font-light text-muted group-hover:text-white transition-colors leading-snug line-clamp-2">
                       {post.title}
                    </span>
                  </Link>
                </li>
              ))}
              <div className="pt-2">
                 <Link href="/insights" className="text-xs font-semibold text-brand-blue-light hover:text-white transition-colors">View all articles →</Link>
              </div>
            </ul>
          </section>

          {/* Section 6 — Legal */}
          <section className="bg-navy-card border border-white/7 rounded-2xl p-7">
            <div className="text-[10px] font-bold text-brand-blue-light tracking-widest uppercase mb-1">LEGAL</div>
            <h2 className="text-xl font-display font-bold text-white mb-6">Compliance & Policy</h2>
            <ul className="space-y-4">
              <li><Link href="/legal/privacy-policy" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors"><FileText className="w-3 h-3 mr-2 opacity-50" /> Privacy Policy <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/legal/terms-of-service" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors"><FileText className="w-3 h-3 mr-2 opacity-50" /> Terms of Service <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/legal/cookie-policy" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors"><FileText className="w-3 h-3 mr-2 opacity-50" /> Cookie Policy <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/legal/client-service-agreement" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors"><FileText className="w-3 h-3 mr-2 opacity-50" /> Client Service Agreement <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/legal/ndpa-compliance" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors"><FileText className="w-3 h-3 mr-2 opacity-50" /> NDPA Compliance Statement <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
              <li><Link href="/legal/anti-spam-policy" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors"><FileText className="w-3 h-3 mr-2 opacity-50" /> Anti-Spam Policy <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-blue-light" /></Link></li>
            </ul>
          </section>

          {/* Section 7 — Platforms */}
          <section className="bg-navy-card border border-white/7 rounded-2xl p-7">
            <div className="text-[10px] font-bold text-brand-blue-light tracking-widest uppercase mb-1">PLATFORMS</div>
            <h2 className="text-xl font-display font-bold text-white mb-6">External Links</h2>
            <ul className="space-y-4">
              <li><Link href="https://crm.brandsdigitals.com.ng" target="_blank" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">FlowDesk Nexus CRM ↗</Link></li>
              <li><Link href="https://linkedin.com/company/brands-digitals-agency" target="_blank" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Brands Digitals on LinkedIn ↗</Link></li>
              <li><Link href="https://instagram.com/brandsdigitals" target="_blank" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Brands Digitals on Instagram ↗</Link></li>
              <li><Link href="https://instagram.com/mercien4u" target="_blank" className="group flex items-center text-sm font-light text-muted hover:text-white transition-colors">Mercien on Instagram ↗</Link></li>
            </ul>
          </section>

        </div>

        {/* Stats Block */}
        <div className="mt-16 border-t border-white/5 pt-6 text-center">
          <div className="inline-flex bg-white/5 border border-white/10 px-6 py-3 rounded-xl">
             <p className="text-xs text-muted font-mono tracking-widest font-bold">
               branddigitals.com.ng<span className="text-white/20 mx-3">|</span> 16 STATIC PAGES <span className="text-white/20 mx-3">|</span> {posts.length} BLOG POSTS <span className="text-white/20 mx-3">|</span> LAST UPDATED: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
             </p>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  )
}
