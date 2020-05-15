import React from 'react';
import Head from 'next/head';
import {Flex} from '@chakra-ui/core';
import {SiteSettings} from '../types/types';
import {Footer, Header, PreviewAlert} from '.';

type Props = {
	siteSettings: SiteSettings;
	children?: React.ReactNode;
	preview: boolean;
};

const Layout: React.FunctionComponent<Props> = ({siteSettings, preview, children}) => (
	<>
		<Head>
			<title>{siteSettings?.title}</title>
			<meta name='description' content={siteSettings?.description ?? undefined} />
			<meta name='keywords' content={siteSettings?.keywords?.toString()} />
		</Head>

		<Flex flexDirection='column' height='100vh'>
			<PreviewAlert preview={preview} />
			<Header navigation={siteSettings?.navigation} />
			<Flex
				as='main'
				maxWidth='1200px'
				width='100%'
				padding={6}
				alignSelf='center'
				justifyContent='center'
				flex='1 0 auto'
			>
				{children}
			</Flex>
			<Footer />
		</Flex>
	</>
);

export default Layout;
