# DanAuto

DanAuto is a responsive automobile website built with React, Vite, Tailwind CSS, Framer Motion, and React Router. The site presents DanAuto as a Lagos-based premium vehicle sourcing, sales, leasing, inspection, and service support business.

## Overview

The current experience focuses on practical vehicle ownership needs:

- premium vehicle sourcing and shortlist guidance
- searchable brand and model catalog
- pre-purchase inspection and document review messaging
- workshop, EV, fleet, delivery, and customer support services
- realistic contact and appointment flow
- legal pages for privacy, terms, and cookies
- responsive layouts across desktop, tablet, and mobile

## Pages

- `Home`  
  Hero section, popular vehicle requests, service previews, practical support highlights, testimonials, and booking CTA.

- `About`  
  DanAuto story, mission, vision, stats, service pillars, and company timeline.

- `Cars`  
  Searchable and filterable catalog with brand groups, fuel filters, vehicle type filters, price bands, and model cards.

- `Car Details`  
  Dedicated vehicle profile pages with estimated pricing, specs, highlights, image gallery, and appointment actions.

- `Services`  
  Sales, sourcing, maintenance, EV and hybrid support, customer care, fleet services, and driver handover support.

- `Gallery`  
  Vehicle, interior, inspection, delivery, and showroom-focused visual content.

- `Contact`  
  Appointment request form with realistic showroom/service contact details and validation.

- `Legal`  
  Privacy, terms, and cookie notice pages.

## Features

- React Router multi-page navigation
- Framer Motion page and section animations
- Responsive desktop, tablet, and mobile layouts
- Brand filters and catalog search
- Fuel type, vehicle type, and price range filtering
- Naira-based estimated pricing
- Reusable UI components and page sections
- Skip link and improved navigation accessibility
- Footer legal links and legal route handling
- Production-ready Vite build setup

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
│   ├── Legal.jsx
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

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

If your terminal has `NODE_ENV=production` set, install dev dependencies with:

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

## Routes

- `/`
- `/about`
- `/services`
- `/gallery`
- `/cars`
- `/cars/:carId`
- `/contact`
- `/privacy`
- `/terms`
- `/cookies`

Legacy `/models` routes redirect to `/cars`.

## Customization Notes

- Main content, brand data, vehicle data, services, testimonials, and gallery items live in `src/utils/data.js`.
- Global styling and responsive behavior live in `src/index.css`.
- Routes and lazy-loaded pages are defined in `src/App.jsx`.
- Shared UI elements live in `src/components`.
- Homepage sections live in `src/sections`.

## Status

This is a front-end-only project. It includes presentation, browsing, filtering, appointment UI, and legal content, but it does not include a backend API, payment flow, authentication, or persistent database storage.
