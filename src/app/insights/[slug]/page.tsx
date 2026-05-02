import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PostCTA } from "@/components/sections/PostCTA";
import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  mainImage,
  body,
  publishedAt,
  author-> { name, image, bio }
}`;

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return (
      <main className="min-h-screen bg-navy text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-extrabold text-white mb-4">Post not found.</h1>
          <Link href="/insights" className="text-brand-blue-light hover:underline font-bold">
            ← Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-navy text-foreground">
      <Nav />
      {/* Post Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b border-white/7 bg-gradient-to-b from-navy to-navy-mid">
        <div className="max-w-4xl mx-auto">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue-light uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted font-bold mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <User size={12} /> {post.author.name}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter leading-[0.9] mb-12">
            {post.title}
          </h1>

          {post.mainImage && (
            <div className="aspect-video relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={urlForImage(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-brand max-w-none prose-p:text-muted prose-p:font-light prose-p:leading-relaxed prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-brand-blue-light">
            <PortableText 
              value={post.body} 
              components={{
                types: {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  image: ({ value }: any) => {
                    const ref = value?.asset?._ref;
                    if (!ref) return null;
                    
                    // Sanity image refs look like: image-1234abcd-800x600-jpg
                    // We split to safely get the width and height maintaining native scale
                    let width = 800;
                    let height = 600;
                    try {
                      const dimensions = ref.split('-')[2];
                      const [w, h] = dimensions.split('x');
                      width = parseInt(w, 10);
                      height = parseInt(h, 10);
                    } catch (e) {
                      // fallback dimensions if parse fails
                    }

                    return (
                      <div className="relative my-10 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-navy-mid/30">
                        <Image
                          src={urlForImage(value).url()}
                          alt={value.alt || "Insight post image"}
                          width={width}
                          height={height}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    );
                  }
                }
              }} 
            />
          </div>

          <div className="mt-20 pt-12 border-t border-white/7 flex flex-col md:flex-row items-center gap-8">
            {post.author.image && (
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-blue-light/30">
                <Image
                  src={urlForImage(post.author.image).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <span className="text-[10px] font-bold text-brand-blue-light uppercase tracking-[0.2em] mb-1 block">Written By</span>
              <h4 className="text-xl font-bold text-white mb-2">{post.author.name}</h4>
              <div className="text-sm text-muted font-light leading-relaxed">
                <PortableText value={post.author.bio} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PostCTA />
      <Footer />
    </main>
  );
}
