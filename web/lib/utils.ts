import sanityClient from '@sanity/client';
import {createImageUrlBuilder} from 'next-sanity';
import {SanityImageSource} from '@sanity/asset-utils';

const config = {
	projectId: `${process.env.PROJECT_ID}`,
	dataset: `${process.env.PROJECT_DATASET}`,
	useCdn: true
};

export const client = sanityClient(config);
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);
