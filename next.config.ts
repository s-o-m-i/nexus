import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    // The persistent build cache restored by Vercel has shipped stale globals.css output.
    turbopackFileSystemCacheForBuild: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
