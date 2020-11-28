import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {render, cleanup} from '@testing-library/react';
import {Header, TextBlock} from '../components';
import theme from '../constants/theme';

afterEach(cleanup);

describe('Render Logo', () => {
	test('Find Logo', async () => {
		const {findByText} = render(
			<ChakraProvider theme={theme}>
				<Header colorMode='dark' />
			</ChakraProvider>
		);

		const testSentence = await findByText('🐶');
		expect(testSentence).toBeInTheDocument();
	});
});

describe('Render textBlock', () => {
	test('Renders a text ', async () => {
		const data = {
			__typename: 'TextBlock' as const,
			_key: '1988643bca8a',
			_type: 'textBlock',
			textRaw: [
				{
					_key: '3f9d7e51cb9b',
					_type: 'block',
					children: [
						{
							_key: '3f9d7e51cb9b0',
							_type: 'span',
							marks: [],
							text: 'This is a textBlock'
						}
					]
				}
			]
		};

		const {getByText} = render(
			<ChakraProvider theme={theme}>
				<TextBlock data={data} />
			</ChakraProvider>
		);

		const testSentence = getByText('This is a textBlock');
		expect(testSentence).toBeInTheDocument();
	});

	test('Renders a link', async () => {
		const data = {
			__typename: 'TextBlock' as const,
			_key: '1988643bca8a',
			_type: 'textBlock',
			textRaw: [
				{
					_key: '3f9d7e51cb9b',
					_type: 'block',
					children: [
						{
							_key: '3f9d7e51cb9b1',
							_type: 'span',
							marks: ['36b5cc448779'],
							text: 'Test link'
						}
					],
					markDefs: [
						{
							_key: '36b5cc448779',
							_type: 'link',
							href: 'https://www.test.com/'
						}
					]
				}
			]
		};

		const {getByText} = render(
			<ChakraProvider theme={theme}>
				<TextBlock data={data} />
			</ChakraProvider>
		);

		const testSentence = getByText('Test link');
		expect(testSentence).toHaveAttribute('href', 'https://www.test.com/');
	});
});
