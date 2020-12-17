import {Page} from '../page';

export interface InternalLink {
	_type: 'internalLink';
	_key: string;
	title: string;
	slug: Page;
}
