# Validation report

Checked on 4 October 2026 using Node 26.8.1, TypeScript compilation, Vite production build, native Node integration tests and browser UI inspection.

## Automated checks

`npm run build` passes, generating 110 tokens and production assets. `npm test` passes all three integration suites:

1. Contact/newsletter persistence, local account sessions and provider-access restrictions.
2. Administrator isolation, editable content/token saving, HTML/media validation, concurrent revision conflict and revision restoration.
3. Four-language direct URLs, localized HTML metadata/canonical/hreflang, localized not-found routes, saved translations, invalid translation rejection, restoration and sitemap.

Tests use isolated temporary databases. Admin UI mutation tests use a separate disposable localhost server/database; the main site's content remains on its original revision.

## Browser checks

All 22 original resolved routes were rendered in four languages at 320 px and 1440 px: 176 route/viewport checks. No unintended document horizontal overflow or completed broken image was detected. This is a geometry/image check, not a claim of automated pixel-perfect visual equivalence. Representative homepage, services, contact, pricing, store, article and tool layouts were visually inspected.

- Selector changes preserve the equivalent route and switch language/direction; localized internal links retain their prefix.
- Persian/Arabic local font loads; Turkish dotted/dotless characters render in original Latin font.
- Long translated mobile hero was corrected to avoid original fixed English text-width constraints.
- CMS article titles, summaries, body/list text, dates and reading time render in the selected language.
- English admin UI remains LTR. Translation edit/save is visible publicly in the disposable instance; revision restoration works.
- Contact UI produces a truthful saved-message status. Newsletter/API persistence is covered by integration tests.
- Mobile menu, native carousel movement, hero media/sound control, pricing categories, gallery tabs and dialog Escape were exercised.
- All five migrated AI UI routes render. Brand/profile selection, input and access gate were checked. Paid generation and external dashboard behavior are outside the verified local results.

`browser-checks.json` records the multilingual route geometry/image observations. Screenshots in this folder show the final native site and English admin.

## Admin design-system integration

The production build passes after embedding the gallery in Admin → Design system. Browser inspection confirmed 110 editable tokens, case-insensitive filtering and its empty state, both internal views, English/LTR document state and one main landmark/H1. In the separate disposable instance, draft brand and card-radius changes appeared in the library while the document's public tokens remained unchanged. The dialog opened by keyboard, Escape closed it and focus returned to its trigger; arrow keys selected the next pattern tab. Both library and token views fit a 320 px viewport without document overflow, with desktop inspection at 1440 px. No browser warning/error logs were recorded. No test overrides were saved to the main site. `admin-design-system.jpg` shows the final embedded section on the main local instance.

## Minimal language selector

On 5 October 2026, the minimal header selector and its custom dropdown were rebuilt and visually inspected. All four selections preserved `/services`, updated the displayed code and set the expected LTR/RTL direction. Each language's open dropdown fit within the 320 px viewport without document overflow. Arrow navigation, Home, Enter selection, Escape focus restoration, Tab exit and outside-click dismissal were exercised. Opening the language dropdown closed the mobile navigation. `language-dropdown-modern.jpg` shows the final custom dropdown; `language-selector-minimal.jpg` shows the compact closed trigger.

## RTL spacing and layout

On 5 October 2026, asymmetric public-page padding/margins and text alignment were converted to logical properties. The production build passes. All five services cards were checked in each of the four languages at 320, 809, 810, 1439 and 1440 px (20 route/viewport combinations). Text and action insets follow the start edge: 20 px on mobile, 28 px on tablet and 32 px on desktop. Persian and Arabic cards were visually inspected; the desktop screenshot is `rtl-services-padding.jpg`.

Eight related routes (home, works, image-generator, avatar, contact, blog, managed article and authentication) were also checked at 320 and 1440 px in English, Persian and Arabic (48 combinations). No document horizontal overflow or completed broken image was observed. These are geometry checks, supplemented by representative visual inspection, rather than full pixel-equivalence assertions. `rtl-layout-checks.json` records these observations. No CMS content or admin settings were changed.

## Separate Persian and Arabic fonts

On 5 October 2026, Estedad and IBM Plex Sans Arabic were applied through separate shared locale tokens (112 tokens total). The production build and three integration tests pass, including independently saved font overrides and revision restoration. Font-file inspection confirmed Estedad's 100–900 weight axis, IBM's actual static weights and coverage of representative Persian letters/ZWNJ/numerals and Arabic letters/marks/numerals. Source URLs, licenses and file hashes are preserved.

All 22 public routes were checked in Persian and Arabic at 320 and 1440 px (88 combinations): the expected font stack was used on visible text and controls, font readiness checks passed and no document horizontal overflow was detected. Four representative routes were also checked in English and Turkish at both widths (16 combinations), preserving Latin text families and LTR layout. Representative Persian works and Arabic services layouts were visually inspected. `locale-font-checks.json` records the route observations; computed font stacks and readiness alone are not per-glyph rendered-font telemetry.

The English admin Typography view was inspected at 320 and 1440 px without document overflow. In the isolated test database, changing the Persian font updated its draft specimen, saving changed the public Persian site, and Reset restored Estedad. The component library displayed both language specimens. An unavailable first-choice font with the local Noto fallback was rendered without overflow, then removed from the test draft. No test font overrides were saved to the main database. `admin-language-fonts.jpg` shows the completed controls.

## Works title alignment

On 5 October 2026, the Works page's inline physical text alignment was changed to logical start/end, and its text direction now follows the active locale instead of auto-detecting from the first Latin brand name. Project titles isolate Latin runs with semantic `bdi` elements while keeping the surrounding Persian/Arabic sentence RTL. Saved title overrides still pass through the same translation resolver.

All six visible project titles were checked in all four languages at 320, 809, 810, 1439 and 1440 px (20 combinations). They use start alignment, the expected locale direction and LTR Latin isolates in Persian/Arabic; no document horizontal overflow was found. Persian desktop and Arabic mobile compositions were visually inspected. The production build passes. `works-alignment-checks.json` records the observations; `works-rtl-alignment.jpg` shows the corrected Persian desktop card.

## Practical limits

Translations are an editable initial pass and can receive further brand/editorial review. Original media is large and has not been aggressively compressed. Page bodies remain client-rendered; metadata is injected by the Node server. There has been no public deployment, cloud database setup or paid provider-generation validation.
