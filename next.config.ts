import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
    // OR stricter (safer) with remotePatterns:
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.pexels.com",
    //     pathname: "/photos/**",
    //   },
    // ],
  },
};

export default nextConfig;
