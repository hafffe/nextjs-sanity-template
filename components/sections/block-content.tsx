import NextLink from 'next/link';
import {Box, Flex, Heading, Link, Text} from '@chakra-ui/react';
import {PortableText} from '@portabletext/react';
import {IoIosQuote} from 'react-icons/io';
import {BlockContent as BlockContentType} from '@/models/sections/block-content';
import {SimpleBlockContent} from '@/models/objects/simple-block-content';
import {MainImage} from '@/components/sections';

type Props = {
	data: BlockContentType | SimpleBlockContent;
};

const TextBlock = ({data}: Props) => {
	if (!data.text) {
		return null;
	}

	const blocks = data.text;

	return (
		<PortableText
			value={blocks}
			components={{
				types: {
					image: ({value}) => <MainImage data={value} width={960} height={600} />
				},
				marks: {
					link: ({children, value}) => (
						<NextLink passHref href={`${value.href}`}>
							<Link>{children}</Link>
						</NextLink>
					),
					italic: ({children}) => <Text as='i'>{children}</Text>
				},
				block: {
					h1: ({children}) => (
						<Heading as='h1' size='2xl'>
							{children}
						</Heading>
					),
					h2: ({children}) => (
						<Heading as='h2' size='xl'>
							{children}
						</Heading>
					),
					h3: ({children}) => (
						<Heading as='h3' size='lg'>
							{children}
						</Heading>
					),
					h4: ({children}) => (
						<Heading as='h2' size='xl'>
							{children}
						</Heading>
					),
					h5: ({children}) => (
						<Heading as='h2' size='xl'>
							{children}
						</Heading>
					),
					h6: ({children}) => (
						<Heading as='h2' size='xl'>
							{children}
						</Heading>
					),
					'h1+center': ({children}) => (
						<Heading as='h1' size='2xl' textAlign='center'>
							{children}
						</Heading>
					),
					'h2+center': ({children}) => (
						<Heading as='h2' size='xl' textAlign='center'>
							{children}
						</Heading>
					),
					'h3+center': ({children}) => (
						<Heading as='h3' size='lg' textAlign='center'>
							{children}
						</Heading>
					),
					'h4+center': ({children}) => (
						<Heading as='h2' size='md' textAlign='center'>
							{children}
						</Heading>
					),
					'h5+center': ({children}) => (
						<Heading as='h2' size='sm' textAlign='center'>
							{children}
						</Heading>
					),
					'h6+center': ({children}) => (
						<Heading as='h2' size='sm' textAlign='center'>
							{children}
						</Heading>
					),
					blockquote: ({children}) => (
						<Flex paddingY={1}>
							<Box as='blockquote' display='flex'>
								<Box as={IoIosQuote} />
								<Text paddingLeft={2} fontSize='lg' fontWeight='semibold'>
									{children}
								</Text>
							</Box>
						</Flex>
					),
					normal: ({children}) => <Text>{children}</Text>,
					'normal+center': ({children}) => <Text textAlign='center'>{children}</Text>
				}
			}}
		/>
	);
};

export default TextBlock;
