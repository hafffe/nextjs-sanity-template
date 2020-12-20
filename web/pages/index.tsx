import {GetStaticProps} from 'next';
import Link from 'next/link';
import {Flex, Divider, Heading, Icon, Link as ChakraLink} from '@chakra-ui/react';
import {RiArrowRightLine} from 'react-icons/ri';
import {fetchPageById, fetchPosts, fetchSiteSettings} from '../lib/api';
import {SiteSettings} from '@/models/site-settings';
import {Page} from '@/models/page';
import {Post} from '@/models/post';
import {renderBlocks} from '../components/utils/render-blocks';
import {Layout, PostList} from '../components';

type Props = {
	preview: boolean;
	page: Page;
	posts: Post[];
	siteSettings: SiteSettings;
};

const Index = ({page, posts, siteSettings, preview}: Props) => {
	const meta = page?.meta ?? undefined;

	return (
		<Layout siteSettings={siteSettings} meta={meta} preview={preview}>
			<Flex direction='column' justifyContent='center' width='100%'>
				{page?.content && renderBlocks(page.content)}
				<Divider marginTop={6} />
				<Flex direction='row' alignItems='center' paddingBottom={6}>
					<Heading as='h2' size='xl' paddingBottom={2}>
						Recent articles
					</Heading>
					<Link passHref href='/posts/'>
						<ChakraLink marginLeft='auto' whiteSpace='nowrap'>
							All Articles <Icon as={RiArrowRightLine} />
						</ChakraLink>
					</Link>
				</Flex>
				<PostList posts={posts} layout='minimal' />
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
	const siteSettings = await fetchSiteSettings();
	const page = await fetchPageById('frontpage');
	const posts = await fetchPosts(5);

	return {props: {siteSettings, page, posts, preview}, revalidate: 1};
};

export default Index;
