import { MetadataRoute } from 'next';
import { PROJECTS } from '@/app/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shreythakkar.dev';

  // 1. Static Routes
  const routes = [
    '',
    '/contact',
    // Add other static pages if you create them separate from home
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // 2. Dynamic Project Routes (Generated from your data)
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}