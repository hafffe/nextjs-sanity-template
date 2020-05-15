import React from 'react';
import App, {AppProps} from 'next/app';
import {CSSReset, ThemeProvider} from '@chakra-ui/core';
import {Global, css} from '@emotion/core';
import theme from '../constants/theme';

class MyApp extends App<AppProps> {
	render(): JSX.Element {
		const {Component, pageProps} = this.props;
		const globalStyles = (
			<Global
				styles={css`
					body {
						height: 100vh;
						background-color: ${theme.colors.background};
						color: ${theme.colors.text};
					}
				`}
			/>
		);

		return (
			<ThemeProvider theme={theme}>
				<CSSReset />
				{globalStyles}
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}

export default MyApp;
