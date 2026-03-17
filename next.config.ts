import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Enable server actions
  serverActions: {
    allowedOrigins: ["localhost:3000"],
  } as unknown as NextConfig["serverActions"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
