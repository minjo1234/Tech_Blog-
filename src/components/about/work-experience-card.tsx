import {Project, Work} from "@/config/types";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {StackTag} from "@/components/ui/tag";
import {Tag} from "lucide-react";

interface Props {
    work: Work;
}

export function WorkCard({work}: Props) {
    const { company, link, title, start, end, desc, points, tags } = work;

    return (
        <Card className='gap-4'>
            <CardHeader className=''>
                <div className="flex flex-col sm:flex-row justify-between">
                    <CardTitle><Link href={link} target='_blank' className='font-bold text-pretty text-lg'>{company}</Link></CardTitle>
                    <CardAction className='text-muted-foreground text-sm text-pretty'>{start} {end}</CardAction>
                </div>
                <CardDescription className='mt-1'>{desc}</CardDescription>
            </CardHeader>
            <CardContent className='mt-7'>
                <p className='font-bold'>{title}</p>
            </CardContent>
            <CardFooter>
                <ul className='list-disc space-y-2'>
                    {points.map((point => (
                        <li className='text-sm ml-5 text-muted-foreground' key={point}>{point}</li>
                    )))}
                </ul>
            </CardFooter>
            <CardFooter className='gap-x-1'>
                {tags.map(tag => (
                    <StackTag key={tag} stack={tag}/>
                ))}
            </CardFooter>
        </Card>
    )
}
