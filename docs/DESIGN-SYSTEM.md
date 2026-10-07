# Bextudio design system

Open Admin → **Design system** (`/admin?section=design-system`). Its **Component library** tab includes colors, typography, spacing, buttons, fields, cards, badges, tabs, accordion and dialog. The **Design tokens** tab manages shared style overrides. The complete interface remains English/LTR. A standalone reference gallery also remains available at `/design-system`. Both views share the same React component library.

## Tokens

`src/design-system/tokens.json` is the baseline source for 112 tokens. `npm run tokens` generates `tokens.css`; `npm run build` includes this step. Do not edit the generated CSS directly.

| Group | Purpose |
|---|---|
| color | Brand cyan, text, surfaces, borders, accents and semantic states |
| font-family | Inter, Bricolage editorial, monospace, Estedad for Persian, IBM Plex Sans Arabic for Arabic and Noto Sans Arabic fallback |
| font-size | Original type sizes, 12–96 px |
| font-weight | Regular, medium, semibold and bold |
| line-height | Display, heading, body, captions and separate RTL defaults |
| tracking | Display, heading and body tracking |
| space | Source spacing scale, 0–180 px |
| radius | Buttons, inputs, cards, media and pills |
| layout | Content 1216 px, wide 1280 px, reading 768 px, breakpoints 810/1440 px |
| shadow / motion | Card/modal shadows and interaction durations |

Examples: `var(--color-brand)`, `var(--font-size-24)`, `var(--space-32)`, `var(--radius-card)`. Admin token changes are saved as overrides and injected at runtime. Reset removes the override and returns to the baseline. Switch between Design tokens and Component library to inspect draft overrides before saving; drafts remain intact across admin sections. The gallery’s brand-color picker is a temporary preview only. Persist changes with Admin → Design system → Design tokens → Save changes. Token overrides are scoped to the embedded library while previewing, so they do not alter the surrounding admin controls until saved.

The original migrated CSS uses these shared values for connected colors, type sizes/weights and common dimensions. Source-specific gradients, fine layout adjustments, media geometry and original tool inline styles still live in their local components. This preserves the design and allows gradual replacement with higher-level semantic components during a redesign.

## Typography

`typography.json` records ten roles: Display/Hero, Heading/H1–H3, Body/Large, Body/Default, Body/Small, Caption/Default, Nav/Default and Button/Default. It documents desktop/tablet/mobile sizes. `original-source-styles.json` preserves the original Framer text-style and color definitions.

English/Turkish use the local original Latin fonts. Persian uses local Estedad; Arabic uses local IBM Plex Sans Arabic. Both use normal tracking, 1.85 body line height and 1.45 heading line height. Admin → Design system → Typography provides independent font selectors, draft specimens and reset controls; Save changes applies them to public pages. Component library reflects the same draft. Their underlying tokens are `--font-family-fa` and `--font-family-ar`; Noto Sans Arabic is retained as a local fallback. The translated homepage hero uses 32 px on narrow screens to accommodate its longer copy.

## Reusable components

Import from `src/design-system/index.ts`:

```tsx
import {Button, Input, Card, Stack, Container} from './design-system';

<Container>
  <Card>
    <Stack gap={24}>
      <Input label="Name" name="name" required />
      <Button type="submit">Save</Button>
    </Stack>
  </Card>
</Container>
```

| Component | Variants / behavior |
|---|---|
| Button / ButtonLink | primary, secondary, ghost, danger; sm/md/lg; disabled/loading |
| Input / Textarea / Field | label, hint, validation state, direction-aware input |
| Card | default, muted, glass |
| Badge | brand, neutral, success, warning, danger |
| Stack / Container | Shared spacing and content measure |
| Tabs | Arrow-key navigation and selected state |
| Accordion | Native details/summary interaction |
| Dialog | Focus containment, Escape and focus restoration |

New translated components should use `useLocale().t()` and `localizedPath()` directly. Use CSS logical properties (`margin-inline-start`, `text-align:start`) to support RTL. Keep form labels readable, focus states visible and motion respectful of reduced-motion settings.

## Redesign workflow

Start by adjusting baseline tokens or experimenting with admin overrides. Update reusable components next. Then refactor individual page layouts in `src/pages` and `src/styles`; content and translation overrides remain independent of layout. Preserve the existing `EditableCopy` IDs to retain saved page text. Build and inspect desktop, tablet, narrow mobile, Persian and Arabic after layout changes.
