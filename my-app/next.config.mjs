/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.tyeso.com'],
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
