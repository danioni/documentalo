import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/coordinalo/modules',
        destination: '/docs/coordinalo/productos',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
