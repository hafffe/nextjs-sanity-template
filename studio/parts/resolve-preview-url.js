const previewSecret = process.env.SANITY_STUDIO_PREVIEW_TOKEN;
const projectUrl = process.env.SANITY_STUDIO_PRODUCTION_URL;

export default function resolveProductionUrl(document) {
	const slug = document.slug.current;
	if (!slug) {
		return false;
	}

	return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${slug}`;
}
