import {pageQuery, postsQuery} from '~/lib/queries';
import {sanityClient} from '~/lib/sanity/client';
import {PostList} from '~/components/shared';
import {RenderSection} from '~/components/sections';
import type {Page} from '~/models/page';
import type {Post} from '~/models/post';

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
