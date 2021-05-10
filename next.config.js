'use strict';

const STUDIO_REWRITE = {
	source: '/studio/:path*',
	destination: process.env.NODE_ENV === 'development' ? 'http://localhost:3333/studio/:path*' : '/studio/index.html'
};

module.exports = {
	poweredByHeader: false,
	reactStrictMode: true,
	future: {
		webpack5: true,
	},
	images: {
		domains: ['cdn.sanity.io']
	},
	async rewrites() {
		return [
			STUDIO_REWRITE
		];
	}
};
