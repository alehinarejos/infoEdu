import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "InfoEdu CV | Buscador de Centros Educativos de la Comunitat Valenciana",
    template: "%s | InfoEdu CV"
  },
  description: "Encuentra y filtra colegios públicos, privados y concertados, institutos y ciclos de Formación Profesional (FP) en Valencia, Alicante y Castellón.",
  keywords: ["colegios valencia", "institutos alicante", "fp castellon", "formación profesional comunitat valenciana", "centros educativos gva", "educación infantil", "bachillerato valencia"],
  authors: [{ name: "InfoEdu CV" }],
  openGraph: {
    title: "InfoEdu CV | El buscador de educación en la Comunitat Valenciana",
    description: "Directorio completo de colegios, institutos y centros FP en Valencia, Alicante y Castellón.",
    siteName: "InfoEdu CV",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: '/icon.ico',
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
