# 2R2L OFWBP Motorcycle Group Website

A minimalist, black-and-white motorcycle group landing page built with React, Vite, and Tailwind CSS. The layout is designed to showcase a riding community, Marilaque route culture, meetup location, gallery, and contact/social presence in a clean cinematic format.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Framer Motion
- Lucide React

## Local Setup

1. Install dependencies:
   npm install
2. Start the dev server:
   npm run dev
3. Build for production:
   npm run build
4. Preview the production build:
   npm run preview

## Project Structure

- src/App.jsx — main page layout and sections
- src/data/siteData.js — group data, gallery items, socials, contact info, route stops
- src/index.css — global styling and responsive layout
- public/images — local placeholders and future asset replacements

## Replace Images and Content

### Group logo
Put your final logo file in public/images and update the image path in src/App.jsx if needed.

### Hero and section photography
Replace the placeholder SVG files in public/images with your real photos:
- hero-placeholder.svg
- venue-placeholder.svg
- marilaque-map-placeholder.svg

### Gallery items
Update the array in src/data/siteData.js to change categories, titles, and image paths.

### Social links
Update the social links in src/data/siteData.js.

### Contact details
Update the contact info in src/data/siteData.js.

### Marilaque route
Replace the placeholder map and update the stop information in src/data/siteData.js.

## Deployment (GitHub + Vercel)

1. Push the project to a GitHub repository.
2. In Vercel, import the repository.
3. Use the default Vite settings.
4. Deploy the project.

Vercel will automatically detect the Vite app and build it using the existing configuration.

## Notes

This is a static prototype website and currently uses local placeholder assets so the design can continue without real media. Once you provide the final assets, replace the placeholders and update the data files to fit the exact group details.
