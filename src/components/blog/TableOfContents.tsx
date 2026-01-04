'use client';

import { useEffect, useState } from 'react';
import { TocItem } from '@/lib/toc';

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Intersection Observer to track which heading is currently visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    // Observe all headings
    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden xl:block max-w-xs h-fit">
      <div className="bg-white border border-neutral-200 p-6 rounded-lg">
        <h2 className="font-display text-lg font-black mb-6 flex items-center gap-2 text-neutral-900">
          <div className="w-1 h-6" style={{ backgroundColor: '#a4ac86' }} />
          On This Page
        </h2>

        <ul className="space-y-2.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            const isH3 = item.level === 3;

            return (
              <li key={item.id} className={isH3 ? 'ml-4' : ''}>
                <a
                  href={`#${item.id}`}
                  className={`
                    block py-1.5 text-sm font-mono transition-all border-l-2 px-4
                    ${isActive
                      ? 'font-bold text-neutral-900 bg-neutral-50'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }
                  `}
                  style={isActive ? { borderColor: '#a4ac86' } : {}}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      const offset = 100;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
