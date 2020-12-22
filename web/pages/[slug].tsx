import {GetStaticProps, GetStaticPaths} from 'next';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {Flex} from '@chakra-ui/react';
import {SiteSettings} from '@/models/site-settings';
import {Page} from '@/models/page';
import {fetchAllPagesSlug, fetchPageBySlug, fetchSiteSettings} from '@/lib/api';
import {renderBlocks} from '@/components/utils/render-blocks';
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
	const slug = params?.slug?.toString();
	const siteSettings = await fetchSiteSettings({preview});
	const page = await fetchPageBySlug({slug, preview});

	return {
		props: {
			preview,
			page,
			siteSettings
		},
		revalidate: 1
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await fetchAllPagesSlug({preview: false});
	const paths = data.map((slug) => ({params: {slug}}));

	return {
		paths,
		fallback: true
	};
};

export default Index;
