import React from 'react';
import {GetStaticProps} from 'next';
import {Flex} from '@chakra-ui/core';
import {apiClient} from '../../lib/api';
import {renderBlocks} from '../../components/utils/render-blocks';
import {SITE_SETTINGS, GET_POSTS, GET_PAGE} from '../../lib/queries';
import {Page as PageType, PageQuery, PostListQuery, Post as PostType, SiteSettings} from '../../types/types';
import {Layout, PostList} from '../../components';

type Props = {
	preview: boolean;
	allPost: PostType[];
	page: PageType;
	pageSettings: {
		SiteSettings: SiteSettings;
	};
};

const Posts = ({allPost, page, pageSettings, preview}: Props) => {
	const {SiteSettings} = pageSettings;

	return (
		<Layout siteSettings={SiteSettings} preview={preview}>
			<Flex direction='column' justifyContent='center'>
				{page?.content && renderBlocks(page.content)}
				<PostList allPost={allPost} layout='original' />
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
	const pageSettings = await apiClient<SiteSettings>(SITE_SETTINGS);
	const {allPage} = await apiClient<PageQuery>(GET_PAGE, {
		id: 'posts'
	});

	const page = preview ? allPage.find((page) => page?._id?.includes('draft')) ?? allPage[0] : allPage[0];

	const {allPost} = await apiClient<PostListQuery>(GET_POSTS, {
		limit: 20
	});

	return {props: {page, allPost, pageSettings, preview}, revalidate: 1};
};

export default Posts;
