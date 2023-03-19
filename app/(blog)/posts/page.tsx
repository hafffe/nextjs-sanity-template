import type {Metadata} from 'next';
import {pageQuery, postsQuery} from '~/lib/queries';
import {sanityClient, urlForImage} from '~/lib/sanity/client';
import {PostList} from '~/components/shared';
import {RenderSection} from '~/components/sections';
import type {Page} from '~/models/page';
import type {Post} from '~/models/post';

export const generateMetadata = async (): Promise<Metadata> => {
	const page = await sanityClient.fetch<Page>(pageQuery, {
		slug: 'posts'
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

const IndexPage = async () => {
	const pageData = await sanityClient.fetch<Page>(pageQuery, {
		slug: 'posts'
	});

	const postsData = await sanityClient.fetch<Post[]>(postsQuery, {
		limit: 10
	});

	const [page, posts] = await Promise.all([pageData, postsData]);

	return (
		<>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
			<PostList posts={posts} />
		</>
	);
};

export default IndexPage;
