import type {NextConfig} from "next";

const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [{hostname: "cdn.sanity.io"}],
  },
};

export default config;
