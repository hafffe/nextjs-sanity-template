import {ReactNode} from 'react';
import Head from 'next/head';
import {Flex, useColorMode} from '@chakra-ui/react';
import {MetaFields, SiteSettings} from '../types/types';
import {Footer, Header, PreviewAlert, Seo} from '.';

type Props = {
	siteSettings: SiteSettings;
	meta?: MetaFields;
	children?: ReactNode;
	preview: boolean;
};

const Layout = ({siteSettings, meta, preview, children}: Props) => {
	const {colorMode} = useColorMode();
	const fallbackMeta = {
		title: siteSettings?.title ?? undefined,
		description: siteSettings?.description ?? undefined,
		keywords: siteSettings?.keywords ?? undefined
	};

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<meta content='follow, index' name='robots' />
			</Head>
			<Seo meta={meta} fallbackMeta={fallbackMeta} />
			<Flex
				flexDirection='column'
				minHeight='100vh'
				bg={colorMode === 'dark' ? 'darkGrayBase' : 'lightGrayBase'}
				color={colorMode === 'dark' ? 'lightGrayBase' : 'darkGrayBase'}
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
				<Footer socialFields={siteSettings?.socialFields} />
			</Flex>
		</>
	);
};

export default Layout;
