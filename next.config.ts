import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  allowedDevOrigins: ["10.109.0.229", "10.170.24.229"],
};

export default nextConfig;
