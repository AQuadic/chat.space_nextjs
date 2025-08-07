---
applyTo: "**"
---

# User Memory

## User Preferences

- Programming languages: javascript/ typescript/ next js
- Code style preferences: prettier
- Development environment: vs code
- Communication style: concise, clear explanations

## Project Context

- Current project type: web app
- Tech stack: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- Architecture patterns: component-based, data-driven UI
- Key requirements: pixel-perfect UI, responsive design, animation, custom theming

## Coding Patterns

- Data-driven rendering for pricing cards
- Responsive design using Tailwind breakpoints
- Custom icons for feature lists
- Inline style for custom box-shadow
- Framer Motion for card animation
- Button always at the bottom using flex
- 'use client' directive required for animated client components
- Animate HomeImpact section and cards using Framer Motion entrance and stagger effects

```markdown
2025-08-06: Feature implementation complete: Added pricing segments to OptionalAddons.tsx matching the provided image. Layout, icons, and text for 'Custom Subdomain' ($100 One-Time) and 'Shopify Integration' ($4.99/Month) implemented using Framer Motion, Tailwind, and custom icons. Design validated visually for pixel-perfect match. Responsiveness and hover animation tested and confirmed. Unused imports removed for code cleanliness. All steps checked off in todo list.

2025-08-07: Framer Motion planned for HomeImpact section animation. Will use motion.div for section and cards, staggered entrance, fade/slide effect. 'use client' directive required for Next.js client-side rendering. Will check for Framer Motion dependency and install if missing.

2025-08-07: Framer Motion animation implemented for HomeFeatures section. Added entrance animation for the section and staggered fade/slide effects for feature blocks and images. 'use client' directive included for client-side rendering. Animation tested and confirmed for functionality and performance.

## Context7 Research History

2025-08-07: Framer Motion planned for HomeImpact section animation. Will use motion.div for section and cards, staggered entrance, fade/slide effect. 'use client' directive required for Next.js client-side rendering. Will check for Framer Motion dependency and install if missing.

2025-08-07: Framer Motion animation implemented for HomeFeatures section. Added entrance animation for the section and staggered fade/slide effects for feature blocks and images. 'use client' directive included for client-side rendering. Animation tested and confirmed for functionality and performance.

2025-08-06: Inter font integration completed. Added Inter import to globals.css, updated tailwind.config.js to include fontFamily.inter, and fixed ESM import. font-inter utility now available for use in Tailwind classes.

2025-08-06: Bug fix applied to PayPerConversation.tsx. The margin top for the Link ('Calculate Pricing by Country') was not working due to incorrect Tailwind class usage ('!mt-12'). Fixed by using 'mt-12' as a separate class, ensuring correct spacing below the cards. Visual result validated.

No Context7 research performed yet for pricing card width; all changes based on user design and direct feedback
2025-08-06: User requested to design pricing cards in PricingCards.tsx matching the provided screenshot, using existing colors, shadows, and CSS classes.
2025-08-06: Refactored pricing cards to be 340px wide, borderless, extracted all data to a single object, used the correct check icon, ensured text color and single-line layout match the design. All errors resolved and code is production-ready.
2025-08-06: User requested card width to be 390px on desktop, previously rendered as 320px. Card width now set to 390px at sm breakpoint and above.
Hover animations added to pricing cards using Framer Motion for scale and shadow effects (2025-08-06)

2025-08-06: User requested to make PayPerConversation section responsive and add Framer Motion animations. Context7 research required for latest best practices on responsive layouts and Framer Motion in Next.js/React.
2025-08-06: User requested to add Inter font as font-inter in Tailwind. Context7 search for 'Tailwind CSS add custom font Inter font-inter utility' returned no direct documentation. Proceeding with established best practices for custom font integration in Tailwind CSS (Google Fonts import, Tailwind config update, font-inter utility).

## Current Task (2025-08-07)

- Component: HomeFeatures.tsx
- Goal: Animate HomeFeatures section and feature blocks using Framer Motion
- Requirements: Add 'use client' directive, entrance animation for section, staggered fade/slide for feature blocks and images
- Workflow: Update memory, edit HomeFeatures.tsx, test animation
```
