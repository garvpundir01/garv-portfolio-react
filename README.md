# Garv Pundir — Portfolio

Personal portfolio site. React (Create React App) + React Router + Framer Motion, no UI framework.

## Running it

```bash
npm install
npm start      # dev server on http://localhost:3000
npm test       # smoke tests
npm run build  # production bundle in build/
```

### A note on the Jest config

`react-router-dom@7` ships an `exports` map and a `main` field pointing at a file it doesn't
publish. Webpack resolves it fine; CRA's older Jest resolver doesn't. The `jest.moduleNameMapper`
entries in `package.json` point both `react-router-dom` and `react-router/dom` straight at their
real files. `src/setupTests.js` additionally polyfills `TextEncoder`/`TextDecoder` (react-router 7
needs them) and stubs `matchMedia` + `IntersectionObserver` for jsdom. Remove these once the
project moves off `react-scripts`.

## Editing content

**All copy lives in [`src/content/site.js`](src/content/site.js).** Adding a job, a project, or a
skill means editing that file — no JSX changes needed. The exports map to the page like this:

| Export         | Where it renders                        |
| -------------- | --------------------------------------- |
| `profile`      | Hero, About aside, Contact, Footer      |
| `highlights`   | Stats strip under the hero              |
| `experience`   | Experience timeline                     |
| `projects`     | Projects grid (`featured: true` shows by default; the rest sit behind "Show more") |
| `publications` | Publications card                       |
| `skills`       | Skills grid                             |
| `education`    | Education card                          |
| `story`        | `/my-story` page                        |
| `navSections`  | Navbar + footer links, and scroll-spy   |

Keep the résumé PDF at `public/Garv_Pundir_Resume.pdf` — the download buttons point there.

## Structure

```
src/
  content/site.js      all site copy
  components/          Navbar, Footer, Section (reveal-on-scroll wrapper)
  sections/            Hero, About, Experience, Projects, Skills, Education, Contact
  pages/               Home (composes the sections), MyStory
  index.css            design tokens + reset + light/dark themes
  App.css              component styles
  ThemeContext.js      theme state, persisted only on explicit toggle
```

The site is one scrolling page at `/`, plus `/my-story`. The old per-page routes
(`/about`, `/projects`, …) redirect to their section anchors.

## Deploying

The site uses client-side routing, so the host **must** serve `index.html` for unknown paths or
`/my-story` will 404 on a hard refresh. That's already configured:

- **Netlify / Cloudflare Pages** — `public/_redirects`
- **Vercel** — `vercel.json`
- **GitHub Pages** — no rewrite support; add a `homepage` field to `package.json` and copy
  `build/index.html` to `build/404.html` after building.

Live at **https://garv-portfolio-react.vercel.app/** (Vercel). That origin is hardcoded in
`public/index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`), `public/robots.txt`,
and `public/sitemap.xml` — update all three if the domain ever changes.

## Images and icons

- `src/assets/garv.jpg` is the untouched original. `src/assets/portrait.jpg` is the 520×520
  re-encode the hero actually imports (~30 kB vs ~125 kB).
- `public/favicon.svg` is the source of truth for branding. `favicon.ico`, `logo192.png`,
  `logo512.png`, and `apple-touch-icon.png` were rendered from it — regenerate them if the SVG
  changes.
- `public/og-image.jpg` is a composed 1200×630 social card, not a raw photo crop.

## Accessibility

Audited with axe-core: zero violations on `/` and `/my-story` in both themes. The `--text-faint`
token is pinned to values that clear WCAG AA (4.5:1) for small text against both surface colors —
if you darken it, re-check the contrast. Motion respects `prefers-reduced-motion` via both the CSS
rule in `index.css` and `<MotionConfig reducedMotion="user">` in `App.js` (the CSS alone cannot
stop framer-motion's JS-driven animations).

## Theming

Colors, spacing, type scale, and radii are CSS custom properties in `src/index.css`, defined once
for `[data-theme='dark']` (the default) and once for `[data-theme='light']`. To restyle the site,
change the tokens — not the components. First paint is set by an inline script in
`public/index.html` so there's no theme flash on load.
