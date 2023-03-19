import type {Metadata} from 'next';
import {previewData} from 'next/headers';
import {pageQuery, allPagesSlug} from '~/lib/queries';
import {sanityClient, urlForImage} from '~/lib/sanity/client';
import {PageLayout} from '~/components/layout';
import {PagePreview, PreviewSuspense} from '~/components/previews';
import type {Page} from '~/models/page';

export const generateStaticParams = async () => {
	const pageData = await sanityClient.fetch<Page[]>(allPagesSlug);

	return pageData.map((page) => ({
		slug: page
	}));
};

export const generateMetadata = async ({params}: {params: {slug: string}}): Promise<Metadata> => {
	console.log('params.slug', params.slug);
	const page = await sanityClient.fetch<Page>(pageQuery, {
		slug: params.slug
	});

	const ogImage =
		(page.meta?.openGraphImage && urlForImage(page.meta.openGraphImage).width(800).height(600).fit('crop').url()) ??
		'';

	return {
		title: page.meta?.metaTitle ?? page.title,
		description: page.meta?.metaDescription,
		icons: {
			icon: '/favicon/favicon.svg'
		},
		openGraph: {
			title: page.meta?.openGraphTitle,
			description: page.meta?.openGraphDescription,
			images: [
				{
					url: ogImage,
					width: 800,
					height: 600
				}
			]
		}
	};
};

const SlugRoute = async ({params}: {params: {slug: string}}) => {
	const page = await sanityClient.fetch<Page>(pageQuery, {
		slug: params.slug
	});

	if (previewData()) {
		return (
			<PreviewSuspense fallback={<PageLayout page={page} />}>
				<PagePreview query={pageQuery} variables={{slug: params.slug}} />
			</PreviewSuspense>
		);
	}

	return <PageLayout page={page} />;
};

export default SlugRoute;
