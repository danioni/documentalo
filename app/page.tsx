import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documéntalo — Documentación técnica del ecosistema Digitalo',
  description: 'APIs, guías de integración y referencias técnicas para desarrolladores que construyen con Digitalo. Coordinalo, Planifícalo, Relaciónalo y más.',
  openGraph: {
    title: 'Documéntalo — APIs para digitalizar servicios profesionales',
    description: 'Agendamiento, finanzas, CRM y más. Integra un ecosistema completo de gestión de servicios en tu app — documentado en español para LATAM.',
    url: 'https://documentalo.com',
    siteName: 'Documéntalo',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: '/og/og-home.png', width: 1200, height: 630, alt: 'Documéntalo — Documentación técnica del ecosistema Digitalo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documéntalo — APIs para digitalizar servicios profesionales',
    description: 'Agendamiento, finanzas, CRM y más. Integra un ecosistema completo de gestión de servicios en tu app — documentado en español para LATAM.',
    images: ['/og/og-home.png'],
  },
  alternates: {
    canonical: 'https://documentalo.com',
  },
};

const products = [
  {
    name: 'Coordinalo',
    href: '/docs/coordinalo',
    description: 'Agenda sesiones, gestiona disponibilidad y asigna profesionales',
    color: 'blue',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    name: 'Planifícalo',
    href: '/docs/planificalo',
    description: 'Cobra, paga y liquida comisiones automáticamente',
    color: 'purple',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    name: 'Relaciónalo',
    href: '/docs/relacionalo',
    description: 'Gestiona clientes, audiencias y comunicaciones multicanal',
    color: 'green',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    name: 'Servicialo',
    href: '/docs/servicialo',
    description: 'Protocolo estándar que define cómo modelar cualquier servicio profesional',
    color: 'amber',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
];

const guides = [
  {
    name: 'Integraciones',
    href: '/docs/integraciones',
    description: 'MercadoPago, WhatsApp Business, Supabase, Google Calendar',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    name: 'Guías',
    href: '/docs/guias',
    description: 'Multi-inquilino, autenticación, webhooks y mejores prácticas',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: 'Referencia API',
    href: '/docs/api',
    description: 'Referencia completa de endpoints y esquemas',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; hoverBorder: string }> = {
  blue: {
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    hoverBorder: 'hover:border-blue-500/40',
  },
  purple: {
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    hoverBorder: 'hover:border-purple-500/40',
  },
  green: {
    border: 'border-green-500/20',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    hoverBorder: 'hover:border-green-500/40',
  },
  amber: {
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    hoverBorder: 'hover:border-amber-500/40',
  },
};

const codeExample = `// Obtener sesiones del día
const response = await fetch(
  'https://api.coordinalo.com/api/v1/sessions?date=2026-02-16',
  {
    headers: {
      'Authorization': 'Bearer tu_api_key',
      'Content-Type': 'application/json',
    },
  }
);

const { data } = await response.json();
// → [{ id: "ses_01", client: "María López", time: "10:00", status: "confirmed" }]`;

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
            name: 'Documéntalo',
            description: 'Documentación técnica del ecosistema Digitalo. APIs, guías de integración y referencias técnicas.',
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
            <span className="text-lg font-bold text-white">Documéntalo</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#productos" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
              Productos
            </a>
            <a href="#guias" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
              Guías
            </a>
            <Link href="/docs/api" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
              Referencia API
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
        {/* Gradient background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-1.5 text-sm text-gray-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Documentación en español para desarrolladores LATAM
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            APIs para digitalizar{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              servicios profesionales
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
            Agendamiento, finanzas, CRM y más. Integra un ecosistema completo de gestión de servicios en tu app — documentado en español para LATAM.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs"
              className="w-full rounded-lg bg-cyan-500 px-8 py-3.5 font-medium text-gray-950 transition-colors hover:bg-cyan-400 sm:w-auto"
            >
              Explorar la documentación
            </Link>
            <a
              href="#productos"
              className="w-full rounded-lg border border-gray-700 px-8 py-3.5 font-medium text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-900 sm:w-auto"
            >
              Ver productos
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-800/60 bg-gray-900/50 px-4 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          {[
            { value: '200+', label: 'endpoints documentados' },
            { value: '4', label: 'productos' },
            { value: 'Multi-tenant', label: 'desde el día uno' },
            { value: 'OpenAPI', label: 'especificaciones' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section id="productos" className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            Productos documentados
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Cada producto del ecosistema Digitalo tiene su documentación completa: endpoints, modelos de datos y ejemplos de uso.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const colors = colorMap[product.color];
              return (
                <Link
                  key={product.name}
                  href={product.href}
                  className={`group relative rounded-xl border ${colors.border} ${colors.hoverBorder} bg-gray-900/50 p-6 transition-all hover:bg-gray-900`}
                >
                  <div className={`mb-4 inline-flex rounded-lg ${colors.bg} p-2.5 ${colors.text}`}>
                    {product.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{product.name}</h3>
                  <p className="text-sm text-gray-400">{product.description}</p>
                  <div className={`mt-4 text-sm font-medium ${colors.text} opacity-0 transition-opacity group-hover:opacity-100`}>
                    Ver documentación →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guides & Integrations */}
      <section id="guias" className="border-t border-gray-800/60 bg-gray-900/30 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            Guías &amp; Integraciones
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Tutoriales paso a paso, patrones de arquitectura y guías de integración con servicios externos.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.name}
                href={guide.href}
                className="group rounded-xl border border-gray-800/60 bg-gray-900/50 p-6 transition-all hover:border-cyan-500/30 hover:bg-gray-900"
              >
                <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400">
                  {guide.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{guide.name}</h3>
                <p className="text-sm text-gray-400">{guide.description}</p>
                <div className="mt-4 text-sm font-medium text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Explorar →
                </div>
              </Link>
            ))}
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
                APIs RESTful con autenticación Bearer, respuestas JSON consistentes y documentación en español. Integra el ecosistema Digitalo en tu aplicación.
              </p>
              <ul className="space-y-3">
                {[
                  'Autenticación con API keys y Bearer tokens',
                  'Respuestas JSON paginadas y tipadas',
                  'Webhooks para eventos en tiempo real',
                  'SDKs y ejemplos de código',
                ].map((item) => (
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
                  href="/docs"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-medium text-gray-950 transition-colors hover:bg-cyan-400"
                >
                  Empezar con la API
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-800/60 bg-gray-900">
              {/* Code window chrome */}
              <div className="flex items-center gap-2 border-b border-gray-800/60 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-gray-700" />
                <div className="h-3 w-3 rounded-full bg-gray-700" />
                <div className="h-3 w-3 rounded-full bg-gray-700" />
                <span className="ml-2 text-xs text-gray-500">GET /api/v1/sessions</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                <code className="text-gray-300">
                  {codeExample.split('\n').map((line, i) => (
                    <div key={i}>
                      {line.startsWith('//') || line.startsWith('// →') ? (
                        <span className="text-gray-500">{line}</span>
                      ) : line.includes("'Authorization'") || line.includes("'Content-Type'") ? (
                        <span>
                          {line.split("'").map((part, j) =>
                            j % 2 === 1 ? (
                              <span key={j} className="text-cyan-300">&apos;{part}&apos;</span>
                            ) : (
                              <span key={j}>{part}</span>
                            )
                          )}
                        </span>
                      ) : line.includes('await') || line.includes('const') ? (
                        <span>
                          {line.replace(/(const|await|fetch)/g, '§$1§').split('§').map((part, j) =>
                            ['const', 'await', 'fetch'].includes(part) ? (
                              <span key={j} className="text-purple-400">{part}</span>
                            ) : part.includes("'") ? (
                              <span key={j}>
                                {part.split("'").map((subpart, k) =>
                                  k % 2 === 1 ? (
                                    <span key={k} className="text-cyan-300">&apos;{subpart}&apos;</span>
                                  ) : (
                                    <span key={k}>{subpart}</span>
                                  )
                                )}
                              </span>
                            ) : (
                              <span key={j}>{part}</span>
                            )
                          )}
                        </span>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
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
                <span className="font-semibold text-white">Documéntalo</span>
              </div>
              <p className="text-sm text-gray-500">
                Documentación técnica del ecosistema Digitalo. APIs, guías y referencias para desarrolladores.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Productos</h4>
              <ul className="space-y-2">
                <li><Link href="/docs/coordinalo" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Coordinalo</Link></li>
                <li><Link href="/docs/planificalo" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Planifícalo</Link></li>
                <li><Link href="/docs/relacionalo" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Relaciónalo</Link></li>
                <li><Link href="/docs/servicialo" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Servicialo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Recursos</h4>
              <ul className="space-y-2">
                <li><Link href="/docs/guias" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Guías</Link></li>
                <li><Link href="/docs/integraciones" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Integraciones</Link></li>
                <li><Link href="/docs/api" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Referencia API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Ecosistema</h4>
              <ul className="space-y-2">
                <li><a href="https://coordinalo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Coordinalo</a></li>
                <li><a href="https://grupodigitalo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">Grupo Digitalo</a></li>
                <li><a href="https://github.com/danioni/documentalo" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">GitHub</a></li>
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
