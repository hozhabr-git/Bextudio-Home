# Framer migration record

The rebuild used the authorized Bextudio Unframer MCP project structure/styles/CMS/code, published Bextudio markup/assets and editor previews for unpublished layouts. The original Framer project was inspected without changing or publishing its content.

## Delivered scope

The source had 20 page definitions, including a CMS detail template and three drafts. The independent project contains 22 corresponding resolved routes, plus `/admin` and `/design-system`. Three original CMS articles are preserved as editable structured content. All 155 referenced original images, videos, SVGs and fonts were downloaded locally (approximately 418 MB total); `asset-manifest.json` records public source URLs and local paths. The additional RTL font is separate from that original asset count.

The site runs from local React/TypeScript and CSS, with native components for navigation, responsive roots, video, carousel, forms, authentication, pricing, store, CMS and management. The package has no Framer runtime dependency and requires no ongoing MCP connection. Original source media dominates package size; deployment can add media optimization without changing the source assets.

## Intentional differences and source limits

- The source document was fa-IR/RTL while its visible copy was English. The rebuilt default English layout uses LTR; actual Persian/Arabic versions use RTL.
- Framer runtime effects became native video playback, scrolling carousels and logo motion. Existing resting layouts/styles/media were preserved; every animation’s timing is not asserted to match the Framer runtime.
- The original CMS detail shell contained placeholder article/author content. Active native article pages use the actual three CMS records. The original exported page files remain in source as references.
- Agent Store draft icons are native approximations; the draft’s agent listings and structure are retained. Pricing uses migrated source component data/prices/features.
- `/form` was blank in both inspected editor preview widths. It remains blank. `/test` is retained as the source test/reference page.
- Authentication is an independent local account system, with scrypt password hashing and SQLite sessions. Original external OAuth/social login infrastructure was not part of the Framer project. No invented legal consent terms were added.
- The original contact privacy link pointed to the homepage. Its target is preserved; no new legal policy was invented.
- The source links to existing `app.bextudio.com` / `platform.bextudio.com` applications. Those separate application backends were not supplied in the Framer source and are not recreated by this website migration.
- Five supplied AI UIs (image, video, campaign, storyteller, digital twin) were migrated. Credentials and provider requests moved to the local server. Real provider generation requires configured services and was not exercised with paid API calls.
- Avatar, Detail Design, Secure Chat and BexLogix were presentation pages in the source; no undisclosed backend implementation is assumed.
- Draft prices and source claims are retained as supplied; the migration does not validate business claims or implement checkout/payment processing.

## Local persistence and portability

Native contact/newsletter submissions and website accounts are stored in SQLite. Admin persists overrides, translations, articles, uploaded images and revision history locally. The original baseline stays in source. One clearly identified local QA contact submission may be present; admin/content/translation test mutations used a separate disposable database and do not alter the delivered content revision.

The delivered server binds to `127.0.0.1`. Public hosting, provider credentials, final policy content, domain changes and paid-service operation have not been configured by this task.
