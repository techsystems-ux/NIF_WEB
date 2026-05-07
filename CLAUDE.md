# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **NIF Global Kondhwa** (nifkondhwa.com), a design institute in Pune offering fashion and interior design courses. The site is entirely vanilla HTML/CSS/JavaScript — no build tools, no package manager, no frameworks.

## No Build System

There is no build step. Edit files and open in a browser directly. Deployment is static file serving via Apache.

## Architecture: JavaScript Partial Injection

Every page loads shared components by injecting HTML from JavaScript files:

- `partials/header.js` — Injects the full `<header>` including nav, dropdown menus, and mobile hamburger toggle
- `partials/footer.js` — Injects the `<footer>` including newsletter form (Google Sheets backend), social links, and WhatsApp widget
- `partials/shared.js` — Provides reusable functions: testimonial carousel, gallery carousel, FAQ accordion

Each page's `<body>` begins with `<div id="header-placeholder"></div>` and `<div id="footer-placeholder"></div>`, which the partials populate. If a page adds its own `<header>` HTML statically, the partial injection will conflict.

## Page Structure

- `index.html` + `script.js` + `style.css` — Homepage (hero carousel, stat counters, course tabs, card carousel)
- `fashiondesign/index.html` and `interiordesign/index.html` — Discipline-level landing pages with separate layouts
- City-specific pages under `fashiondesign/<city>/` and `interiordesign/<city>/` — 8 cities × 2 disciplines. These follow a consistent template.
- `admission/`, `contact/`, `facilities/`, `faculty-members/`, `blogs/` — Standalone section pages

### DO NOT TOUCH — Standalone Landing Pages

`fashiondesign/` and `interiordesign/` (the discipline-level landing pages — `fashiondesign/index.html` and `interiordesign/index.html`) use a **different UI and theme** from the rest of the website. They are intentionally separate and must NOT be modified, restyled, or aligned with the main site's look-and-feel. Leave their HTML, CSS, and assets untouched unless the user explicitly asks for changes to those specific pages. Note: this exclusion applies only to the top-level `index.html` of each — the city-specific subpages under `fashiondesign/<city>/` and `interiordesign/<city>/` follow the main site template and can be edited normally.

## Form Submissions

All forms POST to a Google Apps Script URL (`script.google.com/macros/s/...`) using a hidden `<iframe>` as the target to avoid page reload. The Apps Script writes to Google Sheets. The posted fields include `Email`, `Source`, and `form_type`.

## URL Routing

`.htaccess` handles clean URLs (`/contact` → `/contact/index.html`), HTTPS enforcement, and 301 redirects for old blog slugs. When adding a new page, no routing change is needed if the page lives in its own directory with an `index.html`.

## SEO & Structured Data

Each page has JSON-LD structured data (`EducationalOrganization` schema), Open Graph tags, and a canonical URL. New pages must include these manually — there is no templating engine.

## Analytics

Google Tag Manager (GTM-WQTC2VSD) is loaded in every page's `<head>`. Do not remove or duplicate the GTM snippet.

## Image Conventions

Images are in `images/` in WebP or SVG format. All `<img>` tags should include `loading="lazy"` except above-the-fold hero images, which use `<link rel="preload">` in `<head>`.

## City Page Generation

A Python script (`generate_city_pages.py`) exists at the root for batch-generating city landing pages. Run it with `python generate_city_pages.py` if creating or updating multiple city pages at once.

## Required Skills

The following skills are installed and MUST be invoked via the Skill tool whenever a task matches their scope:

- **`frontend-design`** — Use for UI/styling/visual work: HTML/CSS/JS components, hero sections, carousels, layouts, typography, color, polishing pages.
- **`nodejs-backend-patterns`** — Use for backend work: extending the Google Apps Script form handler, API design, server-side scripts, data-flow logic.
- **`astro`** — Use if migrating to Astro, working with `.astro` files, content collections, islands architecture, or evaluating SSG build options.

Invoke the matching skill BEFORE writing code in that domain — do not rely on general knowledge when a domain skill is available.
