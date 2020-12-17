import {GetStaticProps} from 'next';
import {Flex} from '@chakra-ui/react';
import {apiClient} from '../../lib/api';
import {renderBlocks} from '../../components/utils/render-blocks';
import {SITE_SETTINGS, GET_POSTS, GET_PAGE} from '../../lib/graphql/queries';
import {Page as PageType, PageQuery, PostListQuery, Post, SiteSettings, SiteSettingsQuery} from '../../types/types';
import {Layout, PostList} from '../../components';

type Props = {
	preview: boolean;
	allPost: Post[];
	page: PageType;
	siteSettings: SiteSettings;
};

const Posts = ({allPost, page, siteSettings, preview}: Props) => {
	const meta = page?.meta ?? undefined;

	return (
		<Layout siteSettings={siteSettings} meta={meta} preview={preview}>
			<Flex direction='column' justifyContent='center'>
				{page?.content && renderBlocks(page.content)}
				<PostList allPost={allPost} layout='original' />
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
	const {SiteSettings} = await apiClient<SiteSettingsQuery>(SITE_SETTINGS);
	const {allPage} = await apiClient<PageQuery>(GET_PAGE, {
		id: 'posts'
	});

	const page = preview ? allPage.find((page) => page?._id?.includes('draft')) ?? allPage[0] : allPage[0];

	const {allPost} = await apiClient<PostListQuery>(GET_POSTS, {
		limit: 20
	});

	return {props: {page, allPost, siteSettings: SiteSettings, preview}, revalidate: 1};
};

export default Posts;
