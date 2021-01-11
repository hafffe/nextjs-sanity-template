import {
	IconButton,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerCloseButton,
	DrawerOverlay,
	Flex,
	useDisclosure
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import {RiMenuLine} from 'react-icons/ri';
import {InternalLink} from '@/models/objects/internal-link';
import {ExternalLink} from '@/models/objects/external-link';
import {DarkModeSwitch, MainNavigation} from '.';
import {useViewport} from '@/components/utils';

type Props = {
	navigation?: Array<InternalLink | ExternalLink>;
};

const Header = ({navigation}: Props) => {
	const {width} = useViewport();
	const {isOpen, onOpen, onClose} = useDisclosure();
	const breakpoint = 620;
	const isWide = width > breakpoint;

	return (
		<Flex as='header' padding={6} width='100%' alignSelf='center' justifyContent='center'>
			<Flex align='center' width='100%' maxWidth='1200px'>
				<Link href='/'>
					<a>
						<Image src='/logo-3.svg' alt='logo' height='100px' width='150px' />
					</a>
				</Link>
				{isWide ? (
					<Flex justify='space-between' align='flex-end' alignItems='center' marginLeft='auto'>
						<MainNavigation navigation={navigation} />
						<DarkModeSwitch />
					</Flex>
				) : (
					<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
						<DrawerOverlay>
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerBody>
									<MainNavigation navigation={navigation} direction='column' />
								</DrawerBody>
							</DrawerContent>
						</DrawerOverlay>
					</Drawer>
				)}

				{isWide ? null : (
					<IconButton
						key='menuDrawer'
						marginLeft='auto'
						size='lg'
						aria-label='Open Menu'
						icon={<RiMenuLine />}
						onClick={onOpen}
					/>
				)}
			</Flex>
		</Flex>
	);
};

export default Header;
