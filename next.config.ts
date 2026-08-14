import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting
  output: "export",
  // GitHub Pages does not have Next.js image optimization server
  images: {
    unoptimized: true,
  },
  // Optional: Add trailing slash for static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
