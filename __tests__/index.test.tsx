import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {render, cleanup} from '@testing-library/react';
import {BlockContent} from '@/components/sections';
import {Header} from '@/components/common';
import theme from '../constants/theme';

afterEach(cleanup);

describe('Render Header', () => {
	test('renders Header component', () => {
		render(<Header />);
	});
});

describe('Render textBlock', () => {
	test('Renders a text ', async () => {
		const data = {
			_key: '5df1bc457b45',
			_type: 'blockContent' as const,
			text: [
				{
					_key: 'ab9801d55f96',
					_type: 'block' as const,
					children: [
						{
							_key: 'e1c46425ef59',
							_type: 'span',
							marks: [],
							text: 'This is BlockContent'
						}
					],
					markDefs: [],
					style: 'h3'
				}
			]
		};

		const {getByText} = render(
			<ChakraProvider theme={theme}>
				<BlockContent data={data} />
			</ChakraProvider>
		);

		const testSentence = getByText('This is BlockContent');
		expect(testSentence).toBeInTheDocument();
	});

	test('Renders a link', async () => {
		const data = {
			_key: '6b7e1f02ca47',
			_type: 'blockContent' as const,
			text: [
				{
					_key: 'af76f863b70c',
					_type: 'block' as const,
					children: [
						{
							_key: '64974fb8906c',
							_type: 'span',
							marks: ['051267172cd2'],
							text: 'link'
						}
					],
					markDefs: [
						{
							_key: '051267172cd2',
							_type: 'link',
							href: 'https://google.com'
						}
					],
					style: 'normal'
				}
			]
		};

		const {getByText} = render(
			<ChakraProvider theme={theme}>
				<BlockContent data={data} />
			</ChakraProvider>
		);

		const testSentence = getByText('link');
		expect(testSentence).toHaveAttribute('href', 'https://google.com');
	});
});
