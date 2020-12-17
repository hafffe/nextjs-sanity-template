import {GetStaticProps} from 'next';
import {Flex} from '@chakra-ui/react';
import {fetchPageById, fetchPosts, fetchSiteSettings} from '../lib/api';
import {SiteSettings} from '../models/site-settings';
import {Page} from '../models/page';
import {Post} from '../models/post';
import {renderBlocks} from '../components/utils/render-blocks';
import {Layout} from '../components';

type Props = {
	preview: boolean;
	page: Page;
	posts: Post[];
	siteSettings: SiteSettings;
};

const Index = ({page, posts, siteSettings, preview}: Props) => (
	<Layout siteSettings={siteSettings} preview={preview}>
		<Flex direction='column' justifyContent='center' width='100%'>
			{page?.content && renderBlocks(page.content)}
		</Flex>
	</Layout>
);

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
	const siteSettings = await fetchSiteSettings();
	const page = await fetchPageById('frontpage');
	const posts = await fetchPosts(5);

	return {props: {siteSettings, page, posts, preview}, revalidate: 1};
};

export default Index;
