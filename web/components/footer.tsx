import React from 'react';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi';
import {Flex, Link, Stack, Text} from '@chakra-ui/core';
import {Maybe, SocialFields} from '../types/types';

type Props = {
	colorMode: string;
	socialFields: Maybe<SocialFields>;
};

const Footer: React.FunctionComponent<Props> = ({colorMode, socialFields}) => (
	<Flex as='footer' height='100px' flexShrink={0} justifyContent='center' alignItems='flex-end' alignContent='center'>
		<Text fontSize='xs' paddingBottom={2}>
			Made by{' '}
			<Link isExternal href='https://github.com/hafffe' color={`modes.${colorMode}.primary`}>
				Hafffe
			</Link>
			, for everyone
		</Text>

		<Stack direction='row' paddingBottom={2} paddingLeft={2}>
			{socialFields?.facebook && (
				<Link isExternal href={socialFields?.facebook} color={`modes.${colorMode}.primary`}>
					<FiFacebook />
				</Link>
			)}

			{socialFields?.instagram && (
				<Link isExternal href={socialFields?.instagram} color={`modes.${colorMode}.primary`}>
					<FiInstagram />
				</Link>
			)}

			{socialFields?.twitter && (
				<Link isExternal href={socialFields?.twitter} color={`modes.${colorMode}.primary`}>
					<FiTwitter />
				</Link>
			)}
		</Stack>
	</Flex>
);

export default Footer;
