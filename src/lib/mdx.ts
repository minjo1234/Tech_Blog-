import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {Category, SideBar} from "@/config/types";

const postsDirectory = path.join(process.cwd(), 'src/posts')

export type Language = 'ko' | 'en';
export type PostStatus = 'complete' | 'ing';

export interface PostMetadata {
    title: string
    date: string
    description?: string
    thumbnail: string
    tags?: string[]
    status? : PostStatus
}

export interface Post {
    slug: string
    content: string
    metadata: PostMetadata
    category: string
    language?: Language
}

// 모든 MDX 파일 경로 가져오기 (언어 지원)
export function getAllPostSlugs(language?: Language): string[] {
    const categories = fs.readdirSync(postsDirectory)
    const slugs: string[] = []

    categories.forEach((category) => {
        const categoryPath = path.join(postsDirectory, category)
        if (fs.statSync(categoryPath).isDirectory()) {
            const items = fs.readdirSync(categoryPath)

            items.forEach((item) => {
                const itemPath = path.join(categoryPath, item)

                if (fs.statSync(itemPath).isDirectory()) {
                    if (item === language) {
                        const langFiles = fs.readdirSync(itemPath)
                        console.log("langFiles", langFiles);
                        langFiles.forEach((file) => {
                            if (file.endsWith('.mdx')) {
                                slugs.push(`${category}/${file.replace('.mdx', '')}`)
                            }
                        })
                    }
                }
            })
        }
    })

    return slugs
}

// 특정 포스트 가져오기 (언어 지원)
export function getPostBySlug(slug: string, language: Language): Post {
    const [category, ...filenameParts] = slug.split('/')
    const filename = filenameParts.join('/')

    let fullPath: string
    let detectedLanguage: Language | undefined = language

    const langPath = path.join(postsDirectory, category, language, `${filename}.mdx`)
    if (fs.existsSync(langPath)) {
        fullPath = langPath
    } else {
        // 언어별 파일이 없으면 기존 방식 경로로 fallback
        fullPath = path.join(postsDirectory, `${slug}.mdx`)
        detectedLanguage = undefined
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug,
        content,
        metadata: data as PostMetadata,
        category,
        language: detectedLanguage,
    }
}

// 모든 포스트 가져오기
export function getAllPosts(language: Language): Post[] {
    const slugs = getAllPostSlugs(language)
    const posts = slugs.map((slug) => getPostBySlug(slug, language)).filter((post) => post.metadata.status === 'complete')


    return posts.sort((a, b) => {
        if (a.metadata.date && b.metadata.date) {
            return a.metadata.date > b.metadata.date ? -1 : 1
        }
        return 0
    })
}

// 카테고리별 포스트 가져오기
export function getPostsByCategory(category: string, language: Language): Post[] {
    const allPosts = getAllPosts(language)
    return allPosts.filter((post) => post.category === category)
}

// 모든 카테고리 가져오기
export function getAllCategories(): SideBar[] {
    const categories = fs.readdirSync(postsDirectory)

    return categories.map((category) => {
        const categoryPath = path.join(postsDirectory, category)
        const post_length = fs.readdirSync(categoryPath).length;
        const url = `/blog/${category}`

        return {
            title: category,
            url: url,
            count: post_length
        }
    })
}

// 몇 개인지 알아와야함
// 경로를 정해야함.

