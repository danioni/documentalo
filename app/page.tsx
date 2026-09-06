import Link from 'next/link';
import type { Metadata } from 'next';

const siteDescription =
  'Cómo se integra Coordinalo por REST y MCP, en qué estado está el estándar propuesto Servicialo y qué es el protocolo de conectores Habilitalo. Documentación técnica de Grupo Digitalo, en español.';

export const metadata: Metadata = {
  title: 'Documentalo — Documentación técnica de Grupo Digitalo',
  description: siteDescription,
  openGraph: {
    title: 'Documentalo — Coordinalo, Servicialo y Habilitalo, explicados para desarrolladores',
    description: siteDescription,
    url: 'https://documentalo.com',
    siteName: 'Documentalo',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: '/og/og-home.png', width: 1200, height: 630, alt: 'Documentalo — Documentación técnica de Grupo Digitalo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentalo — Coordinalo, Servicialo y Habilitalo, explicados para desarrolladores',
    description: siteDescription,
    images: ['/og/og-home.png'],
  },
  alternates: {
    canonical: 'https://documentalo.com',
  },
};

type PieceLink = { label: string; href: string; external?: boolean };

const pieces: Array<{
  name: string;
  kind: string;
  status: string;
  statusClass: string;
  description: string;
  links: PieceLink[];
}> = [
  {
    name: 'Coordinalo',
    kind: 'Producto',
    status: 'En producción',
    statusClass: 'border-green-500/30 bg-green-500/10 text-green-400',
    description:
      'Sistema SaaS para organizaciones que entregan servicios profesionales. Incluye tres productos activables: Coordinalo (operación), Planificalo (finanzas) y Relacionalo (clientes). Un tercero se integra por REST Servicialo, organización por organización, y por MCP.',
    links: [
      { label: 'Documentación', href: '/docs/coordinalo' },
      { label: 'Productos y activación', href: '/docs/coordinalo/productos' },
    ],
  },
  {
    name: 'Servicialo',
    kind: 'Estándar propuesto',
    status: 'Protocolo 0.10, borrador',
    statusClass: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    description:
      'Estándar abierto de interoperabilidad para servicios profesionales, con licencia Apache-2.0. HTTP Profile 1.0.0. El proceso de RFC (RFC-001) no está ratificado. Una implementación registrada: Coordinalo.',
    links: [
      { label: 'Documentación', href: '/docs/servicialo' },
      { label: 'Especificación', href: 'https://servicialo.com/spec', external: true },
    ],
  },
  {
    name: 'Habilitalo',
    kind: 'Protocolo de conectores',
    status: 'Abierto, MIT declarada en su README',
    statusClass: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    description:
      'Protocolo abierto de conectores: un manifiesto JSON declara la fuente de datos y una función pura convierte los datos crudos en eventos canónicos. Sirve para traer el historial desde otras fuentes. Documentación propia pendiente.',
    links: [
      { label: 'Repositorio', href: 'https://github.com/habilitalo/protocolo', external: true },
      { label: 'habilitalo.com', href: 'https://habilitalo.com', external: true },
    ],
  },
];

const stats = [
  { value: '113', label: 'tools en el servidor MCP de Coordinalo' },
  { value: '40', label: 'tools definidos por el protocolo Servicialo' },
  { value: '6', label: 'operaciones mínimas del HTTP Profile' },
  { value: '1', label: 'implementación registrada del estándar' },
];

const integrationPaths = [
  {
    via: 'REST Servicialo, por organización',
    base: 'https://coordinalo.com/api/servicialo/{orgSlug}/…',
    credential:
      'Descubrimiento (services, availability, manifest): sin credencial si la organización está publicada en Servicialo. Ciclo de vida (sessions/{id} y sus transiciones): X-Org-Api-Key o Authorization: Bearer, con una key sk_admin_….',
    href: '/docs/servicialo#implementaciones',
    docLabel: 'Endpoint por organización',
  },
  {
    via: 'MCP (Streamable HTTP)',
    base: 'https://coordinalo.com/api/mcp',
    credential:
      'X-Org-Api-Key con una key sk_admin_…. En esta ruta, Authorization: Bearer es el JWT de sesión de la app, no la API key.',
    href: '/docs/servicialo#dos-servidores-mcp',
    docLabel: 'Servidor MCP de Coordinalo',
  },
];

const developerFacts = [
  'Descubrimiento sin credenciales: services, availability y manifest de cada organización publicada en Servicialo.',
  'Ciclo de vida con API key de organización, en X-Org-Api-Key o en Authorization: Bearer. La key la emite un owner o admin y se muestra completa una sola vez.',
  'OpenAPI en /api/servicialo/openapi.json y manifest de la implementación en /api/servicialo/manifest.',
  'Servidor MCP en /api/mcp (Streamable HTTP), con la key en X-Org-Api-Key.',
  'Sin OAuth para el MCP y sin webhooks salientes, hoy.',
];

const resources = [
  {
    name: 'Guías',
    href: '/docs/guias',
    description: 'Multi-tenancy con Prisma, MercadoPago en Chile, portal del cliente, roles y permisos',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: 'Integraciones',
    href: '/docs/integraciones',
    description: 'Email con Resend y Google Calendar',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
];

const codeExample = [
  '# Descubrimiento: responde sin credenciales si la organización está publicada',
  'curl https://coordinalo.com/api/servicialo/{orgSlug}/services',
  '',
  '# Respuesta, recortada',
  '# { "organization": { "slug": "{orgSlug}" },',
  '#   "services": [ { "id": "…", "name": "…", "duration_minutes": 30,',
  '#                   "price": "…", "currency": "CLP" } ] }',
  '',
  '# Ciclo de vida: requiere la API key de la organización',
  'curl https://coordinalo.com/api/servicialo/{orgSlug}/sessions/{sessionId} \\',
  '  -H "X-Org-Api-Key: sk_admin_…"',
];

function PieceLinkItem({ link }: { link: PieceLink }) {
  const className = 'text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300';
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label} ↗
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.label} →
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Documentalo',
            description: siteDescription,
            url: 'https://documentalo.com',
            publisher: {
              '@type': 'Organization',
              name: 'Grupo Digitalo',
              url: 'https://grupodigitalo.com',
            },
          }),
        }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800/60 bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
              <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">Documentalo</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#que-hay" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
              Qué hay
            </a>
            <a href="#integrar" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
              Cómo integrar
            </a>
            <Link href="/docs" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
              Documentación
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/danioni/documentalo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </a>
            <a
              href="https://coordinalo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-900 hover:text-white"
            >
              Ir a Coordinalo
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-1.5 text-sm text-gray-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Documentación en español · describe lo que corre
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Lo que hay detrás de{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              Coordinalo, Servicialo y Habilitalo
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
            Documentalo explica cómo se relacionan el producto, el estándar propuesto y el protocolo de conectores de Grupo Digitalo, y cómo un tercero se integra hoy. Lo que corre se documenta; lo que es intención se dice con su estado y su fecha.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs"
              className="w-full rounded-lg bg-cyan-500 px-8 py-3.5 font-medium text-gray-950 transition-colors hover:bg-cyan-400 sm:w-auto"
            >
              Explorar la documentación
            </Link>
            <a
              href="#integrar"
              className="w-full rounded-lg border border-gray-700 px-8 py-3.5 font-medium text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-900 sm:w-auto"
            >
              Cómo integrar hoy
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-800/60 bg-gray-900/50 px-4 py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three pieces */}
      <section id="que-hay" className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-white md:text-4xl">
            Tres cosas, tres estados
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Las tres piezas que este sitio documenta y el estado real de cada una.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {pieces.map((piece) => (
              <div
                key={piece.name}
                className="flex flex-col rounded-xl border border-gray-800/60 bg-gray-900/50 p-6"
              >
                <div className="mb-1 text-xs uppercase tracking-wide text-gray-500">{piece.kind}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">{piece.name}</h3>
                <span className={`mb-4 inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium ${piece.statusClass}`}>
                  {piece.status}
                </span>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">{piece.description}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {piece.links.map((link) => (
                    <PieceLinkItem key={link.href} link={link} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to integrate today */}
      <section id="integrar" className="border-t border-gray-800/60 bg-gray-900/30 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-white md:text-4xl">
            Cómo se integra un tercero hoy
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Dos vías, ambas en coordinalo.com. Planificalo y Relacionalo no tienen API pública propia: sus rutas son internas de la app. No existe el prefijo /api/v1/.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-800/60 bg-gray-900/50">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-gray-800/60 text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Vía</th>
                  <th className="px-5 py-3 font-medium">Base</th>
                  <th className="px-5 py-3 font-medium">Credencial</th>
                  <th className="px-5 py-3 font-medium">Doc</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {integrationPaths.map((path) => (
                  <tr key={path.via} className="align-top">
                    <td className="px-5 py-4 font-medium text-white">{path.via}</td>
                    <td className="px-5 py-4 font-mono text-xs text-cyan-300">{path.base}</td>
                    <td className="px-5 py-4 text-gray-400">{path.credential}</td>
                    <td className="px-5 py-4">
                      <Link href={path.href} className="text-cyan-400 transition-colors hover:text-cyan-300">
                        {path.docLabel} →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Code example */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Para desarrolladores
              </h2>
              <p className="mb-6 text-gray-400">
                Lo que un integrador externo puede consumir hoy en Coordinalo, y con qué credencial.
              </p>
              <ul className="space-y-3">
                {developerFacts.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/docs/servicialo#implementaciones"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-medium text-gray-950 transition-colors hover:bg-cyan-400"
                >
                  Ver el endpoint por organización
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-800/60 bg-gray-900">
              <div className="flex items-center gap-2 border-b border-gray-800/60 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-gray-700" />
                <div className="h-3 w-3 rounded-full bg-gray-700" />
                <div className="h-3 w-3 rounded-full bg-gray-700" />
                <span className="ml-2 text-xs text-gray-500">GET /api/servicialo/{'{orgSlug}'}/services</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                <code className="text-gray-300">
                  {codeExample.map((line, i) => (
                    <div key={i} className={line.startsWith('#') ? 'text-gray-500' : undefined}>
                      {line === '' ? ' ' : line}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Guides & Integrations */}
      <section className="border-t border-gray-800/60 bg-gray-900/30 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            Guías e integraciones
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Solo las páginas que existen y no están retiradas.
          </p>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.href}
                className="group rounded-xl border border-gray-800/60 bg-gray-900/50 p-6 transition-all hover:border-cyan-500/30 hover:bg-gray-900"
              >
                <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400">
                  {resource.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{resource.name}</h3>
                <p className="text-sm text-gray-400">{resource.description}</p>
                <div className="mt-4 text-sm font-medium text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Explorar →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/60">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10">
                  <svg className="h-3.5 w-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <span className="font-semibold text-white">Documentalo</span>
              </div>
              <p className="text-sm text-gray-500">
                Documentación técnica de Grupo Digitalo. Describe lo que corre.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Coordinalo</h4>
              <ul className="space-y-2">
                <li><Link href="/docs/coordinalo" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Coordinalo</Link></li>
                <li><Link href="/docs/coordinalo/productos" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Productos y activación</Link></li>
                <li><Link href="/docs/planificalo" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Planificalo</Link></li>
                <li><Link href="/docs/relacionalo" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Relacionalo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Estándar y protocolos</h4>
              <ul className="space-y-2">
                <li><Link href="/docs/servicialo" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Servicialo</Link></li>
                <li><a href="https://servicialo.com/spec" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Especificación de Servicialo</a></li>
                <li><a href="https://github.com/habilitalo/protocolo" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Habilitalo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Recursos</h4>
              <ul className="space-y-2">
                <li><Link href="/docs/guias" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Guías</Link></li>
                <li><Link href="/docs/integraciones" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Integraciones</Link></li>
                <li><a href="https://coordinalo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">coordinalo.com</a></li>
                <li><a href="https://github.com/danioni/documentalo" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">GitHub de Documentalo</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800/60 pt-8 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Grupo Digitalo. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-600">
              Parte de{' '}
              <a href="https://grupodigitalo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-cyan-400">
                Grupo Digitalo
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
