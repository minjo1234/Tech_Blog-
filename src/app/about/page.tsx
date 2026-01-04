'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectCard } from "@/components/about/project-card";
import { Section } from '@/components/ui/section';
import { WorkCard } from "@/components/about/work-experience-card";
import { aboutContent } from "@/config/about-content";
import { Project } from "@/config/types";

export default function AboutPage() {
    const { language } = useLanguage();
    const content = aboutContent[language];

    return (
        <main className='container relative mx-auto scroll-my-12 overflow-auto p-6 sm:p-9 md:p-16 print:p-12 print:pt-0'>
            <Section className='max-w-2xl mx-auto print:space-y-4 space-y-8'>
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col text-center sm:text-start">
                        <h1 className='text-3xl font-bold mb-4'>{content.name}</h1>
                        <p className='text-pretty leading-8 sm:whitespace-pre-wrap whitespace-normal text-muted-foreground'>
                            {content.intro}
                        </p>
                    </div>
                    <span className='size-28 rounded-xl flex items-center overflow-hidden'>
                        <img className="aspect-square h-full w-full" alt={content.name} src="/images/about_image.JPEG"/>
                    </span>
                </div>

                <Section>
                    <h2 className='text-2xl font-bold mb-4'>{content.sections.about}</h2>
                    <p className='text-pretty leading-8 sm:whitespace-pre-wrap whitespace-normal text-muted-foreground'>
                        {content.about}
                    </p>
                </Section>

                <Section>
                    <h2 className='text-2xl font-bold'>{content.sections.workExperience}</h2>
                    <WorkCard work={content.work}>
                    </WorkCard>
                </Section>

                <Section>
                    <h2 className='text-2xl font-bold'>{content.sections.portfolios}</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {content.projects.map((project: Project) => (
                            <ProjectCard key={project.slug} project={project}></ProjectCard>
                        ))}
                    </div>
                </Section>
            </Section>
        </main>
    )
}
