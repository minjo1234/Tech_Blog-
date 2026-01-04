import path from "path";
import * as process from "node:process";
import {sync} from "glob";
import {Locale} from "next/dist/compiled/@vercel/og/satori";
import {Project} from "@/config/types";
import * as fs from "node:fs";

const BASE_PATH = '/src/projects';
const CAREER_PATH = `${BASE_PATH}/career`;
const SECTION_PATH = `${BASE_PATH}/section`;

const PROJECT_CAREER_PATH = path.join(process.cwd(), CAREER_PATH);
const PROJECT_SECTION_PATH = path.join(process.cwd(), SECTION_PATH);

// 모든 MDX 파일 조회
// 추후 locale 추가예정
const getProjectSectionPaths = (locale? : string) => {
    const filename = '*';
    const projectPaths: string[] = sync(`${PROJECT_SECTION_PATH}/**/${filename}.mdx`);
    return projectPaths;// const projectPaths = string[] = sync
}

// MDX Detail
const parseProject = async (postPath: string) => {
    const file = fs.readFileSync(postPath, 'utf-8');

}

const getProjectInfoFromPath = (postPath: string) => {
    const path = postPath
        .slice(postPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, '')
        .replace('.mdx', '')
}

/*
const getProjectSectionList = async (): Promise<Project[]> => {
    const projectSectionPaths = getProjectSectionPaths();
    await Promise.all(projectSectionPaths.map(postPath) => parse)
}
*/
