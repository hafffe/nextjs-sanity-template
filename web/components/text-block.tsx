import React from 'react';
import {Box, Flex, Heading, Link, Text, useColorMode} from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import {IoIosQuote} from 'react-icons/io';
import {TextBlock as TextBlockProps, SimpleTextBlock} from '../types/types';

type Props = {
	data: TextBlockProps | SimpleTextBlock;
};

const serializers = (colorMode: any) => ({
	types: {
		block: (props: any) => {
			const {style = 'normal'} = props.node;

			if (/^h\d/.test(style)) {
				const resolveSize = (style: string) => {
					if (style === 'h1') {
						return '2xl';
					}

					if (style === 'h2') {
						return 'xl';
					}

					if (style === 'h3') {
						return 'lg';
					}

					if (style === 'h4') {
						return 'md';
					}

					return 'sm';
				};

				return (
					<Heading as={style} size={resolveSize(style)}>
						{props.children}
					</Heading>
				);
			}

			if (style === 'blockquote') {
				return (
					<Flex paddingY={1}>
						<Box as='blockquote' display='flex'>
							<Box as={IoIosQuote} />
							<Text paddingLeft={2} fontSize='lg' fontWeight='semibold'>
								{props.children}
							</Text>
						</Box>
					</Flex>
				);
			}

			return <Text>{props.children}</Text>;
		}
	},
	marks: {
		link: (props: any) => (
			<Link isExternal href={props.mark.href} color={colorMode === 'dark' ? 'accent' : 'accent'}>
				{props.children}
			</Link>
		),
		italic: (props: any) => <Text as='i'>{props.children}</Text>,
		center: (props: any) => <Text textAlign='center'>{props.children}</Text>
	}
});

const TextBlock = ({data}: Props) => {
	const {colorMode} = useColorMode();

	return <BlockContent blocks={data.textRaw} serializers={serializers(colorMode)} />;
};

export default TextBlock;
