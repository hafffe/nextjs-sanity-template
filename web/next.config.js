'use strict';

module.exports = {
	env: {
		GRAPHQL_URL: process.env.GRAPHQL_URL,
		GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN,
		PROJECT_ID: process.env.PROJECT_ID,
		PROJECT_DATASET: process.env.PROJECT_DATASET
	},
	poweredByHeader: false,
	reactStrictMode: true,
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200],
		iconSizes: [],
		domains: ['cdn.sanity.io'],
		path: '/_next/image',
		loader: 'default',
	}
};
