import {Slug} from '@sanity/types';

export interface ExternalLink {
	_type: 'externalLink';
	_key: string;
	title: string;
	slug?: Slug;
}
