'use client';

import dynamic from 'next/dynamic';
import { Center } from '@/types';

const DynamicMap = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Cargando mapa...</span>
    </div>
  )
});

export default function MapWrapper({ centers }: { centers: Center[] }) {
  return <DynamicMap centers={centers} />;
}
