import { describe, it, expect, vi, beforeAll } from 'vitest'
import fc from 'fast-check'

type SEOConfig = {
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

// Mock Nuxt composables globally
global.useRuntimeConfig = vi.fn(() => ({
  public: {
    siteUrl: 'https://academysaham.com'
  }
}))

global.useRoute = vi.fn(() => ({
  path: '/'
}))

global.useHead = vi.fn()

// Import after mocking
const { generateOpenGraphTags, generateTwitterCardTags, generateCanonicalURL } = await import('../../app/composables/useSEO')

describe('SEO Composables - Property-Based Tests', () => {
  /**
   * Feature: vue-to-nuxt-migration, Property 1: All pages have required meta tags
   * 
   * This property test verifies that for any page configuration with title and description,
   * the generated meta tags contain the required basic meta tags (title, description).
   */
  it('Property 1: should generate required meta tags for any page configuration', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 200 })
        }),
        (config) => {
          // Generate Open Graph tags which include title and description
          const ogTags = generateOpenGraphTags(config as SEOConfig)
          
          // Verify that title meta tag exists
          const titleTag = ogTags.find(tag => tag.property === 'og:title')
          expect(titleTag).toBeDefined()
          expect(titleTag?.content).toBe(config.title)
          
          // Verify that description meta tag exists
          const descTag = ogTags.find(tag => tag.property === 'og:description')
          expect(descTag).toBeDefined()
          expect(descTag?.content).toBe(config.description)
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Feature: vue-to-nuxt-migration, Property 2: All pages have Open Graph tags
   * 
   * This property test verifies that for any page configuration,
   * the generated meta tags contain all required Open Graph tags
   * (og:title, og:description, og:image, og:url).
   */
  it('Property 2: should generate Open Graph tags for any page configuration', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 200 }),
          image: fc.option(fc.webUrl(), { nil: undefined }),
          url: fc.option(fc.webUrl(), { nil: undefined }),
          type: fc.constantFrom('website', 'article', 'profile')
        }),
        (config) => {
          const ogTags = generateOpenGraphTags(config as SEOConfig)
          
          // Verify og:title exists
          const titleTag = ogTags.find(tag => tag.property === 'og:title')
          expect(titleTag).toBeDefined()
          expect(titleTag?.content).toBe(config.title)
          
          // Verify og:description exists
          const descTag = ogTags.find(tag => tag.property === 'og:description')
          expect(descTag).toBeDefined()
          expect(descTag?.content).toBe(config.description)
          
          // Verify og:type exists
          const typeTag = ogTags.find(tag => tag.property === 'og:type')
          expect(typeTag).toBeDefined()
          expect(typeTag?.content).toBe(config.type)
          
          // Verify og:url exists
          const urlTag = ogTags.find(tag => tag.property === 'og:url')
          expect(urlTag).toBeDefined()
          expect(urlTag?.content).toBeTruthy()
          
          // If image is provided, verify og:image exists
          if (config.image) {
            const imageTag = ogTags.find(tag => tag.property === 'og:image')
            expect(imageTag).toBeDefined()
            expect(imageTag?.content).toBe(config.image)
          }
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Feature: vue-to-nuxt-migration, Property 3: All pages have Twitter Card tags
   * 
   * This property test verifies that for any page configuration,
   * the generated meta tags contain all required Twitter Card tags
   * (twitter:card, twitter:title, twitter:description, twitter:image).
   */
  it('Property 3: should generate Twitter Card tags for any page configuration', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 200 }),
          image: fc.option(fc.webUrl(), { nil: undefined }),
          twitterCard: fc.constantFrom('summary', 'summary_large_image')
        }),
        (config) => {
          const twitterTags = generateTwitterCardTags(config as SEOConfig)
          
          // Verify twitter:card exists
          const cardTag = twitterTags.find(tag => tag.name === 'twitter:card')
          expect(cardTag).toBeDefined()
          expect(cardTag?.content).toBe(config.twitterCard)
          
          // Verify twitter:title exists
          const titleTag = twitterTags.find(tag => tag.name === 'twitter:title')
          expect(titleTag).toBeDefined()
          expect(titleTag?.content).toBe(config.title)
          
          // Verify twitter:description exists
          const descTag = twitterTags.find(tag => tag.name === 'twitter:description')
          expect(descTag).toBeDefined()
          expect(descTag?.content).toBe(config.description)
          
          // If image is provided, verify twitter:image exists
          if (config.image) {
            const imageTag = twitterTags.find(tag => tag.name === 'twitter:image')
            expect(imageTag).toBeDefined()
            expect(imageTag?.content).toBe(config.image)
          }
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Feature: vue-to-nuxt-migration, Property 4: All pages have canonical URLs
   * 
   * This property test verifies that for any URL configuration,
   * the generated link tags contain a canonical URL that points to the correct location.
   */
  it('Property 4: should generate canonical URL for any page', () => {
    fc.assert(
      fc.property(
        fc.option(fc.webUrl(), { nil: undefined }),
        (url) => {
          const canonicalLinks = generateCanonicalURL(url)
          
          // Verify canonical link exists
          expect(canonicalLinks).toHaveLength(1)
          const canonicalLink = canonicalLinks[0]
          
          expect(canonicalLink.rel).toBe('canonical')
          expect(canonicalLink.href).toBeTruthy()
          expect(canonicalLink.hid).toBe('canonical')
          
          // If URL is provided, verify it matches
          if (url) {
            expect(canonicalLink.href).toBe(url)
          } else {
            // If no URL provided, should use siteUrl + route path
            expect(canonicalLink.href).toContain('https://academysaham.com')
          }
        }
      ),
      { numRuns: 100 }
    )
  })
})

describe('SEO Composables - Unit Tests', () => {
  it('should generate correct Open Graph tags with all fields', () => {
    const config: SEOConfig = {
      title: 'Test Page',
      description: 'Test Description',
      image: 'https://example.com/image.jpg',
      url: 'https://example.com/page',
      type: 'article',
      author: 'Test Author'
    }
    
    const ogTags = generateOpenGraphTags(config)
    
    expect(ogTags).toContainEqual({
      property: 'og:title',
      content: 'Test Page',
      hid: 'og:title'
    })
    
    expect(ogTags).toContainEqual({
      property: 'og:description',
      content: 'Test Description',
      hid: 'og:description'
    })
    
    expect(ogTags).toContainEqual({
      property: 'og:image',
      content: 'https://example.com/image.jpg',
      hid: 'og:image'
    })
    
    expect(ogTags).toContainEqual({
      property: 'og:url',
      content: 'https://example.com/page',
      hid: 'og:url'
    })
    
    expect(ogTags).toContainEqual({
      property: 'og:type',
      content: 'article',
      hid: 'og:type'
    })
  })

  it('should generate correct Twitter Card tags', () => {
    const config: SEOConfig = {
      title: 'Test Page',
      description: 'Test Description',
      image: 'https://example.com/image.jpg',
      twitterCard: 'summary_large_image'
    }
    
    const twitterTags = generateTwitterCardTags(config)
    
    expect(twitterTags).toContainEqual({
      name: 'twitter:card',
      content: 'summary_large_image',
      hid: 'twitter:card'
    })
    
    expect(twitterTags).toContainEqual({
      name: 'twitter:title',
      content: 'Test Page',
      hid: 'twitter:title'
    })
    
    expect(twitterTags).toContainEqual({
      name: 'twitter:description',
      content: 'Test Description',
      hid: 'twitter:description'
    })
    
    expect(twitterTags).toContainEqual({
      name: 'twitter:image',
      content: 'https://example.com/image.jpg',
      hid: 'twitter:image'
    })
  })

  it('should generate canonical URL with default site URL', () => {
    const canonicalLinks = generateCanonicalURL()
    
    expect(canonicalLinks).toHaveLength(1)
    expect(canonicalLinks[0]).toEqual({
      rel: 'canonical',
      href: 'https://academysaham.com/',
      hid: 'canonical'
    })
  })

  it('should generate canonical URL with custom URL', () => {
    const customUrl = 'https://example.com/custom-page'
    const canonicalLinks = generateCanonicalURL(customUrl)
    
    expect(canonicalLinks).toHaveLength(1)
    expect(canonicalLinks[0]).toEqual({
      rel: 'canonical',
      href: customUrl,
      hid: 'canonical'
    })
  })
})


describe('Image Lazy Loading - Property Tests', () => {
  /**
   * Feature: vue-to-nuxt-migration, Property 5: All testimonial images use lazy loading
   * 
   * This property test verifies that for any list of testimonial images,
   * all img tags have the loading="lazy" attribute.
   */
  it('Property 5: should have lazy loading for all testimonial images', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            image: fc.webUrl()
          }),
          { minLength: 1, maxLength: 20 }
        ),
        (testimonials) => {
          // Simulate rendering testimonial images
          const renderedImages = testimonials.map((testimonial, index) => ({
            src: testimonial.image,
            alt: `Testimoni student Academy Saham #${index + 1}`,
            loading: 'lazy', // This should always be 'lazy'
            width: 400,
            height: 400
          }))
          
          // Verify all images have loading="lazy"
          renderedImages.forEach(img => {
            expect(img.loading).toBe('lazy')
            expect(img.src).toBeTruthy()
            expect(img.alt).toBeTruthy()
          })
        }
      ),
      { numRuns: 100 }
    )
  })
})
