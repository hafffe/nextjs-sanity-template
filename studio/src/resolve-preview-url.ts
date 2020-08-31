const previewSecret = process.env.SANITY_STUDIO_PREVIEW_TOKEN;
const projectUrl = process.env.SANITY_STUDIO_PRODUCTION_URL;

export default function resolveProductionUrl(document: any) {
	if (!document.slug) {
		return false;
	}

	const slug: string = document.slug.current;
	const type: string = document._type;
	const id: any = document._id;

	if (!slug || !type || !previewSecret || !projectUrl || !id.includes('drafts')) {
		return false;
	}

	const url = `${slug}`;

	return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${url}&type=${type}`;
}
