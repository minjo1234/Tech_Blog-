'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";
import {Category} from "@/config/types";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function CategoryNavBar({categories} : {categories: Category[]}) {
    const router = useRouter();

    return (
        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 pl-2 font-bold sm:pl-0">
            <h2 className="text-sm sm:text-base">Category</h2>
            <section className="hidden sm:block">
                <ul className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <li key={category.url}>
                            {/* TODO. (21) 숫자를 글의 갯수로 추후 변경해야함 */}
                            <Link
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-auto rounded-md px-2.5 py-1"
                                href={category.url}>{category.title} <span className="ml-1 text-xs text-background">(21)</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="sm:hidden">
                <Select onValueChange={(value) => router.push(value)}>
                    <SelectTrigger className="h-auto w-[180px] py-1.5 text-sm">
                        <SelectValue placeholder="All (21)" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map(category => (
                            <SelectItem key={category.url} value={category.url}>
                                {category.title} <span className="ml-1 text-xs text-muted-foreground">(21)</span>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </section>
        </div>
    )
}
