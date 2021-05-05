import {ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';
import {SiteSettings} from '@/models/site-settings';
import {MetaFields} from '@/models/meta-fields';
import {Footer, Header, Seo} from '.';

type Props = {
	siteSettings: SiteSettings;
	children?: ReactNode;
	meta?: MetaFields;
	width?: number;
};

const Layout = ({siteSettings, meta, children, width = 1200}: Props) => {
	const fallbackMeta = {
		title: siteSettings?.title ?? undefined,
		description: siteSettings?.description ?? undefined,
		keywords: siteSettings?.keywords ?? undefined
	};

	return (
		<>
			<Seo meta={meta} fallbackMeta={fallbackMeta} />
			<Flex flexDirection='column' minHeight='100vh'>
				<Header navigation={siteSettings?.navigation} />
				<Flex
					as='main'
					maxWidth={width}
					width='100%'
					padding={6}
					alignSelf='center'
					justifyContent='center'
					flex='1 0 auto'
					direction='column'
				>
					{children}
				</Flex>
				<Footer socialFields={siteSettings?.socialFields} />
			</Flex>
		</>
	);
};

export default Layout;
