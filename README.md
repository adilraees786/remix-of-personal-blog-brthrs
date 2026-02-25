# Nexus — Personal Blog

A modern, accessible personal blog built with React. Features a magazine-style homepage with featured articles, editor’s picks, trending posts, and a masonry layout, plus category pages, search, and dark/light theme.

## Features

- **Homepage**: Featured article, Editor’s Pick, Trending block, Masonry block, and full blog grid
- **Categories**: All Posts, Business, Technology, Podcast
- **Blog posts**: Individual post pages with related posts and table of contents
- **Search**: Full-site search
- **Pages**: About, Contact, Terms, Privacy, Sitemap
- **Theme**: Light/dark mode (system-aware)
- **Accessibility**: Skip link, reading progress, semantic HTML, ARIA where needed

## Tech Stack

- **Vite** — Build tool and dev server
- **React 18** — UI
- **TypeScript** — Typing
- **React Router** — Client-side routing
- **TanStack Query** — Data fetching/caching
- **Tailwind CSS** — Styling
- **shadcn/ui** — UI components (Radix primitives)
- **next-themes** — Theme switching
- **Lucide React** — Icons

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node) or [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing Node versions

## Getting Started

```sh
# Clone the repository
git clone https://github.com/YOUR_USERNAME/remix-of-personal-blog-brthrs.git
cd remix-of-personal-blog-brthrs

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server (Vite)        |
| `npm run build`| Production build               |
| `npm run build:dev` | Development-mode build   |
| `npm run preview`  | Preview production build   |
| `npm run lint`     | Run ESLint                 |

## Project Structure

```
src/
├── components/     # Reusable UI (Header, Footer, BlogCard, etc.)
├── components/ui/  # shadcn/ui primitives
├── pages/          # Route pages (Index, BlogDetail, About, etc.)
├── hooks/          # Custom hooks
├── lib/            # Utilities
├── styles/         # Global/print CSS
├── App.tsx         # App shell, routing, providers
└── main.tsx        # Entry point
```

## Deploy

Build the app:

```sh
npm run build
```

Serve the `dist/` output with any static host (Vercel, Netlify, GitHub Pages, etc.). Configure the host to support client-side routing (e.g. redirect all routes to `index.html` for SPA fallback).
