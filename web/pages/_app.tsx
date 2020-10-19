import React from 'react';
import {AppProps} from 'next/app';
import {CSSReset, ThemeProvider, ColorModeProvider} from '@chakra-ui/core';
import {Global} from '@emotion/core';
import theme from '../constants/theme';

const MyApp = ({Component, pageProps}: AppProps) => (
	<ThemeProvider theme={theme}>
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
		<ColorModeProvider value='dark'>
			<Component {...pageProps} />
		</ColorModeProvider>
	</ThemeProvider>
);

export default MyApp;
