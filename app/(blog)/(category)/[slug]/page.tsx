import {previewData} from 'next/headers';
import {pageQuery, allPagesSlug} from '~/lib/queries';
import {sanityClient} from '~/lib/sanity/client';
import {PageLayout} from '~/components/layout';
import {PagePreview, PreviewSuspense} from '~/components/previews';
import type {Page} from '~/models/page';

export const generateStaticParams = async () => {
	const pageData = await sanityClient.fetch<Page[]>(allPagesSlug);

	return pageData.map((page) => ({
		slug: page
	}));
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
