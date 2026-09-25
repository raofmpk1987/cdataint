# C-DATA INTERNATIONAL

A premium international corporate marketing website for C-DATA INTERNATIONAL — a global business support and digital services company. "Your Ultimate Business Support Ecosystem."

## Tech Stack

- **Framework:** TanStack Start (file-based routing via TanStack Router v1)
- **Frontend:** React 19
- **Build:** Vite 7
- **Styling:** Tailwind CSS v4 (CSS-first theming via `@theme` in `src/styles.css`)
- **Icons:** lucide-react
- **Forms:** Netlify Forms (static-skeleton pattern for SSR detection, AJAX submission)
- **Images:** Custom-generated brand photography served through Netlify Image CDN
- **Deployment:** Netlify

## Running Locally

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
```

## Project Structure

- `src/routes/` — pages (home, `/services`, `/services/$serviceId`)
- `src/sections/` — homepage section components, composed in order in `src/routes/index.tsx`
- `src/components/` — shared UI (Header, Footer, Button, Icon, Logo, Reveal, SectionHeading)
- `src/data/` — editable content: services, packages, industries, testimonials, FAQ, categories, case studies
- `public/__forms.html` — static form skeleton required for Netlify Forms build-time detection

## Roadmap

See `PLAN.md` for remaining milestones (legal/placeholder pages, footer link wiring, final QA pass).
