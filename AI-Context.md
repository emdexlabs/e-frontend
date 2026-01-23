# AI-Context.md - Emdex Labs Frontend Project

## Project Overview

**Prograde Pathfinder** is a modern, premium static website for Emdex Labs showcasing services in AI, Robotics, Cloud Computing, and more. This document serves as a comprehensive guide for AI assistants and developers to build user interfaces that align with the project's architecture, design patterns, and conventions.

---

## Tech Stack

### Core Framework
- **Next.js 16** (App Router) - React 18/19
- **TypeScript 5** - Strict mode enabled
- **React 19.2.0** - Latest stable version

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library for smooth, GPU-accelerated animations
- **Lucide React** - Icon library for consistent iconography
- **clsx + tailwind-merge** - Utility for conditional class merging

### Fonts
- **Geist Sans** - Primary sans-serif font
- **Geist Mono** - Monospace font
- **Inter** - Display font (weights: 400, 500, 600, 700, 800)

### Development Tools
- **ESLint 9** - Code linting with Next.js config
- **Husky + lint-staged** - Pre-commit hooks for code quality
- **PostCSS** - CSS processing

---

## Project Structure

```
e-frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with fonts & navbar
│   │   ├── page.tsx            # Homepage composition
│   │   ├── globals.css         # Global styles & CSS variables
│   │   └── favicon.ico         # Site favicon
│   ├── components/             # React components
│   │   ├── Navbar.tsx          # Header with active state tracking
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Logo.tsx            # Circuit-style SVG logo
│   │   ├── HeroCarousel.tsx    # Hero section with slides
│   │   ├── AboutSection.tsx    # About Us section
│   │   ├── IndustryGrid.tsx    # Industry sectors grid
│   │   ├── ServicesAccordion.tsx # Services accordion
│   │   ├── ContactForm.tsx     # Contact form
│   │   ├── TeamExpertise.tsx   # Team capabilities display
│   │   └── ui/                 # Shared UI primitives
│   │       └── TechStack.tsx   # Animated tech stack marquee
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── public/                     # Static assets
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── eslint.config.mjs           # ESLint configuration
└── postcss.config.mjs          # PostCSS configuration
```

---

## Design System

### Color Palette

The project uses a **light-only** color scheme with warm, professional tones:

```css
/* CSS Variables (defined in globals.css) */
--background: #ffffff;              /* White background */
--foreground: #4A4A4A;              /* Dark Gray - Primary text */
--primary: #6D8196;                 /* Blue-Gray - Primary interactive */
--primary-foreground: #ffffff;      /* White text on primary */
--secondary: #FEEEE3;               /* Warm Beige - Accent backgrounds */
--secondary-foreground: #4A4A4A;    /* Dark Gray */
--accent: #6D8196;                  /* Blue-Gray */
--accent-foreground: #ffffff;       /* White text on accent */
--border: #CBCBCB;                  /* Light Gray - Borders */
```

**Important:** Dark mode is **disabled** by design. Even if the user's system prefers dark mode, the site enforces light mode.

### Typography

- **Headings**: Bold (700), tight line-height (1.2), negative letter-spacing (-0.02em)
- **Body text**: Line-height 1.7 for readability
- **Font stack**: Geist Sans → Inter → system-ui → sans-serif

### Spacing & Layout

- **Container**: `.container-width` - `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- **Section padding**: `.section-padding` - `py-16 md:py-24 lg:py-32`
- **Responsive breakpoints**: Follow Tailwind's default (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

### Custom Utilities

```css
/* Glass panel effect */
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid #CBCBCB;
}

/* Alternate section background */
.section-alt {
  background: linear-gradient(to bottom, rgba(254, 238, 227, 0.3), rgba(255, 255, 255, 0.5));
}
```

---

## Component Patterns

### 1. Client Components ("use client")

Use `"use client"` directive for components that:
- Use React hooks (useState, useEffect, etc.)
- Handle user interactions (onClick, onChange, etc.)
- Use Framer Motion animations
- Access browser APIs (window, document, etc.)

**Examples:** `Navbar.tsx`, `HeroCarousel.tsx`, `ContactForm.tsx`

### 2. Server Components (default)

Default for components that:
- Render static content
- Don't require interactivity
- Can be rendered on the server

**Examples:** `page.tsx`, `layout.tsx`

### 3. Component Structure Template

```tsx
"use client"; // Only if needed

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
  // Other props
}

export default function Component({ className }: ComponentProps) {
  // State & hooks
  const [state, setState] = useState(false);

  // Event handlers
  const handleClick = () => {
    // Logic
  };

  return (
    <section className={cn("base-classes", className)}>
      {/* Content */}
    </section>
  );
}
```

### 4. Animation Patterns (Framer Motion)

#### Scroll-triggered animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

#### Layout animations (shared element transitions)
```tsx
<motion.div
  layoutId="uniqueId"
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  {/* Content */}
</motion.div>
```

#### AnimatePresence for enter/exit
```tsx
<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>
```

### 5. Performance Optimizations

- **GPU acceleration**: Use `will-change: transform` for animated elements
- **Debouncing**: Debounce scroll handlers (see `Navbar.tsx` example)
- **RequestAnimationFrame**: Use RAF for scroll-based updates
- **Passive event listeners**: `{ passive: true }` for scroll events

```tsx
// Example from Navbar.tsx
const handleScroll = useCallback(() => {
  if (rafRef.current) {
    cancelAnimationFrame(rafRef.current);
  }
  rafRef.current = requestAnimationFrame(() => {
    // Update logic
  });
}, []);

useEffect(() => {
  const debouncedScroll = debounce(handleScroll, 10);
  window.addEventListener("scroll", debouncedScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", debouncedScroll);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };
}, [handleScroll]);
```

---

## Accessibility Guidelines

### ARIA Roles & Labels

- **Navigation**: `role="navigation"` with `aria-label="Main navigation"`
- **Tabs**: `role="tab"`, `role="tablist"`, `aria-selected`, `aria-current`
- **Menus**: `role="menu"`, `role="menuitem"`
- **Buttons**: Always include `aria-label` for icon-only buttons
- **Icons**: Use `aria-hidden="true"` for decorative icons

### Keyboard Navigation

- **Skip to content**: Provide `.skip-to-content` link for keyboard users
- **Focus visible**: All interactive elements have visible focus outlines
- **Tab order**: Ensure logical tab order through DOM structure

### Reduced Motion

Respect `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Focus Outlines

```css
*:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## Styling Conventions

### 1. Use `cn()` for Conditional Classes

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className // Allow prop override
)} />
```

### 2. Responsive Design

Use Tailwind's mobile-first approach:

```tsx
<div className="px-4 md:px-6 lg:px-8">
  <h1 className="text-4xl md:text-5xl lg:text-6xl">Title</h1>
</div>
```

### 3. Color Usage

- **Text**: `text-foreground`, `text-muted-foreground`, `text-primary`
- **Backgrounds**: `bg-background`, `bg-secondary`, `bg-primary`
- **Borders**: `border-border`, `border-primary`
- **Hover states**: `hover:bg-primary/90`, `hover:text-primary`

### 4. Shadows & Effects

- **Shadows**: `shadow-md`, `shadow-lg`, `shadow-xl`
- **Blur**: `backdrop-blur-md`, `backdrop-blur-lg`
- **Opacity**: Use `/` notation: `bg-white/95`, `text-foreground/70`

---

## Navigation & Routing

### Active Section Tracking

The `Navbar` component tracks the active section based on scroll position:

```tsx
const [activeSection, setActiveSection] = useState("home");

// Determine active section
const sections = navItems.map(item => item.href.substring(1));
for (const section of sections) {
  const element = document.getElementById(section);
  if (element) {
    const rect = element.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      setActiveSection(section);
      break;
    }
  }
}
```

### Smooth Scrolling

```tsx
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.substring(1);
  const element = document.getElementById(targetId);
  
  if (element) {
    const offset = 100; // Navbar height + padding
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
```

---

## Common UI Patterns

### 1. Section Layout

```tsx
<section id="section-id" className="section-padding bg-background relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
  
  <div className="container-width relative z-10">
    {/* Section header */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block"
      >
        Section Label
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Section Title
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground leading-relaxed"
      >
        Section description
      </motion.p>
    </div>
    
    {/* Section content */}
  </div>
</section>
```

### 2. Card Component

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-secondary/20 p-8 md:p-10 rounded-3xl border border-border relative overflow-hidden group"
>
  {/* Background icon */}
  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
    <Icon size={120} />
  </div>
  
  <div className="relative z-10">
    {/* Icon badge */}
    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
      <Icon size={28} />
    </div>
    
    <h3 className="text-2xl font-bold mb-4">Card Title</h3>
    <p className="text-muted-foreground leading-relaxed">
      Card description
    </p>
  </div>
</motion.div>
```

### 3. Button Styles

```tsx
{/* Primary button */}
<button className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
  Button Text
  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
</button>

{/* Secondary button */}
<button className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold">
  Button Text
</button>

{/* Icon button */}
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg"
  aria-label="Button description"
>
  <Icon size={24} />
</motion.button>
```

### 4. Grid Layouts

```tsx
{/* 2-column responsive grid */}
<div className="grid md:grid-cols-2 gap-8">
  {/* Items */}
</div>

{/* 3-column responsive grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>

{/* 4-column responsive grid */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {/* Items */}
</div>
```

---

## Path Aliases

TypeScript is configured with path aliases for cleaner imports:

```tsx
// ✅ Use this
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

// ❌ Instead of this
import { cn } from "../../lib/utils";
import Navbar from "../components/Navbar";
```

**Alias mapping:**
- `@/*` → `./src/*`

---

## Scripts & Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Production
npm run build        # Create optimized production build
npm start            # Run production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Run Prettier (if configured)

# Git Hooks
# Husky automatically runs lint-staged on pre-commit
```

---

## Best Practices for Building New UIs

### 1. Component Creation Checklist

- [ ] Determine if component needs `"use client"` directive
- [ ] Define TypeScript interface for props
- [ ] Include `className?: string` prop for flexibility
- [ ] Use `cn()` utility for class merging
- [ ] Add proper ARIA labels and roles
- [ ] Implement responsive design (mobile-first)
- [ ] Add animations with Framer Motion (if appropriate)
- [ ] Test keyboard navigation
- [ ] Verify color contrast for accessibility
- [ ] Optimize performance (debounce, RAF, passive listeners)

### 2. Styling Guidelines

- **Consistency**: Use existing color variables and utilities
- **Responsiveness**: Test on mobile, tablet, and desktop
- **Spacing**: Use consistent spacing scale (4px, 8px, 12px, 16px, 24px, 32px)
- **Typography**: Follow established heading hierarchy
- **Animations**: Keep animations subtle and purposeful (300-600ms duration)

### 3. Animation Guidelines

- **Duration**: 300-600ms for most transitions
- **Easing**: Use `ease-out` for entrances, `ease-in` for exits
- **Stagger**: Delay child animations by 0.1-0.2s
- **Performance**: Use `transform` and `opacity` (GPU-accelerated)
- **Accessibility**: Respect `prefers-reduced-motion`

### 4. Code Organization

- **File naming**: PascalCase for components (`MyComponent.tsx`)
- **Export**: Use default exports for components
- **Imports**: Group by external → internal → relative
- **Comments**: Add comments for complex logic, not obvious code

### 5. Common Pitfalls to Avoid

- ❌ Don't use inline styles (use Tailwind classes)
- ❌ Don't hardcode colors (use CSS variables)
- ❌ Don't forget mobile responsiveness
- ❌ Don't skip accessibility attributes
- ❌ Don't create unnecessary client components
- ❌ Don't ignore TypeScript errors
- ❌ Don't use `any` type (use proper types)

---

## Example: Building a New Section

Here's a complete example of building a new section following project conventions:

```tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewSectionProps {
  className?: string;
}

export default function NewSection({ className }: NewSectionProps) {
  return (
    <section 
      id="new-section" 
      className={cn("section-padding bg-background relative overflow-hidden", className)}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            New Feature
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Section <span className="text-primary">Title</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Section description goes here with clear, concise messaging.
          </motion.p>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/20 p-8 rounded-3xl border border-border relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              {/* Icon badge */}
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Item {item}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Description for item {item} with relevant details.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Usage in `page.tsx`:**

```tsx
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* ... other sections ... */}
      <NewSection />
      {/* ... other sections ... */}
    </div>
  );
}
```

---

## Resources & References

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

### Project-Specific Files
- **Color palette**: `src/app/globals.css` (lines 17-27)
- **Component examples**: `src/components/` directory
- **Layout structure**: `src/app/layout.tsx`
- **Page composition**: `src/app/page.tsx`

---

## Conclusion

This document provides a comprehensive guide for building UIs in the Emdex Labs e-frontend project. When creating new components or sections:

1. **Follow the established patterns** - Study existing components for reference
2. **Maintain consistency** - Use the design system (colors, spacing, typography)
3. **Prioritize accessibility** - Include ARIA labels, keyboard navigation, focus states
4. **Optimize performance** - Use debouncing, RAF, passive listeners
5. **Animate thoughtfully** - Subtle, purposeful animations that respect reduced motion
6. **Write clean code** - TypeScript types, proper imports, meaningful names

For questions or clarifications, refer to the existing components in `src/components/` as living examples of these patterns in action.
