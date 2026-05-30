import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    localPatterns: [
      {
        pathname: "/images/**"
      }
    ],
    qualities: [75, 85, 90, 92, 95]
  }
};

export default nextConfig;
