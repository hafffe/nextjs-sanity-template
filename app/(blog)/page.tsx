import type {Metadata} from 'next';
import {draftMode} from 'next/headers';
import {pageWithPostsQuery, pageQuery} from '~/lib/queries';
import {sanityClient, urlForImage} from '~/lib/sanity/client';
import {IndexPageLayout} from '~/components/layout';
import {IndexPagePreview, PreviewSuspense} from '~/components/previews';
import type {Page} from '~/models/page';
import type {Post} from '~/models/post';

type PageWithPosts = {
	page: Page;
	posts: Post[];
};

export const generateMetadata = async (): Promise<Metadata> => {
	const page = await sanityClient.fetch<Page>(pageQuery, {
		slug: 'frontpage'
	});

	const ogImage =
		(page.meta?.openGraphImage && urlForImage(page.meta.openGraphImage).width(800).height(600).fit('crop').url()) ??
		'';

	return {
		title: page.meta?.metaTitle ?? page.title,
		icons: {
			icon: '/favicon/favicon.svg'
		},
		description: page.meta?.metaDescription,
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

const IndexRoute = async () => {
	const {isEnabled} = draftMode();
	const {page, posts} = await sanityClient.fetch<PageWithPosts>(pageWithPostsQuery, {
		slug: 'frontpage',
		limit: 2
	});

	if (isEnabled) {
		return (
			<PreviewSuspense fallback={<IndexPageLayout page={page} posts={posts} />}>
				<IndexPagePreview query={pageWithPostsQuery} variables={{slug: 'frontpage', limit: 2}} />
			</PreviewSuspense>
		);
	}

	return <IndexPageLayout page={page} posts={posts} />;
};

export default IndexRoute;
