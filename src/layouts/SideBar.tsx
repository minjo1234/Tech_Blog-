import {getAllCategories} from "@/lib/mdx";
import Link from "next/link";


export default function SideBar() {
    const categories = getAllCategories()
    return (
        <aside className='hidden sm:block w-[280px] min-w-[280px] sticky top-40 left-20 h-fit max-h-screen overflow-auto rounded-sm bg-gray-50 shadow-md mr-5'>
            <div className="px-6 py-4">
                <h3 className="font-bold uppercase" style={{ color: '#a4ac86' }}>All Posts</h3>
                <ul>
                    {categories.map(category => (
                        <li className="my-3" key={category.url}>
                            <Link
                            className="px-3 py-2 text-sm font-medium text-gray-500 uppercase transition-colors hover:text-[#a4ac86]"
                            aria-label="View posts tagged next-js" href={category.url}>{category.title} ({category.count})
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>

    )
}
