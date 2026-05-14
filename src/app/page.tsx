import Directory from '@/components/Directory';
import { getCenters } from '@/lib/api';
import { Suspense } from 'react';

export const revalidate = 86400; // Revalidate every 24 hours

export default async function Home() {
  const centers = await getCenters();

  return (
    <Suspense fallback={<div className="flex items-center justify-center h-[calc(100vh-80px)] font-bold text-gray-500">Cargando directorio...</div>}>
      <Directory initialCenters={centers} />
    </Suspense>
  );
}
