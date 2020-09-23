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
import {RiMenuLine} from 'react-icons/ri';
import MainMenu from './main-menu';
import useViewport from './utils/viewport';
import {ExternalLinkOrInternalLink, Maybe} from '../types/types';
import {DarkModeSwitch} from './dark-mode-switch';

type Props = {
	navigation?: Maybe<Array<Maybe<ExternalLinkOrInternalLink>>>;
	colorMode: string;
};

const Header: React.FunctionComponent<Props> = ({navigation, colorMode}) => {
	const {width} = useViewport();
	const {isOpen, onOpen, onClose} = useDisclosure();
	const breakpoint = 620;
	const isWide = width > breakpoint;

	return (
		<Flex as='header' padding={6} maxWidth='1200px' width='100%' alignSelf='center'>
			<Flex align='center'>
				<Heading as='h2' fontSize='4xl'>
					☕️
				</Heading>
			</Flex>
			{isWide ? (
				<Flex justify='space-between' align='flex-end' alignItems='center' marginLeft='auto'>
					<MainMenu navigation={navigation} />
					<DarkModeSwitch />
				</Flex>
			) : (
				<Drawer placement='right' isOpen={isOpen} onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent
						bg={colorMode === 'dark' ? 'darkGrayBase' : 'lightGrayBase'}
						color={colorMode === 'dark' ? 'lightGrayBase' : 'darkGrayBase'}
					>
						<DrawerHeader borderBottomWidth='1px'>
							Menu <DarkModeSwitch />
							<DrawerCloseButton />
						</DrawerHeader>
						<DrawerBody flexDirection='column'>
							<MainMenu navigation={navigation} direction='column' />
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			)}

			{isWide ? null : (
				<IconButton
					key='menuDrawer'
					marginLeft='auto'
					size='lg'
					aria-label='Open Menu'
					icon={RiMenuLine}
					onClick={onOpen}
				/>
			)}
		</Flex>
	);
};

export default Header;
