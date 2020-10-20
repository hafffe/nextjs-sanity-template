import React from 'react';
import {RiFacebookBoxLine, RiInstagramLine, RiTwitterLine} from 'react-icons/ri';
import {Flex, Link, Stack, Text} from '@chakra-ui/core';
import {Maybe, SocialFields} from '../types/types';

type Props = {
	socialFields: Maybe<SocialFields>;
};

const Footer = ({socialFields}: Props) => (
	<Flex as='footer' height='100px' flexShrink={0} justifyContent='center' alignItems='flex-end' alignContent='center'>
		<Text fontSize='xs' paddingBottom={2}>
			Made by{' '}
			<Link isExternal href='https://github.com/hafffe' color='accent'>
				Hafffe
			</Link>
			, for everyone
		</Text>

		<Stack direction='row' paddingBottom={2} paddingLeft={2}>
			{socialFields?.facebook && (
				<Link isExternal href={socialFields?.facebook} color='accent'>
					<RiFacebookBoxLine />
				</Link>
			)}

			{socialFields?.instagram && (
				<Link isExternal href={socialFields?.instagram} color='accent'>
					<RiInstagramLine />
				</Link>
			)}

			{socialFields?.twitter && (
				<Link isExternal href={socialFields?.twitter} color='accent'>
					<RiTwitterLine />
				</Link>
			)}
		</Stack>
	</Flex>
);

export default Footer;
