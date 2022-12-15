/** @type {import('next').NextConfig} */

const config = {
	poweredByHeader: false,
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true
	},
	images: {
		domains: ['cdn.sanity.io']
	}
};

export default config;
