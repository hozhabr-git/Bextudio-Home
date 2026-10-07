# Four-language website

The native website supports English (`en`), Persian (`fa`), Arabic (`ar`) and Turkish (`tr`). English is the source language and default URL. Each other language prefixes the original route. Equivalent paths preserve the original slug and query/hash when using the language selector.

Examples: `/works`, `/fa/works`, `/ar/works`, `/tr/works`. `/en/works` is accepted as an alias; canonical English links use `/works`. Direct entry, client navigation, browser history and opening localized links in another tab preserve the selected language. No browser-language auto-redirect overrides a direct URL.

## Source and content

The header shows only the active language code (`EN`, `FA`, `AR`, `TR`), without a visible border, arrow or icon. A custom compact dropdown shows full language names, secondary codes and a checkmark for the active language. It uses shared surface, color and radius tokens, a subtle shadow and 44 px option targets. The trigger's localized accessible name includes the current language. Arrow keys/Home/End move focus; Enter selects, Escape closes and restores trigger focus, and Tab exits normally. Clicking outside, navigating or resizing also closes the dropdown. Opening it closes the mobile navigation. Logical positioning keeps the panel inside narrow LTR/RTL headers.

- `fa.json`, `ar.json`, `tr.json`: bundled translations, keyed by English source text.
- `sources.json`: bundled editor source list.
- `Locale.tsx`: locale context, dictionary/override resolution, route mapping and language selector.
- `locale.css`: RTL/script support and translated-layout adjustments.
- `server/localization.mjs`: direct-request language/direction, translated metadata, canonical/hreflang and sitemap.

The bundled catalog contains 370 keys per language, including intentional invariant brand names, prices and punctuation. It covers the existing page copy, three CMS articles, navigation, form labels/statuses, pricing features and tool labels. Persian and Arabic receive RTL direction; Turkish and English use LTR. Dates are formatted with the selected locale. USD prices retain their source currency.

`EditableCopy` translates whole extracted paragraphs rather than individual word spans. New React components should use `useLocale().t()` directly. A DOM adapter covers labels/attributes in the preserved static page trees and original agent UI; it tracks original strings and updates new content, placeholders, accessible labels and alt text. Admin and design-system surfaces are excluded. New unknown strings fall back to English and can receive overrides in the admin panel.

Original/user-supplied AI conversations and generated responses are not machine-translated. Brand logo artwork and original media are preserved. Translations are an editable initial editorial pass, not externally certified linguistic review.

## Font and typography

Persian uses locally hosted **Estedad** (variable weight 100–900); Arabic uses **IBM Plex Sans Arabic** (real static weights 100–700, including Text 450). Their WOFF2 files and OFL notices are in `public/fonts`. Sources: [Estedad designer repository](https://github.com/aminabedi68/Estedad), [IBM Plex repository](https://github.com/IBM/plex). `rtl-font-sources.json` records the downloaded URLs and hashes; `font-file-validation.json` records file metadata and representative script coverage. Noto Sans Arabic remains the local fallback and an optional selection. Original local Latin typography is retained for English/Turkish. Tracking is normal for connected Arabic/Persian text; source imagery is not mirrored.

Open **Admin → Design system → Typography** to independently select the Persian and Arabic font, inspect draft heading/body/control/weight specimens, reset each language and Save changes. Available choices are locally bundled fonts. These controls use `--font-family-fa` and `--font-family-ar`, which are also editable in Design tokens. Selection applies across public headings, body copy, forms, tool interfaces, navigation and blog content; translation editor fields and language-menu names use their own language's font. The admin interface stays English/LTR. Component library shows the same draft font samples. Setting an arbitrary family name in Design tokens does not upload or fetch a font; adding another family requires placing licensed files in `public/fonts` and declaring its font faces.

## Direction-aware layout

Public page styles use logical inline padding/margins and `start`/`end` text alignment. Asymmetric Framer spacing follows the document direction, so RTL content keeps its inset on the right. Centered headings remain centered; media artwork is not mirrored. Services cards use 20 px inline spacing on mobile, 28 px at tablet widths and 32 px at desktop widths, with headings and actions aligned to the RTL start edge. The same logical rules cover the homepage, works, agent pages, contact and blog layouts, including article list indentation. Password fields retain LTR entry and correctly reserve space for their visibility button.

When adding styles, prefer `padding-inline-start`, `padding-inline-end`, `margin-inline-*` and `text-align: start/end` over physical left/right rules. Keep physical positioning only when it describes artwork rather than directional content.

## SEO and hosting

The Node server emits localized `<html lang>`/`dir`, title/description, canonical and four language alternatives before JavaScript runs. `/sitemap.xml` lists public localized routes and published articles. Set `SITE_URL` to the final public origin when hosting. Article SEO translations can be edited in admin. Client navigation updates title, description and alternate/canonical links.

Page bodies are client-rendered React, not a full server-rendered content implementation. The static-only Vite preview does not emit the server’s localized HTML metadata or provide API persistence. Host the Node server with persistent storage for the delivered behavior. Future prerendering/SSR can improve body indexing while keeping these dictionaries, routes and CMS data.
