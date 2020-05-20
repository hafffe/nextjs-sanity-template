import React from 'react';
import Head from 'next/head';
import {Flex, useColorMode} from '@chakra-ui/core';
import {SiteSettings} from '../types/types';
import {Footer, Header, PreviewAlert} from '.';

type Props = {
	siteSettings: SiteSettings;
	children?: React.ReactNode;
	preview: boolean;
};

const Layout: React.FunctionComponent<Props> = ({siteSettings, preview, children}) => {
	const {colorMode} = useColorMode();

	return (
		<>
			<Head>
				<title>{siteSettings?.title}</title>
				<meta name='description' content={siteSettings?.description ?? undefined} />
				<meta name='keywords' content={siteSettings?.keywords?.toString()} />
			</Head>

			<Flex
				flexDirection='column'
				minHeight='100vh'
				bg={colorMode === 'dark' ? 'modes.dark.background' : 'modes.light.background'}
				color={colorMode === 'dark' ? 'modes.dark.text' : 'modes.light.text'}
			>
				<PreviewAlert preview={preview} />
				<Header navigation={siteSettings?.navigation} colorMode={colorMode} />
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
				<Footer colorMode={colorMode} />
			</Flex>
		</>
	);

};

export default Layout;
