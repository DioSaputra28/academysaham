/**
 * SEO Composable for Nuxt Application
 * Generates comprehensive meta tags for SEO optimization
 */

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image'
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export interface MetaTag {
  name?: string
  property?: string
  content: string
  hid?: string
}

export interface LinkTag {
  rel: string
  href: string
  hid?: string
}

/**
 * Generate Open Graph meta tags
 */
export function generateOpenGraphTags(config: SEOConfig): MetaTag[] {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl as string
  
  const ogTags: MetaTag[] = [
    {
      property: 'og:title',
      content: config.title,
      hid: 'og:title'
    },
    {
      property: 'og:description',
      content: config.description,
      hid: 'og:description'
    },
    {
      property: 'og:type',
      content: config.type || 'website',
      hid: 'og:type'
    },
    {
      property: 'og:url',
      content: config.url || siteUrl,
      hid: 'og:url'
    }
  ]

  if (config.image) {
    ogTags.push({
      property: 'og:image',
      content: config.image,
      hid: 'og:image'
    })
    ogTags.push({
      property: 'og:image:alt',
      content: config.title,
      hid: 'og:image:alt'
    })
  }

  if (config.author) {
    ogTags.push({
      property: 'og:author',
      content: config.author,
      hid: 'og:author'
    })
  }

  if (config.publishedTime) {
    ogTags.push({
      property: 'article:published_time',
      content: config.publishedTime,
      hid: 'article:published_time'
    })
  }

  if (config.modifiedTime) {
    ogTags.push({
      property: 'article:modified_time',
      content: config.modifiedTime,
      hid: 'article:modified_time'
    })
  }

  return ogTags
}

/**
 * Generate Twitter Card meta tags
 */
export function generateTwitterCardTags(config: SEOConfig): MetaTag[] {
  const twitterTags: MetaTag[] = [
    {
      name: 'twitter:card',
      content: config.twitterCard || 'summary_large_image',
      hid: 'twitter:card'
    },
    {
      name: 'twitter:title',
      content: config.title,
      hid: 'twitter:title'
    },
    {
      name: 'twitter:description',
      content: config.description,
      hid: 'twitter:description'
    }
  ]

  if (config.image) {
    twitterTags.push({
      name: 'twitter:image',
      content: config.image,
      hid: 'twitter:image'
    })
    twitterTags.push({
      name: 'twitter:image:alt',
      content: config.title,
      hid: 'twitter:image:alt'
    })
  }

  return twitterTags
}

/**
 * Generate canonical URL link tag
 */
export function generateCanonicalURL(url?: string): LinkTag[] {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl as string
  const route = useRoute()
  
  const canonicalUrl = url || `${siteUrl}${route.path}`
  
  return [
    {
      rel: 'canonical',
      href: canonicalUrl,
      hid: 'canonical'
    }
  ]
}

/**
 * Main SEO composable
 * Returns useHead configuration with complete meta tags
 */
export function useSEO(config: SEOConfig) {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl as string
  const route = useRoute()
  
  // Generate all meta tags
  const ogTags = generateOpenGraphTags(config)
  const twitterTags = generateTwitterCardTags(config)
  const canonicalLinks = generateCanonicalURL(config.url)
  
  // Base meta tags
  const baseMeta: MetaTag[] = [
    {
      name: 'description',
      content: config.description,
      hid: 'description'
    }
  ]
  
  // Add keywords if provided
  if (config.keywords && config.keywords.length > 0) {
    baseMeta.push({
      name: 'keywords',
      content: config.keywords.join(', '),
      hid: 'keywords'
    })
  }
  
  // Add author if provided
  if (config.author) {
    baseMeta.push({
      name: 'author',
      content: config.author,
      hid: 'author'
    })
  }
  
  // Combine all meta tags
  const allMeta = [
    ...baseMeta,
    ...ogTags,
    ...twitterTags
  ]
  
  // Return useHead configuration
  useHead({
    title: config.title,
    meta: allMeta,
    link: canonicalLinks
  })
}

/**
 * Generate structured data (JSON-LD) for Organization
 */
export function generateOrganizationSchema(
  name: string,
  url: string,
  logo: string,
  sameAs: string[] = []
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    sameAs
  }
}

/**
 * Generate structured data (JSON-LD) for WebSite
 */
export function generateWebSiteSchema(
  name: string,
  url: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description
  }
}
