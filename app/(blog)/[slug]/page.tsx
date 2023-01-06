import {previewData} from 'next/headers';
import {pageQuery} from '~/lib/queries';
import {sanityClient} from '~/lib/sanity/client';
import {PageLayout} from '~/components/layout';
import {PagePreview, PreviewSuspense} from '~/components/previews';
import type {Page} from '~/models/page';

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
