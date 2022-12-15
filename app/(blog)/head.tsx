import {pageQuery, siteSettingsQuery} from '~/lib/queries';
import {sanityClient, urlForImage} from '~/lib/sanity/client';
import {DefaultHead} from '~/components/shared';
import type {SiteSettings} from '~/models/site-settings';
import type {Page} from '~/models/page';

const Head = async () => {
	const [siteSettings, page] = await Promise.all([
		sanityClient.fetch<SiteSettings>(siteSettingsQuery),
		sanityClient.fetch<Page>(pageQuery, {
			slug: 'frontpage'
		})
	]);

	const title = `${page.title} | ${siteSettings.title}`;
	const description = page.meta?.metaDescription || siteSettings.description;
	const ogTitle = page.meta?.openGraphTitle ?? title;
	const ogDescription = page.meta?.openGraphDescription;
	const ogImage =
		(page.meta?.openGraphImage &&
			urlForImage(page.meta.openGraphImage).width(1200).height(627).fit('crop').url()) ??
		null;

	return (
		<>
			<DefaultHead />
			<title>{title}</title>
			{description && <meta name='description' content={description} />}
			<meta property='og:title' content={ogTitle} />
			{ogImage && <meta property='og:image' content={ogImage} />}
			{ogDescription && <meta property='og:description' content={ogDescription} />}
		</>
	);
};

export default Head;
