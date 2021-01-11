import {AppProps} from 'next/app';
import {CSSReset, ChakraProvider} from '@chakra-ui/react';
import {Global} from '@emotion/react';
import GoogleFonts from 'next-google-fonts';
import {DefaultSeo} from 'next-seo';
import theme from '../constants/theme';
import SEO from '../next-seo.config';

const MyApp = ({Component, pageProps}: AppProps) => (
	<ChakraProvider theme={theme}>
		<GoogleFonts href='https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap' />
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
