import React from 'react';
import App, {AppProps} from 'next/app';
import {CSSReset, ThemeProvider, ColorModeProvider} from '@chakra-ui/core';
import {Global} from '@emotion/core';
import theme from '../constants/theme';

class MyApp extends App<AppProps> {
	render(): JSX.Element {
		const {Component, pageProps} = this.props;

		return (
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
	}
}

export default MyApp;
