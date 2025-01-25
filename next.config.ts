import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com', 
      },
      {
        protocol: 'https',
        hostname: 'share-app-excel-parser-backend-7x17r9yvh.vercel.app', 
      },
    ],
  },
};

export default nextConfig;
