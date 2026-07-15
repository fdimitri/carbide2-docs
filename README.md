# carbide2-docs

Documentation site for the CARB/IDE2 stack, built with Astro + Starlight.

## Local development

```bash
cd ~/repos/carbide2-docs
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/content/docs/` — documentation pages (MDX)
- `src/content.config.ts` — docs content collection config
- `astro.config.mjs` — Starlight site and sidebar config
- `src/styles/custom.css` — theme tokens + Starlight variable mapping

## Top-level sections

- Get Started
- Architecture
- API Reference
- Operations
- Development
- Standards
- Design
- Release Notes
