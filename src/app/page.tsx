import Directory from '@/components/Directory';
import FAQ from '@/components/FAQ';
import { getCenters } from '@/lib/api';
import { Suspense } from 'react';

export const revalidate = 86400; // Revalidate every 24 hours

export default async function Home() {
  const centers = await getCenters();

  // Optimizar el payload enviado al cliente para reducir el tamaño del DOM y el HTML
  const optimizedCenters = centers.map(c => ({
    id: c.id,
    name: c.name,
    type: c.type,
    address: c.address,
    zipCode: c.zipCode,
    municipality: c.municipality,
    province: c.province,
    lat: c.lat,
    lng: c.lng,
    levels: c.levels,
    fpCycles: c.fpCycles?.map(fp => ({
      family: fp.family,
      grade: fp.grade,
      name: fp.name
    }))
  }));

  return (
    <>
      <h1 className="sr-only">Buscador de Centros Educativos y FP de la Comunitat Valenciana | InfoEdu CV</h1>
      <Suspense fallback={<div className="flex items-center justify-center h-[calc(100vh-80px)] font-bold text-gray-500">Cargando directorio...</div>}>
        <Directory initialCenters={optimizedCenters} />
      </Suspense>
      <FAQ />
    </>
  );
}
