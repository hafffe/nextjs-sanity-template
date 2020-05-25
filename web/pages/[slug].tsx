import React from 'react';
import {GetStaticProps, GetStaticPaths} from 'next';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {Flex} from '@chakra-ui/core';
import {apiClient} from '../lib/api';
import {SITE_SETTINGS, GET_PAGE, GET_PAGES_WITH_SLUG} from '../lib/queries';
import {Page as PageType, PageQuery, SiteSettings, GetAllPagesWithSlugQuery} from '../types/types';
import {renderBlocks} from '../components/utils/render-blocks';
import {Layout} from '../components';

type Props = {
	preview: boolean;
	page: PageType;
	pageSettings: {
		SiteSettings: SiteSettings;
	};
};

const Index = ({page, pageSettings, preview}: Props) => {
	const router = useRouter();

	if (!router.isFallback && !page?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const {SiteSettings} = pageSettings;

	return (
		<Layout siteSettings={SiteSettings} preview={preview}>
			<Flex direction='column' justifyContent='center'>
				{page?.content && renderBlocks(page.content)}
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({params, preview = false}) => {
	const pageSettings = await apiClient<SiteSettings>(SITE_SETTINGS);
	const {allPage} = await apiClient<PageQuery>(GET_PAGE, {
		id: params?.slug?.toString()
	});

	const page = preview ? allPage.find((page) => page._id && page._id.includes('draft')) ?? allPage[0] : allPage[0];

	return {props: {page, pageSettings, preview}};
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
