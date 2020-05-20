import React from 'react';
import App, {AppProps} from 'next/app';
import {CSSReset, ThemeProvider, ColorModeProvider} from '@chakra-ui/core';
import theme from '../constants/theme';

class MyApp extends App<AppProps> {
	render(): JSX.Element {
		const {Component, pageProps} = this.props;

		return (
			<ThemeProvider theme={theme}>
				<CSSReset />
				<ColorModeProvider value='dark'>
					<Component {...pageProps} />
				</ColorModeProvider>
			</ThemeProvider>
		);
	}
}

export default MyApp;
