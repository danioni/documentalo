# Documéntalo

Hub central de documentación técnica en español para desarrolladores de LATAM.

## Stack

- [Next.js 16](https://nextjs.org/)
- [Fumadocs](https://fumadocs.vercel.app/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura de contenido

```
content/docs/
├── index.mdx              # Página principal de docs
├── meta.json              # Orden y estructura del sidebar
├── coordinalo/            # Docs de Coordinalo API
│   ├── index.mdx
│   ├── sessions.mdx
│   └── ...
├── guias/                 # Tutoriales
│   ├── multi-tenancy-prisma.mdx
│   └── mercadopago-chile.mdx
└── integraciones/         # Guías de integración
```

## Agregar contenido

1. Crea un archivo `.mdx` en la carpeta correspondiente
2. Agrega el frontmatter:

```mdx
---
title: Mi título
description: Descripción para SEO
---

# Contenido aquí
```

3. Actualiza el `meta.json` de la carpeta para incluirlo en el sidebar

## Deploy

El sitio se despliega en [Vercel](https://vercel.com) automáticamente en cada push a `main`.

Incluye [Vercel Analytics](https://vercel.com/analytics) y [Speed Insights](https://vercel.com/docs/speed-insights).

## Parte del ecosistema

[Grupo Digitalo](https://grupodigitalo.com)
