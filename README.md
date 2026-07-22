# Jhondel Batulan - Portfolio

A modern, responsive, and professional portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Live Demo

[View Portfolio](https://jhondelbatulan.github.io/portfolio/)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

## Features

- Modern dark mode design with blue accent
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Active navigation highlighting
- Loading screen animation
- Back to top button
- SEO optimized with Open Graph tags
- Lighthouse score optimized

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- npm

### Installation

```bash
git clone https://github.com/jhondelbatulan/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

1. Push your code to the `main` branch
2. Go to your repository Settings > Pages
3. Set Source to "GitHub Actions"
4. The workflow will automatically build and deploy on every push to `main`

Alternatively, run:

```bash
npm run build
npx gh-pages -d dist
```

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── BackToTop.tsx
│   │   └── LoadingScreen.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useActiveSection.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## License

MIT
