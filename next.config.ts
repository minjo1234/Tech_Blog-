import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    eslint: {
        // 빌드 시 ESLint 검사를 무시하도록 설정합니다.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // 빌드 시 TypeScript 타입 에러를 무시하고 배포를 진행합니다.
        ignoreBuildErrors: true,
    },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;
