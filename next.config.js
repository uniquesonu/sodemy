/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img-c.udemycdn.com" },
      { hostname: "th.bing.com" },
    ],
  },
};

module.exports = nextConfig;
