import { MDXRemote } from 'next-mdx-remote/rsc'
import {getPostBySlug, getAllPostSlugs, Post} from '@/lib/mdx'
import { notFound } from 'next/navigation'
import { Callout } from '@/components/ui/callout'
import { TableOfContents } from '@/components/ui/table-of-contents'
import { CodeBlock } from '@/components/ui/code-block'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkBreaks from 'remark-breaks'
import remarkGfm from "remark-gfm";

interface Props {
    params: {
        slug: string[]  // 배열로 변경
    }
}

const components = {
    Callout,
    // figcaption 숨기기 - rehype-pretty-code가 자동 생성하는 제목 무시
    figcaption: () => null,
    pre: ({ children, ...props }: any) => {
        // rehype-pretty-code가 생성한 메타데이터 추출
        const codeElement = children?.props
        const code = codeElement?.children
        const language = props['data-language'] || codeElement?.['data-language']
        const title = props['data-title']

        // 원본 코드 텍스트 추출 (줄바꿈 보존)
        const extractText = (node: any, isFirstLevel = false): string => {
            if (typeof node === 'string') return node
            if (Array.isArray(node)) {
                return node.map((child) => extractText(child, false)).join('')
            }
            if (node?.props?.children) return extractText(node.props.children, false)
            return ''
        }

        const raw = extractText(code, true)

        return (
            <CodeBlock raw={raw} title={title} language={language}>
                {children}
            </CodeBlock>
        )
    },
}

// 정적 경로 생성
function BlogHeader({post}: {post: Post}) {
    return (
        <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-secondary-foreground">{post.metadata.title}</h1>
            {post.metadata.date && (
                <time className="text-muted-foreground">
                    {new Date(post.metadata.date).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </time>
            )}
            {post.metadata.description && (
                <p className="text-muted-foreground mt-2">{post.metadata.description}</p>
            )}
            {post.metadata.tags && (
                <div className="flex gap-2 mt-4">
                    {post.metadata.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                        >{tag}
                        </span>
                    ))}
                </div>
            )}
        </header>
    )
}

function BlogContent({post} : {post: Post}) {
    return (
        <div className="prose-lg dark:prose-invert max-w-none text-secondary-foreground">
            <MDXRemote
                source={post.content}
                components={components}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkBreaks, remarkGfm],
                        rehypePlugins: [
                            rehypeSlug,
                            [rehypePrettyCode, {
                                theme: 'github-dark',
                                keepBackground: false,
                                defaultLang: 'plaintext',
                                theme: {
                                    dark: 'github-dark',
                                    light: 'github-light'
                                },
                                onVisitLine(node: any) {
                                    if (node.children.length === 0) {
                                        node.children = [{ type: 'text', value: ' ' }]
                                    }
                                },
                                onVisitHighlightedLine(node: any) {
                                    node.properties.className = ['highlighted']
                                },
                            }]
                        ]
                    }
                }}
            />
        </div>
    )
}


export default function BlogPostPage({params}: Props) {
    try {
        const slugPath = params.slug.join('/')  // 배열을 문자열로: ["nextjs", "setup"] → "nextjs/setup"
        const post = getPostBySlug(slugPath)

        return (
                <div className="prose max-w-7xl mx-auto px-4 py-8">
                    <div className="flex gap-8 relative">
                        <article className="flex-1 max-w-3xl">
                            <TableOfContents />
                            <BlogHeader post={post}></BlogHeader>
                            <BlogContent post={post}></BlogContent>
                        </article>
                    </div>
                </div>
        )
    } catch (error) {
        notFound()
    }
}
