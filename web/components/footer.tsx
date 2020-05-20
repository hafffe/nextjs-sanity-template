import React from 'react';
import {Flex, Link, Text} from '@chakra-ui/core';

type Props = {
	colorMode: string;
};

const Footer: React.FunctionComponent<Props> = ({colorMode}) => (
	<Flex as='footer' height='100px' flexShrink={0} justifyContent='center' alignItems='flex-end'>
		<Text fontSize='xs' paddingBottom={2}>
			Made by{' '}
			<Link isExternal href='https://github.com/hafffe' color={`modes.${colorMode}.primary`}>
				Hafffe
			</Link>
			, for everyone
		</Text>
	</Flex>
);

export default Footer;
