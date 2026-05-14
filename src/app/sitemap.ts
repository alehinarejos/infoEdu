import { MetadataRoute } from 'next';
import { getCenters } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Cambia esta URL por tu dominio real cuando lances la web
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://infoeducv.es';
  
  // Obtenemos todos los centros de la GVA
  const centers = await getCenters();

  // Mapeamos cada centro a una ruta del sitemap
  const centerEntries: MetadataRoute.Sitemap = centers.map((center) => ({
    url: `${baseUrl}/centro/${center.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Retornamos la ruta principal (Home) seguida de todas las páginas de los centros
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...centerEntries,
  ];
}
