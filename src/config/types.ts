import {List} from "postcss/lib/list";

export interface Work {
    company: string,
    link: string,
    title: string,
    start: string,
    end: string,
    desc: string,
    points: string[],
    tags: string[]
}


export interface ProjectMatter {
    title: string,
    desc: string,
    startMonth: string,
    endMonth: string,
    tags: string, // 사용 기술 스택 정리
    gitRepoUrl?: string,
    link?: string,
}

export interface Project extends ProjectMatter {
    slug: string
    startMonthString: string;
    endMonthString?: string;
    contact: string;
}

export interface PortFolio extends ProjectMatter {
    solving: string,
    role: string
}

export interface Category {
    title: string,
    url: string
}

export interface SideBar extends Category {
    count: number
}
