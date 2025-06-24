import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure trailing slashes for better static hosting
  trailingSlash: true,
  // Disable server components since we're doing static export
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
