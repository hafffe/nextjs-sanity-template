import {ReactNode} from 'react';
import Head from 'next/head';
import {Flex, useColorMode} from '@chakra-ui/react';
import {SiteSettings} from '../models/site-settings';
import {Footer, Header, PreviewAlert} from '.';

type Props = {
	siteSettings: SiteSettings;
	children?: ReactNode;
	preview: boolean;
};

const Layout = ({siteSettings, preview, children}: Props) => {
	const {colorMode} = useColorMode();

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<meta content='follow, index' name='robots' />
			</Head>
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
