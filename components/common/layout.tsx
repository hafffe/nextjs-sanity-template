import {ReactNode} from 'react';
import Head from 'next/head';
import {Flex} from '@chakra-ui/react';
import {SiteSettings} from '@/models/site-settings';
import {MetaFields} from '@/models/meta-fields';
import {Footer, Header, Seo} from '.';

type Props = {
	siteSettings: SiteSettings;
	children?: ReactNode;
	meta?: MetaFields;
};

const Layout = ({siteSettings, meta, children}: Props) => {
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
			<Flex flexDirection='column' minHeight='100vh'>
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
				<Footer socialFields={siteSettings?.socialFields} />
			</Flex>
		</>
	);
};

export default Layout;
