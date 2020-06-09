import React from 'react';
import {Grid, ImageBlock, TextBlock} from '.';
import {GridBlockOrImageBlockOrTextBlock} from '../types/types';

const blocks = ({block}: {block: GridBlockOrImageBlockOrTextBlock}) => {
	switch (block.__typename) {
		case 'TextBlock':
			return <TextBlock data={block} />;
		case 'GridBlock':
			return <Grid data={block} />;
		case 'ImageBlock':
			return <ImageBlock data={block} />;
		default:
			console.log('Block is undefined and not rendered');
			return null;
	}
};

export default blocks;
