# Yamini Mandadi — Portfolio

A static portfolio site. No build step, no dependencies, no `node_modules`.

```
portfolio/
├─ index.html              structure (rarely needs editing)
├─ README.md               this file
├─ .nojekyll               tells GitHub Pages to serve files as-is
└─ assets/
   ├─ css/style.css        all styling
   └─ js/
      ├─ data.js       ←   ALL YOUR CONTENT. This is the file you edit.
      └─ main.js           renders data.js into the page
```

---

## Preview it locally

Double-click `index.html`. That's it — it opens in your browser and works offline.

---

## How to update your content

Everything lives in **`assets/js/data.js`**. Open it in any editor. Each section is
labelled with a comment banner.

### Add a new project

Find the `projects: [` array and paste a new block. Copy an existing one and change the
values — the trailing comma after `}` matters:

```js
{
  title: "My New Project",
  tag: "Cloud & DevOps",          // must be one of the four tags below
  featured: true,                 // optional — pins it to the top
  blurb: `Two or three sentences on what it does and why it exists.`,
  highlights: [
    "One notable technical decision",
    "One measurable outcome",
  ],
  stack: ["Terraform", "AWS", "Python"],
  repo: "https://github.com/Yaminiiii7/your-repo",
},
```

Valid `tag` values (these generate the filter buttons automatically):
`"Cloud & DevOps"`, `"Security"`, `"AI/ML"`, `"Full-Stack"`

Using a brand-new tag string is fine too — a filter button appears for it on its own.

### Other common edits

| To change | Edit this in `data.js` |
|---|---|
| Job title / summary paragraph | `profile.title`, `profile.summary` |
| The four hero numbers | `profile.stats` |
| Add a job or bullet point | `experience` (newest first) |
| Add a certification | `credentials` — `type: "cert"` or `"award"` |
| Add a skill | `skills` → the relevant `group` |
| The three "What I actually do" paragraphs | these are in `index.html`, `#about` section |

### Two things still to fill in

1. **LinkedIn URL** — `data.js` line ~30 has a placeholder. Replace it with your real
   profile URL.
2. **Resume PDF** — export your resume as PDF, save it to `assets/` as
   `Yamini_Mandadi_Resume.pdf`, and the Resume button appears automatically.
   Don't want the button? Set `resume: null` in `data.js`.

### Change the accent color

In `assets/css/style.css`, edit `--accent` in **both** the `:root` block (dark theme)
and the `[data-theme="light"]` block. Current values are `#3FA9F5` and `#0C6DD1`.

---

## Deploy free on GitHub Pages

```bash
cd portfolio
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/Yaminiiii7/Yaminiiii7.github.io.git
git push -u origin main
```

Naming the repo **`Yaminiiii7.github.io`** gets you the clean URL
`https://yaminiiii7.github.io`. Then on GitHub: **Settings → Pages → Source: Deploy from
a branch → Branch: `main` / `(root)` → Save.** Live in about a minute.

Any future update is just:

```bash
git add .
git commit -m "Add new project"
git push
```

### Alternatives (also free)

- **Netlify** — drag the `portfolio` folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Instant, no git required.
- **Vercel** — import the GitHub repo, framework preset "Other", no build command.
- **Cloudflare Pages** — connect the repo, leave build settings empty.

---

## What's built in

- Dark/light theme toggle, remembered in `localStorage`, defaults to your OS setting
- Sticky nav with scroll-spy and a reading-progress bar
- Project filtering by category with live counts
- Fade-in-on-scroll animations, disabled automatically under `prefers-reduced-motion`
- Responsive down to 320px with a mobile menu
- Print stylesheet — `Ctrl+P` produces a clean paper version
- Accessible: skip link, focus rings, ARIA states, semantic landmarks
- All content HTML-escaped, so apostrophes and `&` in `data.js` can't break the page
