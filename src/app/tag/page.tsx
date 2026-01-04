import {getAllCategories} from "@/lib/mdx";
import Link from "next/link";

export default function TagPage() {
    const categories = getAllCategories();

    return (
        <div className='flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0'>
            <div className="space-x-2 pt-6 pb-8 md:space-y-5"><h1
                className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">Tags</h1>
            </div>
            <div className="flex max-w-lg flex-wrap">
                    {categories.map((category) => (
                        <div className="mt-2 mr-5 mb-2"  key={category.url} >
                            <Link href={category.url} className='mr-3 text-sm font-medium uppercase transition-colors hover:text-[#a4ac86]' style={{ color: '#a4ac86' }}>{category.title}
                            </Link>
                            <Link href={category.url} className='-ml-2 text-sm font-semibold text-gray-600 uppercase'>({category.count})</Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}
