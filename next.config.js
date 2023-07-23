/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.durbar.live",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
