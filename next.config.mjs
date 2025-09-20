/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this to ensure uploaded images are served correctly
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
