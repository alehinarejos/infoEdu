import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'InfoEdu Comunitat Valenciana',
    short_name: 'InfoEdu CV',
    description: 'Buscador de centros educativos y FP de la Comunitat Valenciana',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1d4ed8',
    icons: [
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable'
      },
    ],
  };
}
