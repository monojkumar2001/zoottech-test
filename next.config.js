/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "", // Empty path to avoid the SSL error
  },
};

module.exports = nextConfig;
