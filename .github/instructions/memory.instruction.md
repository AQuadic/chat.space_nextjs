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

## Context7 Research History

- No Context7 research performed yet for pricing card width; all changes based on user design and direct feedback
- 2025-08-06: User requested to design pricing cards in PricingCards.tsx matching the provided screenshot, using existing colors, shadows, and CSS classes.
- 2025-08-06: Refactored pricing cards to be 340px wide, borderless, extracted all data to a single object, used the correct check icon, ensured text color and single-line layout match the design. All errors resolved and code is production-ready.
- 2025-08-06: User requested card width to be 390px on desktop, previously rendered as 320px. Card width now set to 390px at sm breakpoint and above.
- Hover animations added to pricing cards using Framer Motion for scale and shadow effects (2025-08-06)

- 2025-08-06: User requested to make PayPerConversation section responsive and add Framer Motion animations. Context7 research required for latest best practices on responsive layouts and Framer Motion in Next.js/React.
