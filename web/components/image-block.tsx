import React from 'react';
import {Box, Image} from '@chakra-ui/core';
import {ImageBlock as ImageBlockProps} from '../types/types';
import {urlFor} from '../lib/utils';

type Props = {
	data: ImageBlockProps;
};

const ImageBlock = ({data}: Props) => {
	const url = data?.asset?._id && urlFor(data.asset._id).width(1200).auto('format').url();

	if (!url) {
		return null;
	}

	return (
		<Box marginY={2}>
			<Image src={url} alt={data?.alt ?? 'Image'} />
		</Box>
	);
};

export default ImageBlock;
