import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  excerpt: string;
  publishedAt: string;
  author: { name: string; image?: any };
}

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  author-> { name, image }
}`;

export default async function InsightsPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY);

  return (
    <main className="min-h-screen bg-navy text-foreground">
      <Nav />
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b border-white/7 bg-gradient-to-b from-navy to-navy-mid">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-brand-orange/13 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="section-label">Journal</div>
              <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[80px] font-display font-extrabold tracking-tighter leading-[1] md:leading-[0.9] mt-6 break-words max-w-full">
                Transformation <span className="text-brand-orange">Insights</span>.
              </h1>
            </div>
            <div className="lg:col-span-5 pb-2 lg:pb-4">
              <p className="text-lg text-muted font-light leading-relaxed max-w-md">
                Strategic thoughts on digital transformation, startup growth, and the future of the African venture ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug.current}`}
                  className="group bg-navy-card border border-white/7 rounded-2xl overflow-hidden hover:border-brand-orange/30 transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="aspect-video relative overflow-hidden bg-navy-mid">
                    {post.mainImage && (
                      <Image
                        src={urlForImage(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted font-bold mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} /> {post.author.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted font-light leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-widest">
                      Read Full Article <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-40 text-center">
              <h2 className="text-2xl font-display font-extrabold text-white mb-4">
                No insights yet.
              </h2>
              <p className="text-muted font-light max-w-sm mx-auto">
                We&apos;re currently documenting our latest transformation strategies. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
