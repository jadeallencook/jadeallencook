# Conventions

## Accessibility

a11y is the highest priority on all work.

- All text colors must meet WCAG AA contrast (4.5:1 minimum)
- Never use `text-transform: uppercase` — difficult for dyslexic users
- Never use `opacity` for muted text — use explicit WCAG-safe color values (`--color-muted`)
- Every `<section>` must have `aria-labelledby` pointing to its heading `id` — use the `Section` component and this is automatic
- Landmark order: `<nav>` → `<main>` → `<footer>`
- `target="_blank"` links must always include `rel="noopener noreferrer"` — the `external` prop on `ButtonLink` handles this automatically

## Eyebrow pattern

Eyebrow text is a muted label that sits visually above a heading but comes after it in the DOM (so screen readers announce heading → eyebrow, not eyebrow → heading).

- `Header` and `Section` both accept an `eyebrow` prop — use those, not raw markup
- The `Eyebrow` component owns the styles: `order: -1`, `font-weight: 600`, `letter-spacing`, `color: var(--color-muted)`
- The parent container (`header`, `section`) must be `display: flex; flex-direction: column` for `order: -1` to work

## Design tokens (defined in `Layout.astro`)

| Variable | Value | Used for |
|---|---|---|
| `--content-width` | `60ch` | Max-width of all content columns |
| `--space-block` | `16px` | Vertical padding on nav, footer, body |
| `--color-muted` | `#595959` / `#aaa` dark | Eyebrow text, footer text |

Change a token in one place — it updates everywhere.

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

Implemented via `@media (prefers-color-scheme: dark)` in `Layout.astro`. Background `#111`, text `#eee`, links `#0af`. Override `--color-muted` to `#aaa` in the same media query.
