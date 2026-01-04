import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config = {
    darkMode: 'class',
    content: ['./src/**/*.{ts,tsx,mdx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                pretendard: ['Pretendard'],
                display: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                mono: ['Space Mono', 'monospace'],
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                informative: {
                    DEFAULT: 'var(--informative)',
                    foreground: 'var(--informative-foreground)',
                },
                warning: {
                    DEFAULT: 'var(--warning)',
                    foreground: 'var(--warning-foreground)',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        'h1, h2, h3, h4': {
                            scrollMarginTop: '5rem',
                            marginBottom: 0,
                        },
                        h2: {
                            marginBottom: '0.5rem',
                        },
                        hr: {
                            marginTop: 0,
                            marginBottom: 0,
                        },
                        p: {
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        },
                        '.callout-contents > p': {
                            margin: 0,
                        },

                        code: {
                            counterReset: 'line',
                        },

                        // Inline code only
                        ':not(pre) > code': {
                            fontWeight: 'inherit',
                            position: 'relative',
                            bottom: 1,
                            margin: '0 3px',
                            color: '#eb5757',
                            backgroundColor: 'rgba(135,131,120,0.15)',
                            fontFamily:
                                '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
                            borderRadius: 3,
                            padding: '0.2em 0.4em',
                            overflowWrap: 'break-word',
                        },

                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },

                        'code[data-line-numbers] > [data-line]::before': {
                            counterIncrement: 'line',
                            content: 'counter(line)',

                            /* Other styling */
                            display: 'inline-block',
                            width: '1rem',
                            marginRight: '1.4rem',
                            textAlign: 'right',
                            color: 'lightgrey',
                            fontSize: '0.75rem',
                        },

                        'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
                            width: '1rem',
                        },

                        'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
                            width: '2rem',
                        },

                        pre: {
                            paddingRight: 0,
                            paddingLeft: 0,
                            color: 'var(--shiki-light)',
                            backgroundColor: 'var(--shiki-light-bg)',
                            border: '1px solid #e5e7eb',
                        },

                        '.dark pre': {
                            backgroundColor: 'var(--shiki-dark-bg)',
                            color: 'var(--shiki-dark)',
                            border: '1px solid #374151',
                        },

                        'pre > code > span': {
                            paddingLeft: '1.1rem',
                            paddingRight: '1rem',
                        },

                        'pre code span': {
                            color: 'var(--shiki-light)',
                        },
                        '.dark pre code span': {
                            color: 'var(--shiki-dark)',
                        },

                        '[data-highlighted-line]': {
                            backgroundColor: 'rgba(253, 224, 71, 0.2)',
                        },

                        '.project img': {
                            marginTop: '0px !important',
                        },

                        '.project p,ul,li': {
                            fontSize: 15,
                        },

                        u: {
                            textUnderlineOffset: '4px',
                            textDecorationThickness: 1,
                            fontWeight: 600,
                        },
                    },
                },
                lg: {
                    css: {
                        'h1, h2, h3, h4': {
                            scrollMarginTop: '5rem',
                            marginBottom: '0.5rem',
                        },
                        h2: {
                            marginBottom: '0.5rem',
                        },
                        hr: {
                            marginTop: 0,
                            marginBottom: '1.5rem',
                        },
                        li: {
                            fontSize: '1rem', // 18px (기본 16px에서 증가)
                            lineHeight: '1.5rem',
                        },
                        'ul > li, ol > li': {
                            fontSize: '1rem',
                        },
                        blockquote: {
                            fontStyle: 'normal',
                            borderLeft: '3px solid var(--primary)',
                            backgroundColor: 'var(--muted)',
                            padding: '0.75rem 1.25rem',
                            margin: '1rem 0',
                            borderRadius: '0.375rem',
                        },
                        'blockquote p': {
                            margin: '0.5rem 0',
                        },
                        'blockquote p:first-of-type': {
                            marginTop: 0,
                        },
                        'blockquote p:last-of-type': {
                            marginBottom: 0,
                        },
                        table: {
                            display: 'table',
                            overflowX: 'auto',
                            borderCollapse: 'separate',
                            borderSpacing: '0',
                            width: '100%',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                            border: '1px solid var(--border)',
                            borderRadius: '0.5rem',
                            overflow: 'hidden',
                        },
                        'thead tr': {
                            backgroundColor: 'var(--secondary)',
                        },
                        'tbody tr': {
                            borderTop: '1px solid var(--border)',
                            transition: 'background-color 0.2s',
                        },
                        'tbody tr:hover': {
                            backgroundColor: 'var(--accent)',
                        },
                        th: {
                            padding: '1rem 1rem',
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            letterSpacing: '0.025em',
                        },
                        'th:first-child': {
                            padding: '1rem',
                            textAlign: 'left',
                        },
                        td: {
                            padding: '0.875rem 1.25rem',
                            textAlign: 'center',
                        },
                        'td:first-child': {
                            textAlign: 'left',
                            fontWeight: '500',
                        },
                        // 모바일에서 테이블을 카드 형태로 변경
                        '@media (max-width: 640px)': {
                            table: {
                                display: 'block',
                            },
                            thead: {
                                display: 'none',
                            },
                            'tbody, tr, td': {
                                display: 'block',
                            },
                            tr: {
                                marginBottom: '1rem',
                                border: '1px solid var(--border)',
                                borderRadius: '0.5rem',
                                padding: '0.75rem',
                                backgroundColor: 'var(--card)',
                            },
                            td: {
                                padding: '0.5rem 0',
                                borderBottom: 'none',
                                position: 'relative',
                                paddingLeft: '50%',
                            },
                            'td::before': {
                                content: 'attr(data-label)',
                                position: 'absolute',
                                left: '0',
                                width: '45%',
                                paddingRight: '10px',
                                fontWeight: '600',
                                whiteSpace: 'nowrap',
                            },
                        },
                    },
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [tailwindcssAnimate, typography],
} satisfies Config;

export default config;
