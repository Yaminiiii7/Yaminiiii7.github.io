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
  tag: "Cloud & DevOps",          // must be one of the tags listed below
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
`"Cloud & DevOps"`, `"Security"`, `"AI/ML"`, `"Full-Stack"`, `"Data Analytics"`

Using a brand-new tag string is fine too — a filter button appears for it on its own.

### Other common edits

| To change | Edit this in `data.js` |
|---|---|
| Job title / summary paragraph | `profile.title`, `profile.summary` |
| The hero numbers (2–4 tiles) | `profile.stats` |
| Add a job or bullet point | `experience` (newest first) |
| Add a certification | `credentials` — `type: "cert"` or `"award"` |
| Add a skill | `skills` → the relevant `group` |
| The "What I actually do" paragraphs and Focus areas | these are in `index.html`, `#about` section |

### Two things still to fill in

1. **LinkedIn URL** — `data.js` line ~30 has a placeholder. Replace it with your real
   profile URL.
2. **Resume PDF** — export your resume as PDF, save it to `assets/docs/` as
   `Yamini_Mandadi_Resume.pdf`, and the Resume button appears automatically.
   The path must match `profile.resume` in `data.js`, and the file must be
   committed to git or it won't deploy to GitHub Pages.
   Don't want the button? Set `resume: null` in `data.js`.

### Change the accent color

In `assets/css/style.css`, edit `--accent` in **both** the `:root` block (dark theme)
and the `[data-theme="light"]` block. Current values are `#3FA9F5` and `#0C6DD1`.

---

## Live site

**https://yaminiiii7.github.io** — hosted free on GitHub Pages from
`github.com/Yaminiiii7/Yaminiiii7.github.io`.

The repo is already initialised, committed, and pointed at that remote.

### First push (one time)

```bash
gh auth login          # pick GitHub.com → HTTPS → browser, sign in as Yaminiiii7
gh repo create Yaminiiii7.github.io --public --source=. --remote=origin --push
```

Then on GitHub: **Settings → Pages → Source: "Deploy from a branch" →
Branch: `main` / `(root)` → Save.** Live in about a minute.

> The repo must be **public** — GitHub Pages on the free plan won't serve a private one.

### Every update after that

```bash
git add .
git commit -m "Add new project"
git push
```

The site rebuilds automatically within a minute or so.

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
