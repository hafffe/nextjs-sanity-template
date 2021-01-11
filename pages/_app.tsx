import {AppProps} from 'next/app';
import {CSSReset, ChakraProvider} from '@chakra-ui/react';
import {Global} from '@emotion/react';
import {Head} from '@/components/common';
import theme from '../constants/theme';

const MyApp = ({Component, pageProps}: AppProps) => (
	<ChakraProvider theme={theme}>
		<Head />
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
