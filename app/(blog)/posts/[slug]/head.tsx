import {postQuery, siteSettingsQuery} from '~/lib/queries';
import {sanityClient, urlForImage} from '~/lib/sanity/client';
import {DefaultHead} from '~/components/shared';
import type {SiteSettings} from '~/models/site-settings';
import type {Post} from '~/models/post';

const Head = async ({params}: {params: {slug: string}}) => {
	const [siteSettings, post] = await Promise.all([
		sanityClient.fetch<SiteSettings>(siteSettingsQuery),
		sanityClient.fetch<Post>(postQuery, {
			slug: params.slug
		})
	]);

	const title = `${post.title} | ${siteSettings.title}`;
	const description = post.meta.metaDescription || siteSettings.description;
	const ogTitle = post.meta?.openGraphTitle ?? title;
	const ogDescription = post.meta?.openGraphDescription;
	const ogImage =
		(post.meta?.openGraphImage && urlForImage(post.meta.openGraphImage).width(1200).height(627).fit('crop').url()) ?? null;


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
