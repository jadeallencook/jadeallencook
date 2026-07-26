# Claude Instructions

## After every prompt

Update this file and any relevant `.claude/` docs with new learnings — components added, conventions discovered, decisions made. Do this without being asked.

---

## Development

```
npm run dev
npm run build
npm run preview
npx astro dev stop | status | logs
```

`astro` is not installed globally — use `npx astro` or the npm scripts above.

---

## Project structure

```
src/
  components/    → see .claude/components.md
  layouts/
    Layout.astro → shell + design tokens
  pages/
    index.astro
    startups.astro
.claude/
  components.md       → component props and usage
  conventions.md      → a11y, CSS, inline link rules
  verbal-branding.md  → voice, tone, copy principles
.prettierrc           → htmlWhitespaceInsensitivity: "strict"
```

---

## Docs to load by task

| Task                          | Read first                                         |
| ----------------------------- | -------------------------------------------------- |
| Adding or editing a component | `.claude/components.md`                            |
| Writing copy or page content  | `.claude/verbal-branding.md`                       |
| Styling, a11y, or layout work | `.claude/conventions.md`                           |
| Building a new page           | `.claude/components.md` + `.claude/conventions.md` |

---

## Astro documentation

- [Routing / pages / middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)
