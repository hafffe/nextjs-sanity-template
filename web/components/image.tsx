import React from 'react';
import {Avatar, Image as Img} from '@chakra-ui/core';
import imageUrlBuilder from '@sanity/image-url';
import {SanityImageAsset} from '../types/types';

type Props = {
	source: SanityImageAsset;
	avatar?: boolean;
	alt?: string;
};

const config = {
	projectId: `${process.env.PROJECT_ID}`,
	dataset: `${process.env.PROJECT_DATASET}`,
	useCdn: true
};

const builder = imageUrlBuilder(config);

const urlFor = (source: string) => builder.image(source);

const Image: React.FunctionComponent<Props> = ({source, alt, avatar}) => {
	const url = source?._id && urlFor(source._id).width(1152).auto('format').url();

	if (url === null) {
		return null;
	}

	if (avatar) {
		return <Avatar src={url} size='sm' />;
	}

	return <Img src={url} alt={alt} />;
};

export default Image;
