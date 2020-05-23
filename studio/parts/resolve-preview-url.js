const previewSecret = process.env.SANITY_STUDIO_PREVIEW_TOKEN;
const projectUrl = process.env.SANITY_STUDIO_PRODUCTION_URL;

export default function resolveProductionUrl(document) {
	const slug = document.slug.current;
	const type = document._type;
	const id = document._id;
	let url = '';

	if (!slug || !type || !id.includes('drafts')) {
		return false;
	}

	switch (type) {
		case 'page':
			if (slug === '/') {
				url = `${slug}`;
				break;
			}

			url = `/${slug}`;
			break;
		case 'post':
			url = `/post/${slug}`;
			break;
		default:
			return url;
	}

	return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${url}&type=${type}`;
}
