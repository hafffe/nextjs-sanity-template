import React from 'react';
import {Avatar} from '@chakra-ui/core';
import imageUrlBuilder from '@sanity/image-url';
import {SanityImageAsset} from '../types/types';
import Imageload from './utils/image-load';

type Props = {
	asset: SanityImageAsset;
	avatar?: boolean;
	alt?: string | null;
};

const config = {
	projectId: `${process.env.PROJECT_ID}`,
	dataset: `${process.env.PROJECT_DATASET}`,
	useCdn: true
};

const builder = imageUrlBuilder(config);

const urlFor = (source: string) => builder.image(source);

const Image = ({asset, avatar, alt = ''}: Props) => {
	const url = asset?._id && urlFor(asset._id).width(1152).auto('format').url();
	const lqip = asset?.metadata?.lqip ?? undefined;

	if (!url || !lqip) {
		return null;
	}

	if (avatar) {
		return <Avatar src={url} size='sm' />;
	}

	return <Imageload src={url} placeholder={lqip} alt={alt ?? ''} />;
};

export default Image;
