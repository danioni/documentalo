import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="mb-4 text-5xl font-bold">Documéntalo</h1>
      <p className="mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-400">
        Hub central de documentación técnica en español para desarrolladores de Digitalo.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/docs/coordinalo"
          className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-blue-500 hover:bg-blue-50 dark:border-gray-800 dark:hover:bg-blue-950"
        >
          <h2 className="mb-2 text-xl font-semibold">Coordinalo</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            API de agendamiento y gestión de sesiones
          </p>
        </Link>

        <Link
          href="/docs/guias"
          className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-green-500 hover:bg-green-50 dark:border-gray-800 dark:hover:bg-green-950"
        >
          <h2 className="mb-2 text-xl font-semibold">Guías</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tutoriales y mejores prácticas
          </p>
        </Link>

        <Link
          href="/docs/integraciones"
          className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-purple-500 hover:bg-purple-50 dark:border-gray-800 dark:hover:bg-purple-950"
        >
          <h2 className="mb-2 text-xl font-semibold">Integraciones</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            MercadoPago, WhatsApp, Supabase y más
          </p>
        </Link>
      </div>

      <p className="mt-12 text-sm text-gray-500">
        Parte del ecosistema <a href="https://grupodigitalo.com" className="underline hover:text-blue-500">Grupo Digitalo</a>
      </p>
    </main>
  );
}
