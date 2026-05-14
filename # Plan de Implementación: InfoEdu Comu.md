# Plan de Implementación: InfoEdu Comunitat Valenciana

## 1. Objetivo
Desarrollar una aplicación web interactiva ("InfoEdu Comunitat Valenciana") que permita a los usuarios buscar, filtrar y localizar centros educativos y oferta de Formación Profesional (FP) en la Comunidad Valenciana. La aplicación se basará en la interfaz y funcionalidades de "InfoEdu CyL", utilizando datos abiertos de la Generalitat Valenciana.

## 2. Ubicación del Proyecto
El proyecto se inicializará y desarrollará en el directorio:
`/Users/alehinarejos/Documents/infoEdu`

## 3. Stack Tecnológico
*   **Framework:** Next.js (React) - App Router.
*   **Estilos:** Tailwind CSS (para un diseño responsive y moderno).
*   **Mapas:** Leaflet integrado con `react-leaflet` (gratuito, basado en OpenStreetMap).
*   **Iconos:** `lucide-react` o similar.
*   **Gestión de Datos:** Archivos JSON estáticos procesados a partir del portal de Dades Obertes de la GVA para garantizar el máximo rendimiento y disponibilidad.

## 4. Fases de Implementación

### Fase 1: Inicialización y Estructura Base
1.  Crear el proyecto Next.js en la carpeta de destino (`npx create-next-app@latest`).
2.  Configurar Tailwind CSS y las variables de diseño (colores institucionales adaptados, fuentes).
3.  Establecer la estructura de carpetas (`components`, `app`, `data`, `lib`).
4.  Crear los componentes de layout base (Header, Footer, Sidebar/Navegación principal).

### Fase 2: Obtención y Procesamiento de Datos
1.  Descargar el dataset de "Centros docentes de la Comunitat Valenciana" en formato JSON/CSV desde el portal de la GVA.
2.  Crear un script Node.js (en una carpeta `scripts`) para limpiar, normalizar y transformar los datos raw en un formato JSON optimizado para la app (extrayendo nombre, código, provincia, municipio, coordenadas, tipo, niveles).
3.  Guardar el JSON optimizado en el directorio `public/data` o usarlo directamente en el código base.

### Fase 3: Desarrollo de Componentes UI
1.  **Home Page:** Hero section con buscador principal.
2.  **Buscador y Filtros:** Componentes para filtrar por:
    *   Provincia (Alicante, Castellón, Valencia).
    *   Municipio.
    *   Tipo de centro (Público, Privado, Concertado).
    *   Niveles educativos (Infantil, Primaria, ESO, Bachillerato, FP).
3.  **Tarjetas de Resultados (List View):** Componente para mostrar el resumen de cada centro.
4.  **Vista de Mapa (Map View):** Integración de Leaflet para mostrar marcadores agrupados (clusters) o individuales de los centros filtrados.

### Fase 4: Vistas Principales (Páginas)
1.  **Página de Búsqueda de Centros:** Integración de los filtros, la lista de resultados y el mapa interactivo (toggle entre lista y mapa).
2.  **Página de Detalle del Centro (`/centro/[id]`):** Vista completa de la información de un centro específico (contacto, mapa centrado, oferta educativa).

### Fase 5: Refinamiento y Testing
1.  Revisión de diseño responsive (Móvil, Tablet, Desktop).
2.  Optimización de carga (Lazy loading para el mapa).
3.  Pruebas de los filtros para asegurar que devuelven los resultados correctos.

## 5. Verificación
*   Confirmar que la app se ejecuta sin errores en desarrollo (`npm run dev`).
*   Verificar que los datos mostrados corresponden a la Comunidad Valenciana.
*   Comprobar que el mapa renderiza correctamente los marcadores.
*   Validar el funcionamiento de los filtros combinados.
