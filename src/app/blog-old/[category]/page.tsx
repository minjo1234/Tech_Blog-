import {getPostsByCategory} from "@/lib/mdx";
import {PostCard} from "@/components/ui/posts/post";
import {cookies} from "next/headers";

interface Props {
    params: {
        category: string
    }
}

export default async function CategoryPage({params}: Props) {
    const cookieStore = await cookies();
    const language = (cookieStore.get('language')?.value as 'ko' | 'en') || 'ko';


    const posts = getPostsByCategory(params.category, language);

    return (
        <div className='flex flex-col sm:grid sm:grid-cols-3 gap-6 mt-6 grid-flow-row max-w-5xl min-w-[1200px]'>
            {posts.map((post) =>  (
                    <PostCard post={post} key={post.slug}></PostCard>
            ))}
        </div>
    )
}
