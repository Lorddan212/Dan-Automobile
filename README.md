# DanAuto

DanAuto is a modern automobile website built with React, Vite, Tailwind CSS, Framer Motion, and React Router. It presents a luxury, futuristic automotive brand experience with animated page transitions, premium dark styling, a car catalog, services, gallery, and contact flow.

## Overview

This project is designed as a polished front-end experience for an automobile company. The interface focuses on:

- premium dark visuals
- futuristic typography and glassmorphism
- responsive layouts across mobile, tablet, and desktop
- animated sections and transitions
- reusable component structure
- Naira-based vehicle pricing

## Pages

- `Home`  
  Landing experience with hero content, featured models, technology highlights, testimonials, and service previews.

- `About`  
  Brand story, mission and vision, animated hero slides, brand stats, pillars, and company timeline.

- `Services`  
  DanAuto service categories including sales, maintenance, premium services, and customer support.

- `Gallery`  
  Visual showcase of the DanAuto brand experience and vehicle imagery.

- `Cars`  
  Searchable and filterable global automotive catalog with brand browsing, type filters, fuel filters, and price ranges.

- `Car Details`  
  Dedicated details page for DanAuto vehicle models with specs, highlights, and gallery images.

- `Contact`  
  Contact and booking page for customer inquiries and appointments.

## Features

- Responsive multi-page React application
- Animated navigation and page transitions with Framer Motion
- Tailwind-based luxury design system
- Loading screen experience
- Brand and model catalog browsing
- Vehicle filters by type, fuel type, and price range
- DanAuto-specific content and Naira pricing
- Reusable UI sections and components

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React

## Project Structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── CarCard.jsx
│   ├── CatalogModelCard.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Loader.jsx
│   └── Navbar.jsx
├── pages/
│   ├── AboutPage.jsx
│   ├── CarDetails.jsx
│   ├── Cars.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   ├── Home.jsx
│   └── Services.jsx
├── sections/
│   ├── About.jsx
│   ├── Showcase.jsx
│   ├── Technology.jsx
│   └── Testimonials.jsx
├── utils/
│   └── data.js
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

```bash
npm install
```

If your terminal has `NODE_ENV=production` set, install with:

```bash
npm install --include=dev
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

- `npm run dev`  
  Starts the Vite development server.

- `npm run build`  
  Creates a production build.

- `npm run preview`  
  Serves the production build locally.

## Routing

The app uses React Router and includes these routes:

- `/`
- `/about`
- `/services`
- `/gallery`
- `/cars`
- `/cars/:carId`
- `/contact`

Legacy `/models` routes redirect to `/cars`.

## Customization Notes

- Main content and catalog data are stored in `src/utils/data.js`
- Global theme and utility styles live in `src/index.css`
- App routes are defined in `src/App.jsx`
- Shared UI elements are located in `src/components`
- Home page content sections are organized in `src/sections`

## Design Direction

The current UI direction uses:

- a dark luxury palette
- gold and blue accent highlights
- soft layered shadows
- rounded premium panels
- immersive hero layouts
- motion-driven interactions

## Status

This project is production-build ready on the front end and currently focuses on presentation, browsing, and branded experience. It does not include a backend API or persistent database integration.
