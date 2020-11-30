const title = 'Hafffe.dev';
const description = 'Developer, Javascript';
const url = 'https://nextjs-sanity-template.now.sh/';

const config = {
	title,
	description,
	canonical: url,
	openGraph: {
		type: 'website',
		locale: 'en_EN',
		url,
		site_name: 'nextjs-sanity-template.now.sh',
		title,
		description,
		images: [
			{
				url: 'https://nextjs-sanity-template.now.sh/favicon.svg',
				alt: title,
				width: 1280,
				height: 720
			}
		]
	}
};

export default config;
