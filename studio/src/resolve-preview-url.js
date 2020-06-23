const previewSecret = process.env.SANITY_STUDIO_PREVIEW_TOKEN;
const projectUrl = process.env.SANITY_STUDIO_PRODUCTION_URL;

export default function resolveProductionUrl(document) {
	if (!document.slug) {
		return false;
	}

	const slug = document.slug.current;
	const type = document._type;
	const id = document._id;

	if (!slug || !type || !id.includes('drafts')) {
		return false;
	}

	const url = `${slug}`;

	return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${url}&type=${type}`;
}
