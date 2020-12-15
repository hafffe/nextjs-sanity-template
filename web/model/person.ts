import {SanityDocument} from '@sanity/types';
import {SanityImageObjectStub} from '@sanity/asset-utils';

export interface Person extends SanityDocument {
	title: string;
	name: string;
	phone: string;
	email: string;
	image: SanityImageObjectStub;
}
