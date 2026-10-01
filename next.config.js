/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Akce Starting 10 skončila, staré odkazy z IG vedou na úvod.
  async redirects() {
    return [{ source: "/starting-10", destination: "/", permanent: true }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
