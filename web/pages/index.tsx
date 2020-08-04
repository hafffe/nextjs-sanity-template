import React from 'react';
import {GetStaticProps} from 'next';
import {Box, Flex, Heading, Divider, Link, Stack} from '@chakra-ui/core';
import {RiArrowRightLine} from 'react-icons/ri';
import {apiClient} from '../lib/api';
import {SITE_SETTINGS, GET_PAGE, GET_POSTS} from '../lib/queries';
import {Page as PageType, PageQuery, PostListQuery, Post as PostType, SiteSettings} from '../types/types';
import {renderBlocks} from '../components/utils/render-blocks';
import {Layout, PostList} from '../components';

type Props = {
	preview: boolean;
	page: PageType;
	allPost: PostType[];
	pageSettings: {
		SiteSettings: SiteSettings;
	};
};

const Index = ({page, allPost, pageSettings, preview}: Props) => {
	const {SiteSettings} = pageSettings;

	return (
		<Layout siteSettings={SiteSettings} preview={preview}>
			<Flex direction='column' justifyContent='center'>
				{page?.content && renderBlocks(page.content)}
				<Divider />
				<Stack isInline direction='row' alignItems='center' paddingBottom={6}>
					<Heading as='h2' size='xl' paddingBottom={2}>
						Recent articles
					</Heading>
					<Link href='/posts' marginLeft='auto' whiteSpace='nowrap'>
						All Articles <Box as={RiArrowRightLine} display='inline-block' />
					</Link>
				</Stack>
				<PostList allPost={allPost} layout='minimal' />
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
	const pageSettings = await apiClient<SiteSettings>(SITE_SETTINGS);
	const {allPage} = await apiClient<PageQuery>(GET_PAGE, {
		id: '/'
	});

	const page = preview ? allPage.find((page) => page?._id?.includes('draft')) ?? allPage[0] : allPage[0];

	const {allPost} = await apiClient<PostListQuery>(GET_POSTS, {
		limit: 5
	});

	return {props: {page, allPost, pageSettings, preview}, revalidate: 1};
};

export default Index;
