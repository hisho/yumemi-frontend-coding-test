/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ['ja'], defaultLocale: 'ja' },
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['api.ts', 'tsx'],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
