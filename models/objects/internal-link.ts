import {Slug} from '@sanity/types';

export interface InternalLink {
	_type: 'internalLink';
	_key: string;
	title: string;
	link?: {
		slug: Slug;
	};
}
