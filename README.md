# Prasad Solar Services — Website

A modern, animated single-page website and lead-generation system for **Prasad Solar Services**, Kakinada, Andhra Pradesh.

Built by **E82 Studios**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

- **React 18** + TypeScript
- **Vite** — Fast build tooling
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Scroll animations
- **Lucide React** — Icons

## 🌐 GitHub Pages Deployment

This project auto-deploys to GitHub Pages via GitHub Actions.

1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to GitHub Pages automatically

### Manual Setup

1. Go to your GitHub repo → Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` — the workflow will run automatically

## 📊 Business Data

All verified business data is in `src/data/business.ts`:
- ✅ **Verified**: Business name, address, rating, review count, established year
- ⚠️ **Mock**: Review texts, project gallery, FAQ answers
- 🔲 **Placeholder**: Phone, WhatsApp, email (replace before production)
