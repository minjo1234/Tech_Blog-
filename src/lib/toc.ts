/**
 * Table of Contents (TOC) utilities
 * Extract headings from MDX content for navigation
 */

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract TOC items from MDX content
 * Supports h2 and h3 headings
 */
export function extractTocItems(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  
  // Use regex match instead of exec to avoid false security warnings
  const matches = Array.from(content.matchAll(headingRegex));
  
  matches.forEach((match) => {
    const level = match[1].length; // 2 for ##, 3 for ###
    const text = match[2].trim();

    // Convert heading text to slug (same as rehype-slug behavior)
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-가-힣]/g, '') // Keep Korean characters
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    items.push({ id, text, level });
  });

  return items;
}
