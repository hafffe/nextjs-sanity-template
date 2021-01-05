import {SanityImageSource} from '@sanity/asset-utils';
import {createClient, createImageUrlBuilder, createPreviewSubscriptionHook} from 'next-sanity';

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'undefined',
	useCdn: process.env.NODE_ENV === 'production'
};

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const sanityClient = createClient(config);
