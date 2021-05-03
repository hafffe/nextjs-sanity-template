import {extendTheme} from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em'
});

const overrides = {
	useSystemColorMode: false,
	initialColorMode: 'dark',
	breakpoints,
	fonts: {
		body: 'Work Sans, sans-serif',
		heading: 'Work Sans, sans-serif',
		mono: 'Menlo, monospace'
	},
	fontWeights: {
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		bold: 600
	}
};

const customTheme = extendTheme(overrides);

export default customTheme;
