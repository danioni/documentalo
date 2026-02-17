import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://documentalo.com'),
  title: {
    default: 'Documéntalo — Documentación técnica del ecosistema Digitalo',
    template: '%s | Documéntalo',
  },
  description: 'APIs, guías de integración y referencias técnicas para desarrolladores que construyen con Digitalo.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    siteName: 'Documéntalo',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
