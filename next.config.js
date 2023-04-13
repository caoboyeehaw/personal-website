/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'i.postimg.cc',
      // Add other external image sources if needed
    ],
  },
};

module.exports = nextConfig;