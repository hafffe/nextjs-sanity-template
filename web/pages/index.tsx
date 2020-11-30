import {GetStaticProps} from 'next';
import {Flex, Heading, Divider, Link, Icon} from '@chakra-ui/react';
import {RiArrowRightLine} from 'react-icons/ri';
import {apiClient} from '../lib/api';
import {SITE_SETTINGS, GET_PAGE, GET_POSTS} from '../lib/queries';
import {Page, PageQuery, PostListQuery, Post, SiteSettings, SiteSettingsQuery} from '../types/types';
import {renderBlocks} from '../components/utils/render-blocks';
import {Layout, PostList} from '../components';

type Props = {
	preview: boolean;
	page: Page;
	allPost: Post[];
	siteSettings: SiteSettings;
};

const Index = ({page, allPost, siteSettings, preview}: Props) => {
	const meta = page?.meta ?? undefined;

	return (
		<Layout siteSettings={siteSettings} meta={meta} preview={preview}>
			<Flex direction='column' justifyContent='center' width='100%'>
				{page?.content && renderBlocks(page.content)}
				<Divider />
				<Flex direction='row' alignItems='center' paddingBottom={6}>
					<Heading as='h2' size='xl' paddingBottom={2}>
						Recent articles
					</Heading>
					<Link href='/posts' marginLeft='auto' whiteSpace='nowrap'>
						All Articles <Icon as={RiArrowRightLine} />
					</Link>
				</Flex>
				<PostList allPost={allPost} layout='minimal' />
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
	const {SiteSettings} = await apiClient<SiteSettingsQuery>(SITE_SETTINGS);
	const {allPage} = await apiClient<PageQuery>(GET_PAGE, {
		id: 'frontpage'
	});

	const page = preview ? allPage.find((page) => page?._id?.includes('draft')) ?? allPage[0] : allPage[0];

	const {allPost} = await apiClient<PostListQuery>(GET_POSTS, {
		limit: 5
	});

	return {props: {page, allPost, siteSettings: SiteSettings, preview}, revalidate: 1};
};

export default Index;
