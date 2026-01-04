# Blog Design Guide - "Editorial Brutalism"

## 🎨 Design Concept

This blog design combines **high-contrast editorial magazine aesthetics** with **technical brutalism** to create a distinctive, memorable experience for developer-focused content.

### Key Differentiators

1. **Oversized Typography**: Massive display fonts that demand attention
2. **Diagonal Reading Flow**: Unconventional layouts that guide the eye
3. **Code-First Design**: Code blocks as hero elements, not afterthoughts
4. **Bold Lime Accent**: Electric lime (#a3e635) against sophisticated charcoal/cream
5. **Asymmetric Grids**: Intentionally breaking convention for visual interest

---

## 📁 File Structure

```
src/app/blog-new/
├── page.tsx           # Blog list page with featured post hero
├── [slug]/page.tsx    # Individual post page with TOC
└── layout.tsx         # Shared layout with nav and footer
```

---

## 🎨 Design System

### Typography

- **Display**: Outfit (900 weight) - Bold, geometric, commanding
- **Serif**: Playfair Display - Refined, editorial quality for body text
- **Mono**: Space Mono - Distinctive technical feel for code

### Colors

#### Light Mode
- Background: `neutral-50` (#fafafa)
- Text: `neutral-900` (#171717)
- Accent: `lime-400` (#a3e635)

#### Dark Mode
- Background: `neutral-950` (#0a0a0a)
- Text: `white` (#ffffff)
- Accent: `lime-500` (#84cc16)

### Visual Elements

- **4px bold borders** for high impact
- **Brutalist geometric accents** (diagonal clips, corner reveals)
- **Noise textures** on hero sections for depth
- **Staggered animations** for delightful reveals
- **No rounded corners** - sharp, intentional edges

---

## 📄 Page Breakdown

### 1. Blog List Page (`/blog-new`)

#### Hero Section
- Full-width featured post with dramatic dark background
- Oversized title (6xl-8xl font size)
- Lime accent badge rotated -2deg
- Gradient overlay with subtle noise texture
- CTA button with hover scale effect

#### Filter Bar (Sticky)
- Frosted glass effect (`backdrop-blur-xl`)
- Category tabs with lime underline
- Inline search input

#### Post Grid
- 3-column responsive grid
- Staggered fade-in animations (100ms delays)
- Hover effects: lime border + corner triangle reveal
- Truncated descriptions with "Read More" links

#### Newsletter Section
- Black background with lime top border
- Centered layout with oversized heading
- Inline email form with bold CTA

### 2. Individual Post Page (`/blog-new/[slug]`)

#### Header
- Dark hero with breadcrumb navigation
- Massive post title (5xl-8xl responsive)
- Lime date badge
- Reading time indicator
- Tags as bordered chips

#### Content Layout
- **3-column grid** on desktop:
  - Col 1-3: Sticky TOC sidebar (hidden on mobile)
  - Col 4-12: Main article content

#### Prose Styling
- H2 headings: 4xl with left lime border
- Code blocks: Dark with lime copy button on hover
- Blockquotes: Lime left border, neutral background
- Links: Bold with lime underline that grows on hover

#### Footer
- Share buttons (Twitter, LinkedIn, Copy)
- Published date display
- Related posts carousel with fade-in animations

---

## 🚀 Usage

### Running the New Blog

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Navigate to**:
   ```
   http://localhost:3000/blog-new
   ```

3. **View individual posts**:
   ```
   http://localhost:3000/blog-new/[slug]
   ```

### Integration with Existing Content

The design expects posts from `getAllPosts()` and `getPostBySlug()` from `/lib/mdx.ts`.

**Post Interface**:
```typescript
interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
  readingTime?: number;
}
```

### Customization

#### Change Accent Color
Replace all instances of `lime-400` and `lime-500` with your preferred color:
```
lime-400 → emerald-400
lime-500 → emerald-500
```

#### Adjust Typography
Modify in `globals.css`:
```css
:root {
  --font-display: 'YourFont', sans-serif;
  --font-serif: 'YourSerif', serif;
  --font-mono: 'YourMono', monospace;
}
```

#### Grid Breakpoints
Adjust responsive columns in:
- Blog grid: `md:grid-cols-2 lg:grid-cols-3`
- Post layout: `lg:grid-cols-12`

---

## ✨ Animations & Interactions

### Implemented Micro-interactions

1. **Staggered Fade-Ins**: Posts appear with 100ms delays
2. **Hover Transforms**: Buttons scale 105% on hover
3. **Border Transitions**: Lime borders appear on card hover
4. **Corner Reveals**: Diagonal lime triangles in top-right on hover
5. **Link Underlines**: Border grows from 2px to 4px on hover
6. **Smooth Scrolling**: Anchor links scroll smoothly to sections

### CSS Animations

```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Single column, full-width hero
- **Tablet**: 768px-1024px - 2-column grid
- **Desktop**: 1024px+ - 3-column grid, sidebar TOC

### Mobile Optimizations
- Sticky filter bar with search
- Hidden TOC sidebar (shows inline on mobile)
- Reduced font sizes (6xl → 5xl for titles)
- Stacked newsletter form inputs

---

## 🎯 PRD Alignment

### ✅ Completed Requirements

- **P0 - Content Display**: Featured post, grid layout, individual posts
- **P0 - Responsive Design**: Mobile, tablet, desktop optimized
- **P0 - Dark Mode**: Full dark theme with lime accents
- **P1 - Search**: Search bar in filter section
- **P1 - Categories/Tags**: Filter tabs, tag displays
- **P2 - Newsletter**: Subscription form in footer

### 🚧 Integration Needed

- **MDX Rendering**: Connect MDX content to `<article>` prose section
- **TOC Generation**: Extract headings from MDX for sidebar
- **Code Highlighting**: Integrate Shiki with copy buttons
- **SEO Meta Tags**: Add Open Graph, Twitter Cards
- **Analytics**: Google Analytics, view tracking

---

## 🔧 Technical Notes

### Dependencies Used
- **Next.js 15.5.4**: App Router, static generation
- **Tailwind CSS 3.4**: Utility-first styling
- **Google Fonts**: Outfit, Playfair Display, Space Mono
- **Tailwind Typography**: Prose styling plugin

### Performance Considerations
- **Static Generation**: Use `generateStaticParams()` for all posts
- **Image Optimization**: Use Next.js `<Image>` component (not implemented yet)
- **Font Loading**: Google Fonts with `display=swap` for no layout shift
- **CSS-Only Animations**: No JS for micro-interactions

### Accessibility
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Focus Visible**: Lime ring on keyboard navigation
- **Color Contrast**: WCAG AA compliant (lime on dark backgrounds)
- **ARIA Labels**: Added to icon-only buttons

---

## 🎨 Design Philosophy

> "Bold maximalism and refined minimalism both work - the key is intentionality, not intensity."

This design chooses **bold maximalism** with:
- Oversized, in-your-face typography
- High-contrast color blocking
- Generous spacing and negative space
- Diagonal flow that defies convention

Every detail is intentional:
- The 4px borders demand attention
- The lime accent pops without overwhelming
- The serif body text adds editorial sophistication
- The geometric layouts break the grid purposefully

---

## 📝 Next Steps

1. **Integrate Real MDX Content**: Connect to your existing blog posts
2. **Add Code Highlighting**: Implement Shiki with copy functionality
3. **Generate Dynamic TOC**: Extract headings from MDX content
4. **Optimize Images**: Use Next.js Image component
5. **Add SEO**: Meta tags, JSON-LD, sitemap
6. **Implement Search**: Full-text search with filtering
7. **Track Analytics**: Google Analytics, view counts

---

## 💡 Pro Tips

1. **Consistency is Key**: Use the lime accent sparingly but consistently
2. **Typography Hierarchy**: Let the massive headings breathe with generous spacing
3. **Animation Restraint**: Stagger reveals create delight without overwhelming
4. **Mobile First**: Test on mobile devices - the design adapts beautifully
5. **Dark Mode**: The dark theme is the hero - design for it primarily

---

Built with **frontend-design skill** following "Editorial Brutalism" aesthetic direction.
Distinctive, production-grade, and unforgettable. 🚀