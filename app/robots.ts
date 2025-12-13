import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'], // 🔒 Protect your Admin route
    },
    sitemap: 'https://shreythakkar.dev/sitemap.xml',
  };
}