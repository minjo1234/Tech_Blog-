'use client'

import { useEffect, useState } from 'react'

interface TocItem {
    id: string
    text: string
    level: number
}

export function TableOfContents() {
    const [headings, setHeadings] = useState<TocItem[]>([])
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        // 페이지의 모든 헤딩 요소 추출 (h2, h3)
        const elements = Array.from(document.querySelectorAll('article h2, article h3'))
        const items: TocItem[] = elements.map((elem) => ({
            id: elem.id,
            text: elem.textContent || '',
            level: Number(elem.tagName.charAt(1))
        }))
        setHeadings(items)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 디버깅: 감지 상태 확인

                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-50px 0px -10% 0px', // 더 넓은 감지 영역
                threshold: 0.2 // 50%만 보여도 감지
            }
        )

        elements.forEach((elem) => {
            if (elem.id) {
                observer.observe(elem)
            } else {
                console.warn('Heading without id:', elem.textContent)
            }
        })

        return () => {
            elements.forEach((elem) => observer.unobserve(elem))
        }
    }, [])

    if (headings.length === 0) return null

    // h2와 그 하위 h3들을 그룹화
    const groupedHeadings: Array<{ h2: TocItem; h3s: TocItem[] }> = []
    let currentGroup: { h2: TocItem; h3s: TocItem[] } | null = null

    headings.forEach((heading) => {
        if (heading.level === 2) {
            if (currentGroup) {
                groupedHeadings.push(currentGroup)
            }
            currentGroup = { h2: heading, h3s: [] }
        } else if (heading.level === 3 && currentGroup) {
            currentGroup.h3s.push(heading)
        }
    })
    if (currentGroup) {
        groupedHeadings.push(currentGroup)
    }

    return (
        <aside className="not-prose hidden xl:block w-64 shrink-0 h-[calc(100%+150px)] absolute left-full">
                <div className="sticky top-[200px] mt-[200px] ml-[5rem] w-[200px]">
                    <p className="font-bold text-lg mb-4">On this page</p>
                    <div className="space-y-2 text-sm">
                        {groupedHeadings.map((group, groupIndex) => (
                            <div key={group.h2.id}>
                                <a
                                    href={`#${group.h2.id}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.getElementById(group.h2.id)?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        })
                                    }}
                                    className={`block py-1 border-l-2 pl-3 transition-colors ${
                                        activeId === group.h2.id
                                            ? 'border-primary text-primary font-medium'
                                            : 'border-muted hover:border-muted-foreground text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    {group.h2.text}
                                </a>

                                {group.h3s.length > 0 && (
                                    <div className="border-l-2 border-muted ml-4 mt-2">
                                        {group.h3s.map((h3) => (
                                            <a
                                                key={h3.id}
                                                href={`#${h3.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    document.getElementById(h3.id)?.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start'
                                                    })
                                                }}
                                                className={`block py-1 pl-3 transition-colors relative ${
                                                    activeId === h3.id
                                                        ? 'text-primary font-medium before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary before:-ml-0.5 text-pink-500'
                                                        : 'text-muted-foreground hover:text-foreground'
                                                }`}
                                            >
                                                {h3.text}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
        </aside>
    )
}
