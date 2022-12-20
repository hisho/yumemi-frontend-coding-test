/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ['ja'], defaultLocale: 'ja' },
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['page.tsx', 'api.ts'],
}

module.exports = nextConfig
