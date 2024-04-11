/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img-c.udemycdn.com" },
      { hostname: "th.bing.com" },
      { hostname: "s.udemycdn.com" },
    ],
  },
};

module.exports = nextConfig;
