import React from 'react';
import {ThemeProvider, ColorModeProvider} from '@chakra-ui/core';
import {render, cleanup} from '@testing-library/react';
import {Header} from '../components';
import theme from '../constants/theme';

afterEach(cleanup);

describe('Render Logo', () => {
	test('Find Logo', async () => {
		const {findByText} = render(
			<ThemeProvider theme={theme}>
				<ColorModeProvider value='dark'>
					<Header colorMode='dark' />
				</ColorModeProvider>
			</ThemeProvider>
		);

		const testSentence = await findByText('Logo');
		expect(testSentence).toBeInTheDocument();
	});
});
