import {theme as chakraTheme} from '@chakra-ui/core';

const breakpoints = ['30em', '48em', '62em', '80em'];

const theme = {
	...chakraTheme,
	colors: {
		...chakraTheme.colors,
		lightGrayBase: '#FCF7F8',
		darkGrayBase: '#121619',
		accent: '#FAA300'
	},
	fonts: {
		...chakraTheme.fonts,
		body: 'Titillium Web, sans-serif',
		heading: 'Titillium Web, sans-serif',
		mono: 'Menlo, monospace'
	},
	fontWeights: {
		...chakraTheme.fontWeights,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 600,
		bold: 700
	},
	breakpoints,
	icons: {
		...chakraTheme.icons
	},
	variants: {
		body: {
			background: 'text'
		},
		main: {
			background: 'background',
			fontColor: 'text'
		}
	}
};

export default theme;
