# English admin panel

Open `/admin`. The interface and its document direction always remain English/LTR. Credentials come from `ADMIN_EMAIL` and `ADMIN_PASSWORD` in server `.env`. Normal website accounts cannot access the administrator API.

## Editing and saving

The toolbar shows the saved revision or unsaved state. `Save changes` persists the complete content/settings payload to SQLite. Pending edits are preserved when moving between admin sections. Reloading discards unsaved edits. Concurrent saving from another admin session returns a conflict instead of silently overwriting it.

| Section | Controls |
|---|---|
| Page content | Page/search filter, text overrides, reset, route visibility; identical responsive copies update together |
| Articles | Add/edit/remove, URL slug, date, author, image, reading time, body HTML, summary, SEO, draft/featured |
| Translations | Persian/Arabic/Turkish translations; search by English source; reset to bundled translation |
| Design system | Component library with interactive previews; Design tokens with search, shared CSS overrides and reset |
| Media library | Select original image, upload replacement, restore original; uploaded path can be used in an article |
| Settings & navigation | Site/footer text, dashboard label/URL, menu labels/URLs, desktop visibility and order |
| Submissions | Contact messages and newsletter subscribers, CSV export |
| Revision history | Restore any retained revision; restoration creates a new revision |

Layout/component structure, complex feature definitions, animations and integrations are edited in the local source code. The panel is a native content manager, not a visual Framer canvas.

## Design system

Open `/admin?section=design-system` for the component library, or `/admin?section=design-system&view=tokens` for the token editor. Explore colors, typography, spacing, radii, button states, form validation states, cards, badges, tabs, accordion and dialog without leaving the admin panel. Edit a token, switch to Component library to inspect its draft appearance, then use the toolbar's Save changes to apply it to the website. The library's color picker is a temporary experiment and does not create a saved override. Reset preview restores the current draft brand color. Token resets restore the original baseline and remain pending until saved.

## Articles and translations

English is the source language. Save an edited article, then translate its title, summary, paragraph/heading text, reading time and SEO copy in `Translations` for all three additional languages. Sources from unsaved article edits also appear in the translation list, so both can be saved together. Keep names and intentional product terms consistent. Unknown/new source strings fall back to English until translated.

Article bodies support simple owned HTML: paragraphs, headings, lists, emphasis, links and blockquotes. Save strips scripts, unsafe attributes and unsafe links. Translating a whole paragraph currently uses plain text; rich emphasis within translated paragraphs is flattened. The article’s structure and lists remain intact. The original contact Privacy Policy link target was the homepage; it is preserved and translated. Replace it with your real policy page when that content is available.

## Media and backups

Uploads support signature-checked PNG, JPEG, WebP and GIF, maximum 10 MB. Originals in `public/assets` are preserved; replacements are stored in `server/data/uploads`. Uploaded files become active after content is saved. Video replacement currently requires editing local source/assets rather than the image uploader.

`Download backup` exports content, translations, token/media overrides and settings. It does not include binary uploads, contact records, accounts or sessions. For a full portable backup, stop the server and copy `server/data` and `.env` separately along with the source/public files. A JSON-import button is not implemented; retained revisions provide in-panel recovery.

SQLite is stored at `server/data/bextudio.sqlite`. Administrator sessions use a hashed session token with an HttpOnly cookie. Contact/newsletter data stays local by default. An optional `CONTACT_WEBHOOK_URL` can forward contact messages if configured. No email campaign service is configured by this migration.
