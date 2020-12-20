import {SanityDocument} from '@sanity/types';
import {SanityImageObjectStub} from '@sanity/asset-utils';

export interface Person extends SanityDocument {
	_type: 'person';
	_id: 'string';
	title: string;
	name: string;
	phone: string;
	email: string;
	image: SanityImageObjectStub;
}
