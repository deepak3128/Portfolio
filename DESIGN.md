# Design Brief

## Direction

Developer-Centric Editorial — Premium modern tech portfolio with dark background, vivid cyan accents, and clean grid composition designed to impress tech recruiters.

## Tone

Brutalist minimalism with electric accents — uncluttered, focused, developer-first aesthetic that rejects generic SaaS defaults.

## Differentiation

Typographic accent lines beneath section headings create a code-inspired visual rhythm; smooth scroll-reveal animations and accent glow effects elevate project cards without distraction.

## Color Palette

| Token      | OKLCH             | Role                           |
| ---------- | ----------------- | ------------------------------ |
| background | 0.14 0.015 260    | Dark charcoal app base         |
| foreground | 0.92 0.008 260    | High-contrast text             |
| card       | 0.18 0.018 260    | Elevated surface (projects)    |
| primary    | 0.72 0.2 200      | Cyan interactive accents       |
| accent     | 0.75 0.22 200     | Electric cyan highlights       |
| muted      | 0.22 0.02 260     | Subtle backgrounds, dividers   |

## Typography

- Display: Space Grotesk — headlines, hero name, section titles (geometric, modern, developer-forward)
- Body: DM Sans — paragraphs, skill descriptions, metadata (clean, readable, professional)
- Mono: JetBrains Mono — tech stack badges, code hints, metadata labels
- Scale: hero `text-6xl md:text-8xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold`, label `text-xs font-mono tracking-widest`, body `text-base`

## Elevation & Depth

Flat base with minimal shadow hierarchy. Card elevation via `shadow-card-hover` on hover; accent glow on CTAs via `shadow-accent-glow`. Borders define zones, not shadows.

## Structural Zones

| Zone      | Background              | Border          | Notes                                              |
| --------- | ----------------------- | --------------- | -------------------------------------------------- |
| Header    | card bg with border-b   | accent-muted    | Fixed, smooth scroll behavior                      |
| Hero      | background with accent  | none            | Full viewport, gradient accent underline          |
| Content   | alternating bg/muted/bg | subtle borders  | Card-based grid, 2-col on md+                     |
| Projects  | card bg, hover lift     | subtle, accent  | Individual cards with tech badge overlay          |
| Footer    | muted bg with border-t  | subtle border   | Compact contact info, centered, link accents      |

## Spacing & Rhythm

Generous vertical rhythm: 48px section gaps on mobile, 64px on desktop. 24px padding within cards. Micro-spacing (8px) between text elements. Alternating content backgrounds create visual cadence.

## Component Patterns

- Buttons: rounded-md, bg-accent with hover lift and accent-glow shadow, text-accent-foreground, smooth transition
- Cards: rounded-sm, bg-card, subtle border, hover:shadow-card-hover, accent-glow text on headings
- Badges: rounded-sm, bg-primary/10, text-primary, font-mono, text-xs

## Motion

- Entrance: Fade-in (0.5s ease-out) for hero, staggered slide-up (0.4s cubic-bezier bounce) for cards on scroll
- Hover: Card lift + shadow-card-hover (smooth transition), CTA accent-glow pulse (2s)
- Decorative: Subtle pulse-accent on accent-colored elements

## Constraints

- No gradients on backgrounds (flat surfaces only; gradients for text underlines and accents only)
- No generic blue (#3B82F6 or default Tailwind) — cyan accent only (hue ~200)
- No shadows on text; text-shadow reserved for accent-glow utility only
- Border-radius: 6px max on cards, 4px on buttons, 0 on content blocks (sharp, code-like)

## Signature Detail

Cyan gradient underline beneath section headings (::after pseudo-element) creates a code-inspired visual anchor; combined with high-contrast type hierarchy and minimal shadow use, it grounds the portfolio in developer culture without becoming clichéd or over-animated.

