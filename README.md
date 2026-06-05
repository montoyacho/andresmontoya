# MiLanding — Landing personal de Andrés Montoya

Repositorio con la plantilla personalizada de una landing hecha con Next.js, TypeScript y TailwindCSS.

## Qué contiene

- Componentes reutilizables (`components/`) — header, footer, hero, etc.
- Rutas con App Router (`app/`) y páginas como `/contacto`.
- Estilos con TailwindCSS en `app/css/style.css`.

## Requisitos

- Node.js 18+ (se recomienda LTS)
- pnpm o npm

## Instalación

Clona el repositorio y instala dependencias:

```bash
git clone <TU_REPO_URL>
cd milanding
pnpm install   # o npm install
```

## Desarrollo local

Arranca el servidor de desarrollo:

```bash
pnpm dev
# o
npm run dev
```

Abre http://localhost:3000

## Scripts útiles

- `dev` — servidor de desarrollo
- `build` — construye la app para producción
- `start` — inicia la app en modo producción
- `lint` — (si está configurado)

Ejemplo:

```bash
pnpm build
pnpm start
```

## Despliegue

Recomendado: Vercel (soporta Next.js app-router sin configuración extra).

1. Conecta el repositorio desde https://vercel.com
2. Vercel detecta Next.js y despliega automáticamente en cada push.

Alternativa (GitHub Pages):

- Next.js con `app/` no siempre es 100% compatible con `next export`. Si quieres alojar estático en GitHub Pages tendrás que generar una versión estática y comprobar rutas.
- Para proyectos Next completos, usa Vercel o Netlify (recomendado).

## Estructura relevante

- `app/` — rutas y layouts principales
- `components/` — UI y secciones reutilizables
- `public/` — imágenes, fuentes y assets
- `app/css/style.css` — estilos globales adicionales

## Notas adicionales

- El footer está oculto en la ruta `/contacto` y la página de contacto contiene enlaces directos (email/WhatsApp) en vez de un formulario, pensado para despliegue en GitHub.
- Si quieres que el formulario vuelva (con integración), puedo añadir soporte para Formspree, Netlify Forms o una API propia.

## Cómo contribuir / push al repo

```bash
git add .
git commit -m "Actualización"
git push origin main
```

## Contacto

Andrés Montoya — klaskatm@gmail.com
