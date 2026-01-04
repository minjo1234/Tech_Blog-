import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Callout } from '@/components/ui/callout';
import { CodeBlock } from '@/components/ui/code-block';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { calculateReadingTime, formatReadingTime } from '@/lib/reading-time';
import { extractTocItems } from '@/lib/toc';
import { LanguageToggle } from '@/components/LanguageToggle';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import {cookies} from "next/headers";
import LinkedIn from "@/components/icon/LinkedIn";
import { CopyLinkButton } from '@/components/blog/CopyLinkButton';

interface Props {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ lang?: string }>;
}

const components = {
  Callout,
  figcaption: () => null,
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement> & { 'data-language'?: string; 'data-title'?: string }) => {
    const codeElement = children?.props;
    const code = codeElement?.children;
    const language = props['data-language'] || codeElement?.['data-language'];
    const title = props['data-title'];

    const extractText = (node: unknown): string => {
      if (typeof node === 'string') return node;
      if (Array.isArray(node)) {
        return node.map((child) => extractText(child)).join('');
      }
      if (node?.props?.children) return extractText(node.props.children);
      return '';
    };

    const raw = extractText(code);

    return (
      <CodeBlock raw={raw} title={title} language={language}>
        {children}
      </CodeBlock>
    );
  },
};

export async function generateStaticParams() {
  // 모든 언어에 대해 경로 생성
  const languages: ('ko' | 'en')[] = ['ko', 'en'];
  const allParams = languages.flatMap((lang) => {
    const slugs = getAllPostSlugs(lang);
    return slugs.map((slug) => ({
      slug: slug.split('/'),
    }));
  });
  return allParams;
}

export default async function BlogPostPage({ params, searchParams }: Props) {
  const { slug: slugArray } = await params;
  const slug = slugArray.join('/');
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'ko' | 'en') || 'ko';

  let post;
  try {
    post = getPostBySlug(slug, language);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  // Calculate reading time
  const readingTime = calculateReadingTime(post.content);
  const readingTimeText = formatReadingTime(readingTime);

  // Extract TOC items
  const tocItems = extractTocItems(post.content);

  return (
    <div className="relative mx-auto max-w-[800px] px-[30px] box-border">
      {/* Hero Header */}
      <header className="relative bg-white border-b border-neutral-200 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-16">
          {/* Breadcrumb and Language Toggle */}
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <nav className="flex items-center gap-3 text-sm font-mono">
              <Link href="/blog" className="text-neutral-900 hover:text-neutral-700 transition-colors font-bold">
                Blog
              </Link>
              <span className="text-neutral-400">/</span>
              <Link href={`/blog/${post.category}`} className="text-neutral-900 hover:text-neutral-700 transition-colors font-bold">
                {post.category}
              </Link>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-500">Article</span>
            </nav>
            <LanguageToggle />
          </div>

          {/* Title */}
          <h1 className="font-display text-2xl md:text-2xl lg:text-3xl font-black text-neutral-900 leading-tight mb-6 tracking-tight max-w-4xl">
            {post.metadata.title}
          </h1>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <time className="px-4 py-2 bg-neutral-100 text-neutral-900 font-bold text-sm font-mono">
              {post.metadata.date}
            </time>
            <div className="text-neutral-600 font-mono text-sm flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTimeText}
            </div>
          </div>

          {/* Description */}
          {post.metadata.description && (
            <p className="text-lg md:text-xl text-neutral-600 font-serif italic max-w-3xl leading-relaxed">
              {post.metadata.description}
            </p>
          )}

          {/* Tags */}
          {post.metadata.tags && (
            <div className="mt-6 flex flex-wrap gap-3">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-neutral-100 border border-neutral-200 text-neutral-700 text-sm font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content with TOC */}
      <div className="relative mx-auto max-w-[800px] px-[30px] box-border">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-12">
          {/* Article Content */}
          <article className="prose prose-lg
          prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
          prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:border-l-4 prose-h2:border-lime-400 prose-h2:pl-6
          prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
          prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-neutral-700
          prose-a:text-lime-600 prose-a:font-bold prose-a:no-underline prose-a:border-b-2 prose-a:border-lime-600 hover:prose-a:border-b-4
          prose-code:font-mono prose-code:text-sm prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-none prose-code:before:content-[''] prose-code:after:content-[''] prose-code:text-neutral-900
          prose-pre:bg-neutral-50 prose-pre:border prose-pre:border-neutral-200 prose-pre:p-0 prose-pre:overflow-auto
          prose-blockquote:border-l-4 prose-blockquote:border-lime-400 prose-blockquote:bg-neutral-100 prose-blockquote:p-6 prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:not-italic
          prose-li:font-serif prose-li:text-neutral-700
          prose-strong:font-black prose-strong:text-black
          prose-table:border-collapse prose-table:border prose-table:border-neutral-300
          prose-th:border prose-th:border-neutral-300 prose-th:bg-neutral-100 prose-th:p-3
          prose-td:border prose-td:border-neutral-300 prose-td:p-3
        ">
          <MDXRemote
            source={post.content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkBreaks, remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypePrettyCode, {
                    keepBackground: false,
                    defaultLang: 'plaintext',
                    theme: {
                      dark: 'github-dark',
                      light: 'github-light'
                    },
                    onVisitLine(node: { children: { type: string; value: string }[] }) {
                      if (node.children.length === 0) {
                        node.children = [{ type: 'text', value: ' ' }];
                      }
                    },
                    onVisitHighlightedLine(node: { properties: { className?: string[] } }) {
                      node.properties.className = ['highlighted'];
                    },
                  }]
                ]
              }
            }}
          />

          {/* Article Footer */}
        <div className="mt-16 pt-8 border-t-4 border-lime-400">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="text-sm uppercase tracking-wider text-neutral-500 mb-2 font-bold">Share this article</div>
              <div className="flex gap-3">
                <a
                  href={'https://www.linkedin.com/in/min-jo-3b2398357/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-neutral-900 !text-white hover:bg-lime-400 hover:!text-black transition-all font-bold flex items-center gap-2 !no-underline !border-none"
                >
                  <LinkedIn size={20} />
                  <span>LinkedIn</span>
                </a>
                <CopyLinkButton />
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm uppercase tracking-wider text-neutral-500 mb-2 font-bold">Published</div>
              <div className="text-2xl font-mono font-bold text-neutral-900">{post.metadata.date}</div>
            </div>
          </div>
        </div>
        </article>

        {/* Table of Contents Sidebar */}
        <TableOfContents items={tocItems} />
        </div>
      </div>

      {/* Related Posts */}
      <section className="bg-neutral-900 border-t-4 border-lime-400">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-12 flex items-center gap-4">
            <div className="w-2 h-16 bg-lime-400" />
            Keep Reading
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {getAllPostSlugs(language)
              .filter((s) => s.startsWith(post.category) && s !== slug)
              .slice(0, 3)
              .map((relatedSlug, index) => {
                const relatedPost = getPostBySlug(relatedSlug, language);
                return (
                  <Link
                    key={relatedSlug}
                    href={`/blog/${relatedSlug}`}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-400 p-6 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeIn 0.6s ease-out forwards',
                      opacity: 0,
                    }}
                  >
                    <div className="text-xs uppercase tracking-wider text-lime-400 mb-3 font-bold">
                      {relatedPost.category}
                    </div>
                    <h3 className="font-display text-2xl font-black text-white mb-3 group-hover:text-lime-400 transition-colors">
                      {relatedPost.metadata.title}
                    </h3>
                    <p className="text-neutral-400 text-sm font-serif line-clamp-2 mb-4">
                      {relatedPost.metadata.description}
                    </p>
                    <div className="text-xs font-mono text-neutral-500">{relatedPost.metadata.date}</div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
