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

```markdown
2025-08-06: Feature implementation in progress: Add animated effect to 'Calculate Pricing by Country' link in PayPerConversation.tsx. Plan: Use Framer Motion for a modern, accessible hover/tap animation matching the design system. Rationale: Enhance CTA visibility and interactivity, consistent with card animation patterns. Will document Framer Motion best practices if Context7 research is required.

## Context7 Research History

2025-08-06: Bug fix applied to PayPerConversation.tsx. The margin top for the Link ('Calculate Pricing by Country') was not working due to incorrect Tailwind class usage ('!mt-12'). Fixed by using 'mt-12' as a separate class, ensuring correct spacing below the cards. Visual result validated.

- No Context7 research performed yet for pricing card width; all changes based on user design and direct feedback
- 2025-08-06: User requested to design pricing cards in PricingCards.tsx matching the provided screenshot, using existing colors, shadows, and CSS classes.
- 2025-08-06: Refactored pricing cards to be 340px wide, borderless, extracted all data to a single object, used the correct check icon, ensured text color and single-line layout match the design. All errors resolved and code is production-ready.
- 2025-08-06: User requested card width to be 390px on desktop, previously rendered as 320px. Card width now set to 390px at sm breakpoint and above.
- Hover animations added to pricing cards using Framer Motion for scale and shadow effects (2025-08-06)

- 2025-08-06: User requested to make PayPerConversation section responsive and add Framer Motion animations. Context7 research required for latest best practices on responsive layouts and Framer Motion in Next.js/React.
```
