/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com"],
  },
};

module.exports = nextConfig;
