import {useColorMode, IconButton} from '@chakra-ui/react';
import {RiSunLine, RiMoonLine} from 'react-icons/ri';

const DarkModeSwitch = () => {
	const {colorMode, toggleColorMode} = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<IconButton
			aria-label='Switch colors'
			size='sm'
			variant='ghost'
			icon={isDark ? <RiSunLine /> : <RiMoonLine />}
			onClick={toggleColorMode}
		/>
	);
};

export default DarkModeSwitch;
