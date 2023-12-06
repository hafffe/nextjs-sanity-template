/** @type {import('next').NextConfig} */

const config = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{hostname: "cdn.sanity.io"}],
  },
};

export default config;
