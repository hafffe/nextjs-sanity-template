import {GetStaticProps} from 'next';
import {Flex} from '@chakra-ui/react';
import {fetchPageBySlug, fetchPosts, fetchSiteSettings} from '@/lib/api';
import {renderBlocks} from '@/components/utils/render-blocks';
import {SiteSettings} from '@/models/site-settings';
import {Page} from '@/models/page';
import {Post} from '@/models/post';
import {Layout, PostList} from '../../components';

type Props = {
	preview: boolean;
	posts: Post[];
	page: Page;
	siteSettings: SiteSettings;
};

const Posts = ({posts, page, siteSettings, preview}: Props) => {
	const meta = page?.meta ?? undefined;

	return (
		<Layout siteSettings={siteSettings} meta={meta} preview={preview}>
			<Flex direction='column' justifyContent='center'>
				{page?.content && renderBlocks(page.content)}
				<PostList posts={posts} layout='original' />
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
	const siteSettings = await fetchSiteSettings({preview});
	const page = await fetchPageBySlug({slug: 'posts', preview});
	const posts = await fetchPosts({limit: 10, preview});

	return {props: {siteSettings, page, posts, preview}, revalidate: 1};
};

export default Posts;
