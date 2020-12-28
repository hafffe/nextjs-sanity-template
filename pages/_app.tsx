import {AppProps} from 'next/app';
import {CSSReset, ChakraProvider} from '@chakra-ui/react';
import {Global} from '@emotion/react';
import {DefaultSeo} from 'next-seo';
import theme from '../constants/theme';
import SEO from '../next-seo.config';

const MyApp = ({Component, pageProps}: AppProps) => (
	<ChakraProvider theme={theme}>
		<DefaultSeo {...SEO} />
		<CSSReset />
		<Global
			styles={{
				'.youtubeContainer': {
					position: 'relative',
					width: '100%',
					height: 0,
					paddingBottom: '56.25%',
					overflow: 'hidden',
					marginBottom: '50px'
				},

				'.youtubeContainer iframe': {
					width: '100%',
					height: '100%',
					position: 'absolute',
					top: 0,
					left: 0
				}
			}}
		/>
		<Component {...pageProps} />
	</ChakraProvider>
);

export default MyApp;
