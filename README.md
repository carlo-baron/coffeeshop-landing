# Café — Coffee Shop Landing Page Template

A modern, responsive single-page landing site for coffee shops, cafés, and restaurants. Built with Next.js and Material UI, it ships as a fully customizable template that you can brand in minutes by editing **one config file**. Ideal for developers who want a polished, deploy-ready café site without starting from scratch — or for freelancers building sites for hospitality clients.

## Features

- **Single-file customization** — edit `config/siteConfig.ts` and every page section updates: hero headline, menu items, story, location, hours, social links, and SEO metadata
- **Material UI theming** — centralized theme in `app/theme.tsx` with light/dark mode, customizable palette, typography, and spacing
- **Smooth scroll-driven animations** — story section reveals value cards as you scroll, menu items have hover effects, back-to-top FAB
- **Mobile-responsive** — hamburger nav, snap-scroll menu cards, fluid layouts from phone to desktop
- **SEO essentials** — Open Graph tags, Twitter cards, semantic heading hierarchy, descriptive alt text
- **Accessibility-conscious** — proper ARIA labels, semantic HTML5 landmarks, keyboard-navigable nav

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [Material UI v7](https://mui.com/material-ui/) |
| Styling | Tailwind CSS v4 + Emotion (MUI's CSS-in-JS) |
| Animation | [Motion](https://motion.dev/) (formerly Framer Motion) |
| Font | Roboto (via `@fontsource`) |
| Language | TypeScript |

## Quick Start

This is a **zip download** product — no git clone required.

```bash
# 1. Unzip the download
unzip cafe-landing.zip
cd cafe-landing

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:3000
```

## Customization Guide

### Step 1 — Edit the config file

Open **`config/siteConfig.ts`**. This is the **only file you need to touch** to change every piece of visible content on the site:

| Section | What you'll change |
|---|---|
| `seo` | Browser title, meta description, site URL, OG image path |
| `navigation` | Nav bar link labels and anchor targets |
| `hero` | Brand name, headline, subtitle, CTA text, background image |
| `featuredMenu` | Section title, menu item names/prices/descriptions/images |
| `story` | Section title, founding story text, three value cards |
| `location` | Address, phone, email, opening hours |
| `footer` | Brand name, description, quick links, copyright |
| `socialLinks` | Facebook, Instagram, X URLs |

Save the file and your dev server will hot-reload with the changes.

### Step 2 — Replace the images

Drop your own images into the `public/` folder, keeping the same filenames, **or** update the paths in `config/siteConfig.ts` to match your filenames:

| File | Used for | Recommended size |
|---|---|---|
| `public/cafebg.jpg` | Hero background | 1920×1080 px |
| `public/latte.jpg` | Menu card #1 | 800×800 px (1:1) |
| `public/croissant.jpg` | Menu card #2 | 800×800 px (1:1) |
| `public/cookie.jpg` | Menu card #3 | 800×800 px (1:1) |
| `public/og-image.png` | Social preview card | 1200×630 px |
| `app/favicon.ico` | Browser tab icon | 32×32 px (ICO format) |

### Step 3 — Customize the theme (optional)

Open **`app/theme.tsx`** to change:
- **Brand colors** — `palette.primary`, `palette.secondary`, `palette.warning`
- **Light/dark mode** — toggle the default in the `useState(true)` line
- **Typography** — font family, heading weights, body sizes
- **Border radius** — `shape.borderRadius` for cards and buttons

Comments in the file explain every knob. See the [MUI theming docs](https://mui.com/material-ui/customization/theming/) for advanced options.

### Step 4 — Verify SEO metadata

The `<title>`, meta description, and Open Graph tags in `app/layout.tsx` all pull from `seo` in the config. Make sure `seo.siteUrl` points to your real deployment URL — otherwise Open Graph images won't resolve when someone shares your link.

## Deployment

### Option A — Vercel CLI (recommended, 2 minutes)

```bash
npm i -g vercel        # install Vercel CLI (one time)
vercel                 # follow the prompts to deploy
```

### Option B — Push to your own GitHub repo, then import into Vercel

```bash
# Create a new repo on GitHub (do NOT fork this template's repo),
# then push as your own:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

Then go to [vercel.com/new](https://vercel.com/new) and import your repo. Vercel auto-detects Next.js — no config needed.

## Project Structure

```
cafe-landing/
├── config/
│   └── siteConfig.ts          # ★ The only file a buyer needs to edit
├── app/
│   ├── layout.tsx             # Root layout + SEO metadata
│   ├── page.tsx               # Home page (section composition)
│   ├── theme.tsx              # ★ MUI theme (colors, fonts, spacing)
│   └── globals.css            # Tailwind imports + scrollbar utility
├── components/
│   ├── Hero.tsx               # Full-screen hero with nav + background
│   ├── FeaturedMenu.tsx       # Horizontally-scrolling menu cards
│   ├── Story.tsx              # Scroll-driven animated value cards
│   ├── Location.tsx           # Contact info + opening hours cards
│   └── Footer.tsx             # Links, social icons, copyright
├── public/
│   ├── cafebg.jpg             # Hero background image
│   ├── latte.jpg              # Menu item images
│   ├── croissant.jpg
│   ├── cookie.jpg
│   ├── og-image.jpg           # Social preview image (replace with yours)
│   └── favicon.ico            # Browser tab icon (replace with yours)
└── README.md
```

## License

This template is sold as a digital product. See [LICENSE.md](./LICENSE.md) for the full license terms.

---

🤖 Built with [Next.js](https://nextjs.org/) and [Material UI](https://mui.com/)
