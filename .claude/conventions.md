# Conventions

## Accessibility

a11y is the highest priority on all work.

- All text colors must meet WCAG AA contrast (4.5:1 minimum)
- Never use `text-transform: uppercase` — difficult for dyslexic users
- Never use `opacity` for muted text — use the `text-muted-foreground` utility (shadcn theme token)
- Every `<section>` must have `aria-labelledby` pointing to its heading `id` — use the `Section` component and this is automatic
- Landmark order: `<nav>` → `<main>` → `<footer>`
- `target="_blank"` links must always include `rel="noopener noreferrer"` — the `external` prop on `ButtonLink` handles this automatically
- Body font is a `system-ui` stack (`--font-sans` in `src/styles/global.css`), not a loaded webfont — this lets each visitor's OS/browser font substitution (dyslexia-friendly fonts, larger x-height fonts, etc.) take effect instead of forcing one typeface on everyone. Don't reintroduce a webfont (e.g. via `@fontsource-*` or Google Fonts) without discussing the accessibility tradeoff first.

## Eyebrow pattern

Eyebrow text is a muted label that sits visually above a heading but comes after it in the DOM (so screen readers announce heading → eyebrow, not eyebrow → heading).

- `Header` and `Section` both accept an `eyebrow` prop — use those, not raw markup
- The `Eyebrow` component owns the styles: `order-[-1]`, `font-semibold`, `tracking-wide`, `text-muted-foreground`
- The parent container (`header`, `section`) must be `flex flex-col` for `order-[-1]` to work

## Styling: Tailwind + shadcn tokens

The site was migrated from a hand-rolled CSS-variable design-token system to [shadcn/ui](https://ui.shadcn.com) on Tailwind CSS v4. See `.claude/components.md` for the full component inventory.

- Style with Tailwind utility classes, not scoped `<style>` blocks — reserve `<style>` for cases Tailwind genuinely can't express (e.g. `youtube-video.astro`'s `:global(iframe)` rule for content injected by its own `<script>`)
- Use shadcn's theme tokens instead of hardcoded colors: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-primary`, etc. — defined in `src/styles/global.css`
- Use `rounded-lg` (maps to `--radius`, 0.875rem) instead of a hardcoded border-radius
- The site is full width: `nav`, `main`, and `footer` are edge-to-edge (`nav` also has a `border-b`), each wrapping an inner `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container — no longer a shared CSS variable or the old 85ch measure
- When adding a link color rule, scope it narrowly (e.g. `[&_p_a]:text-primary` on `<main>`, not a bare `[&_a]:text-primary`) — a blanket selector will also repaint shadcn `Button` anchors and break their text/background contrast, since both are equal-specificity Tailwind utility classes and whichever compiles later in the stylesheet wins
- Don't toggle the native `hidden` attribute on elements Tailwind's Preflight resets (`svg`, `img`, `video`, ...) — Preflight's `base`-layer `display` rules beat the browser's native `[hidden]` UA style regardless of specificity, because cascade layers order beats specificity. Toggle the `hidden` *class* instead (see `navigation.astro`'s menu/close icon swap). Plain `<div>`s are unaffected since Preflight doesn't reset their display.
- Preflight also zeroes out default margins on every heading/paragraph (`h1`, `p`, etc. all get `margin: 0`). Any `flex flex-col` text stack (`Header.astro`, `Section.astro`) needs an explicit `gap-*` on the flex container or its children will render jammed together with no vertical rhythm — this is easy to miss because a full-bleed image sitting between two text blocks can visually fake spacing that isn't really there.
- Preflight also strips default heading *font sizes* — `h1`–`h6` all inherit the body's font size unless you set one explicitly. shadcn has no installable "Typography" component (checked the registry — it's not there); its docs just show a reference class scale to copy. This site's headings: `h1` (`Header.astro`) is `text-4xl font-extrabold tracking-tight lg:text-5xl`; `h2` (`Section.astro`) is `text-3xl font-semibold tracking-tight`. Keep both `text-balance` so multi-line headings wrap evenly.
- Tailwind v4's Preflight does **not** set `cursor: pointer` on `<button>` (unlike `<a>`, which gets it from the browser UA stylesheet by default) — every custom `<button>` looks unclickable on hover unless something sets the cursor. Fixed globally in `global.css`'s `@layer base` with `button:not(:disabled) { cursor: pointer; }`, so this covers every button on the site (including generated `ui/*.tsx` triggers) without hand-editing those files. Don't re-add `cursor-pointer` piecemeal on individual buttons — the global rule already covers it.

## Inline links in Astro templates

**Problem:** Astro strips whitespace between a text node and an `<a>` tag when they appear on separate lines, producing "wordlink" instead of "word link".

**Rule:** The opening `<a` must always be on the same line as the preceding text. Attributes can wrap to new lines — only the `<a` position matters.

```astro
<!-- ✓ correct — space preserved -->
<p>I started making videos at <a href="..." target="_blank" rel="noopener noreferrer">eight years old</a>.</p>

<!-- ✗ broken — space stripped -->
<p>
  I started making videos at
  <a href="...">eight years old</a>.
</p>
```

`.prettierrc` is set to `htmlWhitespaceInsensitivity: "strict"` so Prettier will not reformat inline links in a way that drops this space.

## Dark mode

Automatic, OS-preference-driven — there is no manual toggle. Implemented in `src/styles/global.css`:

- `@custom-variant dark (@media (prefers-color-scheme: dark));` makes every Tailwind `dark:` utility (including the ones baked into the generated `src/components/ui/*.tsx` files) key off the OS preference instead of shadcn's default `.dark` class
- The `:root` block holds light-theme color tokens; a `@media (prefers-color-scheme: dark) { :root { ... } }` block overrides them for dark — **not** a `.dark { ... }` class block, since nothing in this site ever adds a `.dark` class to `<html>`

If you regenerate `global.css` via the shadcn CLI, it will rewrite the dark tokens back into a literal `.dark { ... }` class selector — reapply this media-query wrapping, or dark mode silently stops working (tokens stay light while `dark:` utilities still fire off the OS preference, an inconsistency that's easy to miss visually).
