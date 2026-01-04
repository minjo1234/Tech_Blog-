import {Section} from "@/components/ui/section";
import {getAllPosts} from "@/lib/mdx";
import {Category} from "@/config/types";
import {PostCard} from "@/components/ui/posts/post";
import SideBar from "@/layouts/SideBar";


export default function BlogPage() {
    const posts = getAllPosts()


    return <div className={'relative flex flex-row'}>
        <SideBar/>

        <section className='mx-auto'>
            <div className='mx-auto w-full max-w-[1200px] min-w-[1200px] px-4 flex gap-6 lg:gap-8 mt-6 sm:mt-10 flex-col items-stretch'>
                <h2 className="text-lg sm:text-2xl font-bold mb-3">최신 게시물</h2>
                <Section className={'sm:grid sm:grid-cols-3  gap-4'}>
                    {posts.map((post) => (
                        <PostCard post={post} key={post.slug}></PostCard>
                    ))}
                </Section>
            </div>

            <div className="mx-auto w-full max-w-[1200px] my-10 px-8">
                <hr/>
            </div>
        </section>
    </div>
}
