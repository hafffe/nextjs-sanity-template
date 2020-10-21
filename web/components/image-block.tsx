import React from 'react';
import {Box} from '@chakra-ui/core';
import {ImageBlock as ImageBlockProps} from '../types/types';
import {Image} from '.';

type Props = {
	data: ImageBlockProps;
};

const ImageBlock = ({data}: Props) => {
	if (!data.asset) {
		return null;
	}

	return (
		<Box marginY={2}>
			<Image asset={data.asset} alt={data?.alt} />
		</Box>
	);
};

export default ImageBlock;
