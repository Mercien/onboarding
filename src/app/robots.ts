import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio',        // Sanity Studio — private
          '/studio/',
          '/api/',          // API routes — private
        ],
      },
    ],
    sitemap: 'https://brandsdigitals.com.ng/sitemap.xml',
  }
}
