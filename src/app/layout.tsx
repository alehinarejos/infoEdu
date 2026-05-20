import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1d4ed8" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "InfoEdu CV | Mejores Colegios e Institutos de la Comunitat Valenciana",
    template: "%s | Guía de Centros InfoEdu CV"
  },
  description: "Buscador oficial de colegios públicos, concertados y privados en Valencia, Alicante y Castellón. Encuentra toda la oferta de FP, Institutos y centros educativos de la GVA con mapa interactivo.",
  keywords: [
    "info edu cv",
    "infoeducv",
    "info edu",
    "colegios valencia",
    "institutos alicante",
    "fp castellon",
    "formación profesional comunitat valenciana",
    "centros educativos gva",
    "educación infantil",
    "bachillerato valencia",
    "colegios comunidad valenciana",
    "institutos comunidad valenciana"
  ],
  authors: [{ name: "InfoEdu CV" }],
  metadataBase: new URL('https://info-edu-cv.vercel.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "InfoEdu CV | Encuentra el mejor centro educativo en la Comunitat Valenciana",
    description: "Guía oficial y mapa de todos los colegios, institutos y centros de FP de la GVA. Elige el mejor futuro para tus hijos.",
    siteName: "InfoEdu CV",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'InfoEdu CV | Buscador de Centros Educativos de la Comunitat Valenciana',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfoEdu CV | Guía de Centros Educativos de la Comunitat Valenciana",
    description: "Buscador de colegios e institutos de la GVA. Filtros por provincia, nivel y titularidad con localización exacta.",
    creator: "@infoeducv",
    images: ['/logo.png'],
  },
  icons: {
    icon: '/icon.ico',
    apple: '/logo.svg',
  },
  verification: {
    google: 'eYUDCfEfbBEt0co6I_miaE3oSNsAHNzLz3sDzmCvuWY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col min-h-screen transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
