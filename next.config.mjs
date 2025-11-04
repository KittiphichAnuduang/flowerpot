import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  output: 'export',
};

const pwa = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
  register: true,
  skipWaiting: true,
  fallbacks: { document: '/offline.html' },
  cacheStartUrl: true,
});

export default pwa(nextConfig);
