import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Documéntalo - Documentación técnica en español',
  description: 'Hub central de documentación técnica en español para desarrolladores de Digitalo',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
