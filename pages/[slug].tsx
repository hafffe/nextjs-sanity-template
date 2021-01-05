import {GetStaticProps} from 'next';
import Error from 'next/error';
import {useRouter} from 'next/router';
import {Flex} from '@chakra-ui/react';
import {pageQuery, siteSettingsQuery, allPagesSlug} from '@/lib/queries';
import {sanityClient, usePreviewSubscription} from '@/lib/sanity';
import {Page as PageProps} from '@/models/page';
import {SiteSettings} from '@/models/site-settings';
import {Layout} from '@/components/common';
import {RenderSection} from '@/components/utils';

type Props = {
	pageData: PageProps;
	siteSettings: SiteSettings;
};

const Page = ({pageData, siteSettings}: Props) => {
	const router = useRouter();

	const {data: page} = usePreviewSubscription(pageQuery, {
		params: {slug: pageData?.slug?.current},
		initialData: pageData,
		enabled: pageData && router.query.preview !== null
	});

	if ((!router.isFallback && !page?.slug) || !page) {
		return <Error statusCode={404} />;
	}

	const meta = page?.meta ?? undefined;

	return (
		<Layout meta={meta} siteSettings={siteSettings}>
			<Flex direction='column' justifyContent='center' width='100%'>
				{page?.content?.map((section) => (
					<RenderSection key={section._key} section={section} />
				))}
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	const slug = params?.slug?.toString();
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, {
		slug
	});

	return {
		props: {
			pageData,
			siteSettings
		},
		revalidate: 1
	};
};

export const getStaticPaths = async () => {
	const data = await sanityClient.fetch<string[]>(allPagesSlug);
	const paths = data.map((slug) => ({params: {slug}}));

	return {
		paths,
		fallback: true
	};
};

export default Page;
