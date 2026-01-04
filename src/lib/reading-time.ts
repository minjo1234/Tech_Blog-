/**
 * Calculate estimated reading time for a given text
 * Average reading speed: 200-250 words per minute for technical content
 */
export function calculateReadingTime(content: string): number {
  // Remove MDX/Markdown syntax
  const cleanContent = content
    .replace(/^---[\s\S]*?---/m, '') // Remove frontmatter
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '$1') // Remove links
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`.*?`/g, '') // Remove inline code
    .replace(/#+ /g, '') // Remove headers
    .replace(/[*_~]/g, '') // Remove formatting
    .trim();

  // Count words (split by whitespace)
  const words = cleanContent.split(/\s+/).filter(Boolean).length;

  // Calculate reading time (200 words per minute for technical content)
  const minutes = Math.ceil(words / 200);

  return minutes;
}

/**
 * Format reading time for display
 */
export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return '< 1 min read';
  if (minutes === 1) return '1 min read';
  return `${minutes} min read`;
}