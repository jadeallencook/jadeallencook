# Components

## shadcn/ui

This project uses [shadcn/ui](https://ui.shadcn.com) on Tailwind CSS v4 + React (via `@astrojs/react`). Config lives in `components.json`.

- `src/components/ui/` — generated shadcn primitives (Button, Accordion, Separator, NavigationMenu). **Don't hand-edit these** — re-run `npx shadcn@latest add <component>` to update or add more, then re-apply the dark-mode fix below if `global.css` gets regenerated (see `.claude/conventions.md` → Dark mode).
- `src/components/` (top level) — site-specific `.astro`/`.tsx` compositions, some of which wrap a `ui/` primitive (see `ButtonLink.astro`, `SectionSpacer.astro`, `desktop-nav-menu.tsx` below). This is where page-facing components live; pages should generally import from here, not reach into `ui/` directly.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge), used when merging shadcn variant classes with extra utility classes.
- `Accordion` and `NavigationMenu`-based components need client-side interactivity (open/close, hover-driven dropdowns); `Button` and `Separator` render as static HTML (no JS shipped) since nothing about them is interactive on this site.
- shadcn components are React (`.tsx`). Multiple React components can be composed directly inside an `.astro` template (e.g. `<Accordion client:visible><AccordionItem>...</AccordionItem></Accordion>`) as long as they all belong to the same framework — Astro renders that whole subtree as one island. Don't mix a `client:` directive's children across frameworks.

## Layout shell

`default-layout.astro` wraps every page. It renders `<Navigation />` → `<main><slot /></main>` → `<Footer />`, sets `bg-background`/`text-foreground` from the shadcn theme. Theme tokens themselves live in `src/styles/global.css`, not in the layout. Never put page-specific styles here.

## Components

### `Header.astro`
Page hero. Two-column on `lg:` and up (text left, image card right via `grid grid-cols-1 lg:grid-cols-2`); stacks to a single column (text, then image) below `lg`.

| Prop | Type | Description |
|---|---|---|
| `heading` | `string` | h1 text |
| `eyebrow` | `string` | Label that appears visually above the h1 |
| `image` | `ImageMetadata` (optional) | Image, rendered in a bordered/shadowed card in the right column |
| `imageAlt` | `string` (optional) | Alt text for the image; defaults to `""` (decorative) |
| `imageCaption` | `string` (optional) | Caption text under the photo, inside the card (e.g. `"Google Cloud 2019"` on the homepage) |

`<slot />` accepts body copy and CTAs — rendered in the left column, after the heading/eyebrow.

The left column is `flex flex-col`; DOM order is `h1`, `Eyebrow` (`order-[-1]`, so it renders first), then slot content — so visually: eyebrow → h1 → body copy → CTAs. The image (with its card and caption) lives entirely in the right grid column, not interleaved with the text.

---

### `Section.astro`
Content section. Auto-wires `aria-labelledby` so it can never be forgotten on new pages.

| Prop | Type | Description |
|---|---|---|
| `id` | `string` | Used for both `id` on the `<h2>` and `aria-labelledby` on `<section>` |
| `heading` | `string` | h2 text |
| `eyebrow` | `string` | Label that appears visually above the h2 |
| `image` | `ImageMetadata` (optional) | Image, floated right alongside the body copy |
| `imageAlt` | `string` (optional) | Alt text for the image; defaults to `""` (decorative) |
| `imageWidth` | `number` (optional) | Passed to `astro:assets` `Image`; default `900` |

`<slot />` accepts body copy.

DOM order (and screen-reader reading order): `h2` → `Eyebrow` → image → body copy. The image renders inside the same wrapping `<div>` as the slot content, placed *before* it, and floats right at `sm:` and up (`sm:float-right sm:ml-8 sm:w-[45%]`) — this is a deliberate CSS `float`, chosen specifically so paragraph text wraps tightly around the image and reflows to full width once it scrolls past the image's bottom edge (real magazine-style text wrap). `h2`/`Eyebrow` sit outside that wrapping div, so they always render full width, unaffected by the float.

**Trade-off, decided explicitly by the user:** an earlier version of this component put the image *last* in the DOM (after all body copy) so screen readers announced it last, and used `flex-row` instead of `float` to get it to still render top-aligned with the eyebrow. That approach could not produce real text-wrap: flex keeps two items in fixed-width columns for the section's full height, it can't let text reflow to full width partway down. True wrap-around requires a CSS float, and a float's vertical position is constrained by content that precedes it in the same flow — a float placed *after* the paragraphs it's meant to wrap can't rise above them. So getting the wrap effect required moving the image back to right after `Eyebrow`, ahead of the body copy, changing screen-reader order back to heading → eyebrow → image → paragraphs. If a future request wants the image announced last again, know that giving up real text-wrap is the necessary trade-off — the two are mutually exclusive with CSS alone.

The image renders in a bordered/shadowed card (`rounded-xl border border-border bg-card p-2 shadow-sm`, same visual language as `Header.astro`'s photo card). This site's source photos are all landscape ~4:3; letting one span the full section width (up to ~1200px on this full-width site) made it enormous, which is why it's width-capped at `sm:w-[45%]` instead. `imageWidth` (the `astro:assets` optimization width, not the display width) is `900` to give decent quality at that display size on retina screens without over-fetching.

---

### `Eyebrow.astro`
Muted label that renders visually above its sibling heading using `order-[-1]` on the flex container. Used internally by `Header` and `Section` — pass eyebrow text through those components, not directly.

`<slot />` accepts text (or a link if needed).

---

### `ExperienceAccordion.tsx`
React island wrapping shadcn's `Accordion`/`AccordionItem`/`AccordionTrigger`/`AccordionContent` (from `src/components/ui/accordion`). Holds the "Work Experience" write-ups on the homepage — content is authored directly as JSX inside this file rather than passed as props, since it's long-form prose specific to that one section.

Used as `<ExperienceAccordion client:visible />` — the `client:visible` directive is required (Accordion needs React for open/close state) and deferring hydration until scroll keeps it off the initial JS bundle.

If you need another accordion elsewhere, prefer composing `Accordion`/`AccordionItem`/`AccordionTrigger`/`AccordionContent` directly in the `.astro` page rather than adding props to this component — it's purpose-built for the experience section.

---

### `ButtonLink.astro`
An `<a>` styled as a button, built on shadcn's `buttonVariants()` (from `src/components/ui/button`) applied to a plain anchor — not the `<Button>` component itself, since base-ui's `Button` takes a `render` prop for polymorphism rather than Radix's `asChild`, and a static link needs no interactivity anyway. Use for CTAs, not navigation.

| Prop | Type | Description |
|---|---|---|
| `href` | `string` | Destination URL |
| `external` | `boolean` (optional) | Adds `target="_blank" rel="noopener noreferrer"` |
| `isSecondary` | `boolean` (optional) | Renders the `outline` button variant instead of `default` |

`<slot />` accepts label text.

---

### `SectionSpacer.astro`
Thin wrapper around shadcn's `Separator` (`src/components/ui/separator`) with `my-8 opacity-50` applied. Renders a horizontal divider between page sections. No props, no slot.

---

### `YouTubeVideo.astro`
Click-to-load YouTube facade. Renders the video's thumbnail (`i.ytimg.com`, via `astro:assets` `Image` — domain allowlisted in `astro.config.mjs`) with a play button overlay; the real YouTube iframe is only created client-side on click. This avoids loading YouTube's iframe JS/CSS (a major Lighthouse performance cost) until the user actually wants to watch. Maintains 16:9 aspect ratio (`aspect-video`) and applies `rounded-lg`.

| Prop | Type | Description |
|---|---|---|
| `id` | `string` | YouTube video ID (not a full URL) |
| `title` | `string` | Accessible label — used as the button's `aria-label` and the iframe's `title` once loaded |

No slot — content is the facade/iframe itself.

---

### `video-player.tsx` (`VideoPlayer`)
React island — YouTube-style playlist player used by the homepage's "YouTube Web Development Series" section. A large main player on the left (`lg:col-span-2`) plus a "Video Tutorials" list of thumbnail + title buttons on the right (not scrollable — the list always renders at full height); clicking an item swaps the main player to that video and resets it back to a click-to-play facade (does not autoplay on swap). The active item gets a `border-primary` left accent plus `bg-muted`. Video titles are kept short in the `videos` prop (no "tutorial" suffix) since the section heading already establishes that context.

| Prop | Type | Description |
|---|---|---|
| `videos` | `Array<{ id: string; title: string; views: string; releaseYear: number }>` | First item is selected by default. `views` is a pre-formatted string (e.g. `'9.8K'`) — no live YouTube API call, the numbers were supplied by hand and need manual updates if they go stale |

Used as `<VideoPlayer client:visible videos={[...]} />` — needs real component state (which video is active, whether it's playing), so unlike `YouTubeVideo.astro`'s facade this can't be done with a vanilla `<script>`.

Each sidebar item shows `{views} views · {N years ago}` under the title. The "years ago" text is computed at render time from `releaseYear` (`new Date().getFullYear() - releaseYear`), not stored as a static string — so it stays accurate on its own as time passes instead of needing a yearly copy update.

**Trade-off:** thumbnails render as plain `<img>` tags, not `astro:assets` `Image` — React components can't use Astro's build-time image pipeline. This loses the local optimization/format-conversion `YouTubeVideo.astro` gets from `astro:assets`, but YouTube's `hqdefault.jpg` thumbnails are already reasonably sized and served from a fast CDN, so the trade-off was judged worth it for the interactivity. The click-to-load deferral for the actual iframe (the bigger Lighthouse win — avoids YouTube's iframe JS until the user clicks play) is preserved.

Replaced `VideoGrid.astro` (deleted, was only used here) and the homepage's standalone hero `YouTubeVideo.astro` usage. `YouTubeVideo.astro` itself is still used directly for the three single, non-playlist embeds on the startups page.

---

### `LogoList.astro`
Each logo renders inside its own bordered/shadowed card (`rounded-xl border border-border bg-card p-6 shadow-sm`) in a plain responsive grid (`grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`). Logos use `dark:invert` (intended for black logos on white/transparent backgrounds).

| Prop | Type | Description |
|---|---|---|
| `logos` | `Array<{ name: string; src: ImageMetadata }>` | `name` is the visible label below the logo; `src` is the image import |

Logo `alt` is empty (`""`) because the company name is conveyed by the visible text below each image.

**No hover animation on the cards.** An earlier version added a hover lift + shadow + scale — visually nice on its own, but wrong here: these cards aren't links or buttons, so a lift/shadow affordance falsely implies they're clickable. Don't add hover motion back to purely-informational cards like this one; save interactive-looking hover states for things that are actually interactive.

Previously used a dynamic per-render column count (`--cols`, `--cols-md`, `--cols-sm` custom properties in a scoped `<style>` block) to keep N logos evenly spread across one row. Simplified to a plain static grid when the section was redesigned — a card grid doesn't need perfectly-justified columns the way a bare logo row did, so the extra math wasn't worth keeping.

No slot.

---

### `navigation.astro` + `nav-links.ts` + `desktop-nav-menu.tsx` + `mobile-nav-accordion.tsx`
Full-bleed nav bar (`border-b`, spans the viewport) with an inner `max-w-7xl` container shared with `<main>` and `<footer>`. Contains the name (links to `/`), three dropdown groups, and the two primary CTA `ButtonLink`s.

- **`nav-links.ts`** — the single source of truth for:
  - `navGroups` — the dropdown groups, shared by both the desktop and mobile nav components so the link list is never duplicated. Currently: **Services** (Content Creation for Startups — mirrors the footer's Pages column, minus "Home" since the name link already covers that), **Contact** (phone, email — mirrors the footer's Contact column), **Connect** (the 9 social links — mirrors the footer's Follow column). Add a new nav item by editing this file; both nav components pick it up automatically.
  - `primaryCtas` — the two audience-specific booking CTAs: `primaryCtas.contentShoot` ("Book a Content Shoot," for small businesses booking a content-creation shoot) and `primaryCtas.recruiterCall` ("Book a Recruiter Call," for tech recruiters/companies hiring). Both are Calendly links, both external. `contentShoot` renders as the default (solid) button variant, `recruiterCall` as `isSecondary` (outline) — used together everywhere a CTA pair appears: nav (desktop + mobile), `Header.astro`'s hero, and the footer's top CTA block.
  - `resumeLink` — the "Download My Resume" Google Doc link, no longer part of the primary CTA pair; it now only appears in the footer's Resources column (see below).
  
  These three exports are the shared source for every CTA across the site — editing `nav-links.ts` updates nav, hero, and footer simultaneously; don't hardcode Calendly/resume URLs a second time anywhere.
- **Desktop (`lg:` and up):** `<DesktopNavMenu client:load />` — a shadcn `NavigationMenu` with one `NavigationMenuTrigger`/`NavigationMenuContent` pair per group. Groups with more than 4 items (currently just Connect) render as a 2-column grid, others as a single column.
- **Below `lg`:** the dropdown groups and buttons collapse into a hamburger-triggered panel (`#nav-mobile-panel`), toggled by inline `<script>` (no React needed just to show/hide a panel). Inside that panel, `<MobileNavAccordion client:load />` renders the same `navGroups` data as a shadcn `Accordion` instead of a `NavigationMenu` — a hover-driven popover doesn't translate to touch, so mobile gets a tap-to-expand list instead.
- **Gotcha:** the hamburger↔close icon swap toggles Tailwind's `hidden` *class*, not the native `hidden` *attribute*. Tailwind's Preflight sets `svg { display: block }` in its `base` layer, and CSS cascade layers make that beat the browser's native `[hidden] { display: none }` UA rule regardless of selector specificity — so `svg.hidden = true` silently does nothing visually. The `hidden` attribute is fine on plain `<div>`s (no Preflight override there), just not on `<svg>`/`<img>`/other elements Preflight resets.

### `footer.astro`
Full-bleed section with an inner `max-w-7xl` container matching nav/main, in three stacked parts separated by shadcn `Separator`s:

1. **CTA block** — headline ("Good work starts with a conversation."), a subtext paragraph, and the same `primaryCtas.contentShoot` / `primaryCtas.recruiterCall` `ButtonLink`s used in `Header.astro` and the nav. Mirrors a typical marketing-site footer CTA (see the shadcnblocks.com reference this was modeled on).
2. **Link columns** (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) — **Pages** (Home, Content Creation for Startups, hardcoded), **Resources** (Download My Resume + both `primaryCtas` links, opened in a new tab), **Contact** (phone, email), and **Follow** (the 9 social links) — the latter two pulled from `nav-links.ts`'s `Contact` and `Connect` groups, not duplicated here.
3. **Bottom bar** — just the copyright line.

`nav-links.ts` (see `navigation.astro` above) is the shared source for Contact, Connect, and the CTA links — editing that file updates the nav dropdowns, the nav/hero/footer CTA buttons, and the footer's Resources column simultaneously. Only `Pages` is footer-specific, since the nav's equivalent ("Services") intentionally excludes "Home." The Resources column exists so the resume and both Calendly links stay reachable somewhere even though they're no longer both featured as top-level primary buttons everywhere (previously "Book a Call" + "Download My Resume" filled that role; now the primary pair is audience-specific and resume moved down to a secondary/reference link).
