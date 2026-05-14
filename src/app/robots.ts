import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Cambia esta URL por tu dominio real cuando lances la web
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://info-edu-cv.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
