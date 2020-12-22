import {SanityImageObjectStub} from '@sanity/asset-utils';

export interface MetaFields {
	metaTitle: string;
	metaDescription: string;
	openGraphTitle: string;
	openGraphImage: SanityImageObjectStub;
	openGraphDescription: string;
}
