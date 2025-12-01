// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // Enable SSR mode
  ssr: true,
  
  // Modules for SEO, state management, and animations
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-aos'
  ],
  
  // Runtime configuration
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://academysaham.com'
    }
  },
  
  // Global CSS
  css: ['~/assets/css/main.css', 'aos/dist/aos.css'],

  // Font optimization
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        }
      ]
    }
  },
  
  // AOS configuration
  aos: {
    duration: 1000,
    offset: 100,
    delay: 200,
    once: false,
    easing: 'ease-in-out'
  },
  
  // Site configuration for SEO modules
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://academysaham.com',
    name: 'Academy Saham'
  },
  
  // Sitemap configuration
  sitemap: {
    gzip: true,
    routes: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        url: '/about',
        changefreq: 'monthly',
        priority: 0.8
      }
    ]
  },
  
  // Robots configuration
  robots: {
    allow: '/'
  }
})