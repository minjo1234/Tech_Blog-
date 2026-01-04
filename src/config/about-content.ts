import { Project, Work, PortFolio } from './types';

export type Language = 'ko' | 'en';

interface ContentType {
  name: string;
  intro: string;
  about: string;
  sections: {
    about: string;
    workExperience: string;
    portfolios: string;
  };
  work: Work;
  projects: Project[];
}

export const aboutContent: Record<Language, ContentType> = {
  ko: {
    name: '조민',
    intro: 'AI, Cloud 웹 풀스택 개발자',
    about: 'AI를 이용한 개발을 추구합니다.',
    sections: {
      about: '소개',
      workExperience: '경력',
      portfolios: '포트폴리오'
    },
    work: {
      title: 'Web Full Stack Developer',
      company: '굿모닝아이텍',
      link: 'https://goodmit.co.kr/',
      start: '2023.11',
      end: '-',
      desc: 'On-Premises 환경에서 Cloud 자원 배포, 최적화, 모니터링을 위한 B2B/ Pass 웹 플랫폼',
      points: [
        '데이터웨어하우징 기반 대용량 데이터 처리 성능 최적화 및 Java 백엔드 개발',
        'VMware vSphere와 Kubernetes 클러스터를 통합 관리하는 엔터프라이즈급 클라우드 관리 솔루션 개발',
        'Jenkins 기반 CI/CD 파이프라인 구축 및 자동화된 배포 워크플로우 구현',
        'Grafana를 활용한 실시간 인프라 모니터링 시스템 구축 및 자원 생애주기 관리',
        '멀티 테넌트 환경에서의 결제/비용 관리, 거버넌스 정책 적용 및 상태 관리 시스템 개발',
        '클라우드 운영 효율성 및 안정성 극대화를 위한 통합 운영 환경 설계 및 구현',
      ],
      tags: ['Java', 'Spring Boot', 'Vue', 'Kubernetes', 'Docker', 'Jenkins']
    } as Work,
    projects: [
      {
        title: '굿모닝아이텍',
        desc: 'On-Premises 환경에서 클라우드 자원관리 서비스를 제공하는 B2B/Paas 가상화 특화 기업',
        startMonth: '2023-11',
        endMonth: '-',
        tags: 'Next.js, TypeScript, Tailwind',
        slug: 'my-app',
        startMonthString: '2025.01',
        endMonthString: '2025.03',
        contact: 'rami@example.com',
      }
    ] as Project[]
  },
  en: {
    name: 'Jo Min',
    intro: 'AI & Cloud Web Full Stack Developer',
    about: 'I pursue development with AI.',
    sections: {
      about: 'About',
      workExperience: 'Work Experience',
      portfolios: 'Portfolios'
    },
    work: {
      title: 'Web Full Stack Developer',
      company: 'Good Morning I-Tech',
      link: 'https://goodmit.co.kr/',
      start: '2023.11',
      end: '-',
      desc: 'B2B/PaaS web platform for deploying, optimizing, and monitoring cloud resources in On-Premises environments',
      points: [
        'Optimized large-scale data processing performance based on data warehousing and developed Java backend',
        'Developed enterprise-level cloud management solutions for integrated management of VMware vSphere and Kubernetes clusters',
        'Established Jenkins-based CI/CD pipelines and implemented automated deployment workflows',
        'Built real-time infrastructure monitoring systems using Grafana and managed resource lifecycle',
        'Developed billing/cost management, governance policy application, and state management systems in multi-tenant environments',
        'Designed and implemented integrated operational environments to maximize cloud operational efficiency and stability',
      ],
      tags: ['Java', 'Spring Boot', 'Vue', 'Kubernetes', 'Docker', 'Jenkins']
    } as Work,
    projects: [
      {
        title: 'Good Morning I-Tech',
        desc: 'B2B/PaaS virtualization-specialized company providing cloud resource management services in On-Premises environments',
        startMonth: '2023-11',
        endMonth: '-',
        tags: 'Next.js, TypeScript, Tailwind',
        slug: 'my-app',
        startMonthString: '2025.01',
        endMonthString: '2025.03',
        contact: 'rami@example.com',
      }
    ] as Project[]
  }
} as const;