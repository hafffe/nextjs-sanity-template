import React from 'react';
import {
	Flex,
	Drawer,
	DrawerOverlay,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerCloseButton,
	Heading,
	IconButton,
	useDisclosure
} from '@chakra-ui/core';
import {FiMenu} from 'react-icons/fi';
import MainMenu from './main-menu';
import useViewport from './utils/viewport';
import {ExternalLinkOrInternalLink, Maybe} from '../types/types';

type Props = {
	navigation?: Maybe<Array<Maybe<ExternalLinkOrInternalLink>>>;
};

const Header: React.FunctionComponent<Props> = ({navigation}) => {
	const {width} = useViewport();
	const {isOpen, onOpen, onClose} = useDisclosure();
	const breakpoint = 620;
	const isWide = width > breakpoint;

	return (
		<Flex as='header' padding={6} bg='background' color='text' maxWidth='1200px' width='100%' alignSelf='center'>
			<Flex align='center'>
				<Heading as='h2' fontSize='4xl' color='secondary'>
					Logo
				</Heading>
			</Flex>
			{isWide ? (
				<Flex justify='space-between' align='flex-end' marginLeft='auto'>
					<MainMenu navigation={navigation} />
				</Flex>
			) : (
				<Drawer placement='right' isOpen={isOpen} onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent bg='background' color='text'>
						<DrawerHeader borderBottomWidth='1px'>
							Menu
							<DrawerCloseButton />
						</DrawerHeader>
						<DrawerBody flexDirection='column' className='test'>
							<MainMenu navigation={navigation} direction='column' />
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			)}

			{isWide ? null : (
				<IconButton
					key='1123ass423'
					color='secondary'
					bg='background'
					marginLeft='auto'
					size='lg'
					aria-label='Open Menu'
					icon={FiMenu}
					onClick={onOpen}
				/>
			)}
		</Flex>
	);
};

export default Header;
