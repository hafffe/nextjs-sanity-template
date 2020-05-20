import {useColorMode, IconButton} from '@chakra-ui/core';

export const DarkModeSwitch = () => {
	const {colorMode, toggleColorMode} = useColorMode();
	const isDark = colorMode === 'dark';
	console.log('colorMode', colorMode);
	return (
		<IconButton
			aria-label='Switch colors'
			icon={isDark ? 'sun' : 'moon'}
			onClick={toggleColorMode}
			size='sm'
			variant='ghost'
		/>
	);
};
