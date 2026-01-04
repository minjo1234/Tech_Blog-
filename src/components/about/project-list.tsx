import {Project} from "@/config/types";
import * as D from '@/components/ui/dialog';
import { ProjectCard } from '@/components/about/project-card';

interface Props {
    list: Project[];
}
export default function ProjectList({ list } : Props) {
    return (
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 print:grid-cols-3 print:gap-2'>
         {list.map((project) => (
            <D.Dialog key={project.slug}>
                <ProjectCard project={project}/>
            </D.Dialog>
             ))}
        </div>
    )
}

