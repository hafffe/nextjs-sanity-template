import React from 'react';
import {useColorMode, IconButton} from '@chakra-ui/core';

export const DarkModeSwitch = () => {
	const {colorMode, toggleColorMode} = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<IconButton
			aria-label='Switch colors'
			size='sm'
			variant='ghost'
			icon={isDark ? 'sun' : 'moon'}
			onClick={toggleColorMode}
		/>
	);
};