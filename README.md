# jacktrnr-website

Personal website for Jackson Turner — Quantum Research Engineer at Harmoniqs.

Static site, no build step. Hosted on GitHub Pages at [jacktrnr.com](https://jacktrnr.com).

It can also be deployed as a Cloudflare Worker with static assets. The Worker adds
HTTP Basic Authentication to `/stanford`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The page |
| `styles.css` | All styling |
| `resume.pdf` | CV (compiled from `resume.tex`) |
| `resume.tex` | CV source (LaTeX) |
| `assets/` | Images |
| `CNAME` | Custom domain for GitHub Pages |

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

To preview through the Cloudflare Worker:

```bash
npm install
npm run dev
```

## Cloudflare deployment

Cloudflare's build settings should use the repository root, `npm run build` as
the build command, and `npm run deploy` as the deploy command.

## Updating the resume

```bash
pdflatex resume.tex
```

Commit the regenerated `resume.pdf`.
