# InfoEdu Comunitat Valenciana

Aplicación web interactiva para buscar, filtrar y localizar **centros educativos y oferta de Formación Profesional (FP)** en la Comunitat Valenciana. Los datos provienen del portal de Dades Obertes de la Generalitat Valenciana.

---

## ✨ Funcionalidades

- **Búsqueda de centros** por nombre, municipio o código
- **Filtros combinados** por provincia (Alicante, Castellón, Valencia), tipo de centro (Público, Privado, Concertado) y nivel educativo (Infantil, Primaria, ESO, Bachillerato, FP)
- **Vista de lista y mapa interactivo** con marcadores georreferenciados (Leaflet + OpenStreetMap)
- **Página de detalle** de cada centro con información de contacto, oferta educativa y mapa centrado
- Diseño **responsive** optimizado para móvil, tablet y escritorio

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|---|---|
| [Next.js](https://nextjs.org) (App Router) | Framework principal |
| TypeScript | Lenguaje |
| Tailwind CSS | Estilos y diseño responsive |
| Leaflet + react-leaflet | Mapas interactivos (OpenStreetMap) |
| lucide-react | Iconografía |
| JSON estático | Datos de centros (procesados desde GVA) |

---

## 🚀 Instalación y uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📁 Estructura del proyecto

```
infoEdu/
├── public/
│   └── data/          # JSONs con datos de centros educativos
├── src/
│   ├── app/           # Páginas y rutas (Next.js App Router)
│   ├── components/    # Componentes reutilizables (filtros, mapa, tarjetas...)
│   └── lib/           # Utilidades y helpers
├── scripts/           # Scripts de procesamiento de datos GVA
└── CLAUDE.md          # Contexto para agentes de IA
```

---

## 📊 Datos

Los datos de centros docentes se obtienen del [portal de Dades Obertes de la GVA](https://dadesobertes.gva.es), se procesan mediante un script Node.js y se almacenan como JSON estático para garantizar el máximo rendimiento y disponibilidad sin dependencias externas en tiempo de ejecución.

---

## 📋 Roadmap

- [x] Estructura base y configuración del proyecto
- [x] Procesamiento y normalización de datos GVA
- [ ] Componentes de búsqueda y filtros
- [ ] Vista de lista de resultados
- [ ] Integración del mapa con clusters
- [ ] Página de detalle de centro
- [ ] Optimización y testing responsive

---

## 📄 Licencia

Este proyecto utiliza datos abiertos de la Generalitat Valenciana bajo licencia [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/).
