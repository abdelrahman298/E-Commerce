import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    // remotePatterns: [new URL("https://cdn.dummyjson.com/**")],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com/**",
      },
    ],
  },

  output: "standalone",

  /* config options here */
};

export default nextConfig;
