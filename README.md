# ForecastEdge Website

A ready-to-deploy static website: predictive analytics landing page for the ForecastEdge B2B startup concept.

## What's inside

```
forecastedge-website/
├── index.html      → Main site (hero, methodology, pricing, about, contact, etc.)
├── privacy.html     → Privacy policy page
├── terms.html       → Terms of service page
├── css/
│   └── style.css    → All styling
└── js/
    └── script.js     → Animated forecast chart + mobile menu + contact form
```

## Before you deploy — quick edits to make

1. Open `index.html`, find `[Your name]` in the About section, replace with your real name/bio.
2. Replace `hello@forecastedge.io` (appears in `index.html`, `privacy.html`, `terms.html`) with your real contact email.
3. Replace `[insert date]` in `privacy.html` and `terms.html` with the actual date.

## Deploy to Netlify (free) — two ways

### Option A: Drag-and-drop (fastest, no account needed to preview)
1. Go to **https://app.netlify.com/drop**
2. Drag the whole `forecastedge-website` folder onto the page
3. Netlify instantly gives you a live URL like `random-name-123.netlify.app`
4. Sign up free (optional but recommended) to keep the site permanently and customize the subdomain name — e.g. `forecastedge.netlify.app`

### Option B: Netlify account (recommended for ongoing edits)
1. Go to **https://netlify.com** and sign up free
2. Click **Add new site → Deploy manually**
3. Drag the `forecastedge-website` folder into the upload area
4. Once deployed, go to **Site settings → Change site name** to set a custom subdomain like `forecastedge.netlify.app`

## Connecting a custom domain later

Once you own a domain (e.g. from Namecheap or Porkbun), go to **Site settings → Domain management → Add a domain** in Netlify and follow their DNS instructions. This part is free on Netlify — you only pay for the domain itself.

## Notes

- The contact form currently shows a confirmation message but does not send real emails (no backend). To make it functional for free, connect **Netlify Forms** (just add `netlify` and `data-netlify="true"` attributes to the `<form>` tag in `index.html`) — Netlify handles form submissions automatically once deployed on their platform.
- All legal text (Privacy Policy, Terms) is placeholder content and should be reviewed before real use.
