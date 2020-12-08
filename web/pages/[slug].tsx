import {GetStaticProps, GetStaticPaths} from 'next';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {Flex} from '@chakra-ui/react';
import {apiClient} from '../lib/api';
import {SITE_SETTINGS, GET_PAGE, GET_PAGES_WITH_SLUG} from '../lib/queries';
import {Page, PageQuery, SiteSettings, SiteSettingsQuery, GetAllPagesWithSlugQuery} from '../types/types';
import {renderBlocks} from '../components/utils/render-blocks';
import {Layout} from '../components';

type Props = {
	preview: boolean;
	page: Page;
	siteSettings: SiteSettings;
};

const Index = ({page, siteSettings, preview}: Props) => {
	const router = useRouter();

	if (!router.isFallback && !page?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const meta = page?.meta ?? undefined;

	return (
		<Layout siteSettings={siteSettings} meta={meta} preview={preview}>
			<Flex direction='column' justifyContent='center'>
				{page?.content && renderBlocks(page.content)}
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({params, preview = false}) => {
	const {SiteSettings} = await apiClient<SiteSettingsQuery>(SITE_SETTINGS);
	const {allPage} = await apiClient<PageQuery>(GET_PAGE, {
		id: params?.slug?.toString()
	});

	const page = preview ? allPage.find((page) => page?._id?.includes('draft')) ?? allPage[0] : allPage[0];

	return {props: {page, siteSettings: SiteSettings, preview}, revalidate: 1};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await apiClient<GetAllPagesWithSlugQuery>(GET_PAGES_WITH_SLUG);
	const pages = data.allPage
		.filter((page) => page?.slug?.current)
		.filter((page) => page?.slug?.current !== '/')
		.filter((page) => page?.slug?.current !== 'posts');

	const paths = pages.map((page) => ({
		params: {slug: page?.slug?.current?.toString()}
	}));

	return {
		paths,
		fallback: false
	};
};

export default Index;
