
import {Heading} from '~/components/ui';
import {PostList} from '~/components/shared';
import {RenderSection} from '~/components/sections';
import type {Page} from '~/models/page';
import type {Post} from '~/models/post';

type Props = {
	page: Page;
	posts: Post[];
	preview?: boolean;
}

const IndexPage = ({page, posts, preview = false}: Props) => {
	if (preview && !page) {
		return <Heading level='h2'>Loading...</Heading>;
	}

	return (
		<>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
			<Heading level='h2' weight='semibold' className='py-8'>
				Recent articles
			</Heading>
			<PostList posts={posts} />
		</>
	);
};

export default IndexPage;
