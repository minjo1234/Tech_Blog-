import {Project} from "@/config/types";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

interface Props {
    project: Project;
}

export function ProjectCard({project}: Props) {
    const { title, desc, startMonthString, endMonthString, tags, link } = project;
    const tagList = tags.split(',').map((item) => item.trim());

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
                <CardAction></CardAction>
            </CardHeader>
            <CardContent>
                <p></p>
            </CardContent>
            <CardFooter>
                <p></p>
            </CardFooter>
        </Card>
    )
}
