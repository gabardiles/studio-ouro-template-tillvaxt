# Studio Ouro – Next.js Template

A **GitHub template repository** for starting new client projects. Clone this repo via **Use this template** to create a fresh codebase for each client.

---

## Using this template

1. **Create a new repository from this template**
   - On GitHub: **Use this template** → **Create a new repository**
   - Name the repo for the client (e.g. `acme-website`).

2. **Clone and install**
   ```bash
   git clone https://github.com/YOUR_ORG/your-new-repo.git
   cd your-new-repo
   npm install
   ```

3. **Update project identity**
   - In `package.json`: set `name` to the client/project name.
   - In `src/app/layout.tsx`: update `metadata` (title, description) for the client.
   - Replace this README with client-specific docs if needed.

4. **Run locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
portal-template-tillvaxt/
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   └── app/                # Next.js App Router
│       ├── layout.tsx      # Root layout: fonts, metadata, global shell
│       ├── page.tsx        # Home page (/)
│       └── globals.css     # Global styles and CSS variables
├── next.config.ts          # Next.js config
├── tailwind (via postcss)  # Styling (see globals.css and Tailwind docs)
└── tsconfig.json           # TypeScript paths: @/* → src/*
```

- **New routes**: Add folders under `src/app/` (e.g. `src/app/about/page.tsx` → `/about`).
- **Shared UI**: Add components under `src/components/` and import with `@/components/...`.
- **Global styles**: Edit `src/app/globals.css` and use Tailwind classes in components.

---

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start dev server (local) |
| `npm run build` | Production build      |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint            |

---

## Tech stack

- **Next.js** (App Router) – React framework with file-based routing
- **TypeScript** – Typed JavaScript
- **Tailwind CSS** – Utility-first styling (v4, via PostCSS)
- **ESLint** – Linting (Next.js config)

---

## Notes for new client projects

- Keep dependencies minimal; add libraries only when needed.
- Use the existing `@/*` path alias for imports from `src/`.
- Root layout and `globals.css` define the global look; customize there first for branding.
- **Scraped / external data**: Map into `client.config.ts`. Contact and map come from `contact` (phone, email, address, hours, `mapUrl`) and `seo.geo` (lat, lng, city, region, country). If `contact.mapUrl` is empty, the map embed is derived from `seo.geo`, so scraped geo is enough to show the map.
