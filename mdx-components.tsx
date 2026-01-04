import type { MDXComponents } from 'mdx/types';
import { Callout } from 'nextra/components';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        Callout,
        ...components,
    };
}