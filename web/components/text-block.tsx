import React from 'react';
import {Flex, Link, Text} from '@chakra-ui/core';
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react';
import {TextBlock as TextBlockProps, SimpleTextBlock} from '../types/types';

type Props = {
	data: TextBlockProps | SimpleTextBlock;
};

const serializers = {
	types: {
		block: (props: any) => {
			if (props.node.style === 'big') {
				return (
					<Flex paddingY={3} justify='center'>
						<Text fontSize='3xl'>{props.children}</Text>
					</Flex>
				);
			}

			return <Text>{props.children}</Text>;
		}
	},
	marks: {
		link: (props: any) => (
			<Link isExternal href={props.mark.href} color='secondary'>
				{props.children}
			</Link>
		)
	}
};

const TextBlock: React.FunctionComponent<Props> = ({data}) => (
	<BlockContent blocks={data.textRaw} serializers={serializers} />
);

export default TextBlock;
