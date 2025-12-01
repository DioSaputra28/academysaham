# Academy Saham - Nuxt Application

Platform edukasi trading & investasi saham untuk Gen-Z, dibangun dengan Nuxt 3 dan TypeScript.

## Features

- ✅ Server-Side Rendering (SSR) untuk optimal SEO
- ✅ Static Site Generation (SSG) support
- ✅ Comprehensive SEO optimization (meta tags, Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD) untuk Organization dan WebSite schema
- ✅ Auto-generated sitemap.xml dan robots.txt
- ✅ AOS (Animate On Scroll) animations
- ✅ Pinia state management dengan SSR support
- ✅ Lazy loading untuk images dan iframes
- ✅ TypeScript support
- ✅ Responsive design (mobile, tablet, desktop)

## Setup

### Prerequisites

- Node.js 18.x or higher
- npm, pnpm, yarn, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.example .env
```

4. Update `.env` file dengan konfigurasi yang sesuai:

```env
NUXT_PUBLIC_SITE_URL=http://localhost:3000  # For development
# NUXT_PUBLIC_SITE_URL=https://academysaham.com  # For production
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Testing

Run unit tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Production Deployment

### Option 1: SSR (Server-Side Rendering)

SSR mode renders pages on the server for each request, providing optimal SEO and dynamic content support.

#### Build for SSR

```bash
npm run build
```

This will create a `.output` directory with:
- `.output/server/` - Server bundle
- `.output/public/` - Static assets

#### Preview SSR Build Locally

```bash
npm run preview
```

The production build will be available at [http://localhost:3000](http://localhost:3000)

#### Deploy SSR

**Node.js Server:**
1. Upload the entire `.output` folder to your server
2. Set environment variables:
   ```bash
   export NUXT_PUBLIC_SITE_URL=https://academysaham.com
   ```
3. Run the server:
   ```bash
   node .output/server/index.mjs
   ```

**Vercel/Netlify:**
- These platforms auto-detect Nuxt and deploy with SSR automatically
- Set environment variable `NUXT_PUBLIC_SITE_URL` in platform settings
- Push to Git repository connected to the platform

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY .output .output
ENV NUXT_PUBLIC_SITE_URL=https://academysaham.com
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

### Option 2: SSG (Static Site Generation)

SSG mode pre-renders all pages at build time, creating fully static HTML files that can be served from any static hosting or CDN.

#### Build for SSG

```bash
npm run generate
```

This will create a `.output/public` directory with all static files.

#### Preview SSG Build Locally

```bash
npm run preview
```

Or use any static file server:
```bash
npx serve .output/public
```

#### Deploy SSG

**Netlify:**
1. Build command: `npm run generate`
2. Publish directory: `.output/public`
3. Set environment variable: `NUXT_PUBLIC_SITE_URL=https://academysaham.com`

**Vercel:**
1. Build command: `npm run generate`
2. Output directory: `.output/public`
3. Set environment variable: `NUXT_PUBLIC_SITE_URL=https://academysaham.com`

**GitHub Pages / Static Hosting:**
1. Run `npm run generate`
2. Upload contents of `.output/public` to your hosting
3. Ensure environment variable is set during build

**AWS S3 + CloudFront:**
1. Run `npm run generate`
2. Upload `.output/public` to S3 bucket
3. Configure CloudFront distribution
4. Set proper cache headers

### Option 3: Hybrid Approach (Recommended)

Use route rules to mix SSR and SSG for optimal performance:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },      // SSG for home page
    '/about': { prerender: true }, // SSG for about page
    '/api/**': { ssr: false }      // Client-only for API routes
  }
})
```

Then build with:
```bash
npm run build
```

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NUXT_PUBLIC_SITE_URL` | Full URL of the website (used for SEO, sitemap, canonical URLs) | `https://academysaham.com` | Yes |

## Project Structure

```
academy-saham/
├── app/
│   ├── assets/          # CSS and static assets
│   ├── components/      # Vue components
│   ├── composables/     # Composable functions (useSEO, etc.)
│   ├── layouts/         # Layout components
│   ├── pages/           # File-based routing pages
│   ├── plugins/         # Nuxt plugins (AOS, etc.)
│   └── stores/          # Pinia stores
├── public/              # Static files (favicon, robots.txt, etc.)
├── tests/               # Test files
├── .env.example         # Environment variables template
├── nuxt.config.ts       # Nuxt configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## SEO Features

### Meta Tags
- Unique title and description for each page
- Open Graph tags for social media sharing
- Twitter Card tags
- Canonical URLs

### Structured Data
- Organization schema
- WebSite schema

### Sitemap & Robots
- Auto-generated sitemap.xml at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Configured for optimal search engine crawling

## Performance Optimizations

- ✅ Lazy loading for images and iframes
- ✅ Font optimization with preconnect
- ✅ Code splitting per route
- ✅ CSS optimization
- ✅ AOS library loaded client-side only

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Academy Saham. All rights reserved.

## Support

For questions or issues, please contact the development team.

---

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt features.
