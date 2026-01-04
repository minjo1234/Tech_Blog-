import {CalendarDays} from "lucide-react";
import {Post} from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";

function PostCard({post} : {post: Post}) {
    return (
        <Link key={post.slug} href={`/blog/${post.slug}`} className='w-[100%]'>
            <li className='flex flex-col justify-center gap-0 flex-1 px-4 h-full py-1 max-[640px]:py-2 overflow-hidden rounded-xl
                border border-slate-200/60
                bg-gradient-to-br from-white via-slate-50/50 to-white
                shadow-md shadow-slate-200/50
                transition-all duration-300 ease-out
                hover:shadow-xl hover:border-[#a4ac86] hover:-translate-y-2 hover:scale-[1.02]
                min-h-[20rem]'>
                <div className="relative flex flex-1 flex-col min-[980px]:justify-between space-y-4">
                    <div className="flex-[0.1] flex flex-row space-x-4 text-xs sm:text-lg font-bold lg:text-base items-center">
                        <p className='text-pink-600'>{post.category}</p>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <CalendarDays className="w-3.5" />
                            <span>{post.metadata.date ? new Date(post.metadata.date).toLocaleDateString('ko-KR') : ''}</span>
                        </div>
                    </div>
                    <h2 className="flex-[0.5] flex flex-row my-1 text-sm sm:text-xl font-semibold sm:font-bold lg:text-lg px-4 border justify-between items-center space-x-2">
                        <p className="flex-[0.7] text-blue-600">{post.metadata.title}</p>
                        <div className="flex-[0.3]">
                                <Image src={post.metadata.thumbnail ?? '/images/default_thumbnail.png'} alt={"썸네일"} width={80} height={80} className="rounded-lg object-cover"/>
                        </div>
                    </h2>
                    <div className='flex-[0.4] overflow-hidden items-start justify-start'>
                        {post.metadata.description}
                    </div>
                </div>
            </li>
        </Link>
    )
}


export {
    PostCard
}
