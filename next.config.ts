/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js configurations go here, e.g.,
  // reactStrictMode: true,
  // experimental: {
  //   serverActions: true,
  // },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,

  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // This is not recommended for production, but it will skip the ESLint check during 'next build'.
    ignoreDuringBuilds: true,
  },

  // If you also want to ignore TypeScript errors from 'tsc
};

module.exports = nextConfig;