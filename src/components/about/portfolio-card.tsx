import {PortFolio} from "@/config/types";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Tag} from "lucide-react";
import {StackTag} from "@/components/ui/tag";
import Link from "next/link";

interface Props {
    portfolio: PortFolio
}

export function PortFolioCard({portfolio}: Props) {
    const { title, desc, tags, link, solving, role, startMonth, endMonth } = portfolio;
    const tagList = tags.split(',').map(item => item.trim());

    return (
        <Link href={'#'}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <div className="">
                            <h3 className='font-semibold tracking-tight flex items-center gap-1.5 text-base'>
                                {title}
                            </h3>
                        </div>
                    </CardTitle>
                    <CardDescription><p className='text-sm text-muted-foreground mt-1'>{startMonth} - {endMonth}</p></CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-muted-foreground'>나만의 커스텀 웹 페이지</p>
                </CardContent>
                <CardFooter>
                    <div className='text-pretty text-sm text-muted-foreground mt-auto flex'>
                        <div className="mt-2 flex flex-wrap gap-1">
                            <StackTag stack={role}></StackTag>
                            {tagList.map((tag)=> (
                                <StackTag key={tag} stack={tag}></StackTag>
                            ))}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

