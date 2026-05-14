import Link from 'next/link';
import Image from 'next/image';
import { Map, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-colors">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-700 via-primary-500 to-primary-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between h-20 items-center" aria-label="Navegación principal">
          <Link href="/" className="flex items-center gap-1 group" aria-label="InfoEdu CV - Inicio">
            <div className="relative w-28 h-28 flex-shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center -ml-4">
              <Image src="/logo.svg" alt="InfoEdu Logo" fill className="object-contain scale-[1.75] translate-y-3" priority />
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white tracking-tight">
              InfoEdu <span className="text-primary-600 dark:text-primary-400">Comunitat Valenciana</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex space-x-4 items-center">
              <Link href="/" className="group flex items-center gap-2 px-4 py-2 rounded-full text-primary-700 dark:text-primary-300 font-bold text-sm uppercase tracking-wide border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm transition-all duration-300">
                <Search className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                Buscar Centros
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
