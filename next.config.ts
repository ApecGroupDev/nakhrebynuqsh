import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://127.0.0.1:*", "127.0.0.1"],
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;