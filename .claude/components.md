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
| `image` | `ImageMetadata` (optional) | Image, rendered between eyebrow and heading |
| `imageAlt` | `string` (optional) | Alt text for the image; defaults to `""` (decorative) |

`<slot />` accepts body copy.

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

### `VideoGrid.astro`
Two-column responsive grid of YouTube embeds. Uses `YouTubeVideo` internally. Collapses to one column below 600px (`max-sm:grid-cols-1`).

| Prop | Type | Description |
|---|---|---|
| `videos` | `Array<{ id: string; title: string }>` | Passed straight through to `YouTubeVideo` |

No slot.

---

### `LogoList.astro`
Responsive logo grid. Renders a company logo above its name in a grid that stretches the full content width. Logos use `dark:invert` (intended for black logos on white/transparent backgrounds).

| Prop | Type | Description |
|---|---|---|
| `logos` | `Array<{ name: string; src: ImageMetadata }>` | `name` is the visible label below the logo; `src` is the image import |

Logo `alt` is empty (`""`) because the company name is conveyed by the visible text below each image.

Column counts are computed from `logos.length` and passed as CSS custom properties (`--cols`, `--cols-md`, `--cols-sm`) to a small scoped `<style>` block — this is one of the few components that keeps a `<style>` block instead of pure Tailwind utilities, since the grid math is dynamic per render and can't be expressed as static utility classes.

No slot.

---

### `navigation.astro` + `nav-links.ts` + `desktop-nav-menu.tsx` + `mobile-nav-accordion.tsx`
Full-bleed nav bar (`border-b`, spans the viewport) with an inner `max-w-7xl` container shared with `<main>` and `<footer>`. Contains the name (links to `/`), three dropdown groups, and `Book a Call` / `Download My Resume` `ButtonLink`s (mirroring the footer's Links column hrefs).

- **`nav-links.ts`** — the single source of truth for the dropdown groups (`navGroups`), shared by both the desktop and mobile nav components so the link list is never duplicated. Currently: **Services** (Content Creation for Startups — mirrors the footer's Pages column, minus "Home" since the name link already covers that), **Contact** (phone, email — mirrors the footer's Contact column), **Connect** (the 9 social links — mirrors the footer's Social column). Add a new nav item by editing this file; both nav components pick it up automatically.
- **Desktop (`lg:` and up):** `<DesktopNavMenu client:load />` — a shadcn `NavigationMenu` with one `NavigationMenuTrigger`/`NavigationMenuContent` pair per group. Groups with more than 4 items (currently just Connect) render as a 2-column grid, others as a single column.
- **Below `lg`:** the dropdown groups and buttons collapse into a hamburger-triggered panel (`#nav-mobile-panel`), toggled by inline `<script>` (no React needed just to show/hide a panel). Inside that panel, `<MobileNavAccordion client:load />` renders the same `navGroups` data as a shadcn `Accordion` instead of a `NavigationMenu` — a hover-driven popover doesn't translate to touch, so mobile gets a tap-to-expand list instead.
- **Gotcha:** the hamburger↔close icon swap toggles Tailwind's `hidden` *class*, not the native `hidden` *attribute*. Tailwind's Preflight sets `svg { display: block }` in its `base` layer, and CSS cascade layers make that beat the browser's native `[hidden] { display: none }` UA rule regardless of selector specificity — so `svg.hidden = true` silently does nothing visually. The `hidden` attribute is fine on plain `<div>`s (no Preflight override there), just not on `<svg>`/`<img>`/other elements Preflight resets.

### `footer.astro`
Full-bleed section with an inner `max-w-7xl` container matching nav/main. Four-column footer (`grid-cols-1 sm:grid-cols-3 lg:grid-cols-4`). Top message (muted intro line), four columns (Social, Links, Pages, Contact), and copyright line.

- **Social column:** `<ul>` of external links to LinkedIn, GitHub, YouTube, Bluesky, Instagram, Twitter, Tumblr, Facebook, Threads.
- **Links column:** `<ul>` of external links (Book a Call, Download My Resume).
- **Pages column:** `<ul>` of internal page links (Home, Content Creation for Startups).
- **Contact column:** phone and mailto links, plus an `<address>` with the city.
- Column headings are `<h2>` styled as small muted eyebrow labels (not structural headings).
- Grid collapses to a single column below the `sm` breakpoint. Shares `max-w-[85ch]` with `<main>`.
