import NextLink from 'next/link';
import {Box, Flex, Heading, Link, Text} from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import {IoIosQuote} from 'react-icons/io';
import {BlockContent as BlockContentType} from '@/models/sections/block-content';
import {SimpleBlockContent} from '@/models/objects/simple-block-content';

type Props = {
	data: BlockContentType | SimpleBlockContent;
};

const resolveSize = (style: string | boolean) => {
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

const serializers = {
	types: {
		block: (props: any) => {
			const {style = 'normal'} = props.node;
			const center = /center/.test(style);
			const heading = /^h\d/.test(style) && style.match(/^h\d/)[0];
			const size = resolveSize(heading);

			if (heading !== false) {
				return (
					<Heading textAlign={center ? 'center' : 'left'} as={heading} size={size}>
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

			return <Text textAlign={center ? 'center' : 'left'}>{props.children}</Text>;
		}
	},
	marks: {
		link: (props: any) => (
			<NextLink passHref href={`${props.mark.href}`}>
				<Link>{props.children}</Link>
			</NextLink>
		),
		italic: (props: any) => <Text as='i'>{props.children}</Text>
	}
};

const TextBlock = ({data}: Props) => <BlockContent blocks={data?.text} serializers={serializers} />;

export default TextBlock;
