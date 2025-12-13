import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shrey Thakkar | Product Engineer',
    short_name: 'Shreythakkar.dev',
    description: 'Portfolio of Shrey Thakkar - Product Engineer & Full Stack Developer.',
    start_url: '/',
    display: 'standalone', // Feels like a native app (no browser bar)
    background_color: '#050505',
    theme_color: '#050505',
    icons: [
      {
        src: '/logo.png', // Ensure you have a logo.png in public folder
        sizes: 'any',
        type: 'image/x-icon',
      },
      // If you have a larger icon png (512x512) in public folder:
      // {
      //   src: '/icon-512.png',
      //   sizes: '512x512',
      //   type: 'image/png',
      // },
    ],
  };
}