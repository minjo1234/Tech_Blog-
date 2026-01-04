import Link from 'next/link';
import {getAllPosts} from '@/lib/mdx';
import { cookies } from 'next/headers';

export default async function BlogListPage() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'ko' | 'en') || 'ko';
  const posts = getAllPosts(language);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-neutral-900 leading-tight mb-4">
            Articles
          </h1>
          <p className="text-lg text-neutral-600 font-serif max-w-2xl">
            Thoughts on web development, design systems, and building products.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-6 overflow-x-auto">
              <button className="text-sm font-bold uppercase tracking-wider text-neutral-900 pb-2 whitespace-nowrap" style={{ borderBottom: '3px solid #a4ac86' }}>
                All Posts
              </button>
              <button className="text-sm font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors pb-2 whitespace-nowrap">
                Development
              </button>
              <button className="text-sm font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors pb-2 whitespace-nowrap">
                Design
              </button>
            </div>
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search articles..."
                className="px-4 py-2 bg-neutral-50 border border-neutral-200 focus:border-neutral-900 outline-none font-mono text-sm transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid - Modern Clean Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:gap-10">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group relative border-b border-neutral-200 pb-10 transition-all duration-300 hover:translate-x-1"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'slideUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              <div className="flex flex-col gap-4">
                {/* Meta Row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs font-bold uppercase tracking-wider text-neutral-700 transition-all group-hover:border-[#a4ac86] group-hover:bg-neutral-50">
                    {post.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {post.metadata.date}
                  </span>
                </div>

                {/* Title and Description */}
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-black text-neutral-900 mb-4 leading-tight group-hover:text-[#a4ac86] transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.metadata.title}
                    </Link>
                  </h2>

                  <p className="text-neutral-600 font-serif text-lg leading-relaxed max-w-3xl">
                    {post.metadata.description}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
                  <div className="flex gap-2 flex-wrap">
                    {post.metadata.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-mono text-neutral-500 bg-neutral-50 px-3 py-1.5 border border-neutral-200 transition-colors group-hover:border-[#a4ac86]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 group/link transition-colors hover:text-[#a4ac86]"
                  >
                    <span className="border-b-2 border-neutral-900 group-hover/link:border-[#a4ac86] transition-colors">
                      Read Article
                    </span>
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-600 font-serif text-lg">No articles found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
