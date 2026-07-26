# Components

## Layout shell

`Layout.astro` wraps every page. It renders `<Navigation />` → `<main><slot /></main>` → `<Footer />` and owns all design tokens (CSS variables). Never put page-specific styles here.

## Components

### `Header.astro`
Page hero. Renders `<header>` with `<h1>` and `<Eyebrow>`.

| Prop | Type | Description |
|---|---|---|
| `heading` | `string` | h1 text |
| `eyebrow` | `string` | Label that appears visually above the h1 |
| `image` | `string` (optional) | Image src, rendered between eyebrow and h1 |
| `imageAlt` | `string` (optional) | Alt text for the image; defaults to `""` (decorative) |

`<slot />` accepts body copy and CTAs.

When `image` is provided, the visual order is: eyebrow → image → h1 → slot. Both eyebrow and image use `order: -1`; DOM position determines which renders first (eyebrow is before image in the DOM).

---

### `Section.astro`
Content section. Auto-wires `aria-labelledby` so it can never be forgotten on new pages.

| Prop | Type | Description |
|---|---|---|
| `id` | `string` | Used for both `id` on the `<h2>` and `aria-labelledby` on `<section>` |
| `heading` | `string` | h2 text |
| `eyebrow` | `string` | Label that appears visually above the h2 |

`<slot />` accepts body copy.

---

### `Eyebrow.astro`
Muted label that renders visually above its sibling heading using `order: -1` on the flex container. Used internally by `Header` and `Section` — pass eyebrow text through those components, not directly.

`<slot />` accepts text (or a link if needed).

---

### `Accordion.astro`
Styled `<details>`/`<summary>` disclosure widget. Keyboard accessible natively.

| Prop | Type | Description |
|---|---|---|
| `summary` | `string` | The visible label / trigger text (rendered as `<h3>`) |

`<slot />` accepts body copy (one or more `<p>` elements).

---

### `ButtonLink.astro`
An `<a>` styled as a button. Use for CTAs, not navigation.

| Prop | Type | Description |
|---|---|---|
| `href` | `string` | Destination URL |
| `external` | `boolean` (optional) | Adds `target="_blank" rel="noopener noreferrer"` |

`<slot />` accepts label text.

---

### `YouTubeVideo.astro`
Click-to-load YouTube facade. Renders the video's thumbnail (`i.ytimg.com`, via `astro:assets` `Image` — domain allowlisted in `astro.config.mjs`) with a play button overlay; the real YouTube iframe is only created client-side on click. This avoids loading YouTube's iframe JS/CSS (a major Lighthouse performance cost) until the user actually wants to watch. Maintains 16:9 aspect ratio and applies the shared `--border-radius` token.

| Prop | Type | Description |
|---|---|---|
| `id` | `string` | YouTube video ID (not a full URL) |
| `title` | `string` | Accessible label — used as the button's `aria-label` and the iframe's `title` once loaded |

No slot — content is the facade/iframe itself.

---

### `VideoGrid.astro`
Two-column responsive grid of YouTube embeds. Uses `YouTubeVideo` internally. Collapses to one column below 600 px.

| Prop | Type | Description |
|---|---|---|
| `videos` | `Array<{ src: string; title: string; href: string }>` | `src` is the embed URL, `href` is the watch URL (opens in new tab as the title link) |

No slot.

---

### `LogoList.astro`
Responsive logo grid. Renders a company logo above its name in an auto-fill grid that stretches the full content width. Logos use `filter: invert(1)` in dark mode (intended for black logos on white/transparent backgrounds).

| Prop | Type | Description |
|---|---|---|
| `logos` | `Array<{ name: string; src: string }>` | `name` is the visible label below the logo; `src` is the image path |

Logo `alt` is empty (`""`) because the company name is conveyed by the visible text below each image.

No slot.

---

### `navigation.astro`
Site nav. Contains the name as a link to `/`. Shares `--content-width` and `--space-block` from the layout tokens.

### `footer.astro`
Three-column footer. Top message (muted intro line), three columns (Social links, Pages, Contact), and copyright line.

- **Social column:** `<ul>` of external links to LinkedIn, GitHub, YouTube, Bluesky, Instagram, Twitter, Tumblr, Facebook, Threads.
- **Pages column:** `<ul>` of internal page links (Home, Startup Content).
- **Contact column:** `<address>` with name, optional street address placeholder, and mailto link.
- Column headings are `<h2>` styled as small muted eyebrow labels (not structural headings).
- Grid collapses to single column below 600px. Shares layout tokens.
