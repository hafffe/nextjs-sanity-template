import {SanityImageSource} from '@sanity/asset-utils';
import {createClient, createImageUrlBuilder, createPreviewSubscriptionHook, createCurrentUserHook} from 'next-sanity';

const config = {
	projectId: `${process.env.PROJECT_ID}`,
	dataset: `${process.env.PROJECT_DATASET}`,
	useCdn: process.env.NODE_ENV === 'production'
};

export const sanityClient = createClient(config);

export const previewClient = createClient({
	...config,
	useCdn: false,
	token: `${process.env.SANITY_TOKEN}`
});

export const getClient = (usePreview: boolean) => (usePreview ? previewClient : sanityClient);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);
