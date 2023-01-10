import {SanityImageSource} from '@sanity/asset-utils';
import {createClient} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'undefined',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2022-11-15'
};

export const urlForImage = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);
export const sanityClient = createClient(config);
