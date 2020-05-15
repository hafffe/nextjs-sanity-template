import React from 'react';
import {Flex, Link, Text} from '@chakra-ui/core';

const Footer: React.FunctionComponent = () => (
	<Flex as='footer' height='100px' flexShrink={0} justifyContent='center' alignItems='flex-end'>
		<Text fontSize='xs' paddingBottom={2}>
			Made by{' '}
			<Link isExternal href='https://github.com/hafffe' color='secondary'>
				Hafffe
			</Link>
			, for everyone
		</Text>
	</Flex>
);

export default Footer;
