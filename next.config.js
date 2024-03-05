/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // Add more configurations here
  // For example, you can add a custom webpack configuration:
  webpack: (config, { dev, isServer }) => {
    // Your custom webpack configurations go here
    return config;
  },
  // Add other configurations as needed
};

module.exports = nextConfig;
