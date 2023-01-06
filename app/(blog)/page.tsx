import {previewData} from 'next/headers';
import {pageWithPostsQuery} from '~/lib/queries';
import {sanityClient} from '~/lib/sanity/client';
import {IndexPageLayout} from '~/components/layout';
import {IndexPagePreview, PreviewSuspense} from '~/components/previews';
import type {Page} from '~/models/page';
import type {Post} from '~/models/post';

type PageWithPosts = {
	page: Page;
	posts: Post[];
};

const IndexRoute = async () => {
	const {page, posts} = await sanityClient.fetch<PageWithPosts>(pageWithPostsQuery, {
		slug: 'frontpage',
		limit: 2
	});

	if (previewData()) {
		return (
			<PreviewSuspense fallback={<IndexPageLayout page={page} posts={posts} />}>
				<IndexPagePreview query={pageWithPostsQuery} variables={{slug: 'frontpage', limit: 2}} />
			</PreviewSuspense>
		);
	}

	return <IndexPageLayout page={page} posts={posts} />;
};

export default IndexRoute;
